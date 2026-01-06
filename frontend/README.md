# 🎨 College Tech - Univy Frontend

> Next.js 14 frontend with premium aesthetic design system

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── common/        # Navbar, Footer, Button, Card, Modal
│   ├── home/          # Homepage sections
│   ├── pricing/       # Pricing components
│   ├── contact/       # Contact form
│   └── team/          # Team components
│
├── pages/             # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── _document.js   # HTML document
│   ├── index.js       # Home page
│   ├── services.js    # Services page
│   ├── pricing.js     # Pricing page
│   ├── how-it-works.js
│   ├── team.js
│   ├── vision.js
│   └── contact.js
│
├── styles/
│   ├── globals.css    # Global styles & design system
│   ├── variables.css  # CSS custom properties
│   └── components/    # Component-specific styles
│
├── utils/
│   ├── api.js         # API configuration
│   └── constants.js   # Static data (team, plans, etc.)
│
└── hooks/
    └── useForm.js     # Custom form hook
```

---

## 🎨 Design System

This project uses a **premium aesthetic** with:

- ✨ **Glassmorphism** - Frosted glass effects with blur
- 🌈 **Gradients** - Smooth color transitions
- 🎭 **Multi-font typography**:
  - Space Grotesk (headings)
  - Inter (body)
  - DM Sans (buttons/accents)
- ✨ **Smooth animations** - Cubic-bezier easing
- 🎨 **Colored shadows** - Purple/blue accent shadows

Refer to `documentation/04A_ENHANCED_DESIGN_SYSTEM.md` for complete specs.

---

## 📦 Dependencies

- **next**: ^14.0.0 - React framework
- **react**: ^18.2.0 - UI library
- **react-icons**: ^4.12.0 - Icon library
- **axios**: ^1.6.0 - HTTP client

---

## 🌐 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API URL |
| `NEXT_PUBLIC_SITE_URL` | Frontend URL |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email |
| `NEXT_PUBLIC_CONTACT_PHONE` | Contact phone |

---

## 📄 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 👥 Team

Built with ❤️ by the Univy team
