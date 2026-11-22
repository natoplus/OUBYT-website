import { FormEvent, useEffect, useState } from 'react'
import { submitOubytForm } from '@/lib/forms'

type Brief = {
  name: string
  email: string
  company: string
  role: string
  country: string
  contactPreference: string
  projectType: string
  description: string
  genre: string
  referenceLinks: string
  runtime: string
  characters: string
  locations: string
  existingIp: string
  deliveryFormat: string
  soundNeeds: string
  languageSubtitles: string
  budgetRange: string
  startDate: string
  deliveryDate: string
  nda: string
  howFoundUs: string
  consent: boolean
  newsletterOptIn: boolean
  website: string
}

type SubmissionState = {
  status: 'idle' | 'pending' | 'success' | 'error'
  message: string
}

const initialBrief: Brief = {
  name: '',
  email: '',
  company: '',
  role: '',
  country: '',
  contactPreference: '',
  projectType: '',
  description: '',
  genre: '',
  referenceLinks: '',
  runtime: '',
  characters: '',
  locations: '',
  existingIp: '',
  deliveryFormat: '',
  soundNeeds: '',
  languageSubtitles: '',
  budgetRange: '',
  startDate: '',
  deliveryDate: '',
  nda: '',
  howFoundUs: '',
  consent: false,
  newsletterOptIn: false,
  website: '',
}

const steps = ['About you', 'The project', 'Production', 'Business', 'Finish']

export default function MultiStepBrief({ initialService = '' }: { initialService?: string }) {
  const [brief, setBrief] = useState<Brief>(initialBrief)
  const [step, setStep] = useState(0)
  const [stepError, setStepError] = useState('')
  const [submission, setSubmission] = useState<SubmissionState>({ status: 'idle', message: '' })

  useEffect(() => {
    if (!initialService) return
    const requestedType = initialService.toLowerCase().includes('character')
      ? 'Character animation'
      : initialService.toLowerCase().includes('storyboard')
        ? 'Storyboard or animatic'
        : initialService.toLowerCase().includes('motion')
          ? 'Motion graphics'
          : initialService
    if (['2D animation', '3D animation', 'Mixed media', 'Character animation', 'Storyboard or animatic', 'Motion graphics', 'Full production', 'Other'].includes(requestedType)) {
      setBrief((current) => current.projectType ? current : { ...current, projectType: requestedType })
    }
  }, [initialService])

  function update<K extends keyof Brief>(key: K, value: Brief[K]) {
    setBrief((current) => ({ ...current, [key]: value }))
    setStepError('')
  }

  function validateStep(): boolean {
    if (step === 0 && (!brief.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email.trim()))) {
      setStepError('Add your name and a valid email address to continue.')
      return false
    }
    if (step === 1 && (!brief.projectType || brief.description.trim().length < 20)) {
      setStepError('Choose a project type and describe the idea in at least 20 characters.')
      return false
    }
    if (step === 2 && !brief.deliveryFormat) {
      setStepError('Choose a delivery format or select “Not sure yet”.')
      return false
    }
    if (step === 3 && !brief.nda) {
      setStepError('Let us know whether you need an NDA before sharing details.')
      return false
    }
    if (step === 4 && !brief.consent) {
      setStepError('Please agree to the consent statement before sending.')
      return false
    }
    setStepError('')
    return true
  }

  function nextStep() {
    if (validateStep()) setStep((current) => Math.min(current + 1, steps.length - 1))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validateStep()) return
    setSubmission({ status: 'pending', message: 'Sending your project brief…' })

    try {
      const message = await submitOubytForm({ kind: 'project', ...brief })
      setSubmission({ status: 'success', message })
      setBrief(initialBrief)
      setStep(0)
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error instanceof Error ? error.message : 'Your brief could not be delivered. Please try again.',
      })
    }
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <div className="brief-progress">
        <div className="brief-progress-top">
          <span>STEP 0{step + 1} <i>/ 05</i></span>
          <span>{steps[step]}</span>
        </div>
        <div className="brief-progress-track" role="progressbar" aria-label="Project brief progress" aria-valuemin={1} aria-valuemax={5} aria-valuenow={step + 1}>
          <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
        <div className="brief-step-list" aria-label="Form steps">
          {steps.map((label, index) => (
            <button type="button" className={index === step ? 'is-current' : index < step ? 'is-complete' : ''} onClick={() => index < step && setStep(index)} disabled={index >= step} key={label}>
              <span>0{index + 1}</span> {label}
            </button>
          ))}
        </div>
      </div>

      <div className="brief-step-content">
        {step === 0 && (
          <>
            <p className="eyebrow">ABOUT YOU</p>
            <h2>Who are we speaking with?</h2>
            <div className="form-grid">
              <label><span>Name *</span><input value={brief.name} onChange={(event) => update('name', event.target.value)} autoComplete="name" required maxLength={120} /></label>
              <label><span>Email *</span><input type="email" value={brief.email} onChange={(event) => update('email', event.target.value)} autoComplete="email" required maxLength={254} /></label>
              <label><span>Company</span><input value={brief.company} onChange={(event) => update('company', event.target.value)} autoComplete="organization" maxLength={160} /></label>
              <label><span>Your role</span><input value={brief.role} onChange={(event) => update('role', event.target.value)} maxLength={120} /></label>
              <label><span>Country</span><input value={brief.country} onChange={(event) => update('country', event.target.value)} autoComplete="country-name" maxLength={100} /></label>
              <label><span>Preferred contact</span><select value={brief.contactPreference} onChange={(event) => update('contactPreference', event.target.value)}><option value="">No preference</option><option>Email</option><option>Video call</option></select></label>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <p className="eyebrow">THE PROJECT</p>
            <h2>What would you like to bring to life?</h2>
            <div className="form-grid">
              <label><span>Project type *</span><select value={brief.projectType} onChange={(event) => update('projectType', event.target.value)} required><option value="">Choose one</option><option>2D animation</option><option>3D animation</option><option>Mixed media</option><option>Character animation</option><option>Storyboard or animatic</option><option>Motion graphics</option><option>Full production</option><option>Other</option></select></label>
              <label><span>Genre or tone</span><input value={brief.genre} onChange={(event) => update('genre', event.target.value)} maxLength={160} placeholder="e.g. playful, atmospheric, sci-fi" /></label>
              <label className="form-field-wide"><span>Short project description *</span><textarea value={brief.description} onChange={(event) => update('description', event.target.value)} rows={5} minLength={20} maxLength={4000} required placeholder="The story, audience, goals, and what you need help with." /></label>
              <label className="form-field-wide"><span>Reference links</span><textarea value={brief.referenceLinks} onChange={(event) => update('referenceLinks', event.target.value)} rows={2} maxLength={2000} placeholder="Paste links to references, existing work, or shared files." /></label>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="eyebrow">TECHNICAL DETAILS</p>
            <h2>Help us picture the production.</h2>
            <div className="form-grid">
              <label><span>Approximate runtime</span><input value={brief.runtime} onChange={(event) => update('runtime', event.target.value)} maxLength={100} placeholder="e.g. 30 seconds or 4 minutes" /></label>
              <label><span>Number of characters</span><input type="number" min="0" value={brief.characters} onChange={(event) => update('characters', event.target.value)} /></label>
              <label><span>Number of locations</span><input type="number" min="0" value={brief.locations} onChange={(event) => update('locations', event.target.value)} /></label>
              <label><span>Existing designs or IP?</span><select value={brief.existingIp} onChange={(event) => update('existingIp', event.target.value)}><option value="">Choose one</option><option>Yes</option><option>No</option><option>In development</option></select></label>
              <label><span>Delivery format *</span><select value={brief.deliveryFormat} onChange={(event) => update('deliveryFormat', event.target.value)} required><option value="">Choose one</option><option>Web</option><option>Broadcast</option><option>Social</option><option>Game cutscene</option><option>Festival</option><option>Not sure yet</option></select></label>
              <label><span>Music and sound</span><select value={brief.soundNeeds} onChange={(event) => update('soundNeeds', event.target.value)}><option value="">Choose one</option><option>Yes</option><option>No</option><option>Discuss together</option></select></label>
              <label className="form-field-wide"><span>Language and subtitles</span><input value={brief.languageSubtitles} onChange={(event) => update('languageSubtitles', event.target.value)} maxLength={200} placeholder="e.g. English, English captions" /></label>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <p className="eyebrow">BUSINESS DETAILS</p>
            <h2>What timing and budget should we consider?</h2>
            <div className="form-grid">
              <label className="form-field-wide"><span>Budget range and currency</span><input value={brief.budgetRange} onChange={(event) => update('budgetRange', event.target.value)} maxLength={120} placeholder="Not sure yet is fine" /></label>
              <label><span>Target start date</span><input type="date" value={brief.startDate} onChange={(event) => update('startDate', event.target.value)} /></label>
              <label><span>Target delivery date</span><input type="date" value={brief.deliveryDate} onChange={(event) => update('deliveryDate', event.target.value)} /></label>
              <label className="form-field-wide"><span>Do you need an NDA before sharing more? *</span><select value={brief.nda} onChange={(event) => update('nda', event.target.value)} required><option value="">Choose one</option><option>Yes</option><option>No</option><option>Discuss first</option></select></label>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <p className="eyebrow">ONE LAST THING</p>
            <h2>How did you find Oubyt?</h2>
            <div className="form-grid">
              <label className="form-field-wide"><span>How did you hear about us?</span><input value={brief.howFoundUs} onChange={(event) => update('howFoundUs', event.target.value)} maxLength={200} placeholder="A person, a project, or a place online" /></label>
              <label className="consent-row form-field-wide">
                <input type="checkbox" checked={brief.consent} onChange={(event) => update('consent', event.target.checked)} required />
                <span>I agree that Oubyt may use these details to respond to my project enquiry. Read the <a href="https://nartstudio.vercel.app/legal/privacy" target="_blank" rel="noreferrer">privacy notice</a>.</span>
              </label>
              <label className="consent-row form-field-wide">
                <input type="checkbox" checked={brief.newsletterOptIn} onChange={(event) => update('newsletterOptIn', event.target.checked)} />
                <span>Keep me updated about Oubyt releases and studio news. This is optional.</span>
              </label>
              <label className="honeypot" aria-hidden="true"><span>Leave this field empty</span><input value={brief.website} onChange={(event) => update('website', event.target.value)} tabIndex={-1} autoComplete="off" /></label>
            </div>
          </>
        )}
      </div>

      {stepError && <p className="form-message form-message-error" role="alert">{stepError}</p>}
      {submission.message && <p className={`form-message form-message-${submission.status}`} role="status" aria-live="polite">{submission.message}</p>}
      <div className="brief-actions">
        <button className="button button-quiet" type="button" onClick={() => { setStepError(''); setStep((current) => Math.max(current - 1, 0)) }} disabled={step === 0 || submission.status === 'pending'}>
          ← Back
        </button>
        {step < steps.length - 1 ? (
          <button className="button button-accent" type="button" onClick={nextStep}>Continue <span aria-hidden="true">→</span></button>
        ) : (
          <button className="button button-accent" type="submit" disabled={submission.status === 'pending'}>
            {submission.status === 'pending' ? 'Sending…' : 'Send brief'} <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>
    </form>
  )
}
