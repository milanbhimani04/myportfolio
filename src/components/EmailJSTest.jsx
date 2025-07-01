import { emailjsConfig } from '../config/emailjs';

// This is a test component to verify EmailJS configuration
// Remove this file after confirming EmailJS is working

export default function EmailJSTest() {
  const { serviceId, templateId, publicKey } = emailjsConfig;

  const isConfigured =
    serviceId !== 'YOUR_SERVICE_ID' &&
    templateId !== 'YOUR_TEMPLATE_ID' &&
    publicKey !== 'YOUR_PUBLIC_KEY';

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-sm">
      <h3 className="font-bold text-sm mb-2">EmailJS Configuration Status</h3>
      <div className="space-y-1 text-xs">
        <div className={`flex items-center ${isConfigured ? 'text-green-600' : 'text-red-600'}`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${isConfigured ? 'bg-green-500' : 'bg-red-500'}`}></div>
          {isConfigured ? 'Configured' : 'Not Configured'}
        </div>
        <div className="text-gray-600">
          Service ID: {serviceId === 'YOUR_SERVICE_ID' ? '❌ Not set' : '✅ Set'}
        </div>
        <div className="text-gray-600">
          Template ID: {templateId === 'YOUR_TEMPLATE_ID' ? '❌ Not set' : '✅ Set'}
        </div>
        <div className="text-gray-600">
          Public Key: {publicKey === 'YOUR_PUBLIC_KEY' ? '❌ Not set' : '✅ Set'}
        </div>
      </div>
      {!isConfigured && (
        <p className="text-xs text-gray-500 mt-2">
          Check EMAILJS_SETUP.md for configuration instructions
        </p>
      )}
    </div>
  );
}