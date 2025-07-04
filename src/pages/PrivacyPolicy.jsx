import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function PrivacyPolicy() {
  const lastUpdated = "January 1, 2025";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <PageTransition className="pt-20">
      <div className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h1 className="heading-1 text-secondary-900 mb-4">Privacy Policy</h1>
              <p className="body-large text-secondary-600">
                Last updated: {lastUpdated}
              </p>
            </motion.div>

            {/* Content */}
            <motion.div className="prose prose-lg max-w-none" variants={itemVariants}>
              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Introduction</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  Welcome to Milan Bhimani's portfolio website. This Privacy Policy explains how I collect, 
                  use, and protect your personal information when you visit my website or contact me through 
                  the provided forms and contact methods.
                </p>
                <p className="text-secondary-700 leading-relaxed">
                  By using this website, you agree to the collection and use of information in accordance 
                  with this policy.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Information I Collect</h2>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Personal Information</h3>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  When you contact me through the contact form or email, I may collect:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone number (if provided)</li>
                  <li>Message content</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Automatically Collected Information</h3>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  When you visit my website, I may automatically collect:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                </ul>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">How I Use Your Information</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  I use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>To respond to your inquiries and contact requests</li>
                  <li>To provide information about my services</li>
                  <li>To improve my website and user experience</li>
                  <li>To analyze website usage and performance</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Information Sharing</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  I do not sell, trade, or otherwise transfer your personal information to third parties, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect my rights and safety</li>
                  <li>In connection with a business transfer (if applicable)</li>
                </ul>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Data Security</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  I implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Cookies and Tracking</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  This website may use cookies and similar tracking technologies to enhance user experience 
                  and analyze website traffic. You can control cookie settings through your browser preferences.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Your Rights</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Third-Party Services</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  This website may contain links to third-party websites or services. I am not responsible 
                  for the privacy practices of these external sites. Please review their privacy policies 
                  before providing any personal information.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Changes to This Policy</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  I may update this Privacy Policy from time to time. Any changes will be posted on this 
                  page with an updated revision date. I encourage you to review this policy periodically.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Contact Information</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how I handle your personal 
                  information, please contact me:
                </p>
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <p className="text-secondary-700 mb-2">
                    <strong>Email:</strong> mbhimani0410@gmail.com
                  </p>
                  <p className="text-secondary-700 mb-2">
                    <strong>Phone:</strong> +91 84016 46441
                  </p>
                  <p className="text-secondary-700">
                    <strong>Location:</strong> Ahmedabad, Gujarat, India
                  </p>
                </div>
              </motion.section>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}