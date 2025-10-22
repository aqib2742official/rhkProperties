# 📧 Contact Form Email Setup Guide

Complete guide to configure email notifications for your RHK Properties contact form.

---

## ✅ What's Already Done

- ✅ **Nodemailer** installed (v7.0.9)
- ✅ **Backend API** created (`/api/contact`)
- ✅ **Professional email template** with RHK Properties branding
- ✅ **Frontend form** integrated with backend
- ✅ **Security** configured (.env files in .gitignore)

**All emails will be sent to:** `maqibali2742@gmail.com`

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Enable Gmail 2-Factor Authentication

1. Go to: https://myaccount.google.com/security
2. Find "2-Step Verification"
3. Enable it (required for app passwords)

### Step 2: Generate Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select app: **Mail**
3. Select device: **Other (Custom name)**
4. Type: **"RHK Properties"**
5. Click **Generate**
6. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### Step 3: Create Environment File

Create a file named `.env.local` in your project root:

```env
EMAIL_USER=maqibali2742@gmail.com
EMAIL_PASSWORD=your_16_character_password_here
```

**Important:** 
- Remove all spaces from the password
- Example: `EMAIL_PASSWORD=abcdefghijklmnop`

### Step 4: Restart Server

```bash
npm run dev
```

### Step 5: Test It

1. Go to your Contact page
2. Fill out the form
3. Submit
4. Check **maqibali2742@gmail.com** inbox
5. You should receive a professional email!

---

## 📧 What You'll Receive

Each contact form submission sends a beautifully designed email with:

### Email Features:
- 🏢 **Professional Header** - RHK Properties branding with gradient
- ⚡ **Alert Banner** - "Action Required: New inquiry received"
- 📋 **Contact Cards** - Name, email, phone, subject in organized cards
- 💬 **Message Section** - Customer's message with proper formatting
- 🔘 **Reply Button** - One-click to reply to customer
- 📅 **Timestamp** - UAE timezone
- 🏢 **Company Footer** - Complete contact information

### Email Subject:
```
🏢 New Contact Inquiry: [Customer's Subject]
```

### Reply Feature:
When you click "Reply" in your email, it automatically replies to the customer's email address!

---

## 🔍 How It Works

1. Customer fills out contact form
2. Form data sent to `/api/contact` backend API
3. Backend uses Nodemailer with Gmail SMTP
4. Email sent FROM: `maqibali2742@gmail.com`
5. Email sent TO: `maqibali2742@gmail.com`
6. Reply-To set to customer's email

---

## 🆘 Troubleshooting

### "Invalid login" error
- ✅ Enable 2-Factor Authentication first
- ✅ Use App Password (NOT your regular Gmail password)
- ✅ Remove all spaces from password in `.env.local`
- ✅ Make sure you're using maqibali2742@gmail.com

### "Connection timeout" error
- ✅ Check your internet connection
- ✅ Some networks block Gmail SMTP (port 587)
- ✅ Try from a different network

### Emails not arriving
- ✅ Check spam folder in maqibali2742@gmail.com
- ✅ Check "Sent" folder in Gmail
- ✅ Verify `.env.local` exists with correct credentials
- ✅ Make sure you restarted the server after creating `.env.local`
- ✅ Check browser console and terminal for error messages

### "Cannot find module 'nodemailer'" error
- ✅ Run: `npm install nodemailer @types/nodemailer`
- ✅ Restart your dev server

---

## 🔒 Security Notes

- ✅ `.env.local` is in `.gitignore` (won't be committed to git)
- ✅ Never share your `.env.local` file
- ✅ Use an App Password, not your regular Gmail password
- ✅ Email credentials are server-side only (never exposed to browser)

---

## 📊 Email Limits

**Gmail free account:**
- 500 emails per day
- More than enough for most business websites
- Need more? Upgrade to Google Workspace

---

## 🎯 Email Template Structure

```
┌─────────────────────────────────────┐
│  🏢 RHK PROPERTIES                  │  Gradient Header
│  New Contact Form Submission        │
├─────────────────────────────────────┤
│ ⚡ Action Required: New inquiry     │  Alert Banner
├─────────────────────────────────────┤
│  📋 Contact Details                 │
│  ┌───────────────────────────────┐ │
│  │ 👤 FULL NAME                  │ │
│  │    [Customer Name]            │ │
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 📧 EMAIL ADDRESS              │ │
│  │    [Customer Email]           │ │  Clickable
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 📱 PHONE NUMBER               │ │
│  │    [Customer Phone]           │ │  Clickable
│  └───────────────────────────────┘ │
│  ┌───────────────────────────────┐ │
│  │ 📋 SUBJECT                    │ │
│  │    [Subject]                  │ │
│  └───────────────────────────────┘ │
├─────────────────────────────────────┤
│  💬 MESSAGE                         │
│  [Customer's full message]          │
├─────────────────────────────────────┤
│   ┌──────────────────────────┐     │
│   │ 📧 Reply to Customer     │     │  Action Button
│   └──────────────────────────┘     │
├─────────────────────────────────────┤
│ 📅 Received: [Date & Time]          │  Metadata
│ 🌐 Source: RHK Properties Form     │
├─────────────────────────────────────┤
│  RHK Properties LLC                 │  Company Footer
│  Office 2304 Prime Tower...         │
└─────────────────────────────────────┘
```

---

## 💡 Pro Tips

1. **Quick Reply:** Click the "Reply to [Name]" button for instant response
2. **Mobile Friendly:** Email looks perfect on all devices
3. **Dark Mode:** Optimized for dark mode email clients
4. **Save Contacts:** Email and phone are formatted for easy copy-paste
5. **Forward to Team:** Professional design perfect for forwarding

---

## 🎨 Why This Solution?

✅ **100% Free** - Gmail allows 500 emails/day  
✅ **Backend Security** - Credentials never exposed to browser  
✅ **Professional** - Nodemailer is industry standard  
✅ **Reliable** - Gmail has 99.9% uptime  
✅ **Easy Reply** - One-click customer response  
✅ **No External Services** - Everything runs in your Next.js app  
✅ **Beautiful Design** - Corporate-grade email template  

---

## 📁 Project Files

### Backend API
- **File:** `src/app/api/contact/route.ts`
- **Purpose:** Handles email sending with Nodemailer
- **Features:** Validation, error handling, professional email template

### Frontend Form
- **File:** `src/page-components/Contact.tsx`
- **Purpose:** Contact form that sends data to backend
- **Features:** Validation, error messages, success notifications

### Environment Variables
- **File:** `.env.local` (you need to create this)
- **Required:** `EMAIL_USER` and `EMAIL_PASSWORD`
- **Security:** Already in `.gitignore`

---

## ✅ Verification Checklist

- [ ] 2FA enabled on Gmail account
- [ ] App password generated from Google
- [ ] `.env.local` file created in project root
- [ ] `EMAIL_USER=maqibali2742@gmail.com` is set
- [ ] `EMAIL_PASSWORD` has 16-char app password (no spaces)
- [ ] Dev server restarted after creating `.env.local`
- [ ] Test form submitted successfully
- [ ] Email received at maqibali2742@gmail.com
- [ ] Email design looks professional
- [ ] Reply button works correctly

---

## 🎉 You're All Set!

Once you complete the setup steps above, your contact form will be fully functional with professional email notifications!

**Need help?** Check the troubleshooting section above or review your setup against the verification checklist.

---

**Last Updated:** October 2025 | **Version:** 1.0

