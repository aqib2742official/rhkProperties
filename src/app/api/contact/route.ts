import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Environment variables validation
const validateEnvVariables = () => {
    const required = ['EMAIL_USER', 'EMAIL_PASSWORD', 'RECIPIENT_EMAIL'];
    const missing = required.filter(key => !process.env[key]);

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
};

// Email validation helper
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
};

// Sanitize input to prevent injection attacks
const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
};

export async function POST(request: NextRequest) {
    try {
        // Validate environment variables first
        try {
            validateEnvVariables();
        } catch (envError) {
            console.error('Environment variable validation failed:', envError);
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Server configuration error. Please contact support.',
                    debug: process.env.NODE_ENV === 'development' ? (envError as Error).message : undefined
                },
                { status: 500 }
            );
        }

        // Parse request body
        let body;
        try {
            body = await request.json();
        } catch (parseError) {
            console.error('JSON parse error:', parseError);
            return NextResponse.json(
                { success: false, error: 'Invalid request format' },
                { status: 400 }
            );
        }

        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Sanitize inputs
        const sanitizedName = sanitizeInput(name);
        const sanitizedSubject = sanitizeInput(subject);
        const sanitizedMessage = sanitizeInput(message);
        const sanitizedPhone = phone ? sanitizeInput(phone) : '';

        // Create nodemailer transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Verify transporter configuration
        try {
            await transporter.verify();
            console.log('Email transporter verified successfully');
        } catch (verifyError) {
            console.error('Email transporter verification failed:', verifyError);
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Email service configuration error. Please try again later.',
                    debug: process.env.NODE_ENV === 'development' ? (verifyError as Error).message : undefined
                },
                { status: 500 }
            );
        }

        // Email content for the recipient
        const mailOptions = {
            from: `"RHK Properties" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `🏢 New Contact Inquiry: ${sanitizedSubject}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; line-height: 1.6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f5;">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <!-- Main Container -->
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #161950 0%, #1E2370 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; text-align:center;">
  <div
    style="
      width:200px;
      height:60px;
      margin:0 auto;
      background:url('${process.env.BASE_URL || 'https://rhkproperties.com'}/logo.svg') no-repeat center center;
      background-size:contain;
      line-height:60px;
      color:#ffffff;
      font-weight:700;
      font-size:24px;
    "
  >
    RHK Properties
  </div>
</h1>

                            <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 500;">
                                New Contact Form Submission
                            </p>
                        </td>
                    </tr>

                    <!-- Alert Banner -->
                    <tr>
                        <td style="background-color: #FEF3C7; padding: 16px 30px; border-left: 4px solid #F59E0B;">
                            <p style="margin: 0; color: #92400E; font-size: 14px; font-weight: 600;">
                                ⚡ Action Required: New inquiry received
                            </p>
                        </td>
                    </tr>

                    <!-- Contact Information Section -->
                    <tr>
                        <td style="padding: 30px;">
                            <h2 style="margin: 0 0 20px 0; color: #161950; font-size: 20px; font-weight: 700;">
                                Contact Details
                            </h2>
                            
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px; background-color: #F9FAFB; border-radius: 8px; margin-bottom: 8px;">
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="width: 30px; vertical-align: top;">
                                                    <span style="font-size: 20px;">👤</span>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <p style="margin: 0; font-size: 12px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                                                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #111827; font-weight: 600;">${sanitizedName}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr><td style="height: 8px;"></td></tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #F9FAFB; border-radius: 8px;">
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="width: 30px; vertical-align: top;">
                                                    <span style="font-size: 20px;">📧</span>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <p style="margin: 0; font-size: 12px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                                                    <p style="margin: 4px 0 0 0; font-size: 16px;">
                                                        <a href="mailto:${email}" style="color: #161950; text-decoration: none; font-weight: 600;">${email}</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                ${sanitizedPhone ? `
                                <tr><td style="height: 8px;"></td></tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #F9FAFB; border-radius: 8px;">
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="width: 30px; vertical-align: top;">
                                                    <span style="font-size: 20px;">📱</span>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <p style="margin: 0; font-size: 12px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
                                                    <p style="margin: 4px 0 0 0; font-size: 16px;">
                                                        <a href="tel:${sanitizedPhone}" style="color: #161950; text-decoration: none; font-weight: 600;">${sanitizedPhone}</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                ` : ''}
                                <tr><td style="height: 8px;"></td></tr>
                                <tr>
                                    <td style="padding: 12px; background-color: #F9FAFB; border-radius: 8px;">
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="width: 30px; vertical-align: top;">
                                                    <span style="font-size: 20px;">📋</span>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <p style="margin: 0; font-size: 12px; color: #6B7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                                                    <p style="margin: 4px 0 0 0; font-size: 16px; color: #111827; font-weight: 600;">${sanitizedSubject}</p>
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
                        <td style="padding: 0 30px 30px 30px;">
                            <div style="background-color: #F9FAFB; border-left: 4px solid #161950; padding: 20px; border-radius: 8px;">
                                <h3 style="margin: 0 0 12px 0; color: #161950; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                    💬 Message
                                </h3>
                                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${sanitizedMessage}</p>
                            </div>
                        </td>
                    </tr>

                    <!-- Action Button -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;" align="center">
                            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(sanitizedSubject)}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #161950 0%, #1E2370 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(22, 25, 80, 0.2);">
                                📧 Reply to ${sanitizedName.split(' ')[0]}
                            </a>
                        </td>
                    </tr>

                    <!-- Metadata Section -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #F9FAFB; border-top: 1px solid #E5E7EB;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="font-size: 12px; color: #6B7280;">
                                        <p style="margin: 0 0 4px 0;"><strong>📅 Received:</strong> ${new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Dubai',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            })}</p>
                                        <p style="margin: 4px 0 0 0;"><strong>🌐 Source:</strong> RHK Properties Contact Form</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 30px; background: linear-gradient(135deg, #161950 0%, #1E2370 100%); text-align: center;">
                            <p style="margin: 0 0 8px 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 600;">
                                RHK Properties LLC
                            </p>
                            <p style="margin: 0 0 12px 0; color: rgba(255, 255, 255, 0.7); font-size: 12px; line-height: 1.6;">
                                Office 2304 Prime Tower, Burj Khalifa Blvd<br>
                                Business Bay, Dubai, UAE<br>
                                📞 +971 4 589 0333 | 📧 info@rhkproperties.com
                            </p>
                            <p style="margin: 0; color: rgba(255, 255, 255, 0.5); font-size: 11px;">
                                © ${new Date().getFullYear()} RHK Properties. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>

                <!-- Email Client Notice -->
                <table role="presentation" style="width: 100%; max-width: 600px; margin-top: 20px;">
                    <tr>
                        <td style="text-align: center; padding: 0 20px;">
                            <p style="margin: 0; color: #9CA3AF; font-size: 12px; line-height: 1.5;">
                                This is an automated notification from your website contact form.<br>
                                To stop receiving these notifications, update your email settings.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
      `,
            text: `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${email}
Phone: ${sanitizedPhone || 'Not provided'}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}

---
Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}
      `,
        };

        // Send email
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent successfully:', info.messageId);
            
            return NextResponse.json({
                success: true,
                message: 'Message sent successfully',
            });
        } catch (sendError) {
            console.error('Email send error:', sendError);
            return NextResponse.json(
                {
                    success: false,
                    error: 'Failed to send email. Please try again later.',
                    debug: process.env.NODE_ENV === 'development' ? (sendError as Error).message : undefined
                },
                { status: 500 }
            );
        }

    } catch (error) {
        // Catch-all for any unexpected errors
        console.error('Unexpected contact form error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'An unexpected error occurred. Please try again later.',
                debug: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
            },
            { status: 500 }
        );
    }
}

