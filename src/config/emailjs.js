// EmailJS Configuration
// You can either:
// 1. Replace the values below directly, OR
// 2. Create a .env file with VITE_EMAILJS_* variables (recommended)

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
  thankYouTemplateId: import.meta.env.VITE_EMAILJS_THANKYOU_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template for receiving messages
// 5. Create a second template for sending thank you emails to users
// 6. Get your Public Key from the Integration page
// 7. Replace the values above with your actual credentials

/* 
Example Email Template Variables for Main Template (receives messages):
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{subject}} - Email subject
- {{message}} - Email message
- {{to_name}} - Your name (recipient)

Example Main Template:
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

---

Example Thank You Template Variables (sends confirmation to user):
- {{user_name}} - User's name
- {{user_email}} - User's email
- {{user_subject}} - User's subject
- {{reply_to_name}} - Your name
- {{reply_to_email}} - Your email

Example Thank You Template:
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
*/