# 🔧 College Tech - Univy Backend

> Express.js API with MongoDB for College Tech Univy

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your values

# Start MongoDB (if not running)
mongod

# Run development server
npm run dev

# Server runs on http://localhost:5000
```

---

## 📁 Folder Structure

```
src/
├── config/
│   ├── database.js    # MongoDB connection
│   └── env.js         # Environment config
│
├── models/
│   ├── Contact.js     # Contact form schema
│   ├── DemoRequest.js # Demo request schema
│   └── CustomQuote.js # Custom quote schema
│
├── routes/
│   ├── contact.js     # Contact routes
│   ├── demo.js        # Demo request routes
│   └── quote.js       # Quote request routes
│
├── controllers/
│   ├── contactController.js
│   ├── demoController.js
│   └── quoteController.js
│
├── middleware/
│   ├── validation.js  # Input validation
│   ├── errorHandler.js
│   └── rateLimiter.js
│
├── utils/
│   ├── email.js       # Email service
│   └── logger.js      # Logging utility
│
└── server.js          # Express app entry
```

---

## 🌐 API Endpoints

### Health Check
```
GET /api/health
```

### Contact
```
POST /api/contact
Body: { name, collegeName, role, email, phone, message }
```

### Demo Request
```
POST /api/demo
Body: { collegeName, collegeType, collegeSize, contactPerson, email, phone, ... }
```

### Quote Request
```
POST /api/quote
Body: { collegeName, collegeSize, contactPerson, email, phone, selectedServices, ... }
```

---

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `NODE_ENV` | Environment (development/production) |
| `MONGODB_URI` | MongoDB connection string |
| `EMAIL_HOST` | SMTP host |
| `EMAIL_PORT` | SMTP port |
| `EMAIL_USER` | SMTP username |
| `EMAIL_PASS` | SMTP password |
| `ADMIN_EMAIL` | Admin notification email |
| `FRONTEND_URL` | Frontend URL for CORS |

---

## 📦 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **cors**: Cross-origin support
- **dotenv**: Environment variables
- **nodemailer**: Email sending
- **express-validator**: Input validation
- **helmet**: Security headers
- **morgan**: HTTP logging
- **express-rate-limit**: Rate limiting

---

## 📄 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start with nodemon (development) |
| `npm start` | Start server (production) |

---

## 👥 Team

Built with ❤️ by the Univy team
