import { FormEvent, useState } from 'react'
import { submitOubytForm } from '@/lib/forms'

type SubmissionState = {
  status: 'idle' | 'pending' | 'success' | 'error'
  message: string
}

export default function NewsletterForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: 'idle', message: '' })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setSubmission({ status: 'pending', message: 'Joining the list…' })

    try {
      const message = await submitOubytForm({
        kind: 'newsletter',
        email: data.get('email'),
        consent: data.get('consent') === 'on',
        website: data.get('website'),
      })
      form.reset()
      setSubmission({ status: 'success', message })
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error instanceof Error ? error.message : 'You could not be added to the list. Please try again.',
      })
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <div className="newsletter-input-row">
        <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
        <input id="newsletter-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Your email address" />
        <button type="submit" disabled={submission.status === 'pending'} aria-label="Join Oubyt updates">
          {submission.status === 'pending' ? '…' : 'Join'} <span aria-hidden="true">↗</span>
        </button>
      </div>
      <label className="newsletter-consent">
        <input type="checkbox" name="consent" required />
        <span>I agree to receive Oubyt release and studio updates. I can unsubscribe at any time.</span>
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Leave this field empty</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {submission.message && <p className={`form-message form-message-${submission.status}`} role="status" aria-live="polite">{submission.message}</p>}
    </form>
  )
}
