import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import { generateContactEmailHTML, generateContactEmailText } from './emailTemplate';

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
        // Validate environment variables
        validateEnvVariables();

        // Parse request body
        const body = await request.json();
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
        await transporter.verify();

        // Generate email template data
        const emailTemplateData = {
            sanitizedName,
            email,
            sanitizedPhone,
            sanitizedSubject,
            sanitizedMessage
        };

        // Email content for the recipient
        const mailOptions = {
            from: `"RHK Properties" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `🏢 New Contact Inquiry: ${sanitizedSubject}`,
            html: generateContactEmailHTML(emailTemplateData),
            text: generateContactEmailText(emailTemplateData),
            attachments: [
                {
                    filename: 'logo.png',
                    path: path.join(process.cwd(), 'public', 'logo.png'),
                    cid: 'logo', // Must match src="cid:logo" in HTML
                    contentDisposition: 'inline' as const,
                    contentType: 'image/png'
                }
            ]
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully',
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            {
                error: 'Failed to send message',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
