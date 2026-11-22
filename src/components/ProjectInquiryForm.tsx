import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { submitOubytForm } from '@/lib/forms'

type SubmissionState = {
  status: 'idle' | 'pending' | 'success' | 'error'
  message: string
}

const initialState: SubmissionState = { status: 'idle', message: '' }

export default function ProjectInquiryForm() {
  const [submission, setSubmission] = useState(initialState)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setSubmission({ status: 'pending', message: 'Sending your brief…' })

    try {
      const message = await submitOubytForm({
        kind: 'project',
        name: data.get('name'),
        email: data.get('email'),
        company: data.get('company'),
        projectType: data.get('projectType'),
        description: data.get('description'),
        budgetRange: data.get('budgetRange'),
        timeline: data.get('timeline'),
        consent: data.get('consent') === 'on',
        website: data.get('website'),
      })
      form.reset()
      setSubmission({ status: 'success', message })
    } catch (error) {
      setSubmission({
        status: 'error',
        message: error instanceof Error ? error.message : 'Your brief could not be delivered. Please try again.',
      })
    }
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input autoComplete="name" name="name" required maxLength={120} />
        </label>
        <label>
          <span>Email address</span>
          <input autoComplete="email" name="email" type="email" required maxLength={254} />
        </label>
        <label>
          <span>Company <i>Optional</i></span>
          <input autoComplete="organization" name="company" maxLength={160} />
        </label>
        <label>
          <span>What are you making?</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Choose a project type</option>
            <option>2D animation</option>
            <option>3D animation</option>
            <option>Mixed media</option>
            <option>Storyboards or animatic</option>
            <option>Motion graphics or FX</option>
            <option>Full production</option>
            <option>Other</option>
          </select>
        </label>
        <label className="form-field-wide">
          <span>Tell us about the idea</span>
          <textarea name="description" rows={4} minLength={20} maxLength={4000} required placeholder="A few lines about the story, audience and where you are in the process." />
        </label>
        <label>
          <span>Budget range <i>Include currency</i></span>
          <input name="budgetRange" maxLength={100} placeholder="e.g. 10,000–20,000 USD" />
        </label>
        <label>
          <span>Target timeline</span>
          <input name="timeline" maxLength={120} placeholder="e.g. flexible, or target month" />
        </label>
      </div>
      <label className="honeypot" aria-hidden="true">
        <span>Leave this field empty</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent-row">
        <input type="checkbox" name="consent" required />
        <span>I agree that Oubyt may use these details to respond to my enquiry. See the <a href="https://nartstudio.vercel.app/legal/privacy" target="_blank" rel="noreferrer">privacy notice</a>.</span>
      </label>
      <div className="form-submit-row">
        <button className="button button-accent" type="submit" disabled={submission.status === 'pending'}>
          {submission.status === 'pending' ? 'Sending…' : 'Send project brief'} <span aria-hidden="true">↗</span>
        </button>
        <p>Want to share more detail? <Link href="/start-a-project">Use the full project brief</Link>.</p>
      </div>
      {submission.message && (
        <p className={`form-message form-message-${submission.status}`} role="status" aria-live="polite">
          {submission.message}
          {submission.status === 'error' && <> You can also <a href="mailto:hello@nartstudio.com?subject=Oubyt%20project%20enquiry">email the studio</a>.</>}
        </p>
      )}
    </form>
  )
}
