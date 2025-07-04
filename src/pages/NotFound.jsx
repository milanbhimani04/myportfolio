import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-secondary-50 pt-20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
          <div className="text-6xl mb-4">🤔</div>
        </motion.div>
        
        <motion.h1
          className="heading-2 text-secondary-900 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Page Not Found
        </motion.h1>
        
        <motion.p
          className="body-large text-secondary-600 mb-8 max-w-md mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center"
          >
            <motion.svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </motion.svg>
            Go Home
          </Link>
          
          <Link
            to="/contact"
            className="btn-secondary inline-flex items-center justify-center"
          >
            Contact Me
          </Link>
        </motion.div>
        
        <motion.div
          className="mt-12 text-secondary-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-sm">
            If you think this is a mistake, please{' '}
            <Link to="/contact" className="text-primary-600 hover:text-primary-700 underline">
              let me know
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}