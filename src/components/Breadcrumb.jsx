import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Breadcrumb() {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const breadcrumbVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const getPageName = (pathname) => {
    const names = {
      'about': 'About',
      'skills': 'Skills',
      'experience': 'Experience',
      'projects': 'Projects',
      'contact': 'Contact'
    };
    return names[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };

  return (
    <motion.nav
      className="bg-secondary-50 border-b border-secondary-200 py-4"
      variants={breadcrumbVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-custom">
        <motion.ol className="flex items-center space-x-2 text-sm">
          <motion.li variants={itemVariants}>
            <Link
              to="/"
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 flex items-center"
            >
              <motion.svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </motion.svg>
              Home
            </Link>
          </motion.li>
          
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <motion.li
                key={pathname}
                className="flex items-center"
                variants={itemVariants}
                custom={index}
              >
                <motion.svg
                  className="w-4 h-4 text-secondary-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </motion.svg>
                
                {isLast ? (
                  <span className="text-secondary-900 font-medium">
                    {getPageName(pathname)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {getPageName(pathname)}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </motion.nav>
  );
}