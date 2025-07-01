# Dual Email Setup Guide

This guide explains how the dual email system works in your portfolio contact form.

## How It Works

When a user fills out and submits the contact form, **two emails are sent automatically**:

1. **Main Email** → Sent to you (Milan) with the user's message
2. **Thank You Email** → Sent to the user as confirmation

## Current Configuration

Your `.env` file should have these variables:

```env
# Main contact form template (receives messages)
VITE_EMAILJS_SERVICE_ID=service_plt6xir
VITE_EMAILJS_TEMPLATE_ID=template_8n2mtaz
VITE_EMAILJS_PUBLIC_KEY=TKujNUQpJ-AHqO-3h

# Auto-reply template (sends confirmation to sender)
VITE_EMAILJS_THANKYOU_TEMPLATE_ID=template_en0tkby
```

## Email Templates Setup

### 1. Main Template (template_8n2mtaz)
**Purpose**: Receives user messages
**Sent to**: Your email (mbhimani0410@gmail.com)
**Variables used**:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{subject}}` - Message subject
- `{{message}}` - User's message
- `{{to_name}}` - Your name (Milan Bhimani)

**Example template content**:
```
Subject: New Contact Form Message: {{subject}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

### 2. Thank You Template (template_en0tkby)
**Purpose**: Sends confirmation to users
**Sent to**: User's email address
**Variables used**:
- `{{user_name}}` - User's name
- `{{user_email}}` - User's email
- `{{user_subject}}` - User's subject
- `{{reply_to_name}}` - Your name
- `{{reply_to_email}}` - Your email

**Example template content**:
```
Subject: Thank you for contacting me!

Hello {{user_name}},

Thank you for reaching out through my portfolio! I have received your message regarding "{{user_subject}}" and I appreciate you taking the time to contact me.

I will review your message and get back to you as soon as possible, typically within 24-48 hours.

In the meantime, feel free to check out my other projects on my portfolio or connect with me on LinkedIn.

Best regards,
{{reply_to_name}}
{{reply_to_email}}

---
This is an automated response. Please do not reply to this email.
```

## Code Implementation

The Contact component now handles both emails in the `handleSubmit` function:

```javascript
// Send the main email to you
await emailjs.send(serviceId, templateId, mainTemplateParams, publicKey);

// Send thank you email to the user
if (thankYouTemplateId && thankYouTemplateId !== 'YOUR_THANKYOU_TEMPLATE_ID') {
  const thankYouTemplateParams = {
    user_name: formData.name,
    user_email: formData.email,
    user_subject: formData.subject,
    reply_to_name: 'Milan Bhimani',
    reply_to_email: 'mbhimani0410@gmail.com',
    to_email: formData.email
  };

  try {
    await emailjs.send(serviceId, thankYouTemplateId, thankYouTemplateParams, publicKey);
  } catch (thankYouError) {
    console.warn('Main email sent, but thank you email failed:', thankYouError);
    // Don't throw error - main email was successful
  }
}
```

## Error Handling

- If the **main email fails**, the user sees an error message
- If the **main email succeeds** but **thank you email fails**, the user still sees a success message
- The thank you email failure is logged as a warning but doesn't affect the user experience
- This ensures the primary functionality (receiving messages) always works

## User Experience

When a user submits the form successfully, they see:
> "Thank you for your message! I've received it and will get back to you soon. You should also receive a confirmation email shortly."

## Testing

To test the dual email system:

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check that you receive the main email with the user's message
4. Check that the user receives the thank you email
5. Verify both emails contain the correct information

## Troubleshooting

### Thank You Email Not Sending

1. **Check Template ID**: Ensure `VITE_EMAILJS_THANKYOU_TEMPLATE_ID` is correct
2. **Check Template Variables**: Make sure your EmailJS template uses the correct variable names
3. **Check EmailJS Dashboard**: Verify the template exists and is active
4. **Check Console**: Look for warning messages about thank you email failures

### Template Variable Mapping

Make sure your EmailJS templates use these exact variable names:

**Main Template Variables**:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{to_name}}`

**Thank You Template Variables**:
- `{{user_name}}`
- `{{user_email}}`
- `{{user_subject}}`
- `{{reply_to_name}}`
- `{{reply_to_email}}`

## Benefits

✅ **Professional**: Users get immediate confirmation
✅ **User-friendly**: Clear communication about next steps
✅ **Reliable**: Main functionality works even if thank you email fails
✅ **Automated**: No manual intervention required
✅ **Branded**: Thank you email reinforces your professional image

## Next Steps

1. Test the contact form thoroughly
2. Customize the thank you email template to match your brand
3. Consider adding more personalization to the thank you message
4. Monitor EmailJS usage to ensure you stay within limits

Your dual email system is now ready to provide a professional contact experience for your portfolio visitors!