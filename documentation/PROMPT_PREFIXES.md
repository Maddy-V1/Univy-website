# 📋 PROMPT PREFIXES - One-Liners for AI Tools

## 🎯 Purpose
Use these one-line prefixes at the START of every prompt when working with Claude Opus 4.5 or Cursor Auto Mode. This ensures AI uses the correct design system and architecture.

---

## 🚀 For Initial Setup (PROMPT_1)

**Copy this line at the start of PROMPT_1_SETUP.md:**

```
SETUP MODE: Building College Tech - Univy using univy_architecture.txt + 04A_ENHANCED_DESIGN_SYSTEM.md. Premium aesthetic with glassmorphism, gradients, multi-font typography (Space Grotesk + Inter + DM Sans), smooth animations, colored shadows. JavaScript only (no TypeScript). Team: Madhav, Satyajit, Jatin, Parth, Krishna.
```

---

## 🏗️ For Building Pages (PROMPT_2)

**Copy this line at the start of every page-building prompt:**

```
BUILD MODE: Use 03_CONTENT_GUIDE.md for copy + 04A_ENHANCED_DESIGN_SYSTEM.md for styling. Premium aesthetic with glassmorphism effects, gradient backgrounds, animated elements, multi-font system, and colored shadows. Ensure perfect alignment and smooth animations.
```

---

## 🎨 For Design/Styling Work

**When focusing on visual improvements:**

```
DESIGN MODE: Reference 04A_ENHANCED_DESIGN_SYSTEM.md - premium aesthetic with glassmorphism, gradient blends, animated backgrounds, Space Grotesk (display) + Inter (body) + DM Sans (accents), colored shadows, smooth cubic-bezier transitions.
```

---

## 🔧 For Backend/API Work

**When working on backend code:**

```
BACKEND MODE: Use 05_API_DOCUMENTATION.md for endpoints + univy_architecture.txt for structure. Node.js + Express + MongoDB. JavaScript only. Focus on validation, error handling, email notifications.
```

---

## 🚢 For Deployment

**When preparing for production:**

```
DEPLOY MODE: Reference 06_DEPLOYMENT_GUIDE.md. Deploy frontend to Vercel, backend to Railway, database to MongoDB Atlas. Ensure environment variables configured, SSL enabled, monitoring set up.
```

---

## 📝 For Content Updates

**When updating text/copy:**

```
CONTENT MODE: Use 03_CONTENT_GUIDE.md for all website copy. Maintain professional B2B tone, trust-building language, clear value propositions. No generic corporate speak.
```

---

## 🐛 For Bug Fixes

**When debugging:**

```
DEBUG MODE: Reference univy_architecture.txt for structure. Identify issue, provide solution maintaining design system from 04A_ENHANCED_DESIGN_SYSTEM.md and code quality standards.
```

---

## 🔄 For Code Refactoring

**When improving existing code:**

```
REFACTOR MODE: Improve code while maintaining 04A_ENHANCED_DESIGN_SYSTEM.md aesthetic and univy_architecture.txt structure. Focus on reusability, performance, and clean code principles.
```

---

## 📱 For Responsive Design

**When making mobile-friendly:**

```
RESPONSIVE MODE: Use 04A_ENHANCED_DESIGN_SYSTEM.md breakpoints (mobile < 640px, tablet 641-1024px, desktop 1025px+). Ensure all animations and glassmorphism effects work on mobile. Test all components.
```

---

## 🎭 For Component Creation

**When building new components:**

```
COMPONENT MODE: Create reusable component following 04A_ENHANCED_DESIGN_SYSTEM.md. Include: glassmorphism if on colored background, hover animations, colored shadows, proper spacing, multi-font typography, responsive behavior.
```

---

## 🧪 For Testing

**When testing functionality:**

```
TEST MODE: Verify against requirements in univy_architecture.txt. Test: functionality, responsive design, animations, form validation, API calls, cross-browser compatibility, performance.
```

---

## ⚡ Quick Reference

### Use This Line Most Often:

```
College Tech - Univy: Use 04A_ENHANCED_DESIGN_SYSTEM.md (premium aesthetic) + 03_CONTENT_GUIDE.md (copy) + univy_architecture.txt (structure). Glassmorphism, gradients, animations, multi-font.
```

### For Opus 4.5 (Architecture Decisions):

```
ARCHITECTURE: Use univy_architecture.txt + 04A_ENHANCED_DESIGN_SYSTEM.md. Design complex components, API structure, database schemas. Premium aesthetic with glassmorphism and animations.
```

### For Cursor Auto Mode (Implementation):

```
IMPLEMENT: Build from PROMPT_2_BUILDING.md using 04A_ENHANCED_DESIGN_SYSTEM.md styling + 03_CONTENT_GUIDE.md content. Focus on pixel-perfect implementation with smooth animations.
```

---

## 📚 Document Quick Reference

When AI asks "which document?", refer to these:

| Document | Purpose | Use When |
|----------|---------|----------|
| `01_PROJECT_OVERVIEW.md` | Project context, team, goals | Need context about the project |
| `02_architecture.md` | Technical structure | Building base code, architecture decisions |
| `03_CONTENT_GUIDE.md` | All website copy | Writing any page content |
| `04A_ENHANCED_DESIGN_SYSTEM.md` | Premium visual style | ANY design/styling work |
| `05_API_DOCUMENTATION.md` | Backend API specs | Building APIs, forms, backend |
| `06_DEPLOYMENT_GUIDE.md` | Production deployment | Deploying to Vercel/Railway |
| `PROMPT_1_SETUP.md` | Initial setup guide | First time setup |
| `PROMPT_2_BUILDING.md` | Page building guide | Building each page |

---

## 🎯 Example Usage

### Example 1: Building Home Page

**Your Prompt:**
```
BUILD MODE: Use 03_CONTENT_GUIDE.md for copy + 04A_ENHANCED_DESIGN_SYSTEM.md for styling. Premium aesthetic with glassmorphism effects, gradient backgrounds, animated elements, multi-font system, and colored shadows. Ensure perfect alignment and smooth animations.

I need to build the complete Home Page with all 7 sections:
1. Hero with animated gradient background
2. Problem section with cards
3. What is Univy section
4. Who it's for section
5. Core modules section
6. Why choose us section
7. Final CTA section

Use exact content from Content Guide and apply glassmorphism cards, gradient buttons, smooth animations.
```

### Example 2: Creating Pricing Card Component

**Your Prompt:**
```
COMPONENT MODE: Create reusable component following 04A_ENHANCED_DESIGN_SYSTEM.md. Include: glassmorphism if on colored background, hover animations, colored shadows, proper spacing, multi-font typography, responsive behavior.

Create a PricingCard component that:
- Accepts plan data as props
- Has gradient top border animation on hover
- Featured variant with gradient background
- Smooth scale and lift on hover
- Colored shadow (blue or purple)
- Uses Space Grotesk for title, Inter for features
```

### Example 3: Fixing API Endpoint

**Your Prompt:**
```
DEBUG MODE: Reference univy_architecture.txt for structure. Identify issue, provide solution maintaining design system from 04A_ENHANCED_DESIGN_SYSTEM.md and code quality standards.

The demo request form is not submitting. Getting 400 error. Check:
1. Frontend form validation
2. API endpoint in backend
3. MongoDB connection
4. Email notification sending

Refer to 05_API_DOCUMENTATION.md for correct endpoint structure.
```

---

## 💡 Pro Tips

### Tip 1: Always Start with Context
Every prompt should begin with one of the mode lines above. AI performs better with clear context.

### Tip 2: Reference Multiple Documents
Don't hesitate to reference 2-3 documents in one prompt:
```
Use 03_CONTENT_GUIDE.md for text + 04A_ENHANCED_DESIGN_SYSTEM.md for styling + 05_API_DOCUMENTATION.md for API structure.
```

### Tip 3: Be Specific About Design Requirements
```
DESIGN MODE: Use glassmorphism for cards, gradient for hero background, Space Grotesk for headings, smooth cubic-bezier animations, colored shadows on hover.
```

### Tip 4: Mention Team Context When Needed
```
Building for College Tech - Univy. Team: Madhav (founder), Satyajit (tech lead). Target: USCIT and affiliated colleges.
```

---

## 🔄 Updating This File

As the project evolves, add new mode prefixes here:

### Template for New Modes:

```
## 🆕 For [New Task Type]

**When [doing specific task]:**

```
[MODE NAME] MODE: [Brief description of requirements and key documents to reference]
```
```

---

## ✅ Checklist Before Every Prompt

- [ ] Started with appropriate MODE line
- [ ] Referenced correct documentation files
- [ ] Mentioned design system (04A_ENHANCED_DESIGN_SYSTEM.md)
- [ ] Specified if using glassmorphism, gradients, animations
- [ ] Clear about what you want built/fixed/improved

---

**Keep this file handy and use the appropriate prefix for EVERY interaction with AI tools!**