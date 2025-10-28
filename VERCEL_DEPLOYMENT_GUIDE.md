# 📧 Email Setup & Vercel Deployment Guide

## ✅ YES - It Works on Free Vercel Hosting!

Your contact form with Nodemailer **will work perfectly on Vercel's free tier**. Here's what you need to know:

---

## 🎯 Quick Setup Checklist

### 1. **Local Development Setup**

Create a `.env.local` file in your project root:

```bash
# Copy the example file
cp .env.example .env.local
```

Then update `.env.local` with your actual credentials:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=info@rhkproperties.com
```

### 2. **Get Gmail App Password**

📌 **Important**: You need a Gmail App Password (NOT your regular Gmail password)

**Steps to generate:**
1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Search for **App Passwords**
5. Select **Mail** and **Other (Custom name)**
6. Name it "RHK Properties Contact Form"
7. Click **Generate**
8. Copy the 16-character password (no spaces)
9. Paste it in your `.env.local` as `EMAIL_PASSWORD`

---

## 🚀 Deploying to Vercel

### Option 1: Using Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy"

3. **Add Environment Variables:**
   - Go to your project dashboard
   - Click **Settings** → **Environment Variables**
   - Add these three variables:
     ```
     EMAIL_USER = your-gmail@gmail.com
     EMAIL_PASSWORD = your-16-char-app-password
     RECIPIENT_EMAIL = info@rhkproperties.com
     ```
   - **Important**: Add them to all environments (Production, Preview, Development)

4. **Redeploy:**
   - Go to **Deployments** tab
   - Click the three dots on the latest deployment
   - Click "Redeploy"

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Set environment variables
vercel env add EMAIL_USER
# Enter your Gmail address when prompted
# Select: Production, Preview, Development (space to select, enter to confirm)

vercel env add EMAIL_PASSWORD
# Enter your Gmail App Password when prompted
# Select: Production, Preview, Development

vercel env add RECIPIENT_EMAIL
# Enter: info@rhkproperties.com
# Select: Production, Preview, Development

# Deploy to production
vercel --prod
```

---

## 🔍 Why It Works on Vercel

✅ **Serverless Functions**: Your `/api/contact` route runs as a serverless function  
✅ **SMTP Support**: Nodemailer works perfectly in Vercel's Node.js runtime  
✅ **Free Tier**: No costs for API routes (within limits)  
✅ **Environment Variables**: Secure storage for sensitive credentials  

---

## 📊 Vercel Free Tier Limits

Your contact form is well within free tier limits:

| Feature | Free Tier Limit | Your Usage |
|---------|-----------------|------------|
| Serverless Function Execution | 100GB-hours/month | ~0.001 GB-hours per email |
| Invocations | 1 million/month | Likely < 1,000/month |
| Bandwidth | 100GB/month | Minimal (text data only) |

**Conclusion**: You can handle **thousands of contact form submissions per month** on the free tier.

---

## 🧪 Testing Your Setup

### Local Testing (Before Deploying)

```bash
# Run development server
npm run dev

# Visit: http://localhost:3000/contact
# Fill and submit the form
# Check your terminal for any errors
```

### Production Testing (After Deploying)

1. Visit your deployed site's contact page
2. Submit a test form
3. Check `info@rhkproperties.com` for the email
4. Check Vercel logs:
   - Go to your project → **Deployments**
   - Click on the latest deployment → **Functions**
   - Click on `/api/contact` to view logs

---

## 🐛 Troubleshooting

### "Missing required environment variables"

**Solution**: Make sure all three env variables are set in Vercel dashboard and redeploy.

### "Invalid login: 535-5.7.8 Username and Password not accepted"

**Solution**: You're using your regular Gmail password instead of an App Password. Generate a new App Password.

### "535 Authentication credentials invalid"

**Solution**: 
- Ensure 2-Step Verification is enabled on your Gmail account
- Generate a fresh App Password
- Remove any spaces from the 16-character password

### Emails not arriving

**Solutions**:
1. Check spam/junk folder
2. Verify `RECIPIENT_EMAIL` is correct in Vercel env variables
3. Check Vercel function logs for errors
4. Ensure your Gmail account can send emails (not suspended)

### Function timeout on Vercel

**Solution**: This is rare, but if it happens:
- Check if your Gmail account is blocked/locked
- Verify network connectivity (Vercel has good uptime)
- Check Vercel status page: https://www.vercel-status.com/

---

## 🔒 Security Best Practices

✅ **Never commit `.env.local`** - It's already in `.gitignore`  
✅ **Use App Passwords** - More secure than regular passwords  
✅ **Rotate credentials periodically** - Generate new App Password every 6 months  
✅ **Monitor usage** - Check Vercel analytics for unusual activity  
✅ **Input validation** - Already implemented in the API route  
✅ **Rate limiting** - Consider adding if you get spam (use Vercel's edge config)  

---

## 📝 Environment Variables Summary

| Variable | Purpose | Where to Get It | Example |
|----------|---------|-----------------|---------|
| `EMAIL_USER` | Gmail account to send from | Your Gmail address | `yourmail@gmail.com` |
| `EMAIL_PASSWORD` | Gmail App Password | Google Account → Security → App Passwords | `abcd efgh ijkl mnop` |
| `RECIPIENT_EMAIL` | Where to send inquiries | Your business email | `info@rhkproperties.com` |

---

## 🎉 Deployment Complete!

Once deployed, your contact form will:
- ✅ Send professional HTML emails
- ✅ Include all form data (name, email, phone, subject, message)
- ✅ Work instantly with no delays
- ✅ Scale automatically with traffic
- ✅ Cost $0 on Vercel's free tier

---

## 💡 Pro Tips

1. **Email Delivery**: Gmail SMTP is reliable, but for production, consider:
   - [SendGrid](https://sendgrid.com/) (100 emails/day free)
   - [Resend](https://resend.com/) (3,000 emails/month free)
   - [AWS SES](https://aws.amazon.com/ses/) (62,000 emails/month free)

2. **Monitoring**: Set up email notifications in Vercel for failed deployments

3. **Testing**: Use a test email first, then switch to your actual business email

4. **Backup**: Keep a copy of your environment variables in a secure password manager

---

## 🆘 Need Help?

- **Vercel Documentation**: https://vercel.com/docs
- **Nodemailer Docs**: https://nodemailer.com/
- **Gmail App Passwords**: https://support.google.com/accounts/answer/185833

---

**Last Updated**: January 2025  
**Tested On**: Vercel Free Tier with Next.js 14+

