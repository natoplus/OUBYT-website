import type { NextApiRequest, NextApiResponse } from 'next'

type ApiResponse = { message?: string; error?: string }

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '32kb',
    },
  },
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function stringValue(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null
  const result = value.trim()
  return result.length <= maxLength ? result : null
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ error: 'Use POST to submit this form.' })
    return
  }

  const origin = req.headers.origin
  const forwardedHost = req.headers['x-forwarded-host']
  const host = Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost || req.headers.host
  if (origin && host) {
    try {
      if (new URL(origin).host.toLowerCase() !== host.toLowerCase()) {
        res.status(403).json({ error: 'This form request did not come from this site.' })
        return
      }
    } catch {
      res.status(403).json({ error: 'The form request origin is invalid.' })
      return
    }
  }

  if (!isRecord(req.body)) {
    res.status(400).json({ error: 'The form data is invalid.' })
    return
  }

  const body = req.body
  const kind = body.kind
  const email = stringValue(body.email, 254)
  const consent = body.consent === true
  const honeypot = stringValue(body.website, 200)

  if (honeypot === null || honeypot.length > 0) {
    res.status(400).json({ error: 'The form could not be validated. Please try again.' })
    return
  }
  if (kind !== 'project' && kind !== 'newsletter') {
    res.status(400).json({ error: 'Choose a valid form type.' })
    return
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: 'Enter a valid email address.' })
    return
  }
  if (!consent) {
    res.status(400).json({ error: 'Please confirm the consent statement before submitting.' })
    return
  }

  const payload: Record<string, unknown> = {
    kind,
    email,
    consent: true,
    submittedAt: new Date().toISOString(),
    source: 'oubyt-website',
  }

  if (kind === 'project') {
    const name = stringValue(body.name, 120)
    const projectType = stringValue(body.projectType, 100)
    const description = stringValue(body.description, 4000)
    if (!name || name.length < 2 || !projectType || !description || description.length < 20) {
      res.status(400).json({ error: 'Add your name, project type, and at least 20 characters about the project.' })
      return
    }
    payload.name = name
    payload.projectType = projectType
    payload.description = description
    for (const field of ['company', 'role', 'country', 'contactPreference', 'genre', 'referenceLinks', 'runtime', 'characters', 'locations', 'existingIp', 'deliveryFormat', 'soundNeeds', 'languageSubtitles', 'budgetRange', 'startDate', 'deliveryDate', 'nda', 'howFoundUs', 'newsletterOptIn']) {
      const value = body[field]
      if (typeof value === 'string') {
        const cleaned = stringValue(value, 2000)
        if (cleaned === null) {
          res.status(400).json({ error: 'One of the form fields is too long. Shorten it and try again.' })
          return
        }
        payload[field] = cleaned
      } else if (typeof value === 'boolean' && field === 'newsletterOptIn') {
        payload[field] = value
      }
    }
  }

  const webhook = process.env.OUBYT_FORM_WEBHOOK_URL
  if (!webhook) {
    res.status(503).json({ error: 'Form delivery is not configured for this site yet. Please email hello@nartstudio.com.' })
    return
  }

  let endpoint: URL
  try {
    endpoint = new URL(webhook)
  } catch {
    res.status(503).json({ error: 'Form delivery is not configured correctly. Please email hello@nartstudio.com.' })
    return
  }
  if (endpoint.protocol !== 'https:' && !(endpoint.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(endpoint.hostname))) {
    res.status(503).json({ error: 'Form delivery requires a secure HTTPS endpoint.' })
    return
  }

  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (process.env.OUBYT_FORM_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.OUBYT_FORM_WEBHOOK_SECRET}`
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      redirect: 'error',
      signal: AbortSignal.timeout(10000),
    })
    if (!response.ok) {
      console.error(`Oubyt form webhook returned HTTP ${response.status}.`)
      res.status(502).json({ error: 'The form service could not deliver your submission. Please try again or email hello@nartstudio.com.' })
      return
    }
  } catch (error) {
    console.error('Oubyt form webhook request failed:', error)
    res.status(502).json({ error: 'The form service could not deliver your submission. Please try again or email hello@nartstudio.com.' })
    return
  }

  res.status(202).json({ message: kind === 'newsletter' ? 'You’re on the update list.' : 'Thanks — your project brief was received.' })
}
