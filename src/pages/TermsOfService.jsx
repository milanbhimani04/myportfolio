import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function TermsOfService() {
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
              <h1 className="heading-1 text-secondary-900 mb-4">Terms of Service</h1>
              <p className="body-large text-secondary-600">
                Last updated: {lastUpdated}
              </p>
            </motion.div>

            {/* Content */}
            <motion.div className="prose prose-lg max-w-none" variants={itemVariants}>
              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Agreement to Terms</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  By accessing and using Milan Bhimani's portfolio website, you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide by 
                  the above, please do not use this service.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Use License</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on Milan Bhimani's 
                  website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="text-secondary-700 leading-relaxed">
                  This license shall automatically terminate if you violate any of these restrictions and 
                  may be terminated by Milan Bhimani at any time.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Disclaimer</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  The materials on Milan Bhimani's website are provided on an 'as is' basis. Milan Bhimani 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                  warranties including without limitation, implied warranties or conditions of merchantability, 
                  fitness for a particular purpose, or non-infringement of intellectual property or other 
                  violation of rights.
                </p>
                <p className="text-secondary-700 leading-relaxed">
                  Further, Milan Bhimani does not warrant or make any representations concerning the accuracy, 
                  likely results, or reliability of the use of the materials on its website or otherwise 
                  relating to such materials or on any sites linked to this site.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Limitations</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  In no event shall Milan Bhimani or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) 
                  arising out of the use or inability to use the materials on Milan Bhimani's website, even 
                  if Milan Bhimani or a Milan Bhimani authorized representative has been notified orally or 
                  in writing of the possibility of such damage.
                </p>
                <p className="text-secondary-700 leading-relaxed">
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations 
                  of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Accuracy of Materials</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  The materials appearing on Milan Bhimani's website could include technical, typographical, 
                  or photographic errors. Milan Bhimani does not warrant that any of the materials on its 
                  website are accurate, complete, or current. Milan Bhimani may make changes to the materials 
                  contained on its website at any time without notice.
                </p>
                <p className="text-secondary-700 leading-relaxed">
                  However, Milan Bhimani does not make any commitment to update the materials.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Links</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  Milan Bhimani has not reviewed all of the sites linked to this website and is not 
                  responsible for the contents of any such linked site. The inclusion of any link does 
                  not imply endorsement by Milan Bhimani of the site. Use of any such linked website is 
                  at the user's own risk.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Modifications</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  Milan Bhimani may revise these terms of service for its website at any time without notice. 
                  By using this website, you are agreeing to be bound by the then current version of these 
                  terms of service.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Governing Law</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of 
                  India and you irrevocably submit to the exclusive jurisdiction of the courts in that 
                  state or location.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Professional Services</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  If you engage Milan Bhimani for professional web development services, additional terms 
                  and conditions will apply as outlined in separate service agreements. These terms of 
                  service apply specifically to the use of this portfolio website.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Intellectual Property</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  and software, is the property of Milan Bhimani and is protected by copyright and other 
                  intellectual property laws. You may not reproduce, distribute, or create derivative works 
                  from this content without explicit written permission.
                </p>
              </motion.section>

              <motion.section className="mb-8" variants={itemVariants}>
                <h2 className="heading-3 text-secondary-900 mb-4">Contact Information</h2>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact me:
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