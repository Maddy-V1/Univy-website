# College Tech - Univy (Combined Vercel Deployment)

A unified Next.js application combining frontend and backend for deployment on Vercel.

## Project Structure

```
vercel-app/
├── public/              # Static assets (images, icons, manifest)
├── src/
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Shared utilities (db, email, validation)
│   ├── models/          # Mongoose models
│   ├── pages/           # Next.js pages
│   │   └── api/         # API routes (serverless functions)
│   │       ├── contact/ # Contact form endpoints
│   │       ├── demo/    # Demo request endpoints
│   │       ├── quote/   # Quote request endpoints
│   │       └── health.js
│   ├── styles/          # CSS modules and global styles
│   └── utils/           # Frontend utilities
├── .env.local.example   # Environment variables template
├── next.config.js       # Next.js configuration
├── package.json
└── vercel.json          # Vercel deployment config
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment file:
   ```bash
   cp .env.local.example .env.local
   ```

3. Update `.env.local` with your values:
   - `MONGODB_URI` - MongoDB connection string
   - `EMAIL_USER` / `EMAIL_PASS` - SMTP credentials
   - `ADMIN_EMAIL` - Admin notification email

4. Run development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | List contacts (admin) |
| GET | `/api/contact/:id` | Get contact by ID |
| PUT | `/api/contact/:id` | Update contact status |
| POST | `/api/demo` | Submit demo request |
| GET | `/api/demo` | List demo requests (admin) |
| GET | `/api/demo/:id` | Get demo request by ID |
| PUT | `/api/demo/:id` | Update demo status |
| POST | `/api/quote` | Submit quote request |
| GET | `/api/quote` | List quote requests (admin) |
| GET | `/api/quote/:id` | Get quote request by ID |
| PUT | `/api/quote/:id` | Update quote status |

## Deploying to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this folder to a GitHub repository
2. Import the project in [Vercel Dashboard](https://vercel.com/new)
3. Configure environment variables in Vercel project settings

### Environment Variables (Vercel)

Set these in your Vercel project settings:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `EMAIL_HOST` | SMTP host (e.g., smtp.gmail.com) |
| `EMAIL_PORT` | SMTP port (587 for TLS) |
| `EMAIL_USER` | SMTP username |
| `EMAIL_PASS` | SMTP password / app password |
| `ADMIN_EMAIL` | Admin notification email |
| `JWT_SECRET` | Secret for JWT tokens |
| `NEXT_PUBLIC_SITE_URL` | Your production URL |

## Key Features

- **Unified Deployment**: Frontend + API in single Vercel project
- **Serverless Functions**: API routes run as Vercel serverless functions
- **MongoDB Connection Caching**: Optimized for serverless environment
- **Email Notifications**: Automatic emails on form submissions
- **Form Validation**: Server-side validation for all endpoints

## Tech Stack

- Next.js 14
- React 18
- MongoDB / Mongoose
- Nodemailer
- Axios
