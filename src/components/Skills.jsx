import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "Bootstrap", "React.js", "JavaScript", "jQuery"],
      color: "blue"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["PHP", "Laravel", "Flask (Python)", "Python"],
      color: "green"
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MySQL"],
      color: "purple"
    },
    {
      title: "Other Technologies",
      icon: "🛠️",
      skills: ["OOP Concepts", "Git", "Version Control"],
      color: "orange"
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Teamwork", "Communication", "Adaptability", "Problem Solving"],
      color: "pink"
    }
  ];

  const technicalSkills = [
    { name: "React.js", level: 85, color: "primary" },
    { name: "Python/Flask", level: 80, color: "green" },
    { name: "PHP/Laravel", level: 75, color: "purple" },
    { name: "MySQL", level: 80, color: "orange" },
    { name: "JavaScript", level: 78, color: "yellow" },
    { name: "Git/Version Control", level: 85, color: "red" }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-primary-50 border-primary-200 text-primary-900",
      green: "bg-green-50 border-green-200 text-green-900",
      purple: "bg-accent-50 border-accent-200 text-accent-900",
      orange: "bg-orange-50 border-orange-200 text-orange-900",
      pink: "bg-pink-50 border-pink-200 text-pink-900"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getSkillBadgeColor = (color) => {
    const colorMap = {
      blue: "bg-primary-100 text-primary-800",
      green: "bg-green-100 text-green-800",
      purple: "bg-accent-100 text-accent-800",
      orange: "bg-orange-100 text-orange-800",
      pink: "bg-pink-100 text-pink-800"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getProgressBarColor = (color) => {
    const colorMap = {
      primary: "bg-primary-600",
      green: "bg-green-600",
      purple: "bg-accent-600",
      orange: "bg-orange-600",
      yellow: "bg-yellow-600",
      red: "bg-red-600"
    };
    return colorMap[color] || colorMap.primary;
  };

  const getProgressTextColor = (color) => {
    const colorMap = {
      primary: "text-primary-600",
      green: "text-green-600",
      purple: "text-accent-600",
      orange: "text-orange-600",
      yellow: "text-yellow-600",
      red: "text-red-600"
    };
    return colorMap[color] || colorMap.primary;
  };

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const skillBadgeVariants = {
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

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5
      }
    })
  };

  return (
    <section id="skills" className="section-padding bg-secondary-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="heading-2 text-secondary-900 mb-4" variants={itemVariants}>
            Skills & Technologies
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-4"
            variants={itemVariants}
          />
          <motion.p 
            className="body-large text-secondary-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A comprehensive overview of my technical expertise and professional capabilities
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} card-hover cursor-pointer`}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <div className="flex items-center mb-4">
                <motion.span 
                  className="text-3xl mr-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillBadgeColor(category.color)} cursor-pointer`}
                    variants={skillBadgeVariants}
                    whileHover="hover"
                    custom={skillIndex}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Proficiency */}
        <motion.div
          className="card p-8"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="heading-3 text-center text-secondary-900 mb-8"
            variants={itemVariants}
          >
            Technical Proficiency
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {technicalSkills.slice(0, 3).map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-secondary-700">{skill.name}</span>
                    <motion.span 
                      className={`font-semibold ${getProgressTextColor(skill.color)}`}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-3 rounded-full ${getProgressBarColor(skill.color)} relative`}
                      variants={progressBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          ease: 'easeInOut',
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: 1 + index * 0.2
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {technicalSkills.slice(3).map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-secondary-700">{skill.name}</span>
                    <motion.span 
                      className={`font-semibold ${getProgressTextColor(skill.color)}`}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-3 rounded-full ${getProgressBarColor(skill.color)} relative`}
                      variants={progressBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          ease: 'easeInOut',
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: 1.3 + index * 0.2
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 bg-primary-50 px-6 py-3 rounded-full border border-primary-200"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              ⚡
            </motion.span>
            <span className="text-primary-700 font-medium">
              Always learning and exploring new technologies
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}