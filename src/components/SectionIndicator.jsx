import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useScrollSpy, useSmoothScroll } from '../hooks/useScrollSpy';

export default function SectionIndicator() {
  const location = useLocation();
  const { scrollToSection } = useSmoothScroll();
  
  // Only show on home page
  if (location.pathname !== '/') {
    return null;
  }

  const sections = [
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'about', name: 'About', icon: '👨‍💻' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'contact', name: 'Contact', icon: '📧' }
  ];

  const sectionIds = sections.map(section => section.id);
  const activeSection = useScrollSpy(sectionIds, { offset: 100 });

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const indicatorVariants = {
    inactive: {
      scale: 0.8,
      backgroundColor: 'rgba(148, 163, 184, 0.3)',
      transition: { duration: 0.2 }
    },
    active: {
      scale: 1.2,
      backgroundColor: 'rgba(37, 99, 235, 1)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          
          return (
            <motion.div
              key={section.id}
              className="relative group"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => scrollToSection(section.id)}
                className="w-4 h-4 rounded-full border-2 border-secondary-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                variants={indicatorVariants}
                animate={isActive ? 'active' : 'inactive'}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to ${section.name} section`}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-primary-600 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
              
              {/* Tooltip */}
              <motion.div
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-secondary-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">{section.icon}</span>
                {section.name}
                
                {/* Arrow */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-secondary-900 rotate-45" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Progress line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary-200 transform -translate-x-1/2 -z-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
}