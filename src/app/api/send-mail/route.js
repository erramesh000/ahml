import nodemailer from 'nodemailer';
import path from 'path';
import { getAppointmentHtml } from './appointment';
import { getContactusHtml } from './contactus';

export async function POST(req) {
  try {
    const { email = '', subject = '', text = '', name = '', phone = '', date = '', time = '', company = '', html = '', formType = '' } = await req.json();
    const senderName = name || company || 'Anonymous';

    if (formType == 'contact-us') {
      var htmlContent = getContactusHtml(name, text, email, company);
    } else {
      var htmlContent = getAppointmentHtml(name, phone, date, time, text, email);
    }

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    const mailOptions = {
      from: `"Advanced Healing Massage Ltd appointment" <${process.env.RECEIVER_MAIL_ADDRESS}>`,
      to: process.env.RECEIVER_MAIL_ADDRESS,
      replyTo: email || process.env.RECEIVER_MAIL_ADDRESS,
      subject: subject || 'New appointment request',
      text: text || `appointment request from ${senderName} <${email}>`,
      // html: html || `
      //       <h3>New appointment Request</h3>
      //       <p><strong>Name:</strong> ${senderName}</p>
      //       <p><strong>Email:</strong> ${email}</p>
      //       <p><strong>Message:</strong> ${text}</p>
      //       `,
      html: htmlContent,
    };
    await transport.sendMail(mailOptions);

    // send an auto-reply to the sender thanking them for their interest
    if (email) {
      const logoPath = path.join(process.cwd(), 'public', 'images', 'ahml.png');

      const replyOptions = {
        from: `"Advanced Healing Massage Ltd" <${process.env.RECEIVER_MAIL_ADDRESS}>`,
        to: email,
        subject: `Thanks for contacting Advanced Healing Massage Ltd`,
        text: `Hi ${senderName},\n\nThanks for your interest in Advanced Healing Massage Ltd. We received your message and will get back to you shortly.\n\nYou can also reach us at +1 (403)-477-2394 or chat with us on WhatsApp: https://wa.me/14034772394\n\nBest regards,\nThe Advanced Healing Massage Ltd Team`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You from Advanced Healing Massage Ltd</title>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; }
    .wrapper { padding: 20px; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06); }
    .header { background: linear-gradient(135deg, #c45a8a, #a94273); padding: 34px 24px 22px; text-align: center; color: #ffffff; }
    .logo-wrapper { display: inline-block; padding: 10px 14px; border-radius: 999px; background-color: #ffffff; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08); margin-bottom: 16px; }
    .logo { max-width: 140px; display: block; }
    .title { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.03em; }
    .subtitle { margin: 8px 0 0; font-size: 14px; opacity: 0.9; }
    .content { padding: 28px 24px 24px; color: #444; line-height: 1.6; font-size: 14px; }
    .content p { margin: 0 0 14px; }
    .highlight { font-weight: 600; color: #c97c9f; }
    .divider { height: 1px; background-color: #eee; margin: 16px 0 18px; }
    .signature { margin-top: 6px; font-size: 14px; }
    .signature strong { display: block; margin-bottom: 2px; }
    .footer { padding: 16px 18px 20px; border-top: 1px solid #f0f0f0; background-color: #fafafa; text-align: center; font-size: 11px; color: #999; }
    .footer p { margin: 2px 0; }

    @media only screen and (max-width: 600px) {
      .container { border-radius: 0; }
      .header { padding: 24px 18px 18px; }
      .title { font-size: 20px; }
      .content { padding: 22px 18px 20px; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <span class="logo-wrapper">
          <img src="cid:ahml-logo" alt="Advanced Healing Massage Ltd" class="logo" />
        </span>
        <h1 class="title">Thank You for Reaching Out</h1>
        <p class="subtitle">Your message is important to us.</p>
      </div>

      <div class="content">
        <p>Hi <span class="highlight">${senderName}</span>,</p>
        <p>
          Thanks for your interest in <span class="highlight">Advanced Healing Massage Ltd</span>.
          We received your message and our team will get back to you shortly.
        </p>
        <p>
          In the meantime, feel free to explore our services or prepare any
          additional details you’d like to share when we follow up.
        </p>

        <p>
          You can also reach us at
          <span class="highlight">+1 (403)-477-2394</span>
          or chat with us on
          <a href="https://wa.me/14034772394" style="color: #c97c9f; text-decoration: none; font-weight: 600;">WhatsApp</a>.
        </p>

        <div class="divider"></div>

        <p class="signature">
          <strong>Best regards,</strong>
          <span>The Advanced Healing Massage Ltd Team</span>
        </p>
      </div>

      <div class="footer">
        <p>© 2026 Advanced Healing Massage Ltd . All rights reserved.</p>
        <p>3730 108 Ave NE #1141, Calgary</p>
        <p>AB T3N 1V9, Canada</p>
      </div>
    </div>
  </div>
</body>
</html>`,
        attachments: [
          {
            filename: 'ahml.png',
            path: logoPath,
            cid: 'ahml-logo',
          },
        ],
      };

      try {
        await transport.sendMail(replyOptions);
      } catch (replyError) {
        console.error('Failed to send auto-reply:', replyError);
        // non-fatal: continue to return success for the primary delivery
      }
    }

    return new Response(JSON.stringify({ success: true, message: 'Mail sent' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send mail' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
