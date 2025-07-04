import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      number: "2+",
      label: "Years Experience",
      icon: "🚀"
    },
    {
      number: "5+",
      label: "Projects Completed",
      icon: "💼"
    },
    {
      number: "8+",
      label: "Technologies Mastered",
      icon: "⚡"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: "⭐"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to solve complex problems.",
      icon: "💡",
      color: "blue"
    },
    {
      title: "Quality",
      description: "Committed to writing clean, maintainable code that follows industry best practices.",
      icon: "🎯",
      color: "green"
    },
    {
      title: "Collaboration",
      description: "Believe in the power of teamwork and effective communication to achieve great results.",
      icon: "🤝",
      color: "purple"
    },
    {
      title: "Growth",
      description: "Continuously learning and adapting to stay current with evolving technologies.",
      icon: "📈",
      color: "orange"
    }
  ];

  const timeline = [
    {
      title: "Joined Phoenix Solutions",
      description: "Currently working as a Web Developer, building modern web applications",
      date: "June 2025 - Present",
      color: "purple"
    },
    {
      title: "First Internship at Tusker AI",
      description: "Developed AI-powered traffic surveillance system using Python Flask",
      date: "Jan 2025 - May 2025",
      color: "green"
    },
    {
      title: "Started Web Development Journey",
      description: "Began learning programming fundamentals and web technologies",
      date: "2022",
      color: "blue"
    }
  ];

  const funFacts = [
    {
      icon: "☕",
      title: "Coffee Enthusiast",
      description: "Fueled by coffee and passionate about clean code",
      gradient: "from-amber-50 to-amber-100"
    },
    {
      icon: "🌱",
      title: "Continuous Learner",
      description: "Always exploring new technologies and frameworks",
      gradient: "from-green-50 to-green-100"
    },
    {
      icon: "🎯",
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative solutions",
      gradient: "from-purple-50 to-purple-100"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-primary-50 border-primary-200 text-primary-900",
      green: "bg-green-50 border-green-200 text-green-900",
      purple: "bg-accent-50 border-accent-200 text-accent-900",
      orange: "bg-orange-50 border-orange-200 text-orange-900"
    };
    return colorMap[color] || colorMap.blue;
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const floatingVariants = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="heading-2 text-secondary-900 mb-4" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary-600 mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="body-large text-secondary-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Passionate Full Stack Developer crafting innovative web solutions with modern technologies
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <div className="flex justify-center lg:justify-start">
              <motion.div 
                className="relative group"
                variants={profileVariants}
                whileHover="hover"
              >
                {/* Main Profile Card */}
                <div className="w-80 h-96 gradient-primary rounded-3xl flex flex-col items-center justify-center text-white shadow-large relative overflow-hidden">
                  <motion.div 
                    className="text-7xl font-bold mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    MB
                  </motion.div>
                  <div className="text-center px-6">
                    <h3 className="text-xl font-semibold mb-2">Milan Bhimani</h3>
                    <p className="text-primary-100">Full Stack Developer</p>
                    <p className="text-primary-200 text-sm mt-2">Ahmedabad, Gujarat</p>
                  </div>
                  
                  {/* Background decoration */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  variants={floatingVariants}
                  animate="float"
                >
                  <span className="text-2xl">👨‍💻</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    ...floatingVariants.float,
                    transition: { ...floatingVariants.float.transition, delay: 1 }
                  }}
                >
                  <span className="text-xl">🚀</span>
                </motion.div>

                {/* Background Decoration */}
                <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-primary-200 rounded-3xl opacity-20" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="heading-3 text-secondary-900">
                Hello! I'm{' '}
                <span className="text-gradient">Milan Bhimani</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  style={{ transformOrigin: '70% 70%' }}
                >
                  👋
                </motion.span>
              </h3>

              <div className="space-y-4 body-medium text-secondary-700 leading-relaxed">
                <p>
                  I'm a passionate IT professional with hands-on experience in both frontend and backend development.
                  My journey in web development has been driven by curiosity and a desire to create meaningful digital experiences.
                </p>

                <p>
                  I specialize in{' '}
                  <span className="font-semibold text-primary-600">Python (Flask)</span>,{' '}
                  <span className="font-semibold text-primary-600">PHP</span>,{' '}
                  <span className="font-semibold text-primary-600">Laravel</span>,{' '}
                  <span className="font-semibold text-primary-600">MySQL</span>,{' '}
                  <span className="font-semibold text-primary-600">React</span>, and more.
                  Each project is an opportunity to learn something new and push the boundaries of what's possible.
                </p>

                <p>
                  I thrive in collaborative environments and continuously strive to enhance my technical skill set.
                  My goal is to create innovative web solutions that not only meet requirements but exceed expectations
                  and make a real impact on users' lives.
                </p>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="card p-4 text-center card-hover"
                  variants={cardVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <motion.div 
                    className="text-2xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-secondary-900">{achievement.number}</div>
                  <div className="text-sm text-secondary-600">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
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
              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="heading-3 text-secondary-900 mb-4">My Core Values</h3>
            <p className="body-medium text-secondary-600">The principles that guide my work and professional approach</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 ${getColorClasses(value.color)} card-hover cursor-pointer`}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div 
                  className="text-3xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-sm leading-relaxed opacity-90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Journey Timeline */}
        <motion.div
          className="card p-8 md:p-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="heading-3 text-secondary-900 mb-4">My Journey</h3>
            <p className="body-medium text-secondary-600">Key milestones in my development career</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-300 transform md:-translate-x-0.5" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 1 ? 'md:justify-end' : ''}`}
                    variants={cardVariants}
                    custom={index}
                  >
                    <motion.div
                      className={`absolute left-2 md:left-1/2 w-4 h-4 bg-${item.color}-600 rounded-full transform md:-translate-x-2`}
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pl-8' : 'md:pr-8'}`}>
                      <motion.div
                        className="card p-6"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-bold text-secondary-900 mb-2">{item.title}</h4>
                        <p className="text-secondary-600 text-sm mb-2">{item.description}</p>
                        <span className={`text-${item.color}-600 text-sm font-medium`}>{item.date}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          className="mt-20 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 className="heading-4 text-secondary-900 mb-8" variants={itemVariants}>
            Fun Facts About Me
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${fact.gradient} p-6 rounded-xl card-hover`}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.div 
                  className="text-3xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {fact.icon}
                </motion.div>
                <h4 className="font-semibold text-secondary-900 mb-2">{fact.title}</h4>
                <p className="text-secondary-600 text-sm">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}