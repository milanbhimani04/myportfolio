import { emailjsConfig } from '../config/emailjs';

// This is a test component to verify EmailJS configuration
// Remove this file after confirming EmailJS is working

export default function EmailJSTest() {
  const { serviceId, templateId, thankYouTemplateId, publicKey } = emailjsConfig;

  const isMainConfigured =
    serviceId !== 'YOUR_SERVICE_ID' &&
    templateId !== 'YOUR_TEMPLATE_ID' &&
    publicKey !== 'YOUR_PUBLIC_KEY';

  const isThankYouConfigured = 
    thankYouTemplateId && 
    thankYouTemplateId !== 'YOUR_THANKYOU_TEMPLATE_ID';

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-sm">
      <h3 className="font-bold text-sm mb-2">EmailJS Configuration Status</h3>
      <div className="space-y-1 text-xs">
        <div className={`flex items-center ${isMainConfigured ? 'text-green-600' : 'text-red-600'}`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${isMainConfigured ? 'bg-green-500' : 'bg-red-500'}`}></div>
          Main Email: {isMainConfigured ? 'Configured' : 'Not Configured'}
        </div>
        <div className={`flex items-center ${isThankYouConfigured ? 'text-green-600' : 'text-yellow-600'}`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${isThankYouConfigured ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          Thank You Email: {isThankYouConfigured ? 'Configured' : 'Optional'}
        </div>
        <div className="text-gray-600 mt-2">
          Service ID: {serviceId === 'YOUR_SERVICE_ID' ? '❌ Not set' : '✅ Set'}
        </div>
        <div className="text-gray-600">
          Main Template: {templateId === 'YOUR_TEMPLATE_ID' ? '❌ Not set' : '✅ Set'}
        </div>
        <div className="text-gray-600">
          Thank You Template: {isThankYouConfigured ? '✅ Set' : '⚠️ Not set'}
        </div>
        <div className="text-gray-600">
          Public Key: {publicKey === 'YOUR_PUBLIC_KEY' ? '❌ Not set' : '✅ Set'}
        </div>
      </div>
      {!isMainConfigured && (
        <p className="text-xs text-gray-500 mt-2">
          Check EMAILJS_SETUP.md for configuration instructions
        </p>
      )}
      {isMainConfigured && !isThankYouConfigured && (
        <p className="text-xs text-yellow-600 mt-2">
          Thank you email is optional but recommended for better UX
        </p>
      )}
    </div>
  );
}