# 🚀 QUICK START GUIDE - College Tech Univy

**READ THIS FIRST!** Complete guide to building your premium B2B SaaS website.

---

## 📋 What You're Building

**College Tech - Univy**: A premium B2B SaaS website selling college portal and software solutions to educational institutions.

**Visual Style**: Modern, aesthetic, professional with:
- Glassmorphism (frosted glass effects)
- Smooth gradient blends
- Multiple font combinations
- Fluid animations
- Colored shadows
- Perfect alignment

**Tech Stack**: Next.js + Node.js + MongoDB (JavaScript only, no TypeScript)

---

## 👥 Your Team

**Founders:**
- Madhav Varshney (Co-founder & Product Strategy)
- Satyajit Jena (Co-founder & Technical Lead)

**Core Team:**
- Jatin Goyal (Operations & QA)
- Parth Agarwal (Business Development & Marketing)
- Krishna Sharma (Pricing Strategy & University Relations)

**Current Stage**: Pre-launch, targeting USCIT and affiliated colleges

---

## 📚 Your Documentation (8 Files)

### Essential Documents

1. **00_QUICK_START.md** ← You are here!
   - Overview and quick start guide

2. **01_PROJECT_OVERVIEW.md**
   - Complete project context
   - Team details, vision, business model
   - **Use when:** Need project background

3. **univy_architecture.txt**
   - Technical architecture
   - Folder structure, tech stack
   - **Use when:** Setting up project, making architecture decisions

4. **03_CONTENT_GUIDE.md**
   - ALL website copy for every page
   - Ready to use directly
   - **Use when:** Building any page content

5. **04A_ENHANCED_DESIGN_SYSTEM.md** ⭐ MOST IMPORTANT
   - Premium aesthetic specifications
   - Glassmorphism, gradients, animations
   - Multi-font system, colors, shadows
   - **Use when:** ANY design/styling work

6. **05_API_DOCUMENTATION.md**
   - Backend API specs
   - All endpoints, models, validation
   - **Use when:** Building backend, forms, APIs

7. **06_DEPLOYMENT_GUIDE.md**
   - Production deployment steps
   - Vercel + Railway + MongoDB Atlas
   - **Use when:** Deploying to production

8. **PROMPT_PREFIXES.md**
   - One-line prefixes for AI tools
   - Copy-paste before every AI interaction
   - **Use when:** Every time you use Claude or Cursor

### Build Prompts

- **PROMPT_1_SETUP.md**: Generate complete base code
- **PROMPT_2_BUILDING.md**: Build all pages with features

---

## 🎯 Step-by-Step: Get Started in 30 Minutes

### Step 1: Review the Design (5 min)

Open the **Enhanced Design HTML Preview** (created earlier) in your browser:
- See the exact visual style
- Understand glassmorphism effects
- Check animations and interactions
- Review color palette and typography

**Action:** Open in browser, scroll through, interact with elements.

---

### Step 2: Set Up Documentation Folder (2 min)

```bash
mkdir -p college-tech-univy/documentation
cd college-tech-univy/documentation
```

Save these 8 files in the folder:
- 00_QUICK_START.md
- 01_PROJECT_OVERVIEW.md
- univy_architecture.txt
- 03_CONTENT_GUIDE.md
- 04A_ENHANCED_DESIGN_SYSTEM.md
- 05_API_DOCUMENTATION.md
- 06_DEPLOYMENT_GUIDE.md
- PROMPT_PREFIXES.md

Also save build prompts:
- PROMPT_1_SETUP.md
- PROMPT_2_BUILDING.md

---

### Step 3: Generate Base Code with Claude Opus (15 min)

1. **Open Claude Opus 4.5** (or Sonnet 4.5)

2. **Copy this prefix line:**
   ```
   SETUP MODE: Building College Tech - Univy using univy_architecture.txt + 04A_ENHANCED_DESIGN_SYSTEM.md. Premium aesthetic with glassmorphism, gradients, multi-font typography (Space Grotesk + Inter + DM Sans), smooth animations, colored shadows. JavaScript only (no TypeScript). Team: Madhav, Satyajit, Jatin, Parth, Krishna.
   ```

3. **Paste the entire PROMPT_1_SETUP.md content**

4. **Hit enter and wait** (Claude will generate complete base code)

5. **Copy all generated code** into your project folders

**What you'll get:**
- Complete folder structure
- All page files (7 pages)
- Common components (Navbar, Footer, Button, Card, Modal)
- Backend API setup
- Database models
- Environment variable templates
- README files

---

### Step 4: Install & Run (5 min)

```bash
# Frontend setup
cd frontend
npm install
npm run dev
# Opens on http://localhost:3000

# Backend setup (new terminal)
cd backend
npm install
npm run dev
# Opens on http://localhost:5000
```

**Expected result:**
- Frontend runs with all pages accessible
- Backend API server running
- MongoDB connection ready (if installed)

---

### Step 5: Prepare Assets (3 min)

Add to `frontend/public/images/`:
- `logo.png` (your logo)
- `team/madhav.jpg`
- `team/satyajit.jpg`
- `team/jatin.jpg`
- `team/parth.jpg`
- `team/krishna.jpg`

**If not ready:** Base code has placeholders, replace later.

---

## 🏗️ Building Pages (After Base Setup)

### Use Cursor Auto Mode or Claude

**For each page, use this prefix:**

```
BUILD MODE: Use 03_CONTENT_GUIDE.md for copy + 04A_ENHANCED_DESIGN_SYSTEM.md for styling. Premium aesthetic with glassmorphism effects, gradient backgrounds, animated elements, multi-font system, and colored shadows. Ensure perfect alignment and smooth animations.
```

### Build Order (Recommended)

1. **Home Page** (Priority 1)
   - Hero with animated gradient
   - 7 sections total
   - Most important page

2. **Pricing Page** (Priority 2)
   - 5 pricing cards
   - Comparison table
   - Featured plan highlighted

3. **Contact/Demo Page** (Priority 3)
   - Working forms
   - Backend integration
   - Email notifications

4. **Services Page** (Priority 4)
   - 8 services detailed
   - Feature cards

5. **How It Works Page** (Priority 5)
   - 7-step process
   - Timeline visual

6. **Team Page** (Priority 6)
   - Team members
   - Ecosystem info

7. **Vision Page** (Priority 7)
   - Roadmap
   - Long-term goals

---

## 🎨 Design System Quick Reference

### Colors

**Primary:** `#2563EB` (Blue)  
**Secondary:** `#8B5CF6` (Purple)  
**Accent:** `#10B981` (Green)

**Gradients (Use these!):**
- Buttons: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Hero: `linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #8B5CF6 100%)`

### Typography

**Headings:** Space Grotesk (Bold, Modern)  
**Body:** Inter (Clean, Readable)  
**Buttons:** DM Sans (Friendly, Professional)

### Effects

**Glassmorphism:**
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.3);
```

**Hover Animations:**
- Lift: `transform: translateY(-12px)`
- Shadow: Colored shadows (blue/purple)
- Smooth: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`

---

## 🔧 Common Commands

### Development

```bash
# Frontend
cd frontend
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production

# Backend
cd backend
npm run dev          # Start with nodemon
npm start            # Start production
```

### Git

```bash
git init
git add .
git commit -m "Initial commit: College Tech Univy base"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 🐛 Troubleshooting

### Frontend won't start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend won't start
- Check MongoDB is running
- Verify `.env` file exists with correct values
- Check port 5000 is not in use

### Styling looks wrong
- Verify all CSS files are imported in `_app.js`
- Check `globals.css` has all design variables
- Import fonts in `_document.js`

### Forms not submitting
- Check backend is running on port 5000
- Verify CORS is configured
- Check API URL in frontend `.env.local`

---

## 📝 Before Using AI Tools

**ALWAYS start with a mode prefix from PROMPT_PREFIXES.md:**

Most common:
```
BUILD MODE: Use 03_CONTENT_GUIDE.md for copy + 04A_ENHANCED_DESIGN_SYSTEM.md for styling. Premium aesthetic with glassmorphism effects, gradient backgrounds, animated elements, multi-font system, and colored shadows.
```

For architecture:
```
ARCHITECTURE: Use univy_architecture.txt + 04A_ENHANCED_DESIGN_SYSTEM.md. Design complex components, API structure, database schemas. Premium aesthetic with glassmorphism and animations.
```

For debugging:
```
DEBUG MODE: Reference univy_architecture.txt for structure. Identify issue, provide solution maintaining design system from 04A_ENHANCED_DESIGN_SYSTEM.md.
```

---

## ✅ Success Checklist

### Base Setup Complete When:
- [ ] All 8 documentation files saved
- [ ] Base code generated from PROMPT_1
- [ ] Frontend runs on localhost:3000
- [ ] Backend runs on localhost:5000
- [ ] All pages accessible (7 pages)
- [ ] Navigation works
- [ ] Components styled with design system

### Ready for Development When:
- [ ] Team photos added (or placeholders)
- [ ] Logo added (or placeholder)
- [ ] MongoDB connection working
- [ ] Gmail SMTP configured (or ready to configure)
- [ ] Git repository initialized
- [ ] Team has access to all documentation

### Ready for Building When:
- [ ] PROMPT_2_BUILDING.md reviewed
- [ ] 03_CONTENT_GUIDE.md available
- [ ] 04A_ENHANCED_DESIGN_SYSTEM.md understood
- [ ] Cursor or Claude ready to use
- [ ] Know which page to build first (Home)

### Ready for Launch When:
- [ ] All 7 pages complete with content
- [ ] All forms working and saving to DB
- [ ] Email notifications sending
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Team reviewed and approved
- [ ] Domain purchased (or ready to purchase)

---

## 🎯 Daily Development Flow

### Morning (Planning)
1. Review what needs to be built today
2. Open relevant documentation
3. Prepare assets (if needed)

### Development (Building)
1. Open Cursor or Claude
2. Start with mode prefix
3. Reference documentation as needed
4. Build component/page
5. Test immediately
6. Commit to git

### Evening (Review)
1. Test everything built today
2. Check responsive behavior
3. Note any issues for tomorrow
4. Update team on progress

---

## 🚀 Next Steps

**Right Now:**
1. ✅ Read this Quick Start (you're here!)
2. ⏭️ Review Enhanced Design HTML preview
3. ⏭️ Generate base code with PROMPT_1
4. ⏭️ Install and run locally
5. ⏭️ Start building Home page

**This Week:**
- Complete all 7 pages
- Integrate backend forms
- Test on mobile devices
- Get team feedback

**Next Week:**
- Polish and refine
- Performance optimization
- Prepare for deployment
- Domain setup

---

## 💡 Pro Tips

### Tip 1: Always Reference Docs
Don't try to remember everything. Keep documentation open and reference as you build.

### Tip 2: Build Incrementally
Don't try to build everything at once. One component, one section, one page at a time.

### Tip 3: Test Often
Test after every component. Don't wait until the end.

### Tip 4: Use Git Commits
Commit after every working feature. Makes it easy to go back if something breaks.

### Tip 5: Design System is King
When in doubt about styling, refer to 04A_ENHANCED_DESIGN_SYSTEM.md. Consistency matters.

---

## 🆘 Getting Help

### From AI (Claude/Cursor)
- Always use mode prefixes
- Be specific about what you need
- Reference exact documentation files
- Provide error messages if debugging

### From Team
- Madhav: Product decisions, content
- Satyajit: Technical architecture
- Jatin: Quality check, efficiency
- Parth: Marketing copy, presentation
- Krishna: Pricing details, college relations

---

## 📞 Key Information

**Project:** College Tech - Univy  
**Type:** B2B SaaS Website  
**Tech:** Next.js + Node.js + MongoDB  
**Design:** Premium aesthetic with glassmorphism  
**Status:** Development phase  
**Target:** USCIT and affiliated colleges  
**Timeline:** 2 weeks for website  

**Primary Contact:** Madhav Varshney  
**Office:** Delhi, Dwarka  
**Domain:** To be purchased (likely univy.com)  

---

## 🎉 You're Ready!

You now have everything needed to build a stunning, professional B2B SaaS website.

**Start with:** 
1. Review Enhanced Design HTML preview
2. Generate base code (PROMPT_1)
3. Run locally
4. Begin building Home page

**Remember:**
- Use mode prefixes before every AI interaction
- Reference documentation constantly
- Build incrementally and test often
- Commit to git frequently

---

**Let's build something amazing! 🚀**

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Next Review:** After base setup complete