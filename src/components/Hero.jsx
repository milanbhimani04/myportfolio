import { motion } from 'framer-motion';
import { useNavigation } from '../hooks/useNavigation';

export default function Hero() {
  const { navigateToContact, navigateToProjects } = useNavigation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const profileVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const socialVariants = {
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

  const socialItemVariants = {
    hover: {
      scale: 1.2,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  const waveVariants = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
          animate={floatingVariants.float}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-full opacity-20"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 1 }
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary-300 rounded-full opacity-20"
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 2 }
          }}
        />
      </div>

      <motion.div
        className="container-custom text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8 md:space-y-12">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-large relative"
              variants={profileVariants}
              whileHover="hover"
            >
              <span className="relative z-10">MB</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-500 to-primary-600 rounded-full opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h1 className="heading-1 text-secondary-900">
              Hello, I'm{' '}
              <span className="text-gradient">Milan Bhimani</span>
              <motion.span
                className="inline-block ml-2"
                variants={waveVariants}
                animate="wave"
                style={{ transformOrigin: '70% 70%' }}
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.h2
              className="heading-3 text-primary-600 font-semibold"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h2>

            <motion.div
              className="flex items-center justify-center text-secondary-600 body-medium"
              variants={itemVariants}
            >
              <motion.svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </motion.svg>
              Ahmedabad, Gujarat, India
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="body-large text-secondary-700 max-w-3xl mx-auto text-balance"
            variants={itemVariants}
          >
            "Crafting clean, efficient, and innovative web solutions with modern technologies."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            variants={itemVariants}
          >
            <motion.button
              onClick={navigateToContact}
              className="btn-primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch
            </motion.button>
            <motion.button
              onClick={navigateToProjects}
              className="btn-secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 pt-8"
            variants={socialVariants}
          >
            {[
              {
                href: "https://github.com/milanbhimani04",
                icon: (
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                ),
                label: "GitHub"
              },
              {
                href: "https://linkedin.com/in/milan-bhimani",
                icon: (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                ),
                label: "LinkedIn"
              },
              {
                href: "mailto:mbhimani0410@gmail.com",
                icon: (
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                ),
                label: "Email",
                extraPath: <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="text-secondary-600 hover:text-primary-600 transition-colors duration-200 p-2 rounded-lg hover:bg-primary-50"
                variants={socialItemVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={social.label}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {social.icon}
                  {social.extraPath}
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* 
          //Scroll indicator
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="w-1 h-3 bg-secondary-400 rounded-full mt-2"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
}