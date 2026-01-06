# 🚀 Deployment Guide - College Tech Univy

## Overview
This guide covers deploying the College Tech - Univy website to production environments.

**Stack:**
- Frontend: Next.js (Vercel recommended)
- Backend: Node.js + Express (Railway/Render recommended)
- Database: MongoDB Atlas

---

## 📋 Pre-Deployment Checklist

### Code Ready
- [ ] All pages complete and tested
- [ ] Forms working (contact, demo, quote)
- [ ] Responsive design verified (mobile/tablet/desktop)
- [ ] No console errors
- [ ] Environment variables documented
- [ ] Git repository clean (no sensitive data)

### Performance
- [ ] Images optimized
- [ ] CSS minified
- [ ] JavaScript bundled
- [ ] Lighthouse score > 90
- [ ] Load time < 3 seconds

### Security
- [ ] No hardcoded secrets
- [ ] HTTPS enforced
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Input validation on all forms

### Content
- [ ] All copy finalized
- [ ] Team photos uploaded
- [ ] Logo and branding assets ready
- [ ] Contact information correct
- [ ] Social media links added

---

## 🗄️ Database Setup (MongoDB Atlas)

### Step 1: Create MongoDB Atlas Account
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free tier account
3. Create new cluster

### Step 2: Configure Cluster
```
Cluster Tier: M0 (Free Tier) or M10+ (Production)
Region: Choose closest to your users (Mumbai for India)
Cluster Name: college-tech-univy-prod
```

### Step 3: Create Database User
```
Database User: univy_admin
Password: [Generate strong password]
Role: Read and write to any database
```

### Step 4: Network Access
```
IP Whitelist: 
- For development: Your IP address
- For production: 0.0.0.0/0 (allow all - set at deploy platform level)
```

### Step 5: Get Connection String
```
mongodb+srv://univy_admin:<password>@cluster0.xxxxx.mongodb.net/college-tech-univy?retryWrites=true&w=majority
```

**Save this connection string for deployment**

---

## 🖥️ Backend Deployment (Railway)

### Why Railway?
- Easy Node.js deployment
- Free tier available
- Automatic HTTPS
- Environment variable management
- MongoDB connection works perfectly

### Step 1: Prepare Backend for Deployment

**Update `package.json`:**
```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  },
  "engines": {
    "node": "18.x"
  }
}
```

**Update `src/server.js`:**
```javascript
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 2: Deploy to Railway

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select `college-tech-univy` repository
   - Choose `backend` folder as root

3. **Set Environment Variables**
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://univy_admin:<password>@cluster0.xxxxx.mongodb.net/college-tech-univy
   
   # Email
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   
   # Admin
   ADMIN_EMAIL=admin@collegetech-univy.com
   
   # CORS (update after frontend deployed)
   FRONTEND_URL=https://collegetech-univy.vercel.app
   ```

4. **Deploy**
   - Railway automatically builds and deploys
   - Wait for deployment to complete
   - Note your backend URL: `https://your-app.up.railway.app`

### Step 3: Test Backend
```bash
# Test health endpoint
curl https://your-app.up.railway.app/api/health

# Test contact endpoint
curl -X POST https://your-app.up.railway.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","collegeName":"Test College","role":"Principal","email":"test@test.com","phone":"+91-9876543210"}'
```

---

## 🌐 Frontend Deployment (Vercel)

### Why Vercel?
- Built for Next.js (by creators of Next.js)
- Automatic deployments from Git
- Free SSL certificate
- CDN included
- Perfect for Next.js optimization

### Step 1: Prepare Frontend

**Update `next.config.js`:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-cdn-domain.com'], // if using external images
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
}

module.exports = nextConfig
```

**Create `vercel.json` (optional, for custom config):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["bom1"]
}
```

### Step 2: Deploy to Vercel

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js

3. **Configure Project**
   ```
   Framework Preset: Next.js
   Root Directory: frontend
   Build Command: npm run build (auto-detected)
   Output Directory: .next (auto-detected)
   ```

4. **Set Environment Variables**
   ```
   NEXT_PUBLIC_API_URL=https://your-app.up.railway.app/api
   NEXT_PUBLIC_SITE_URL=https://collegetech-univy.vercel.app
   ```

5. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Your site will be live at: `https://your-project.vercel.app`

### Step 3: Add Custom Domain

1. **Purchase Domain**
   - GoDaddy, Namecheap, or any registrar
   - Suggested: `collegetech-univy.com`

2. **Add to Vercel**
   - Project Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

3. **DNS Configuration**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

4. **Wait for DNS Propagation**
   - Usually takes 15 minutes to 48 hours
   - Vercel automatically provisions SSL certificate

---

## 🔐 SSL Certificate

**Vercel:** Automatically provisions and renews SSL certificates for all domains.

**Railway:** Automatically provides SSL for railway.app subdomain. For custom domains, SSL is auto-configured.

---

## 📧 Email Service Setup (Gmail SMTP)

### Step 1: Create Google Account
- Use a dedicated email: `noreply@collegetech-univy.com`
- Or use personal Gmail with App Password

### Step 2: Enable App Password
1. Google Account → Security
2. Enable 2-Step Verification
3. App Passwords → Generate password for "Mail"
4. Copy the 16-character password

### Step 3: Update Environment Variables
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=noreply@collegetech-univy.com
EMAIL_PASS=your-16-char-app-password
```

### Alternative: SendGrid (Recommended for Production)
```bash
# Signup at sendgrid.com
# Get API key
# Update backend to use SendGrid API instead of SMTP
```

---

## 🔄 Update Backend CORS

After frontend is deployed, update backend CORS:

**In Railway environment variables:**
```
FRONTEND_URL=https://collegetech-univy.com
```

**In `backend/src/server.js`:**
```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
```

**Redeploy backend** for changes to take effect.

---

## 📊 Monitoring & Analytics

### 1. Google Analytics
**Add to frontend:**

**Create `_document.js`:**
```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

### 2. Error Tracking (Sentry)
```bash
npm install @sentry/nextjs

# Initialize Sentry
npx @sentry/wizard -i nextjs
```

### 3. Uptime Monitoring
- Use [UptimeRobot](https://uptimerobot.com) (free)
- Monitor both frontend and backend
- Get alerts if site goes down

---

## 🔍 SEO Configuration

### Add to Frontend

**Create `next-seo.config.js`:**
```javascript
export default {
  title: 'College Tech - Univy | Digital Workspace for Modern Colleges',
  description: 'Transform your campus with Univy - Complete college portal, student cell software, and campus management solutions for Indian colleges.',
  canonical: 'https://collegetech-univy.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://collegetech-univy.com',
    site_name: 'College Tech - Univy',
    title: 'College Tech - Univy | Digital Campus Management',
    description: 'Modern digital workspace for colleges - Portal, Student Cell Software, Campus Management',
    images: [
      {
        url: 'https://collegetech-univy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'College Tech Univy',
      },
    ],
  },
  twitter: {
    handle: '@CollegeTechUnivy',
    site: '@CollegeTechUnivy',
    cardType: 'summary_large_image',
  },
};
```

**Update each page with page-specific SEO:**
```javascript
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Home - College Tech Univy"
        description="Transform your campus with complete digital solutions"
      />
      {/* Page content */}
    </>
  );
}
```

---

## 🚦 Post-Deployment Checklist

### Functionality Tests
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Email notifications received
- [ ] Database saves data
- [ ] Mobile responsive
- [ ] Images load properly

### Performance Tests
- [ ] Run Lighthouse audit (all pages)
- [ ] Check page load speed
- [ ] Verify SSL certificate
- [ ] Test on slow network (3G)

### Security Tests
- [ ] No sensitive data exposed
- [ ] HTTPS enforced
- [ ] Headers configured properly
- [ ] Rate limiting works
- [ ] CORS configured correctly

### SEO Tests
- [ ] Meta tags present on all pages
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Google Search Console verified
- [ ] Analytics tracking works

---

## 🔄 CI/CD Setup (Automatic Deployments)

### Vercel (Frontend)
**Already automatic!** Every push to main branch triggers deployment.

**Setup branch deployments:**
```
main branch → Production (collegetech-univy.com)
dev branch → Staging (dev-collegetech-univy.vercel.app)
```

### Railway (Backend)
**Already automatic!** Every push triggers rebuild.

**Manual deployment:**
```bash
# In Railway dashboard
# Go to Deployments
# Click "Redeploy" on any commit
```

---

## 📝 Environment Management

### Development Environment
```
Frontend: http://localhost:3000
Backend: http://localhost:5000
Database: Local MongoDB or Atlas
```

### Staging Environment
```
Frontend: https://staging-collegetech-univy.vercel.app
Backend: https://staging-backend.up.railway.app
Database: MongoDB Atlas (separate staging database)
```

### Production Environment
```
Frontend: https://collegetech-univy.com
Backend: https://api.collegetech-univy.com
Database: MongoDB Atlas (production database)
```

---

## 🆘 Troubleshooting

### Frontend Issues

**Problem: Pages not loading**
```bash
# Check build logs in Vercel
# Verify environment variables
# Check browser console for errors
```

**Problem: API calls failing**
```javascript
// Check CORS in backend
// Verify API URL in .env
// Check network tab in browser DevTools
```

### Backend Issues

**Problem: Server not starting**
```bash
# Check Railway logs
# Verify MongoDB connection string
# Check port configuration
```

**Problem: Database connection failed**
```bash
# Verify MongoDB Atlas IP whitelist
# Check connection string format
# Test connection locally first
```

### Email Issues

**Problem: Emails not sending**
```bash
# Verify SMTP credentials
# Check Gmail security settings
# Test with a simple test email endpoint
```

---

## 📈 Scaling Considerations

### Current Setup (Handles ~1000 colleges)
- Vercel: Free tier (sufficient)
- Railway: Hobby plan ($5/month if needed)
- MongoDB Atlas: Free M0 tier (512MB)

### Medium Scale (1000-5000 colleges)
- Vercel: Pro plan ($20/month)
- Railway: Pro plan ($20/month)
- MongoDB Atlas: M10 tier ($0.08/hour)

### Large Scale (5000+ colleges)
- Vercel: Enterprise
- Railway: Custom plan or AWS/GCP
- MongoDB Atlas: M30+ cluster
- CDN: Cloudflare or AWS CloudFront
- Email: SendGrid Pro or AWS SES

---

## 🔐 Backup Strategy

### Database Backups
**MongoDB Atlas:**
- Automatic daily backups (enabled by default)
- Manual snapshots before major changes
- Export data monthly (mongodump)

### Code Backups
**Git Repository:**
- GitHub already serves as backup
- Tag releases: `v1.0.0`, `v1.1.0`
- Keep production branch protected

---

## 📞 Support & Maintenance

### Monitoring
- Check Vercel analytics daily
- Review Railway logs weekly
- Monitor database usage monthly

### Updates
- Update dependencies monthly
- Security patches immediately
- Feature releases every 2 weeks

### Emergency Contacts
- Vercel Support: support@vercel.com
- Railway Support: team@railway.app
- MongoDB Support: Atlas dashboard

---

## ✅ Launch Day Checklist

**24 Hours Before:**
- [ ] Final content review
- [ ] All forms tested
- [ ] Performance audit passed
- [ ] Team access configured
- [ ] Monitoring enabled

**Launch Day:**
- [ ] Deploy to production
- [ ] Verify all features work
- [ ] Send test demo request
- [ ] Share with team
- [ ] Announce on social media

**Post-Launch:**
- [ ] Monitor for 24 hours
- [ ] Check analytics
- [ ] Collect initial feedback
- [ ] Fix any issues immediately

---

## 🎉 You're Live!

**Your website is now deployed at:**
- Frontend: https://collegetech-univy.com
- Backend: https://api.collegetech-univy.com

**Next Steps:**
1. Share with potential colleges
2. Collect feedback
3. Iterate and improve
4. Scale as needed

---

**Deployment Version:** 1.0.0  
**Last Updated:** January 2025  
**Contact:** dev@collegetech-univy.com