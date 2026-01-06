# 🏗️ PROMPT 2: Building Complete Website Features

**Use this prompt with: Cursor Auto Mode OR Claude Opus 4.5 (Implementation focus)**

---

## Context

The base structure from Prompt 1 is now set up. You have:
- ✅ Folder structure created
- ✅ Basic routing working
- ✅ Backend API endpoints ready
- ✅ Database models defined
- ✅ Common components scaffolded

**Now we need to build the complete website with all content, features, and functionality.**

---

## Your Task: Build Each Page with Full Content

You will build the website **page by page** with:
1. Complete content (from Content Guide)
2. Professional design (from Design System)
3. Responsive layout
4. Interactive features
5. Form functionality

---

## 🏠 PAGE 1: HOME PAGE (Priority 1)

### Required Sections (In Order)

#### 1. Hero Section
**Content:**
- Headline: "The Digital Workspace for Modern Colleges"
- Subheadline: "One unified portal for students, faculty, Student Cells, and administration. Replace WhatsApp chaos with organized, professional campus management."
- Two CTA buttons: "Request a Demo" + "Talk to Us"
- Background: Light gradient or subtle pattern

**Design:**
- Full viewport height (min-height: 100vh)
- Centered content
- Large, bold headline (text-5xl)
- Buttons with hover effects
- Professional hero image/illustration (right side on desktop)

**Interactive:**
- Smooth scroll to next section on scroll
- Button hover animations
- Fade-in animation on load

---

#### 2. Problem Section
**Content:**
- Heading: "The Campus Management Crisis"
- 4 problem cards:
  1. Communication Chaos (WhatsApp groups)
  2. Manual Overload (Excel, paper)
  3. Student Cell Struggles (no system)
  4. Disconnected Systems (no centralization)
- Bottom text: "Your college deserves better than WhatsApp groups and Excel sheets."

**Design:**
- 2x2 grid on desktop, single column on mobile
- Each problem as a card with icon
- Red/orange accent color for problems
- Clean spacing between cards

---

#### 3. What is Univy Section
**Content:**
- Heading: "Meet Univy - Your College's Digital Workspace"
- Description paragraph
- 6 key points with checkmarks:
  - Built for Indian colleges
  - Modular system
  - Student-friendly interfaces
  - Faculty and admin dashboards
  - Student Cell software
  - No ads, no student payments

**Design:**
- Split layout: text left, visual right
- Green checkmarks for each point
- Professional illustration/screenshot
- Light background color

---

#### 4. Who It's For Section
**Content:**
- Heading: "Built For Every Part of Your Campus"
- 4 user type cards:
  - For Students
  - For Faculty
  - For Student Cells
  - For Administration
- Each with bullet points of benefits

**Design:**
- 4-column grid (responsive to 2 columns, then 1)
- Icon for each user type
- Hover effect on cards
- Consistent height cards

---

#### 5. Core Modules Section
**Content:**
- Heading: "Everything Your Campus Needs, In One Place"
- 5 module cards:
  1. College Portal
  2. Forms & Applications
  3. Opportunities & Community
  4. Student Cell Software
  5. Admin & Analytics

**Design:**
- 3-column grid (responsive)
- Feature card style
- Icon + title + description
- Blue accent for module icons

---

#### 6. Why Choose Us Section
**Content:**
- Heading: "Why Colleges Trust Univy"
- 5 reasons with explanations:
  1. College-First Design
  2. Modular & Scalable
  3. Student-Managed Bridge
  4. No Hidden Costs
  5. Ongoing Support

**Design:**
- Alternating left-right layout
- Numbered list style
- Icons for each reason
- Different background (light blue/gray)

---

#### 7. Final CTA Section
**Content:**
- Heading: "Ready to Transform Your Campus?"
- Text: "Join forward-thinking colleges..."
- Two buttons: "Schedule a Demo" + "Get Custom Quote"

**Design:**
- Full-width section
- Centered content
- Bold, compelling layout
- Dark background with white text
- Large, prominent buttons

---

### Home Page Technical Requirements

**Functionality:**
- Smooth scrolling between sections
- Button click → Modal for demo request
- Navbar sticky on scroll
- Mobile hamburger menu
- Lazy loading for images
- Animation on scroll (reveal sections)

**Forms:**
- Demo request modal (quick form)
- Contact modal (quick form)
- Both connect to backend API

**Performance:**
- Optimize images
- Minimize bundle size
- Fast page load (<3 seconds)

---

## 💼 PAGE 2: PRICING PAGE (Priority 2)

### Required Sections

#### 1. Page Header
**Content:**
- Title: "Flexible Plans For Every College"
- Subtitle: "From basic digitization to complete campus management. Pick a plan or build your own."

---

#### 2. Pricing Plans Grid
**Display all 5 plans:**

**Plan 1: Essentials Plan**
- Tagline: "Start Your Digital Transformation"
- Best For: Small colleges (500-1000 students)
- Features list (7-8 items with checkmarks)
- What's NOT included (4 items with X marks)
- CTA: "Contact for Quote"

**Plan 2: Campus Connect Plan**
- Tagline: "Unite Your Campus Digitally"
- Best For: Mid-size (1000-3000 students)
- Features list (expanded from Essentials)
- What's NOT included
- CTA: "Contact for Quote"

**Plan 3: Professional Plan** (FEATURED)
- Tagline: "Complete Campus Management"
- Best For: Large colleges (3000-5000 students)
- Full feature list
- Highlight as "Most Popular"
- CTA: "Request Custom Quote"

**Plan 4: Enterprise Plan**
- Tagline: "Advanced Operations & Analytics"
- Best For: Universities (5000+ students)
- Complete package
- Premium positioning
- CTA: "Schedule Consultation"

**Plan 5: Custom Plan**
- Tagline: "Built For Your College"
- Best For: Any size, specific needs
- Modular options list
- Flexible pricing
- CTA: "Build Your Plan"

---

#### 3. Plan Comparison Table
**Feature comparison table:**
- Rows: All features
- Columns: All 5 plans
- Checkmarks/X marks for each
- Mobile-responsive (scrollable)

---

#### 4. CTA Section
**Content:**
- "Not Sure Which Plan Fits?"
- "Let's discuss your specific needs..."
- Buttons: "Schedule Consultation" + "Get Custom Quote"

---

### Pricing Page Technical Requirements

**Design:**
- 3-column grid for plans (responsive to 1)
- Professional Plan scaled up slightly
- Hover effects on pricing cards
- Smooth transitions
- Clear visual hierarchy

**Functionality:**
- Filter plans by college size (optional)
- Comparison table toggle
- Modal for quote request
- Click plan → Pre-fill form with plan selection

---

## 📦 PAGE 3: SERVICES PAGE (Priority 3)

### Required Sections

#### 1. Page Header
**Content:**
- Title: "Our Services - Complete Campus Digitization"
- Subtitle: "Modular solutions designed for modern college management."

---

#### 2. Service Sections (8 Services)

**Each service needs:**
- Service name (large heading)
- Tagline (italicized subheading)
- "What It Is" description
- Features list (5-7 bullet points)
- "Who Uses It" section
- "Problem It Solves" section
- Visual/icon
- CTA button: "Learn More" or "Get This Service"

**8 Services to build:**
1. College Portal (Daily Use)
2. Forms & Applications System
3. Attendance & Academic Tracking
4. Student Cell & Admin Software
5. Opportunities & Community Layer
6. Email & Communication System
7. Campus Mantri Program
8. Analytics & Admin Controls

---

#### 3. Service Categories
**Group services visually:**
- Core Services (Portal, Forms, Attendance)
- Student Operations (Student Cell, Opportunities)
- Advanced Features (Email, Analytics, Campus Mantri)

---

#### 4. CTA Section
**Content:**
- "Need a Custom Combination?"
- Button: "Build Your Custom Plan"

---

### Services Page Technical Requirements

**Design:**
- Alternating left-right layout for services
- Icons for each service
- Expandable/collapsible details (accordion style)
- Professional service cards
- Consistent spacing

**Functionality:**
- Click service → Expand full details
- "Get This Service" → Opens custom quote form with service pre-selected
- Smooth scroll between services

---

## 🧭 PAGE 4: HOW IT WORKS PAGE (Priority 4)

### Required Sections

#### 1. Page Header
**Content:**
- Title: "From Contact to Campus Transformation"
- Subtitle: "A simple, proven process..."

---

#### 2. Process Steps (7 Steps)

**Visual: Timeline/Process Flow**

**Each step displays:**
- Step number
- Step title
- "What Happens" description
- "What You'll Get" or "What We Need"
- Duration estimate
- Icon/illustration

**7 Steps:**
1. Initial Contact (1 day)
2. Discovery Call (1 week)
3. Proposal & Agreement (1-2 weeks)
4. Portal Setup & Customization (2-4 weeks)
5. Training & Onboarding (1 week)
6. Student Launch (2 weeks)
7. Ongoing Support (Ongoing)

---

#### 3. Success Metrics Section
**Content:**
- "What Success Looks Like"
- 5 key metrics (80% usage, 100% faculty adoption, etc.)
- Visual progress bars/statistics

---

#### 4. CTA Section
**Content:**
- "Ready to Get Started?"
- Buttons: "Begin Your Journey" + "Talk to Our Team"

---

### How It Works Technical Requirements

**Design:**
- Vertical timeline with connected dots
- Cards for each step
- Step numbers in circles
- Clean, linear progression
- Icons for each step

**Functionality:**
- Animate steps as user scrolls
- Click step → Expand more details
- Download PDF process guide (optional)

---

## 👥 PAGE 5: TEAM & ECOSYSTEM PAGE (Priority 5)

### Required Sections

#### 1. Page Header
**Content:**
- Title: "The People Behind Univy"
- Subtitle: "Students building for students..."

---

#### 2. Founding Team
**Team member cards:**
- Professional photo
- Name
- Role
- Background (college, year, course)
- Expertise areas
- Personal quote ("Why Univy")
- LinkedIn link

**Layout:**
- 3-column grid for team members
- Consistent card design
- Hover effect reveals more info

---

#### 3. Our Story Section
**Content:**
- Narrative about how Univy started
- Personal experiences with broken campus systems
- The moment the idea was born
- Journey so far

**Design:**
- Single column, storytelling layout
- Timeline elements
- Photos from journey

---

#### 4. Campus Mantri Model
**Content:**
- What it is
- Why it works (5 benefits)
- Responsibilities
- Benefits for the Campus Mantri

**Design:**
- Split layout: info + visual
- Diagram showing Campus Mantri role
- Call-out boxes for benefits

---

#### 5. Ecosystem & Partners
**Content:**
- Student entrepreneurship support (SYF, EDC)
- Partner colleges (logo grid)
- Technology partners

**Design:**
- Logo grid for partners
- Badge style for memberships

---

#### 6. Values Section
**4 core values:**
- Student-First
- College-Focused
- Transparency
- Continuous Improvement

**Design:**
- 2x2 grid with icons

---

#### 7. Join Us Section
**Content:**
- "Become Part of Univy"
- Three tracks: For Colleges, For Campus Mantris, For Contributors

---

### Team Page Technical Requirements

**Design:**
- Professional, credible layout
- High-quality team photos
- Personal touches (quotes, stories)
- Accessible, warm tone

**Functionality:**
- Filterable team grid (by role)
- Modal for team member details
- Contact team member option

---

## 🚀 PAGE 6: VISION PAGE (Priority 6)

### Required Sections

#### 1. Page Header
**Content:**
- Title: "Our Vision for College Education"
- Subtitle: "Beyond software..."

---

#### 2. Current Reality
**Content:**
- "The Current State of College Tech"
- Problems with current systems
- Why it matters

---

#### 3. Our Vision
**Content:**
- "What We're Building Toward"
- The big picture
- What future looks like
- Not just another tool

---

#### 4. Three-Year Roadmap
**Visual roadmap:**
- Year 1: Foundation
- Year 2: Scale
- Year 3: Dominance

**Design:**
- Horizontal timeline
- Milestone markers
- Key goals for each year

---

#### 5. Impact Goals
**4 stakeholder impacts:**
- For Students
- For Faculty
- For Student Cells
- For Colleges

---

#### 6. Beyond Features
**Content:**
- Community Building
- Student Empowerment
- College Transformation
- Data for Good

---

#### 7. Why We'll Succeed
**5 reasons:**
- Student-Led
- College-First Design
- Modular Approach
- Sustainable Model
- Ecosystem Support

---

#### 8. Final Vision Statement
**Content:**
- 10-year vision paragraph
- Inspiring, ambitious
- Clear picture of the future

---

### Vision Page Technical Requirements

**Design:**
- Storytelling layout
- Inspirational visuals
- Timeline graphics
- Impact statistics

**Functionality:**
- Animated timeline on scroll
- Interactive roadmap
- Share vision (social media buttons)

---

## 📞 PAGE 7: CONTACT/DEMO PAGE (Priority 7)

### Required Sections

#### 1. Page Header
**Content:**
- Title: "Let's Talk About Your College"
- Subtitle: "Schedule a demo, ask questions..."

---

#### 2. Contact Form (MAIN FEATURE)

**Form Fields:**

**College Information:**
- College Name* (text)
- College Type* (dropdown)
- College Size* (dropdown)
- City* (text)
- State* (dropdown)

**Contact Person:**
- Full Name* (text)
- Role/Designation* (text)
- Email Address* (email)
- Phone Number* (phone with country code)

**Requirements:**
- What brings you to Univy?* (checkbox, multiple)
- Which plan interests you?* (radio)
- Current biggest challenge (textarea)
- Additional message (textarea)
- Preferred contact method* (radio)
- When to hear from us?* (radio)

**Submit Button:** "Request Demo"

**Privacy Note below form**

---

#### 3. Quick Contact Options
**Display:**
- Phone number
- Email address
- WhatsApp number
- Office hours

**Design:**
- Cards or badge style
- Icons for each method
- Click-to-call/email functionality

---

#### 4. What Happens Next
**5-step process:**
1. We Review Your Request
2. Initial Contact
3. Discovery Call
4. Custom Proposal
5. Let's Get Started

**Design:**
- Visual flowchart
- Simple icons
- Brief descriptions

---

#### 5. FAQ Section
**Common questions:**
- How long does setup take?
- Do you offer free trials?
- What if we only need specific features?
- Is there a setup fee?
- Can we migrate from current system?
- Do students need to pay?

**Design:**
- Accordion style
- Click to expand answers

---

#### 6. Trust Badges
**4 trust indicators:**
- Secure & Private
- Student Data Safety
- Reliable Support
- Proven Process

---

### Contact Page Technical Requirements

**Form Functionality:**
- Client-side validation (required fields, email format)
- Server-side validation (backend)
- Loading state on submit
- Success message after submission
- Error handling (display errors clearly)
- Auto-save draft (localStorage - optional)

**Backend Integration:**
- POST to `/api/demo` endpoint
- Save to MongoDB (DemoRequest model)
- Send email notification (to admin + user)
- Return success/error response

**Design:**
- Clean, professional form layout
- Clear field labels
- Helpful placeholder text
- Progress indicator (optional)
- Mobile-friendly form inputs

---

## 🔗 COMMON COMPONENTS TO BUILD

### Navbar Component
**Features:**
- Logo (left side)
- Navigation links (center/right)
- CTA button "Request Demo" (right)
- Sticky on scroll
- Mobile hamburger menu
- Smooth scroll to sections
- Active page indicator

---

### Footer Component
**Sections:**
- About Univy (brief description)
- Quick Links (all pages)
- Legal (Privacy, Terms, Refund)
- Contact Info (email, phone, address)
- Social Media Icons
- Copyright notice

---

### Button Component
**Variants:**
- Primary (blue background)
- Secondary (white with blue border)
- Success (green background)
- Sizes: small, medium, large

---

### Card Component
**Variants:**
- Basic card (white, shadow)
- Feature card (with icon, title, description)
- Pricing card (plan layout)
- Team card (photo, name, role)

---

### Modal Component
**Features:**
- Overlay background
- Centered content box
- Close button (X)
- Smooth fade-in animation
- Click outside to close
- Escape key to close

---

### Form Components
**Input types:**
- Text input
- Email input
- Phone input
- Textarea
- Dropdown/Select
- Checkbox
- Radio buttons

**All with:**
- Label
- Placeholder
- Validation message
- Error state styling
- Focus state styling

---

## 📱 RESPONSIVE DESIGN REQUIREMENTS

### Breakpoints
- Mobile: < 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

### Mobile Considerations
- Hamburger menu for navigation
- Single-column layouts
- Larger tap targets (buttons, links)
- Simplified grids
- Stacked sections
- Readable font sizes
- Touch-friendly forms

---

## ⚡ PERFORMANCE REQUIREMENTS

### Optimization
- Lazy load images
- Minify CSS/JS
- Optimize images (WebP format)
- Code splitting (Next.js)
- Prefetch critical pages
- Compress assets

### Target Metrics
- First Contentful Paint: < 2s
- Time to Interactive: < 3s
- Lighthouse Score: 90+

---

## 🎨 ANIMATION REQUIREMENTS

### Subtle Animations
- Fade in on scroll (sections reveal)
- Button hover effects (lift, scale)
- Card hover effects (shadow, lift)
- Form input focus (border glow)
- Modal fade in/out
- Smooth scrolling

**Important:** Keep animations professional, not distracting

---

## ✅ TESTING CHECKLIST

Before considering a page complete:

**Functionality:**
- [ ] All links work
- [ ] Forms submit successfully
- [ ] Validation works correctly
- [ ] Error handling displays properly
- [ ] Success messages show
- [ ] API calls work (demo, contact forms)

**Design:**
- [ ] Matches design system
- [ ] Responsive on mobile/tablet/desktop
- [ ] Hover states work
- [ ] Focus states visible
- [ ] Consistent spacing
- [ ] Proper typography scale

**Performance:**
- [ ] Images optimized
- [ ] Fast page load
- [ ] No console errors
- [ ] Smooth animations

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Proper contrast ratios
- [ ] Alt text on images
- [ ] ARIA labels where needed

---

## 🚀 IMPLEMENTATION ORDER

**Build in this sequence:**

### Phase 1 (Day 1-2)
1. Home Page (complete with all sections)
2. Navbar & Footer (complete)
3. Basic styling (design system applied)

### Phase 2 (Day 3-4)
4. Pricing Page (all 5 plans + comparison)
5. Contact/Demo Page (form working)
6. Form backend integration

### Phase 3 (Day 5-6)
7. Services Page (all 8 services)
8. How It Works Page (7 steps)

### Phase 4 (Day 7)
9. Team & Ecosystem Page
10. Vision Page

### Phase 5 (Day 8)
11. Polish & responsiveness
12. Testing all features
13. Performance optimization

---

## 🎯 SUCCESS CRITERIA

**The website is complete when:**

1. ✅ All 7 pages are live and working
2. ✅ Navigation works perfectly
3. ✅ All forms submit and save to database
4. ✅ Email notifications working
5. ✅ Fully responsive (mobile, tablet, desktop)
6. ✅ Design system applied consistently
7. ✅ No broken links or images
8. ✅ Performance optimized (fast load)
9. ✅ No console errors
10. ✅ Professional, polished appearance

---

## 📋 FINAL NOTES

### Code Quality
- Clean, commented code
- Consistent naming conventions
- Proper file organization
- Reusable components
- DRY principles

### Maintainability
- Easy to update content
- Clear component structure
- Well-documented
- Scalable architecture

---

**Begin building systematically, page by page, ensuring each is complete before moving to the next.**