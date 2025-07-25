# Contact Form Setup - Resend Integration

## 🚀 Implementation Complete

The contact form has been successfully implemented with Resend email service integration.

## ✅ What's Been Added

### 1. **Dependencies**
- `resend` - Email service for sending emails
- Enhanced form validation with Zod schema

### 2. **New Files Created**
- `app/api/contact/route.ts` - API endpoint for handling form submissions
- `components/contact-form.tsx` - Advanced contact form component
- `lib/validations/contact.ts` - Form validation schema and types
- `.env.local` - Environment variables (with your API keys)

### 3. **Updated Files**
- `app/page.tsx` - Replaced basic form with advanced ContactForm component
- `app/layout.tsx` - Added Toaster component for notifications
- `next.config.js` - Disabled static export to enable API routes

## 🔧 Configuration

### Environment Variables
```bash
RESEND_API_KEY=re_iqdT6iWP_4t59pZQzspa7xnb4qinYdMmk
CONTACT_EMAIL=contact@stoffeerberen.nl
```

### Email Templates
The system sends two emails:
1. **Business notification** - Sent to `contact@stoffeerberen.nl`
2. **Customer confirmation** - Sent to the form submitter

## 🎯 Features

### Form Validation
- **Name**: 2-50 characters required
- **Email**: Valid email format required
- **Phone**: 10-15 digits, Dutch format supported
- **Service**: Must select from predefined options
- **Message**: 10-1000 characters required

### User Experience
- Real-time validation with error messages
- Loading states during submission
- Success/error toast notifications
- Accessible form design with ARIA labels
- Mobile-responsive layout

### Services Options
- PVC Vloeren
- Tapijt Vloeren
- Professionele demontage van vloeren
- Vloer Reparatie
- Vloer Egalisatie
- Trap Bekleding
- Algemene offerte

## 🛠 Technical Details

### API Endpoint
- **URL**: `/api/contact`
- **Method**: POST
- **Content-Type**: application/json

### Form Fields
```typescript
{
  name: string;        // Full name
  email: string;       // Email address
  phone: string;       // Phone number
  service: string;     // Selected service
  message: string;     // Customer message
}
```

### Response Format
```typescript
// Success
{
  message: string;
  success: true;
}

// Error
{
  error: string;
  details?: ZodError[];  // For validation errors
}
```

## 🚀 Running the Application

1. **Development mode**:
```bash
npm run dev
```

2. **Production build**:
```bash
npm run build
npm start
```

## 📧 Email Configuration

### Resend Setup
1. ✅ API key configured in `.env.local`
2. ✅ Domain verification (using `stoffeerberen.nl`)
3. ✅ Professional email templates created

### Email Content
- **Professional HTML templates** with company branding
- **Customer confirmation** with project details
- **Business notification** with all contact information
- **Mobile-responsive** email design

## 🔐 Security & Error Handling

- **Server-side validation** using Zod schemas
- **Input sanitization** for all form fields
- **Robust error handling** with proper JSON parsing
- **API key validation** checks
- **Graceful error recovery** with user-friendly messages
- **Rate limiting** ready (can be added if needed)
- **CSRF protection** via Next.js built-in features

## 📱 Mobile Optimization

- Responsive form layout
- Touch-friendly input fields
- Optimized for mobile devices
- Accessible on all screen sizes

## 🎨 Design Integration

- Matches existing Stoffeerberen branding
- Blue color scheme (#2563eb)
- Consistent with site typography
- Professional business appearance

## ✨ Next Steps

The contact form is fully functional and ready for production use. The form will:

1. **Collect customer information** with proper validation
2. **Send professional emails** to both business and customer
3. **Provide immediate feedback** to users
4. **Store form data** in email format for follow-up

## 🆘 Troubleshooting

### Common Issues
1. **API routes not working**: Ensure `output: 'export'` is disabled in `next.config.js`
2. **Email not sending**: Check Resend API key and domain verification
3. **Form validation errors**: Check console for Zod validation details

### Testing
Test the form locally by:
1. Running `npm run dev`
2. Navigating to the contact section
3. Filling out and submitting the form
4. Checking for success/error messages

---

**Contact form implementation is complete and ready for production use!** 🎉