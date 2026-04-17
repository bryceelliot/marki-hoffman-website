import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'marki@markihoffman.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const subject = body._subject ?? 'New message from markihoffman.com'

    const rows = Object.entries(body)
      .filter(([k]) => !k.startsWith('_'))
      .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#222;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 12px;color:#555">${String(v)}</td></tr>`)
      .join('')

    const html = `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <div style="background:#1F6B5F;padding:20px 28px;border-radius:12px 12px 0 0">
          <p style="margin:0;color:#fff;font-size:14px;font-weight:600">markihoffman.com</p>
        </div>
        <div style="border:1px solid #e8e8e8;border-top:none;border-radius:0 0 12px 12px;padding:24px 28px">
          <h2 style="margin:0 0 16px;color:#222;font-size:18px">${subject}</h2>
          <table style="border-collapse:collapse;width:100%;font-size:14px">
            <tbody>${rows}</tbody>
          </table>
          <hr style="border:none;border-top:1px solid #f0f0f0;margin:20px 0">
          <p style="margin:0;font-size:12px;color:#999">Sent from markihoffman.com contact form</p>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: 'markihoffman.com <onboarding@resend.dev>',
      to: TO,
      subject,
      html,
    })

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
