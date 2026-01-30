export const getAppointmentHtml = (name, phone, date, time, text, email) => {
    return `<!DOCTYPE html>
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
</html>`
}