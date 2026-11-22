export async function submitOubytForm(payload: Record<string, unknown>): Promise<string> {
  const response = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let result: { message?: string; error?: string }
  try {
    result = await response.json()
  } catch {
    throw new Error('The form service returned an unreadable response. Please try again.')
  }

  if (!response.ok) {
    throw new Error(result.error || 'Your submission could not be delivered. Please try again.')
  }
  if (!result.message) {
    throw new Error('The form service did not confirm delivery. Please try again.')
  }
  return result.message
}
