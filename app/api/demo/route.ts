import { NextResponse } from 'next/server'

// TODO: replace with your real demo-request destination
// Options: Formspree, Resend, a CRM webhook, or a custom email handler.
const DEMO_ENDPOINT = process.env.DEMO_ENDPOINT

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body?.email || !body?.name) {
    return NextResponse.json(
      { error: 'name and email required' },
      { status: 400 }
    )
  }

  if (!DEMO_ENDPOINT) {
    console.log('[demo] new request:', body)
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch(DEMO_ENDPOINT, {
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
