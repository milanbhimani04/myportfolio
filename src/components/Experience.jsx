import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Web Developer",
      company: "ePhoenix Solutions",
      period: "June 2025 – Present",
      type: "Full-time",
      description: [
        "Developing and maintaining web applications using modern technologies",
        "Collaborating with cross-functional teams to deliver high-quality solutions",
        "Implementing responsive designs and optimizing user experiences",
        "Working with both frontend and backend technologies"
      ],
      technologies: ["React.js", "PHP", "Laravel", "MySQL", "JavaScript"],
      status: "current"
    },
    {
      title: "Python Developer Intern",
      company: "Tusker AI Pvt. Ltd.",
      period: "Jan 2025 – May 2025",
      type: "Internship",
      description: [
        "Developed AI-powered traffic surveillance system (DriveTracker)",
        "Built backend systems using Python Flask framework",
        "Designed and implemented MySQL database architecture",
        "Created admin panel for system management and monitoring",
        "Gained hands-on experience with AI/ML integration in web applications"
      ],
      technologies: ["Python", "Flask", "MySQL", "AI/ML", "Admin Panel"],
      status: "completed"
    }
  ];

  const stats = [
    { number: "1+", label: "Years Experience", color: "primary" },
    { number: "3+", label: "Projects Completed", color: "green" },
    { number: "5+", label: "Technologies", color: "purple" },
    { number: "100%", label: "Commitment", color: "orange" }
  ];

  const getStatColor = (color) => {
    const colorMap = {
      primary: "bg-primary-50 text-primary-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-accent-50 text-accent-600",
      orange: "bg-orange-50 text-orange-600"
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

  const experienceCardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const timelineDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
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
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="experience" className="section-padding bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="heading-2 text-secondary-900 mb-4" variants={itemVariants}>
            Work Experience
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-4"
            variants={itemVariants}
          />
          <motion.p 
            className="body-large text-secondary-600"
            variants={itemVariants}
          >
            My professional journey and key contributions
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative flex items-start"
                variants={experienceCardVariants}
                custom={index}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 z-10 ${
                    exp.status === 'current' 
                      ? 'bg-green-500 border-green-200' 
                      : 'bg-primary-500 border-primary-200'
                  }`}
                  variants={timelineDotVariants}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Content */}
                <motion.div
                  className="ml-16 card p-6 card-hover w-full"
                  whileHover="hover"
                  variants={experienceCardVariants}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <motion.h3 
                        className="text-xl font-bold text-secondary-900"
                        whileHover={{ color: '#2563eb' }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <p className="text-lg text-primary-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <span className="text-secondary-600 font-medium">{exp.period}</span>
                      <motion.span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                          exp.status === 'current'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-primary-100 text-primary-800'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.type}
                      </motion.span>
                    </div>
                  </div>

                  <motion.ul 
                    className="space-y-2 mb-4"
                    variants={containerVariants}
                  >
                    {exp.description.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        className="flex items-start"
                        variants={itemVariants}
                        custom={itemIndex}
                      >
                        <motion.svg
                          className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </motion.svg>
                        <span className="text-secondary-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full cursor-pointer"
                        variants={techBadgeVariants}
                        whileHover="hover"
                        custom={techIndex}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Career Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-4 rounded-lg card-hover ${getStatColor(stat.color)}`}
              variants={statVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div 
                className="text-2xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-secondary-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-50 px-6 py-3 rounded-full border border-primary-200"
            whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              🚀
            </motion.span>
            <span className="text-primary-700 font-medium">
              Ready to take on new challenges and opportunities
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}