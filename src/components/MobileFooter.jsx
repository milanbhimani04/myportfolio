import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants/routes';

export default function MobileFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/milanbhimani04",
      icon: "🔗"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/milan-bhimani",
      icon: "💼"
    },
    {
      name: "Email",
      url: "mailto:mbhimani0410@gmail.com",
      icon: "📧"
    }
  ];

  return (
    <motion.footer 
      className="md:hidden bg-secondary-900 text-white py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        {/* Brand */}
        <div className="text-center mb-6">
          <Link to="/" className="text-xl font-bold">
            <span className='text-primary-400'>Milan </span>Bhimani
          </Link>
          <p className="text-secondary-300 text-sm mt-1">Full Stack Developer</p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {NAV_ITEMS.slice(0, 6).map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-center py-2 px-3 text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target={social.url.startsWith('http') ? '_blank' : '_self'}
              rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="text-2xl hover:scale-110 transition-transform duration-200"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-secondary-400 text-xs">
          <p>© {currentYear} Milan Bhimani</p>
          <p className="mt-1">All rights reserved</p>
        </div>
      </div>
    </motion.footer>
  );
}