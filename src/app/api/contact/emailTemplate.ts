interface EmailTemplateProps {
    sanitizedName: string;
    email: string;
    sanitizedPhone: string;
    sanitizedSubject: string;
    sanitizedMessage: string;
}

export function generateContactEmailHTML({
    sanitizedName,
    email,
    sanitizedPhone,
    sanitizedSubject,
    sanitizedMessage
}: EmailTemplateProps): string {
    const currentYear = new Date().getFullYear();
    const receivedDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dubai',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background-color:#f4f4f5;line-height:1.6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <!-- Main Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border-collapse:collapse;">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#161950;background:linear-gradient(135deg,#161950 0%,#1E2370 100%);padding:40px 30px;text-align:center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                <tr>
                  <td align="center" style="padding:0;">
                    <!--[if mso]>
                    <img src="cid:logo" alt="RHK Properties" width="200" border="0" style="display:block;margin:0 auto;" />
                    <![endif]-->
                    <!--[if !mso]><!-->
                    <img src="cid:logo" alt="RHK Properties" width="200" height="60" border="0" style="display:block;margin:0 auto;max-width:200px;height:auto;font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:bold;color:#ffffff;text-align:center;line-height:60px;background-color:transparent;" />
                    <!--<![endif]-->
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:10px;">
                    <p style="margin:0;color:rgba(255,255,255,0.9);font-size:14px;font-weight:500;">
                      New Contact Form Submission
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color:#FEF3C7;padding:16px 30px;border-left:4px solid #F59E0B;">
              <p style="margin:0;color:#92400E;font-size:14px;font-weight:600;">
                ⚡ Action Required: New inquiry received
              </p>
            </td>
          </tr>

          <!-- Contact Information Section -->
          <tr>
            <td style="padding:30px;">
              <h2 style="margin:0 0 20px 0;color:#161950;font-size:20px;font-weight:700;">
                Contact Details
              </h2>
              
               <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                 <!-- Full Name -->
                 <tr>
                   <td style="padding:12px;background-color:rgb(190, 190, 190);border-radius:8px;">
                     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                       <tr>
                         <td style="width:30px;vertical-align:top;">
                           <span style="font-size:20px;">👤</span>
                         </td>
                         <td style="vertical-align:top;">
                           <p style="margin:0;font-size:12px;color:#6B7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Full Name</p>
                           <p style="margin:4px 0 0 0;font-size:16px;color:#111827;font-weight:600;">${sanitizedName}</p>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
                 
                 <tr><td style="height:8px;"></td></tr>
                 
                 <!-- Email -->
                 <tr>
                   <td style="padding:12px;background-color:rgb(190, 190, 190);border-radius:8px;">
                     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                       <tr>
                         <td style="width:30px;vertical-align:top;">
                           <span style="font-size:20px;">📧</span>
                         </td>
                         <td style="vertical-align:top;">
                           <p style="margin:0;font-size:12px;color:#6B7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Email Address</p>
                           <p style="margin:4px 0 0 0;font-size:16px;">
                             <a href="mailto:${email}" style="color:#161950;text-decoration:none;font-weight:600;">${email}</a>
                           </p>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
                 
                 ${sanitizedPhone ? `
                 <tr><td style="height:8px;"></td></tr>
                 
                 <!-- Phone -->
                 <tr>
                   <td style="padding:12px;background-color:rgb(190, 190, 190);border-radius:8px;">
                     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                       <tr>
                         <td style="width:30px;vertical-align:top;">
                           <span style="font-size:20px;">📱</span>
                         </td>
                         <td style="vertical-align:top;">
                           <p style="margin:0;font-size:12px;color:#6B7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Phone Number</p>
                           <p style="margin:4px 0 0 0;font-size:16px;">
                             <a href="tel:${sanitizedPhone}" style="color:#161950;text-decoration:none;font-weight:600;">${sanitizedPhone}</a>
                           </p>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
                 ` : ''}
                 
                 <tr><td style="height:8px;"></td></tr>
                 
                 <!-- Subject -->
                 <tr>
                   <td style="padding:12px;background-color:rgb(190, 190, 190);border-radius:8px;">
                     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                       <tr>
                         <td style="width:30px;vertical-align:top;">
                           <span style="font-size:20px;">📋</span>
                         </td>
                         <td style="vertical-align:top;">
                           <p style="margin:0;font-size:12px;color:#6B7280;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Subject</p>
                           <p style="margin:4px 0 0 0;font-size:16px;color:#111827;font-weight:600;">${sanitizedSubject}</p>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
               </table>
            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="padding:0 30px 30px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;border-spacing:0;">
                <tr>
                  <td style="background-color:rgb(190, 190, 190);border:4px solid #161950;border-right:none;border-top:none;border-bottom:none;padding:20px;border-radius:8px 8px 8px 8px;-webkit-border-radius:8px;-moz-border-radius:8px;">
                    <h3 style="margin:0 0 12px 0;color:#161950;font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
                      💬 Message
                    </h3>
                    <p style="margin:0;color:#374151;font-size:15px;line-height:1.7;white-space:pre-wrap;">${sanitizedMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action Button -->
          <tr>
            <td style="padding:0 30px 30px 30px;" align="center">
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                <tr>
                  <td align="center" style="background-color:#161950;padding:14px 32px;border-radius:8px;">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(sanitizedSubject)}" target="_blank" style="display:inline-block;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">
                      📧 Reply to ${sanitizedName.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Metadata Section -->
          <tr>
            <td style="padding:20px 30px;background-color:rgb(190, 190, 190);border-top:1px solid #E5E7EB;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                <tr>
                  <td style="font-size:12px;color:#6B7280;">
                    <p style="margin:0 0 4px 0;"><strong>📅 Received:</strong> ${receivedDate}</p>
                    <p style="margin:4px 0 0 0;"><strong>🌐 Source:</strong> RHK Properties Contact Form</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#161950;background:linear-gradient(135deg,#161950 0%,#1E2370 100%);padding:30px;text-align:center;">
              <p style="margin:0 0 8px 0;color:rgba(255,255,255,0.9);font-size:14px;font-weight:600;">
                RHK Properties LLC
              </p>
              <p style="margin:0 0 12px 0;color:rgba(255,255,255,0.7);font-size:12px;line-height:1.6;">
                Office 2304 Prime Tower, Burj Khalifa Blvd<br>
                Business Bay, Dubai, UAE<br>
                📞 +971 4 589 0333 | 📧 info@rhkproperties.com
              </p>
              <p style="margin:0;color:rgba(255,255,255,0.5);font-size:11px;">
                © ${currentYear} RHK Properties. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();
}

export function generateContactEmailText({
    sanitizedName,
    email,
    sanitizedPhone,
    sanitizedSubject,
    sanitizedMessage
}: EmailTemplateProps): string {
    const submittedDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' });
    
    return `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${email}
Phone: ${sanitizedPhone || 'Not provided'}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
Submitted on: ${submittedDate}
    `.trim();
}

