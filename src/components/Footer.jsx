import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigation } from '../hooks/useNavigation';
import { FOOTER_LEGAL_ITEMS } from '../constants/routes';

export default function Footer() {
  const { navigateToContact } = useNavigation();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/projects" },
        { name: "Frontend Development", path: "/skills" },
        { name: "Backend Development", path: "/skills" },
        { name: "Full Stack Solutions", path: "/experience" },
        { name: "UI/UX Design", path: "/projects" },
        { name: "Consulting", path: "/contact" }
      ]
    },
    {
      title: "Technologies",
      links: [
        { name: "React.js", path: "/skills" },
        { name: "Python/Flask", path: "/skills" },
        { name: "PHP/Laravel", path: "/skills" },
        { name: "MySQL", path: "/skills" },
        { name: "JavaScript", path: "/skills" },
        { name: "Git/GitHub", path: "/skills" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/milanbhimani04",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/milan-bhimani",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:mbhimani0410@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Phone",
      url: "tel:+918401646441",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

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

  const socialVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      color: '#2563eb',
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <motion.div
        className="container-custom py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="mb-6">
              <Link to="/" className="text-2xl font-bold">
                <span className='text-primary-400'>Milan </span>Bhimani
              </Link>
              <p className="text-secondary-300 mt-2 text-sm">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Passionate Full Stack Developer crafting innovative web solutions with modern technologies. 
              Specializing in React, Python, PHP, and creating exceptional user experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-secondary-300">
                <svg className="w-4 h-4 mr-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Ahmedabad, Gujarat, India</span>
              </div>
              
              <div className="flex items-center text-secondary-300">
                <svg className="w-4 h-4 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:mbhimani0410@gmail.com" 
                  className="text-sm hover:text-primary-400 transition-colors duration-200"
                >
                  mbhimani0410@gmail.com
                </a>
              </div>
              
              <div className="flex items-center text-secondary-300">
                <svg className="w-4 h-4 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+918401646441" 
                  className="text-sm hover:text-primary-400 transition-colors duration-200"
                >
                  +91 84016 46441
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm block"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter/CTA Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-secondary-700"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Ready to work together?</h3>
              <p className="text-secondary-300">
                Let's discuss your next project and bring your ideas to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={navigateToContact}
                className="btn-primary flex-1 sm:flex-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.a
                href="/Milan_Bhimani_Resume.pdf"
                download
                className="btn-secondary flex-1 sm:flex-none text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-700 bg-secondary-950">
        <motion.div 
          className="container-custom py-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div 
              className="text-secondary-400 text-sm"
              variants={itemVariants}
            >
              <p>
                © {currentYear} Milan Bhimani. All rights reserved. 
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg hover:bg-secondary-800"
                  title={social.name}
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Additional Links */}
            <motion.div 
              className="flex space-x-6 text-sm"
              variants={itemVariants}
            >
              {FOOTER_LEGAL_ITEMS.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path} 
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Indicator */}
      <motion.div
        className="text-center py-2 bg-primary-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center text-white text-xs"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Scroll to top
        </motion.div>
      </motion.div>
    </footer>
  );
}