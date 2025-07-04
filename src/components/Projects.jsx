import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "DriveTracker",
      subtitle: "AI-Powered Traffic Surveillance System",
      company: "Tusker AI Internship",
      description: "An intelligent traffic monitoring system that uses AI to analyze and track vehicle movements, providing real-time insights for traffic management and surveillance purposes.",
      technologies: ["Python", "Flask", "MySQL", "AI/ML", "Admin Panel"],
      features: [
        "Real-time traffic monitoring and analysis",
        "AI-powered vehicle detection and tracking",
        "Comprehensive admin panel for system management",
        "MySQL database for data storage and retrieval",
        "RESTful API architecture"
      ],
      status: "Professional Project",
      color: "blue",
      icon: "🚗"
    },
    {
      title: "LENSATION",
      subtitle: "Photo Sharing & Earning Platform",
      company: "Final Year Project",
      description: "A comprehensive photo sharing platform where users can upload, share, and monetize their photography. Built as a full-stack web application with modern technologies.",
      technologies: ["Full-Stack", "Web Development", "Database Design", "User Authentication"],
      features: [
        "User registration and authentication system",
        "Photo upload and sharing functionality",
        "Monetization features for photographers",
        "Responsive design for all devices",
        "Social interaction features"
      ],
      status: "Academic Project",
      color: "green",
      icon: "📸"
    },
    {
      title: "SAHAS",
      subtitle: "Human & Animal Assistance Platform",
      company: "GLS University",
      description: "A web solution designed to facilitate assistance for both humans and animals through government trusts and NGOs, creating a bridge between those in need and available resources.",
      technologies: ["Web Development", "Database Management", "Government Integration"],
      features: [
        "Multi-stakeholder platform design",
        "Government trust integration",
        "Resource management system",
        "Emergency assistance features",
        "Community engagement tools"
      ],
      status: "University Project",
      color: "purple",
      icon: "🤝"
    }
  ];

  const stats = [
    { number: "3", label: "Major Projects", color: "primary" },
    { number: "100%", label: "Success Rate", color: "green" },
    { number: "5+", label: "Technologies Used", color: "purple" },
    { number: "2+", label: "Years Development", color: "orange" }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-primary-50",
        border: "border-primary-200",
        text: "text-primary-900",
        badge: "bg-primary-100 text-primary-800",
        button: "bg-primary-600 hover:bg-primary-700"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-900",
        badge: "bg-green-100 text-green-800",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        bg: "bg-accent-50",
        border: "border-accent-200",
        text: "text-accent-900",
        badge: "bg-accent-100 text-accent-800",
        button: "bg-accent-600 hover:bg-accent-700"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getStatColor = (color) => {
    const colorMap = {
      primary: "text-primary-600",
      green: "text-green-600",
      purple: "text-accent-600",
      orange: "text-orange-600"
    };
    return colorMap[color] || colorMap.primary;
  };

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

  const projectCardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  const techBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const statVariants = {
    hidden: { y: 30, opacity: 0 },
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
    }
  };

  return (
    <section id="projects" className="section-padding bg-secondary-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="heading-2 text-secondary-900 mb-4" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-4"
            variants={itemVariants}
          />
          <motion.p 
            className="body-large text-secondary-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A showcase of my technical expertise through real-world applications and innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 card-hover relative overflow-hidden`}
                variants={projectCardVariants}
                whileHover="hover"
                custom={index}
              >
                {/* Background decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-6xl">{project.icon}</div>
                </motion.div>

                {/* Project Header */}
                <div className="mb-4 relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <motion.h3 
                      className={`text-xl font-bold ${colors.text}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${colors.badge}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.status}
                    </motion.span>
                  </div>
                  <p className="text-secondary-600 font-medium mb-1">{project.subtitle}</p>
                  <p className="text-sm text-secondary-500">{project.company}</p>
                </div>

                {/* Description */}
                <motion.p 
                  className="text-secondary-700 mb-4 leading-relaxed"
                  variants={itemVariants}
                >
                  {project.description}
                </motion.p>

                {/* Key Features */}
                <motion.div 
                  className="mb-4"
                  variants={containerVariants}
                >
                  <h4 className="font-semibold text-secondary-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start text-sm text-secondary-600"
                        variants={featureVariants}
                        custom={featureIndex}
                      >
                        <motion.svg
                          className="w-3 h-3 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div 
                  className="mb-6"
                  variants={containerVariants}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-white text-secondary-700 text-xs font-medium rounded border cursor-pointer"
                        variants={techBadgeVariants}
                        whileHover="hover"
                        custom={techIndex}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    className={`flex-1 ${colors.button} text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm`}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 border border-secondary-300 text-secondary-700 rounded-lg hover:bg-secondary-50 transition-colors duration-200"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="mt-16 card p-8"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="heading-3 text-center text-secondary-900 mb-8"
            variants={itemVariants}
          >
            Project Impact
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div 
                  className={`text-3xl font-bold mb-2 ${getStatColor(stat.color)}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p 
            className="body-medium text-secondary-600 mb-6"
            variants={itemVariants}
          >
            Interested in seeing more of my work or discussing a project?
          </motion.p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Let's Talk
            <motion.svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}