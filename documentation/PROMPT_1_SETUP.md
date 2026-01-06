# 🚀 PROMPT 1: Complete Project Setup & Base Code Generation

**Use this prompt with: Claude Opus 4.5 or Claude Sonnet 4.5**

---

## 📋 Context & Project Information

You are helping build **College Tech - Univy**, a B2B SaaS website that sells college portal and internal software solutions to educational institutions in India.

### Team Information

**Founders:**
1. **Madhav Varshney** - Co-founder & Product Strategy
2. **Satyajit Jena** - Co-founder & Technical Lead

**Core Team Members:**
1. **Jatin Goyal** - Operations & Quality Assurance (ensures work is done efficiently and fast)
2. **Parth Agarwal** - Business Development & Marketing (pitch decks, emails, non-technical management, social media)
3. **Krishna Sharma** - Pricing Strategy & University Relations (professor management, university-level connections)

**Current Stage:**
- Pre-launch startup
- Not yet registered (planning to pitch at SYF - Startup Yuva Festival)
- Building official website FIRST before platform development
- Target: USCIT campus and affiliated colleges in the university

**Assets Status:**
- ✅ Logo: Designed (may change later)
- ✅ Team photos: Available (individual photos in different formats)
- ⏳ Domain: To be purchased (likely univy.com)
- ✅ Contact: Madhav Varshney's phone number
- ✅ Office: Delhi, Dwarka

---

## 🎯 What You Need to Generate

Create a **complete, production-ready base structure** for the College Tech - Univy website with:

1. **Full folder structure** (frontend + backend + documentation)
2. **All necessary configuration files**
3. **Base code for all pages** (with placeholders for content)
4. **Common components** (Navbar, Footer, Button, Card, Modal)
5. **Backend API setup** (Express server, MongoDB, routes, controllers)
6. **Database models** (Contact, DemoRequest, CustomQuote)
7. **Environment variable templates**
8. **README files** for setup instructions
9. **Git configuration** (.gitignore)

---

## 🏗️ Project Structure to Create

```
college-tech-univy/
│
├── frontend/                          # Next.js Frontend Application
│   ├── public/
│   │   ├── images/
│   │   │   ├── logo.png              # Placeholder (to be replaced)
│   │   │   ├── hero-bg.jpg           # Placeholder
│   │   │   └── team/                 # Team member photos
│   │   │       ├── madhav.jpg        # Madhav Varshney
│   │   │       ├── satyajit.jpg      # Satyajit Jena
│   │   │       ├── jatin.jpg         # Jatin Goyal
│   │   │       ├── parth.jpg         # Parth Agarwal
│   │   │       └── krishna.jpg       # Krishna Sharma
│   │   ├── icons/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   └── Modal.jsx
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── ProblemSection.jsx
│   │   │   │   ├── WhatIsUnivySection.jsx
│   │   │   │   ├── WhoItsForSection.jsx
│   │   │   │   ├── CoreModulesSection.jsx
│   │   │   │   └── WhyChooseUsSection.jsx
│   │   │   ├── pricing/
│   │   │   │   └── PricingCard.jsx
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
│   │   │   ├── globals.css            # Global styles + design system
│   │   │   ├── variables.css          # CSS variables (colors, spacing)
│   │   │   └── components/            # Component-specific styles
│   │   │       ├── Navbar.module.css
│   │   │       ├── Footer.module.css
│   │   │       ├── Button.module.css
│   │   │       └── Card.module.css
│   │   │
│   │   ├── utils/
│   │   │   ├── api.js                 # API calls to backend
│   │   │   └── constants.js           # Static data (plans, services)
│   │   │
│   │   └── hooks/
│   │       └── useForm.js             # Custom form hook
│   │
│   ├── .env.local.example             # Environment variables template
│   ├── .gitignore
│   ├── next.config.js
│   ├── package.json
│   └── README.md
│
├── backend/                           # Node.js Backend API
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js           # MongoDB connection
│   │   │   └── env.js                # Environment config
│   │   │
│   │   ├── models/
│   │   │   ├── Contact.js            # Contact form schema
│   │   │   ├── DemoRequest.js        # Demo request schema
│   │   │   └── CustomQuote.js        # Custom quote schema
│   │   │
│   │   ├── routes/
│   │   │   ├── contact.js            # Contact routes
│   │   │   ├── demo.js               # Demo routes
│   │   │   └── quote.js              # Quote routes
│   │   │
│   │   ├── controllers/
│   │   │   ├── contactController.js
│   │   │   ├── demoController.js
│   │   │   └── quoteController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── validation.js         # Input validation
│   │   │   ├── errorHandler.js       # Error handling
│   │   │   └── rateLimiter.js        # Rate limiting
│   │   │
│   │   ├── utils/
│   │   │   ├── email.js              # Email service (Nodemailer)
│   │   │   └── logger.js             # Logging utility
│   │   │
│   │   └── server.js                 # Express app entry point
│   │
│   ├── .env.example                   # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── documentation/                     # Project Documentation
│   ├── 01_PROJECT_OVERVIEW.md         # ✅ Already created
│   ├── 02_ARCHITECTURE.md             # ✅ Already created (univy_architecture.txt)
│   ├── 03_CONTENT_GUIDE.md            # ✅ Already created
│   ├── 04_DESIGN_SYSTEM.md            # ✅ Already created
│   ├── 05_API_DOCUMENTATION.md        # ✅ Already created
│   ├── 06_DEPLOYMENT_GUIDE.md         # ✅ Already created
│   ├── PROMPT_1_SETUP.md              # ✅ This file
│   └── PROMPT_2_BUILDING.md           # ✅ Already created
│
├── .gitignore                         # Root gitignore
└── README.md                          # Root README (project overview)
```

---

## 📦 Technology Stack

### Frontend (Next.js)
- **Framework:** Next.js 14 (Pages Router)
- **Language:** JavaScript (NO TypeScript)
- **Styling:** CSS Modules + Global CSS
- **Icons:** React Icons
- **HTTP Client:** Axios
- **Form Handling:** React Hook Form (optional)

### Backend (Node.js + Express)
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Validation:** express-validator
- **Email:** Nodemailer
- **Security:** Helmet, CORS, express-rate-limit
- **Logging:** Morgan

---

## 🎨 ENHANCED Design System (CRITICAL - READ FIRST)

**IMPORTANT:** This project uses a **PREMIUM AESTHETIC** design system with:
- ✨ Glassmorphism effects (frosted glass with blur)
- 🌈 Gradient backgrounds and blending
- 🎭 Multiple fonts working together
- ✨ Smooth animations throughout
- 🎨 Colored shadows
- 📐 Perfect alignment and spacing

**Reference:** Use `04A_ENHANCED_DESIGN_SYSTEM.md` for ALL styling decisions.

**Quick Visual Reference:** See the live HTML preview created earlier for exact aesthetic.

### Core Design Variables

Use these CSS variables throughout the project:

```css
/* Colors */
--primary-blue: #1E40AF;
--primary-blue-light: #3B82F6;
--primary-blue-dark: #1E3A8A;
--secondary-green: #10B981;
--secondary-green-light: #34D399;
--accent-orange: #F59E0B;

/* Neutrals */
--neutral-900: #0F172A;
--neutral-700: #334155;
--neutral-500: #64748B;
--neutral-300: #CBD5E1;
--neutral-100: #F1F5F9;
--neutral-50: #F8FAFC;
--white: #FFFFFF;

/* Typography */
--font-primary: 'Inter', sans-serif;
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
--text-5xl: 3rem;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Spacing */
--space-2: 0.5rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-20: 5rem;

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;

/* Shadows */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
```

---

## 📋 Database Schemas

### Contact Model
```javascript
{
  name: String (required, min: 2, max: 100),
  collegeName: String (required, min: 3, max: 200),
  role: String (required, min: 2, max: 100),
  email: String (required, validated email),
  phone: String (required, valid phone format),
  message: String (optional, max: 1000),
  status: String (enum: ['new', 'contacted', 'closed'], default: 'new'),
  ipAddress: String,
  userAgent: String,
  timestamps: true
}
```

### Demo Request Model
```javascript
{
  collegeName: String (required),
  collegeType: String (required, enum: ['Engineering', 'Arts & Science', 'Commerce', 'Management', 'Medical', 'Multi-disciplinary', 'Other']),
  collegeSize: String (required, enum: ['<500', '500-1000', '1000-3000', '3000-5000', '5000+']),
  city: String (required),
  state: String (required),
  contactPerson: String (required),
  role: String (required),
  email: String (required, validated),
  phone: String (required),
  requirements: [String] (array of selected requirements),
  interestedPlan: String (enum: ['Essentials', 'Campus Connect', 'Professional', 'Enterprise', 'Custom', 'Not sure']),
  currentChallenge: String (max: 1000),
  additionalMessage: String (max: 1000),
  preferredContact: String (enum: ['Email', 'Phone', 'WhatsApp', 'Video Call']),
  urgency: String (enum: ['ASAP (within 24 hours)', 'This week', 'Next week', 'Just exploring']),
  status: String (enum: ['pending', 'contacted', 'scheduled', 'completed', 'closed'], default: 'pending'),
  followedUp: Boolean (default: false),
  ipAddress: String,
  userAgent: String,
  timestamps: true
}
```

### Custom Quote Model
```javascript
{
  collegeName: String (required),
  collegeSize: String (required),
  contactPerson: String (required),
  role: String (required),
  email: String (required),
  phone: String (required),
  selectedServices: [String] (required, array of selected services),
  additionalRequirements: String (max: 2000),
  budget: String,
  timeline: String,
  currentSystem: String (max: 500),
  status: String (enum: ['pending', 'proposal-sent', 'negotiating', 'closed-won', 'closed-lost'], default: 'pending'),
  proposalSent: Boolean (default: false),
  proposalDate: Date,
  ipAddress: String,
  userAgent: String,
  timestamps: true
}
```

---

## 🌍 Environment Variables

### Frontend (.env.local.example)
```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Information (to be updated later)
NEXT_PUBLIC_CONTACT_EMAIL=hello@univy.com
NEXT_PUBLIC_CONTACT_PHONE=+91-XXXXXXXXXX
NEXT_PUBLIC_OFFICE_ADDRESS=Delhi, Dwarka
```

### Backend (.env.example)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/college-tech-univy

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Admin Configuration
ADMIN_EMAIL=madhav@univy.com
ADMIN_NAME=Madhav Varshney

# CORS
FRONTEND_URL=http://localhost:3000

# Security (generate random strings)
JWT_SECRET=your-secret-key-here
```

---

## 📝 Team Data Structure

Include this team data in the codebase (in `utils/constants.js`):

```javascript
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Madhav Varshney",
    role: "Co-founder & Product Strategy",
    image: "/images/team/madhav.jpg",
    bio: "Leading product vision and strategy. Passionate about solving real problems in college operations.",
    linkedin: "", // To be added
    email: "madhav@univy.com"
  },
  {
    id: 2,
    name: "Satyajit Jena",
    role: "Co-founder & Technical Lead",
    image: "/images/team/satyajit.jpg",
    bio: "Building the technical foundation of Univy. Expert in full-stack development and system architecture.",
    linkedin: "", // To be added
    email: "satyajit@univy.com"
  },
  {
    id: 3,
    name: "Jatin Goyal",
    role: "Operations & Quality Assurance",
    image: "/images/team/jatin.jpg",
    bio: "Ensuring every feature works perfectly and efficiently. Focused on quality and fast delivery.",
    linkedin: "", // To be added
    email: "jatin@univy.com"
  },
  {
    id: 4,
    name: "Parth Agarwal",
    role: "Business Development & Marketing",
    image: "/images/team/parth.jpg",
    bio: "Managing outreach, pitch decks, and college partnerships. Building Univy's brand presence.",
    linkedin: "", // To be added
    email: "parth@univy.com"
  },
  {
    id: 5,
    name: "Krishna Sharma",
    role: "Pricing Strategy & University Relations",
    image: "/images/team/krishna.jpg",
    bio: "Developing pricing models and managing university-level connections. Bridging academia and technology.",
    linkedin: "", // To be added
    email: "krishna@univy.com"
  }
];
```

---

## 📦 Package Dependencies

### Frontend package.json
```json
{
  "name": "college-tech-univy-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

### Backend package.json
```json
{
  "name": "college-tech-univy-backend",
  "version": "1.0.0",
  "description": "Backend API for College Tech Univy",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  },
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
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

---

## 🎯 Your Task: Generate Base Code

**Please generate the following in this order:**

### Step 1: Project Structure
Create the complete folder structure as shown above with all directories and empty files.

### Step 2: Configuration Files
Generate all configuration files:
- `package.json` (both frontend and backend)
- `next.config.js`
- `.env.example` files
- `.gitignore` files
- All README.md files

### Step 3: Frontend Base Code

**Common Components:**
1. **Navbar.jsx** - Sticky navigation with logo, links, CTA button
2. **Footer.jsx** - Complete footer with links, contact info
3. **Button.jsx** - Primary, Secondary, Success variants
4. **Card.jsx** - Basic card, Feature card, Pricing card variants
5. **Modal.jsx** - Reusable modal component

**Page Files:**
Create all 7 page files with:
- Basic structure
- Placeholder for content sections
- Proper SEO meta tags
- Comments indicating where content goes

**Styling:**
- `globals.css` with design system variables
- `variables.css` with all CSS custom properties
- Component-specific CSS modules

**Utilities:**
- `api.js` with axios setup and API functions
- `constants.js` with team data, plans data
- `useForm.js` custom hook

### Step 4: Backend Base Code

**Server Setup:**
- `server.js` - Express app with all middleware configured
- `database.js` - MongoDB connection with proper error handling

**Models:**
- Contact, DemoRequest, CustomQuote models with full validation

**Routes:**
- All three route files properly structured

**Controllers:**
- Complete controller functions with error handling

**Middleware:**
- Validation middleware
- Error handling middleware
- Rate limiting middleware

**Utilities:**
- Email service with Nodemailer
- Logger utility

### Step 5: Documentation
Create comprehensive README files for:
- Root (project overview and setup)
- Frontend (Next.js specific instructions)
- Backend (API and database setup)

---

## ✅ Success Criteria

After running your generated code, the team should be able to:

1. **Clone and Install:**
   ```bash
   git clone <repo>
   cd college-tech-univy
   
   # Frontend
   cd frontend
   npm install
   
   # Backend
   cd ../backend
   npm install
   ```

2. **Run Development Servers:**
   ```bash
   # Frontend (in frontend folder)
   npm run dev
   # Runs on http://localhost:3000
   
   # Backend (in backend folder)
   npm run dev
   # Runs on http://localhost:5000
   ```

3. **See Results:**
   - All pages accessible with placeholder content
   - Navigation working
   - Forms present (not yet functional)
   - Styling applied (design system)
   - Backend API endpoints ready

---

## 🚨 Important Requirements

### Code Quality
- ✅ Clean, well-commented code
- ✅ Consistent naming conventions
- ✅ Proper error handling
- ✅ DRY principles (Don't Repeat Yourself)
- ✅ Modular and reusable components

### Cross-Platform Compatibility
- ✅ Works on both Mac and Windows
- ✅ Uses `npm` (not yarn or pnpm)
- ✅ Path separators compatible (use `path` module)
- ✅ Line endings handled (LF for consistency)

### No TypeScript
- ✅ Use JavaScript only
- ✅ JSDoc comments for type hints (optional)
- ✅ Proper prop validation

### Professional Standards
- ✅ Production-ready code
- ✅ Security best practices
- ✅ Performance optimized
- ✅ Mobile-first responsive design

---

## 📝 Special Instructions

### Placeholders to Include
1. **Logo:** Use placeholder text "UNIVY" styled nicely until logo is added
2. **Team Photos:** Use colored placeholder boxes with initials
3. **Hero Images:** Use solid color backgrounds with CSS gradients
4. **Contact Info:** Use placeholder format (to be updated later)

### Comments in Code
Add clear comments in these places:
```javascript
// TODO: Replace with actual logo image
// TODO: Add team member photo (madhav.jpg)
// TODO: Update with actual domain (univy.com)
// TODO: Configure with Gmail App Password
// CONTENT: This section content from Content Guide - [Section Name]
```

### Flexible Contact Information
Structure code so contact info can be easily updated:
```javascript
// In constants.js
export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@univy.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91-XXXXXXXXXX",
  address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "Delhi, Dwarka",
  linkedin: "", // To be added
  twitter: "", // To be added
  instagram: "" // To be added
};
```

---

## 🎉 Expected Output Format

Please provide the code in this structure:

```
1. FOLDER STRUCTURE (tree view)
2. CONFIGURATION FILES
   - package.json files
   - next.config.js
   - .env.example files
   - .gitignore
3. FRONTEND CODE
   - All component files
   - All page files
   - All style files
   - Utility files
4. BACKEND CODE
   - Server setup
   - All models
   - All routes
   - All controllers
   - All middleware
   - Utilities
5. DOCUMENTATION
   - Root README.md
   - Frontend README.md
   - Backend README.md
```

For each file, provide:
```
## File: [path/to/file.js]
```javascript
// Complete file code here
```
```

---

## 🚀 Let's Build!

**Generate the complete base code structure now. Focus on:**
1. ✅ Professional, production-ready code
2. ✅ Clear structure and organization
3. ✅ Proper error handling
4. ✅ Helpful comments and documentation
5. ✅ Easy for team to understand and extend

**Begin with the folder structure tree, then provide all files systematically.**

---

**Prompt Version:** 1.0  
**Target:** Complete base setup for College Tech - Univy  
**Team:** Madhav, Satyajit, Jatin, Parth, Krishna  
**Timeline:** Ready for development in < 1 hour after generation