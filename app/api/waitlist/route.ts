import { NextResponse } from 'next/server'

// TODO: replace with your real waitlist destination
// Options: Formspree, Resend, a database, or a custom email handler.
const WAITLIST_ENDPOINT = process.env.WAITLIST_ENDPOINT

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body?.email || typeof body.email !== 'string') {
    return NextResponse.json({ error: 'email required' }, { status: 400 })
  }

  if (!WAITLIST_ENDPOINT) {
    // Development fallback — log and accept so the form is testable locally.
    console.log('[waitlist] new signup:', body)
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch(WAITLIST_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      return NextResponse.json({ error: 'upstream failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'network failed' }, { status: 500 })
  }
}
