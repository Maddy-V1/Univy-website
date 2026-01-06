# 📘 College Tech - Univy: Complete Architecture & Setup Guide

## 🎯 Project Overview
**Name:** College Tech - Univy  
**Type:** B2B SaaS Professional Website  
**Purpose:** Sales, Credibility, College Onboarding  
**Tech Stack:** Next.js, React, Node.js, MongoDB  
**Language:** JavaScript (No TypeScript)

---

## 📁 Project Structure

```
college-tech-univy/
│
├── frontend/                          # Next.js Frontend
│   ├── public/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── hero-bg.jpg
│   │   │   └── team/
│   │   ├── icons/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Modal.jsx
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── ProblemSection.jsx
│   │   │   │   ├── WhatIsUnivySection.jsx
│   │   │   │   ├── WhoItsForSection.jsx
│   │   │   │   ├── CoreModulesSection.jsx
│   │   │   │   └── WhyChooseUsSection.jsx
│   │   │   ├── services/
│   │   │   │   ├── ServiceCard.jsx
│   │   │   │   └── ServiceDetail.jsx
│   │   │   ├── pricing/
│   │   │   │   ├── PricingCard.jsx
│   │   │   │   └── PlanComparison.jsx
│   │   │   ├── contact/
│   │   │   │   └── ContactForm.jsx
│   │   │   └── team/
│   │   │       └── TeamMember.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── _app.js
│   │   │   ├── _document.js
│   │   │   ├── index.js              # Home Page
│   │   │   ├── services.js            # Services Page
│   │   │   ├── pricing.js             # Pricing Page
│   │   │   ├── how-it-works.js        # How It Works Page
│   │   │   ├── team.js                # Team & Ecosystem Page
│   │   │   ├── vision.js              # Vision Page
│   │   │   └── contact.js             # Contact/Demo Page
│   │   │
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── variables.css
│   │   │
│   │   ├── utils/
│   │   │   ├── api.js                 # API calls to backend
│   │   │   └── constants.js           # Static data
│   │   │
│   │   └── hooks/
│   │       └── useForm.js
│   │
│   ├── .env.local
│   ├── .gitignore
│   ├── next.config.js
│   ├── package.json
│   └── README.md
│
├── backend/                           # Node.js Backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js           # MongoDB connection
│   │   │   └── env.js                # Environment config
│   │   │
│   │   ├── models/
│   │   │   ├── Contact.js            # Contact form submissions
│   │   │   ├── DemoRequest.js        # Demo requests
│   │   │   └── CustomQuote.js        # Custom plan quotes
│   │   │
│   │   ├── routes/
│   │   │   ├── contact.js            # Contact routes
│   │   │   ├── demo.js               # Demo request routes
│   │   │   └── quote.js              # Quote request routes
│   │   │
│   │   ├── controllers/
│   │   │   ├── contactController.js
│   │   │   ├── demoController.js
│   │   │   └── quoteController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── validation.js         # Input validation
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   │
│   │   ├── utils/
│   │   │   ├── email.js              # Email service
│   │   │   └── logger.js             # Logging utility
│   │   │
│   │   └── server.js                 # Express app entry
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── documentation/                     # Project Documentation
│   ├── 01_PROJECT_OVERVIEW.md
│   ├── 02_ARCHITECTURE.md
│   ├── 03_SETUP_GUIDE.md
│   ├── 04_API_DOCUMENTATION.md
│   ├── 05_DESIGN_SYSTEM.md
│   ├── 06_CONTENT_GUIDE.md
│   ├── 07_DEPLOYMENT_GUIDE.md
│   └── 08_PROMPTS_FOR_AI.md
│
├── .gitignore                         # Root gitignore
└── README.md                          # Root README

```

---

## 🎨 Design System

### Color Palette (Professional & Trust-Focused)
```css
Primary: #1E40AF (Deep Blue - Trust, Professional)
Secondary: #3B82F6 (Bright Blue - Modern, Tech)
Accent: #10B981 (Green - Growth, Success)
Neutral: #64748B (Gray - Balance)
Background: #F8FAFC (Light Gray - Clean)
Text: #0F172A (Dark - Readable)
White: #FFFFFF
```

### Typography
- **Headings:** Inter (Bold, Professional)
- **Body:** Inter (Regular, Clean)
- **CTA Buttons:** Inter (Semi-Bold)

### Component Style
- **Cards:** Subtle shadows, rounded corners (8px)
- **Buttons:** Solid, clear hierarchy
- **Spacing:** Generous whitespace
- **Icons:** Simple, outlined style

---

## 🏗️ Technology Stack Details

### Frontend (Next.js)
- **Framework:** Next.js 14 (App Router optional, Pages Router for simplicity)
- **Styling:** CSS Modules + Global CSS
- **Icons:** React Icons (simple, professional)
- **Animations:** CSS transitions (subtle, professional)
- **Forms:** React Hook Form (clean validation)

### Backend (Node.js)
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Validation:** Joi or express-validator
- **Email:** Nodemailer
- **Security:** Helmet, CORS, Rate limiting
- **Logging:** Morgan

### Database Schema

#### Contact Schema
```javascript
{
  name: String (required),
  collegeName: String (required),
  role: String (required),
  email: String (required, validated),
  phone: String (required),
  message: String,
  status: String (default: 'new'),
  createdAt: Date
}
```

#### Demo Request Schema
```javascript
{
  collegeName: String (required),
  contactPerson: String (required),
  role: String (required),
  email: String (required),
  phone: String (required),
  collegeSize: String (small/medium/large),
  interestedPlans: Array,
  preferredDate: Date,
  message: String,
  status: String (default: 'pending'),
  createdAt: Date
}
```

---

## 📊 Pricing Plans Structure

### Plan 1: Essentials Plan
**Tagline:** "Start Your Digital Transformation"  
**Target:** Small colleges beginning digitization  
**Services Included:**
- College Portal (Basic)
- Student & Faculty Login Dashboards
- Attendance System (Marking & Viewing)
- Notices & Announcements
- Common Forms (Bonafide, ID Card, Applications)
- Document Downloads

**Pricing:** Contact for Quote  
**Best For:** 500-1000 students

---

### Plan 2: Campus Connect Plan
**Tagline:** "Unite Your Campus Digitally"  
**Target:** Mid-size colleges wanting engagement  
**Services Included:**
- Everything in Essentials +
- Events & Activities Module
- Student Community Features
- Basic Opportunity Board
- Campus Mantri Management
- Email Notifications

**Pricing:** Contact for Quote  
**Best For:** 1000-3000 students

---

### Plan 3: Professional Plan
**Tagline:** "Complete Campus Management"  
**Target:** Large colleges with Student Cells  
**Services Included:**
- Everything in Campus Connect +
- Student Cell Software (Full)
- Centralized Student Database
- Batch/Course/Section Filters
- CR List PDF Generation
- Bulk Email System
- Event Management Workflows

**Pricing:** Contact for Quote  
**Best For:** 3000-5000 students

---

### Plan 4: Enterprise Plan
**Tagline:** "Advanced Operations & Analytics"  
**Target:** Universities with complex needs  
**Services Included:**
- Everything in Professional +
- Advanced Analytics Dashboard
- Admin Controls & Permissions
- Document Automation
- Custom Workflow Builder
- Priority Support
- Dedicated Account Manager

**Pricing:** Contact for Quote  
**Best For:** 5000+ students, Multi-campus

---

### Plan 5: Custom Plan
**Tagline:** "Built For Your College"  
**Target:** Colleges with specific requirements  
**Services Included:**
- Pick & Choose Services
- Modular Pricing
- Custom Integrations
- Tailored Workflows
- Flexible Scaling

**Pricing:** Customized  
**Best For:** Any size, specific needs

---

## 🔧 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/college-tech-univy
JWT_SECRET=your_jwt_secret_here

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Admin Email
ADMIN_EMAIL=admin@collegetech-univy.com

# CORS
FRONTEND_URL=http://localhost:3000
```

---

## 📦 Dependencies

### Frontend package.json (Essential)
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "axios": "^1.6.0"
  }
}
```

### Backend package.json (Essential)
```json
{
  "dependencies": {
    "express": "^4.18.0",
    "mongoose": "^8.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.0",
    "nodemailer": "^6.9.0",
    "express-validator": "^7.0.0",
    "helmet": "^7.1.0",
    "morgan": "^1.10.0",
    "express-rate-limit": "^7.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

---

## 🚀 Quick Start Commands

### Setup
```bash
# Root directory
git init
git add .
git commit -m "Initial commit: College Tech - Univy website base"

# Frontend
cd frontend
npm install
npm run dev  # Runs on localhost:3000

# Backend
cd backend
npm install
npm run dev  # Runs on localhost:5000
```

---

## ✅ Development Checklist

### Phase 1: Base Setup
- [ ] Initialize frontend (Next.js)
- [ ] Initialize backend (Express)
- [ ] Setup MongoDB connection
- [ ] Create basic folder structure
- [ ] Setup environment variables

### Phase 2: Core Pages
- [ ] Home page (all sections)
- [ ] Services page
- [ ] Pricing page
- [ ] How It Works page
- [ ] Team page
- [ ] Vision page
- [ ] Contact page

### Phase 3: Backend APIs
- [ ] Contact form API
- [ ] Demo request API
- [ ] Email notification system
- [ ] Form validation

### Phase 4: Polish
- [ ] Responsive design (mobile/tablet)
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Testing

---

## 📝 Notes for AI Development

### When Using Google Opus 4.5
- Focus on architectural decisions
- Complex component logic
- Database schema design
- API structure

### When Using Cursor Auto Mode
- Component implementation
- Styling consistency
- Form handling
- Repetitive code patterns

### Priority Order
1. Homepage (Hero + Problem + Solution)
2. Pricing page (Plans clear and simple)
3. Contact/Demo form (Functional backend)
4. Services page (Detailed explanations)
5. Team & Vision pages (Credibility)

---

**This document serves as the single source of truth for architecture. Keep it updated as the project evolves.**
