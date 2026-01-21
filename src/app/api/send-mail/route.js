import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email = '', subject = '', text = '', name = '', company = '', html = '' } = await req.json();
    const senderName = name || company || 'Anonymous';

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    const mailOptions = {
      from: `"ahml appointment" <${process.env.RECEIVER_MAIL_ADDRESS}>`,
      to: process.env.RECEIVER_MAIL_ADDRESS,
      replyTo: email || process.env.RECEIVER_MAIL_ADDRESS,
      subject: subject || 'New appointment request',
      text: text || `appointment request from ${senderName} <${email}>`,
      html: html || `
            <h3>New appointment Request</h3>
            <p><strong>Name:</strong> ${senderName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${text}</p>
            `,
    };
    await transport.sendMail(mailOptions);

    // send an auto-reply to the sender thanking them for their interest
    if (email) {
      const replyOptions = {
        from: `"ahml" <${process.env.RECEIVER_MAIL_ADDRESS}>`,
        to: email,
        subject: `Thanks for appointmenting ahml`,
        text: `Hi ${senderName},\n\nThanks for your interest in ahml. We received your message and will get back to you shortly.\n\nBest regards,\nThe ahml Team`,
        html: `
          <p>Hi ${senderName},</p>
          <p>Thanks for your interest in <strong>ahml</strong>. We received your message and will get back to you shortly.</p>
          <p>Best regards,<br/>The ahml Team</p>
        `,
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
