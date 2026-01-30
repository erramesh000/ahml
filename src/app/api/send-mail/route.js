import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email = '', subject = '', text = '', name = '',phone='',date='',time='', company = '', html = '' } = await req.json();
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
      // html: html || `
      //       <h3>New appointment Request</h3>
      //       <p><strong>Name:</strong> ${senderName}</p>
      //       <p><strong>Email:</strong> ${email}</p>
      //       <p><strong>Message:</strong> ${text}</p>
      //       `,
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Appointment Confirmation</title>
    <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; }
        .header { background-color: #007bff; color: #ffffff; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .info-table { width: 100%; border-collapse: collapse; }
        .info-label { width: 140px; padding: 10px; font-weight: bold; color: #555; vertical-align: top; }
        .info-value { padding: 10px; color: #333; }
        .footer { text-align: center; font-size: 12px; color: #999; padding: 20px; border-top: 1px solid #eee; }
        
        /* Mobile Responsiveness */
        @media only screen and (max-width: 600px) {
            .container { width: 100% !important; border-radius: 0; }
            .info-label { display: block; width: 100%; padding-bottom: 0; color: #777; }
            .info-value { display: block; width: 100%; padding-top: 5px; font-weight: bold; }
            .header h1 { font-size: 20px; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    
    <div style="background-color: #f4f4f4; padding: 20px;">
        <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
            
            <div class="header" style="background-color: #0070f3; color: #ffffff; padding: 30px; text-align: center;">
                <h1 style="margin: 0; fontSize: 24px;">Appointment Confirmed</h1>
                <p style="margin: 10px 0 0; opacity: 0.9;">Your booking has been successfully scheduled.</p>
            </div>

            <div class="content" style="padding: 30px;">
                <p style="color: #555; line-height: 1.5;">
                    Hello <strong>${name}</strong>,<br><br>
                    We are pleased to confirm your appointment. Below are the details of your scheduled visit.
                </p>

                <div style="margin-top: 20px; border: 1px solid #eee; border-radius: 8px; padding: 10px;">
                    <table class="info-table" style="width: 100%; border-collapse: collapse;">
                        <tbody>
                            <tr>
                                <td class="info-label" style="padding: 10px; font-weight: bold; color: #555; vertical-align: top; width: 130px;">Date:</td>
                                <td class="info-value" style="padding: 10px; color: #333;">${date}</td>
                            </tr>
                            
                            <tr>
                                <td class="info-label" style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Time:</td>
                                <td class="info-value" style="padding: 10px; color: #333;">${time}</td>
                            </tr>

                            <tr>
                                <td colspan="2" style="border-bottom: 1px solid #eee; padding: 5px 0;"></td>
                            </tr>

                            <tr>
                                <td class="info-label" style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Email:</td>
                                <td class="info-value" style="padding: 10px; color: #333;">${email}</td>
                            </tr>

                            <tr>
                                <td class="info-label" style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Phone:</td>
                                <td class="info-value" style="padding: 10px; color: #333;">${phone}</td>
                            </tr>

                            <tr>
                                <td class="info-label" style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                                <td class="info-value" style="padding: 10px; color: #333; font-style: italic;">
                                    ${text}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="footer" style="text-align: center; font-size: 12px; color: #999; padding: 20px; border-top: 1px solid #eee; background-color: #fafafa;">
                <p style="margin: 0;">© 2026 Advanced Healing Massage Ltd. All rights reserved.</p>
                <p style="margin: 5px 0 0;">3730 108 Ave NE #1141, Calgary</p>
                <p style="margin: 5px 0 0;">AB T3N 1V9, Canada</p>
            </div>

        </div>
    </div>
</body>
</html>`,
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
