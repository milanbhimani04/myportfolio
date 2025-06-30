export default function Projects() {
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
      color: "blue"
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
      color: "green"
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
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-900",
        badge: "bg-blue-100 text-blue-800",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-900",
        badge: "bg-green-100 text-green-800",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-900",
        badge: "bg-purple-100 text-purple-800",
        button: "bg-purple-600 hover:bg-purple-700"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold ${colors.text}`}>{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-1">{project.subtitle}</p>
                  <p className="text-sm text-gray-500">{project.company}</p>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <svg className="w-3 h-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white text-gray-700 text-xs font-medium rounded border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex space-x-3">
                  <button className={`flex-1 ${colors.button} text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm`}>
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Project Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">2+</div>
              <div className="text-gray-600">Years Development</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Let's Talk
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}