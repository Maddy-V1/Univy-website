# 📡 API Documentation - College Tech Univy

## Base URL
```
Development: http://localhost:5000/api
Production: https://api.collegetech-univy.com/api
```

---

## Authentication
**No authentication required for public endpoints.**
All form submissions are publicly accessible.

---

## Endpoints

### 1. Contact Form Submission

**Endpoint:** `POST /api/contact`

**Description:** General contact/inquiry form submission

**Request Body:**
```json
{
  "name": "Dr. Rajesh Kumar",
  "collegeName": "ABC College of Engineering",
  "role": "Principal",
  "email": "principal@abcengineering.edu.in",
  "phone": "+91-9876543210",
  "message": "Interested in digitizing our campus operations"
}
```

**Validation Rules:**
- `name`: Required, min 2 characters, max 100
- `collegeName`: Required, min 3 characters, max 200
- `role`: Required, min 2 characters, max 100
- `email`: Required, valid email format
- `phone`: Required, valid phone format
- `message`: Optional, max 1000 characters

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us. We'll respond within 24 hours.",
  "data": {
    "id": "contact_12345",
    "status": "new",
    "createdAt": "2025-01-05T10:30:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

**Status Codes:**
- `200`: Success
- `400`: Validation error
- `500`: Server error

---

### 2. Demo Request Submission

**Endpoint:** `POST /api/demo`

**Description:** Schedule demo/discovery call request

**Request Body:**
```json
{
  "collegeName": "XYZ Institute of Technology",
  "collegeType": "Engineering",
  "collegeSize": "3000-5000",
  "city": "Mumbai",
  "state": "Maharashtra",
  "contactPerson": "Dr. Priya Sharma",
  "role": "Dean of Students",
  "email": "dean@xyztech.edu.in",
  "phone": "+91-9876543210",
  "requirements": [
    "Need complete college portal",
    "Student Cell needs better tools",
    "Want to improve campus communication"
  ],
  "interestedPlan": "Professional Plan",
  "currentChallenge": "Managing 3000+ students with Excel and WhatsApp",
  "additionalMessage": "Looking to implement before next semester",
  "preferredContact": "Email",
  "urgency": "ASAP (within 24 hours)"
}
```

**Validation Rules:**
- `collegeName`: Required, min 3 characters
- `collegeType`: Required, must be one of predefined types
- `collegeSize`: Required, must be valid size range
- `city`: Required, min 2 characters
- `state`: Required, must be valid Indian state
- `contactPerson`: Required, min 2 characters
- `role`: Required, min 2 characters
- `email`: Required, valid email format
- `phone`: Required, valid phone format
- `requirements`: Optional, array
- `interestedPlan`: Optional, string
- `currentChallenge`: Optional, max 1000 characters
- `additionalMessage`: Optional, max 1000 characters
- `preferredContact`: Optional, one of: Email, Phone, WhatsApp, Video Call
- `urgency`: Optional, one of: ASAP, This week, Next week, Just exploring

**Success Response:**
```json
{
  "success": true,
  "message": "Demo request received! We'll contact you within 24 hours.",
  "data": {
    "id": "demo_67890",
    "status": "pending",
    "createdAt": "2025-01-05T10:30:00.000Z",
    "estimatedResponse": "2025-01-06T10:30:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    {
      "field": "collegeSize",
      "message": "Invalid college size format"
    }
  ]
}
```

**Status Codes:**
- `200`: Success
- `400`: Validation error
- `429`: Rate limit exceeded
- `500`: Server error

---

### 3. Custom Quote Request

**Endpoint:** `POST /api/quote`

**Description:** Request custom plan quote with specific service selection

**Request Body:**
```json
{
  "collegeName": "ABC University",
  "collegeSize": "5000+",
  "contactPerson": "Prof. Amit Verma",
  "role": "IT Head",
  "email": "it@abcuniversity.edu.in",
  "phone": "+91-9876543210",
  "selectedServices": [
    "College Portal",
    "Student Cell Software",
    "Bulk Email System",
    "Analytics Dashboard"
  ],
  "additionalRequirements": "Need multi-campus support and custom integrations",
  "budget": "50L - 1Cr annually",
  "timeline": "3-4 months",
  "currentSystem": "Legacy ERP system from 2010"
}
```

**Validation Rules:**
- `collegeName`: Required, min 3 characters
- `collegeSize`: Required, valid size
- `contactPerson`: Required, min 2 characters
- `role`: Required, min 2 characters
- `email`: Required, valid email
- `phone`: Required, valid phone
- `selectedServices`: Required, array, min 1 service
- `additionalRequirements`: Optional, max 2000 characters
- `budget`: Optional, string
- `timeline`: Optional, string
- `currentSystem`: Optional, max 500 characters

**Success Response:**
```json
{
  "success": true,
  "message": "Custom quote request received. Our team will prepare a detailed proposal within 48 hours.",
  "data": {
    "id": "quote_11223",
    "status": "pending",
    "createdAt": "2025-01-05T10:30:00.000Z",
    "servicesCount": 4,
    "estimatedProposal": "2025-01-07T10:30:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    {
      "field": "selectedServices",
      "message": "At least one service must be selected"
    }
  ]
}
```

**Status Codes:**
- `200`: Success
- `400`: Validation error
- `429`: Rate limit exceeded
- `500`: Server error

---

## Error Handling

### Standard Error Response Format
```json
{
  "success": false,
  "error": "Error message",
  "details": [
    {
      "field": "fieldName",
      "message": "Specific error message"
    }
  ],
  "timestamp": "2025-01-05T10:30:00.000Z"
}
```

### Common HTTP Status Codes
- `200`: Success
- `400`: Bad Request (validation error)
- `404`: Not Found
- `429`: Too Many Requests (rate limit)
- `500`: Internal Server Error

---

## Rate Limiting

**Limits:**
- Contact form: 5 requests per hour per IP
- Demo request: 3 requests per hour per IP
- Quote request: 3 requests per hour per IP

**Rate Limit Headers:**
```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 4
X-RateLimit-Reset: 1641384000
```

**Rate Limit Error Response:**
```json
{
  "success": false,
  "error": "Rate limit exceeded",
  "message": "Too many requests. Please try again in 1 hour.",
  "retryAfter": 3600
}
```

---

## Email Notifications

### Contact Form Submission
**To Admin:**
- Subject: "New Contact Inquiry - {collegeName}"
- Contains: All form details
- Template: Professional HTML email

**To User:**
- Subject: "Thank you for contacting College Tech - Univy"
- Contains: Confirmation message, next steps
- Template: Professional HTML email

---

### Demo Request Submission
**To Admin:**
- Subject: "New Demo Request - {collegeName}"
- Contains: All request details, urgency flag
- Template: Detailed HTML email with action items

**To User:**
- Subject: "Demo Request Received - College Tech Univy"
- Contains: Confirmation, what happens next, timeline
- Template: Professional HTML email

---

### Quote Request Submission
**To Admin:**
- Subject: "New Custom Quote Request - {collegeName}"
- Contains: Selected services, requirements, budget
- Template: Detailed HTML email

**To User:**
- Subject: "Custom Quote Request Received"
- Contains: Confirmation, timeline for proposal
- Template: Professional HTML email

---

## Data Models

### Contact Schema
```javascript
{
  _id: ObjectId,
  name: String,
  collegeName: String,
  role: String,
  email: String,
  phone: String,
  message: String,
  status: String (default: 'new'),
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

### Demo Request Schema
```javascript
{
  _id: ObjectId,
  collegeName: String,
  collegeType: String,
  collegeSize: String,
  city: String,
  state: String,
  contactPerson: String,
  role: String,
  email: String,
  phone: String,
  requirements: [String],
  interestedPlan: String,
  currentChallenge: String,
  additionalMessage: String,
  preferredContact: String,
  urgency: String,
  status: String (default: 'pending'),
  followedUp: Boolean (default: false),
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

### Custom Quote Schema
```javascript
{
  _id: ObjectId,
  collegeName: String,
  collegeSize: String,
  contactPerson: String,
  role: String,
  email: String,
  phone: String,
  selectedServices: [String],
  additionalRequirements: String,
  budget: String,
  timeline: String,
  currentSystem: String,
  status: String (default: 'pending'),
  proposalSent: Boolean (default: false),
  proposalDate: Date,
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Frontend Integration Examples

### Contact Form (axios)
```javascript
import axios from 'axios';

const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/contact`,
      formData
    );
    
    if (response.data.success) {
      // Show success message
      alert(response.data.message);
    }
  } catch (error) {
    if (error.response?.data) {
      // Handle validation errors
      const errors = error.response.data.details;
      errors.forEach(err => {
        console.error(`${err.field}: ${err.message}`);
      });
    } else {
      // Handle network errors
      console.error('Network error:', error.message);
    }
  }
};
```

---

### Demo Request (axios)
```javascript
const submitDemoRequest = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/demo`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    if (response.data.success) {
      return {
        success: true,
        message: response.data.message,
        requestId: response.data.data.id
      };
    }
  } catch (error) {
    if (error.response?.status === 429) {
      // Rate limit error
      return {
        success: false,
        error: 'Too many requests. Please try again later.'
      };
    }
    
    return {
      success: false,
      error: error.response?.data?.error || 'Submission failed'
    };
  }
};
```

---

## CORS Configuration

**Allowed Origins:**
- Development: `http://localhost:3000`
- Production: `https://collegetech-univy.com`

**Allowed Methods:**
- GET
- POST

**Allowed Headers:**
- Content-Type
- Authorization (future use)

---

## Security Measures

1. **Input Sanitization**
   - All inputs sanitized to prevent XSS
   - SQL injection protection (NoSQL)
   - HTML entities escaped

2. **Rate Limiting**
   - IP-based rate limiting
   - Prevents spam/abuse

3. **Email Validation**
   - Domain validation
   - Format validation
   - Disposable email blocking (optional)

4. **Data Encryption**
   - HTTPS only in production
   - Sensitive data encrypted at rest

5. **Error Handling**
   - No sensitive info in error messages
   - Generic error responses
   - Detailed logging for debugging

---

## Testing API Endpoints

### Using cURL

**Contact Form:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "collegeName": "Test College",
    "role": "Principal",
    "email": "test@example.com",
    "phone": "+91-9876543210",
    "message": "Test message"
  }'
```

**Demo Request:**
```bash
curl -X POST http://localhost:5000/api/demo \
  -H "Content-Type: application/json" \
  -d '{
    "collegeName": "Test College",
    "collegeType": "Engineering",
    "collegeSize": "1000-3000",
    "city": "Mumbai",
    "state": "Maharashtra",
    "contactPerson": "Test User",
    "role": "Dean",
    "email": "test@example.com",
    "phone": "+91-9876543210",
    "interestedPlan": "Professional Plan"
  }'
```

---

## Monitoring & Logging

**Logged Information:**
- All API requests (timestamp, endpoint, IP)
- Form submissions (without sensitive data in logs)
- Errors and exceptions
- Email send status
- Rate limit violations

**Log Format:**
```
[2025-01-05T10:30:00.000Z] POST /api/demo - 200 - 45ms - IP: 192.168.1.1
```

---

## Future Enhancements

**Planned Features:**
1. Admin dashboard for managing submissions
2. Email campaign integration
3. CRM integration (Zoho, Salesforce)
4. Analytics tracking
5. Automated follow-up emails
6. Status update notifications
7. Document upload capability

---

**API Version:** 1.0.0  
**Last Updated:** January 2025  
**Contact:** dev@collegetech-univy.com