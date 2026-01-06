# 🎨 Design System - College Tech Univy

## 🎯 Design Philosophy

### Core Principles
1. **Professional & Trustworthy** - Colleges are conservative; design must inspire confidence
2. **Clean & Minimal** - No clutter, clear hierarchy, easy navigation
3. **Student-Friendly** - Approachable, not corporate-stiff
4. **Accessible** - Works for all users, clear contrast, readable fonts
5. **Modern but Not Flashy** - Contemporary design without trendy excess

---

## 🎨 Color Palette

### Primary Colors
```css
--primary-blue: #1E40AF;        /* Deep Blue - Trust, Professional */
--primary-blue-light: #3B82F6;  /* Bright Blue - Interactive elements */
--primary-blue-dark: #1E3A8A;   /* Darker Blue - Hover states */
```

**Usage:**
- Primary CTAs (Request Demo, Get Quote)
- Main navigation active state
- Links
- Important buttons

---

### Secondary Colors
```css
--secondary-green: #10B981;      /* Success Green - Positive actions */
--secondary-green-light: #34D399; /* Light Green - Hover */
--secondary-green-dark: #059669;  /* Dark Green - Active */
```

**Usage:**
- Success messages
- Check marks, feature ticks
- Secondary CTAs (Learn More)
- Positive indicators

---

### Accent Colors
```css
--accent-orange: #F59E0B;        /* Warm Orange - Highlights */
--accent-purple: #8B5CF6;        /* Purple - Special features */
```

**Usage:**
- Special badges (New, Popular)
- Highlight important features
- Visual variety in icons

---

### Neutral Colors
```css
--neutral-900: #0F172A;          /* Primary Text - Dark */
--neutral-700: #334155;          /* Secondary Text */
--neutral-500: #64748B;          /* Tertiary Text, Labels */
--neutral-300: #CBD5E1;          /* Borders, Dividers */
--neutral-200: #E2E8F0;          /* Light Borders */
--neutral-100: #F1F5F9;          /* Light Background */
--neutral-50: #F8FAFC;           /* Page Background */
--white: #FFFFFF;                /* Cards, Pure White */
```

**Usage:**
- Text hierarchy
- Borders and dividers
- Background layers
- Card backgrounds

---

### Semantic Colors
```css
--error-red: #EF4444;            /* Errors, Warnings */
--warning-yellow: #F59E0B;       /* Caution, Alerts */
--info-blue: #3B82F6;            /* Information */
--success-green: #10B981;        /* Success states */
```

---

## 📝 Typography

### Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter?**
- Professional and modern
- Excellent readability
- Wide range of weights
- Free and open source

---

### Font Sizes
```css
--text-xs: 0.75rem;      /* 12px - Small labels */
--text-sm: 0.875rem;     /* 14px - Secondary text */
--text-base: 1rem;       /* 16px - Body text */
--text-lg: 1.125rem;     /* 18px - Large body */
--text-xl: 1.25rem;      /* 20px - Small headings */
--text-2xl: 1.5rem;      /* 24px - Section headings */
--text-3xl: 1.875rem;    /* 30px - Page headings */
--text-4xl: 2.25rem;     /* 36px - Hero headings */
--text-5xl: 3rem;        /* 48px - Large hero */
```

---

### Font Weights
```css
--font-normal: 400;      /* Body text */
--font-medium: 500;      /* Emphasis */
--font-semibold: 600;    /* Headings, CTAs */
--font-bold: 700;        /* Strong emphasis */
```

---

### Typography Scale Usage

**Hero Headlines (Homepage):**
```css
font-size: var(--text-5xl);
font-weight: var(--font-bold);
line-height: 1.2;
color: var(--neutral-900);
```

**Page Headings:**
```css
font-size: var(--text-4xl);
font-weight: var(--font-bold);
line-height: 1.3;
color: var(--neutral-900);
```

**Section Headings:**
```css
font-size: var(--text-3xl);
font-weight: var(--font-semibold);
line-height: 1.4;
color: var(--neutral-900);
```

**Subheadings:**
```css
font-size: var(--text-2xl);
font-weight: var(--font-semibold);
line-height: 1.5;
color: var(--neutral-700);
```

**Body Text:**
```css
font-size: var(--text-base);
font-weight: var(--font-normal);
line-height: 1.6;
color: var(--neutral-700);
```

**Small Text / Labels:**
```css
font-size: var(--text-sm);
font-weight: var(--font-normal);
line-height: 1.5;
color: var(--neutral-500);
```

---

## 🔲 Spacing System

### Base Unit: 4px
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Usage Guidelines
- **Component padding:** space-4 to space-6
- **Section padding:** space-12 to space-20
- **Element gaps:** space-2 to space-4
- **Page margins:** space-6 to space-8

---

## 🎭 Components

### Buttons

#### Primary Button (CTA)
```css
.button-primary {
  background: var(--primary-blue);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.button-primary:hover {
  background: var(--primary-blue-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
}
```

#### Secondary Button
```css
.button-secondary {
  background: white;
  color: var(--primary-blue);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  border: 2px solid var(--primary-blue);
  cursor: pointer;
  transition: all 0.2s ease;
}

.button-secondary:hover {
  background: var(--primary-blue);
  color: white;
}
```

#### Success Button
```css
.button-success {
  background: var(--secondary-green);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: var(--font-semibold);
}
```

---

### Cards

#### Basic Card
```css
.card {
  background: white;
  border-radius: 12px;
  padding: var(--space-6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}
```

#### Feature Card
```css
.feature-card {
  background: white;
  border-radius: 12px;
  padding: var(--space-8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--neutral-200);
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--primary-blue);
  box-shadow: 0 8px 20px rgba(30, 64, 175, 0.15);
}
```

#### Pricing Card
```css
.pricing-card {
  background: white;
  border-radius: 16px;
  padding: var(--space-8);
  border: 2px solid var(--neutral-200);
  transition: all 0.3s ease;
}

.pricing-card.featured {
  border-color: var(--primary-blue);
  box-shadow: 0 12px 30px rgba(30, 64, 175, 0.2);
  transform: scale(1.05);
}
```

---

### Forms

#### Input Fields
```css
.input-field {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--neutral-300);
  border-radius: 8px;
  font-size: var(--text-base);
  color: var(--neutral-900);
  transition: all 0.2s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.input-field.error {
  border-color: var(--error-red);
}
```

#### Labels
```css
.input-label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--neutral-700);
}
```

#### Textarea
```css
.textarea {
  width: 100%;
  padding: var(--space-4);
  border: 1px solid var(--neutral-300);
  border-radius: 8px;
  font-size: var(--text-base);
  min-height: 120px;
  resize: vertical;
}
```

#### Select Dropdown
```css
.select {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--neutral-300);
  border-radius: 8px;
  font-size: var(--text-base);
  background: white;
  cursor: pointer;
}
```

---

### Navigation

#### Navbar
```css
.navbar {
  background: white;
  border-bottom: 1px solid var(--neutral-200);
  padding: var(--space-4) 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.nav-link {
  color: var(--neutral-700);
  font-weight: var(--font-medium);
  padding: var(--space-2) var(--space-4);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--primary-blue);
}

.nav-link.active {
  color: var(--primary-blue);
  font-weight: var(--font-semibold);
}
```

---

### Footer
```css
.footer {
  background: var(--neutral-900);
  color: var(--neutral-300);
  padding: var(--space-12) 0 var(--space-6);
}

.footer-link {
  color: var(--neutral-300);
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: white;
}
```

---

## 📐 Layout Structure

### Container Widths
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.container-narrow {
  max-width: 800px;
  margin: 0 auto;
}

.container-wide {
  max-width: 1400px;
  margin: 0 auto;
}
```

---

### Grid System
```css
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

/* Responsive */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

---

### Section Spacing
```css
.section {
  padding: var(--space-16) 0;
}

.section-large {
  padding: var(--space-24) 0;
}

.section-small {
  padding: var(--space-12) 0;
}
```

---

## 🎬 Animations

### Transitions
```css
/* Standard transition */
.transition-standard {
  transition: all 0.3s ease;
}

/* Quick transition */
.transition-quick {
  transition: all 0.15s ease;
}

/* Slow transition */
.transition-slow {
  transition: all 0.5s ease;
}
```

---

### Hover Effects
```css
/* Lift on hover */
.hover-lift:hover {
  transform: translateY(-4px);
}

/* Scale on hover */
.hover-scale:hover {
  transform: scale(1.05);
}

/* Shadow on hover */
.hover-shadow:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

---

### Loading States
```css
.loading-spinner {
  border: 3px solid var(--neutral-200);
  border-top: 3px solid var(--primary-blue);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

---

## 🖼️ Icons & Images

### Icon Style
- Use **React Icons** library
- Style: Outlined (not filled)
- Size: 20px-24px for body, 32px-48px for features
- Color: Match text color or use primary blue

### Image Guidelines
- **Hero images:** High quality, professional
- **Team photos:** Professional headshots, consistent background
- **Feature illustrations:** Simple, clean, modern
- **Aspect ratios:** 16:9 for banners, 1:1 for avatars

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Mobile: Default (up to 640px) */
/* Tablet: 641px - 1024px */
@media (min-width: 641px) {
  /* Tablet styles */
}

/* Desktop: 1025px and above */
@media (min-width: 1025px) {
  /* Desktop styles */
}

/* Large Desktop: 1440px and above */
@media (min-width: 1440px) {
  /* Large desktop styles */
}
```

---

## ✅ Component Checklist

### Every Component Should Have:
- [ ] Consistent spacing (using CSS variables)
- [ ] Proper color usage (using CSS variables)
- [ ] Hover states (where interactive)
- [ ] Focus states (for accessibility)
- [ ] Responsive behavior
- [ ] Loading states (if data-dependent)
- [ ] Error states (if applicable)

---

## 🎯 Design Tokens (CSS Variables File)

```css
/* variables.css */

:root {
  /* Colors */
  --primary-blue: #1E40AF;
  --primary-blue-light: #3B82F6;
  --primary-blue-dark: #1E3A8A;
  --secondary-green: #10B981;
  --accent-orange: #F59E0B;
  
  /* Neutrals */
  --neutral-900: #0F172A;
  --neutral-700: #334155;
  --neutral-500: #64748B;
  --neutral-300: #CBD5E1;
  --neutral-100: #F1F5F9;
  --white: #FFFFFF;
  
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  
  /* Spacing */
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  
  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

---

## 📋 Usage Examples

### Hero Section Example
```jsx
<section className="hero-section" style={{
  padding: 'var(--space-20) 0',
  background: 'var(--neutral-50)'
}}>
  <div className="container">
    <h1 style={{
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--font-bold)',
      color: 'var(--neutral-900)',
      marginBottom: 'var(--space-4)'
    }}>
      The Digital Workspace for Modern Colleges
    </h1>
    <p style={{
      fontSize: 'var(--text-xl)',
      color: 'var(--neutral-700)',
      marginBottom: 'var(--space-8)'
    }}>
      One unified portal for students, faculty, and administration.
    </p>
    <button className="button-primary">
      Request a Demo
    </button>
  </div>
</section>
```

---

## 🎨 Design Inspiration Sources

### Reference Websites (For Professional B2B Feel)
- Stripe.com (Clean, professional)
- Linear.app (Modern, minimal)
- Notion.so (Approachable, clean)
- Segment.com (B2B trust-building)

### What to Avoid
- ❌ Too flashy/trendy designs
- ❌ Excessive animations
- ❌ Cluttered layouts
- ❌ Inconsistent spacing
- ❌ Too many colors

---

**This design system is the single source of truth for all UI decisions. Every component should reference these guidelines.**