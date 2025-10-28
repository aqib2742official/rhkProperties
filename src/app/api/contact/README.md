# Contact API Documentation

## Overview
Professional contact form API with email notifications for RHK Properties.

## File Structure

```
src/app/api/contact/
├── route.ts          # API route handler (main logic)
├── emailTemplate.ts  # Email HTML/text template generator
└── README.md         # This file
```

## Architecture

### **route.ts**
- Handles POST requests to `/api/contact`
- Validates environment variables
- Sanitizes user input
- Validates email format
- Creates SMTP transporter
- Sends email notifications

### **emailTemplate.ts**
- `generateContactEmailHTML()` - Generates HTML email template
- `generateContactEmailText()` - Generates plain text fallback
- Optimized for all email clients (Gmail, iCloud, Outlook, etc.)
- Embedded logo using Content-ID (CID)

## Environment Variables

Required in `.env.local` (development) and Vercel Environment Variables (production):

```bash
EMAIL_USER=your-gmail@gmail.com              # Gmail address
EMAIL_PASSWORD=your-16-char-app-password     # Gmail App Password
RECIPIENT_EMAIL=where-to-receive@gmail.com   # Notification recipient
```

## API Endpoint

### POST `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+971 50 123 4567",  // Optional
  "subject": "Property Inquiry",
  "message": "I'm interested in..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Error Responses:**

*Missing Fields (400):*
```json
{
  "success": false,
  "error": "Missing required fields"
}
```

*Invalid Email (400):*
```json
{
  "success": false,
  "error": "Invalid email address"
}
```

*Server Error (500):*
```json
{
  "error": "Failed to send message",
  "details": "Error description"
}
```

## Email Features

### ✅ Professional Design
- Branded header with logo
- Color-coded sections
- Responsive layout
- Professional typography

### ✅ Cross-Client Compatibility
- **Gmail**: Full gradient support, all features
- **iCloud Mail**: Solid color fallbacks, reliable display
- **Outlook**: MSO conditional comments for proper rendering
- **Mobile**: Touch-friendly, responsive design

### ✅ Security
- Input sanitization (removes `<>` characters)
- Email format validation
- Environment variable validation
- Rate limiting (implement at deployment level)

### ✅ Accessibility
- Alt text for images
- Semantic HTML
- Plain text fallback

## Email Template Structure

1. **Header** - Logo and title
2. **Alert Banner** - Action required notification
3. **Contact Details** - Name, email, phone, subject
4. **Message** - User's full message
5. **Reply Button** - One-click reply CTA
6. **Metadata** - Timestamp and source
7. **Footer** - Company information

## Customization

### Update Email Colors
Edit `emailTemplate.ts`:
```typescript
background-color: #161950;  // Primary color
background: linear-gradient(135deg, #161950 0%, #1E2370 100%);
```

### Update Company Info
Edit footer section in `emailTemplate.ts`:
```typescript
RHK Properties LLC
Office 2304 Prime Tower, Burj Khalifa Blvd
Business Bay, Dubai, UAE
📞 +971 4 589 0333 | 📧 info@rhkproperties.com
```

### Change Logo
Replace `public/logo.png` with your logo (200x60px recommended)

## Testing

### Local Testing
1. Create `.env.local` with required variables
2. Run `npm run dev`
3. Test at `http://localhost:3000/contact`

### Production Testing
1. Add environment variables to Vercel
2. Deploy and test on live site
3. Check Vercel function logs for debugging

## Troubleshooting

### Email Not Sending
- ✅ Check environment variables are set
- ✅ Verify Gmail App Password (not regular password)
- ✅ Check Vercel function logs
- ✅ Ensure 2-Step Verification enabled in Google Account

### Styling Issues in Email Clients
- Gmail: Should display perfectly
- iCloud: Uses solid color fallbacks (intentional)
- Outlook: Uses MSO conditional comments

### Logo Not Displaying
- ✅ Check `public/logo.png` exists
- ✅ Verify `cid:logo` matches in emailTemplate.ts
- ✅ Check file permissions

## Best Practices

1. ✅ **Separation of Concerns** - Template logic separate from API logic
2. ✅ **Type Safety** - TypeScript interfaces for template data
3. ✅ **Error Handling** - Comprehensive try-catch blocks
4. ✅ **Validation** - Input sanitization and format validation
5. ✅ **Security** - Environment variables, no hardcoded secrets
6. ✅ **Maintainability** - Clean, documented, modular code

## Future Enhancements

- [ ] Add rate limiting
- [ ] Implement CAPTCHA verification
- [ ] Add email templates for different inquiries
- [ ] Add auto-responder to customer
- [ ] Integrate with CRM system
- [ ] Add attachment support

## Support

For issues or questions, check:
- Vercel function logs
- Environment variables configuration
- Gmail security settings

