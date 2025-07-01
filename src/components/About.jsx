export default function About() {
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

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-900",
      green: "bg-green-50 border-green-200 text-green-900",
      purple: "bg-purple-50 border-purple-200 text-purple-900",
      orange: "bg-orange-50 border-orange-200 text-orange-900"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Full Stack Developer crafting innovative web solutions with modern technologies
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <div className="relative">
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Main Profile Card */}
                <div className="w-80 h-96 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="text-7xl font-bold mb-4">MB</div>
                  <div className="text-center px-6">
                    <h3 className="text-xl font-semibold mb-2">Milan Bhimani</h3>
                    <p className="text-blue-100">Full Stack Developer</p>
                    <p className="text-blue-200 text-sm mt-2">Ahmedabad, Gujarat</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">🚀</span>
                </div>

                {/* Background Decoration */}
                <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-blue-200 rounded-3xl opacity-20"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Hello! I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Milan Bhimani
                </span> <span className="animate-wave">👋</span>
              </h3>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate IT professional with hands-on experience in both frontend and backend development.
                  My journey in web development has been driven by curiosity and a desire to create meaningful digital experiences.
                </p>

                <p>
                  I specialize in <span className="font-semibold text-blue-600">Python (Flask)</span>,
                  <span className="font-semibold text-blue-600"> PHP</span>,
                  <span className="font-semibold text-blue-600"> Laravel</span>,
                  <span className="font-semibold text-blue-600"> MySQL</span>,
                  <span className="font-semibold text-blue-600"> React</span>, and more.
                  Each project is an opportunity to learn something new and push the boundaries of what's possible.
                </p>

                <p>
                  I thrive in collaborative environments and continuously strive to enhance my technical skill set.
                  My goal is to create innovative web solutions that not only meet requirements but exceed expectations
                  and make a real impact on users' lives.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl text-center hover:bg-gray-100 transition-colors duration-200">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Let's Work Together
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Core Values</h3>
            <p className="text-lg text-gray-600">The principles that guide my work and professional approach</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${getColorClasses(value.color)} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-sm leading-relaxed opacity-90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Journey Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h3>
            <p className="text-lg text-gray-600">Key milestones in my development career</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-300 transform md:-translate-x-0.5"></div>

              <div className="space-y-8">
                {/* Timeline Item 1 */}
                <div className="relative flex items-center">
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform md:-translate-x-2"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Joined Phoenix Solutions</h4>
                      <p className="text-gray-600 text-sm">Currently working as a Web Developer, building modern web applications</p>
                      <span className="text-purple-600 text-sm font-medium">June 2025 - Present</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center md:justify-end">
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-green-600 rounded-full transform md:-translate-x-2"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">First Internship at Tusker AI</h4>
                      <p className="text-gray-600 text-sm">Developed AI-powered traffic surveillance system using Python Flask</p>
                      <span className="text-green-600 text-sm font-medium">Jan 2025 - May 2025</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}

                <div className="relative flex items-center">
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-2"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Started Web Development Journey</h4>
                      <p className="text-gray-600 text-sm">Began learning programming fundamentals and web technologies</p>
                      <span className="text-blue-600 text-sm font-medium">2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Fun Facts About Me</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-3xl mb-3">☕</div>
              <h4 className="font-semibold text-gray-900 mb-2">Coffee Enthusiast</h4>
              <p className="text-gray-600 text-sm">Fueled by coffee and passionate about clean code</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Learner</h4>
              <p className="text-gray-600 text-sm">Always exploring new technologies and frameworks</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">Problem Solver</h4>
              <p className="text-gray-600 text-sm">Love tackling complex challenges with creative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}