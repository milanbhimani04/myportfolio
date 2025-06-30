export default function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Phoenix Solutions",
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

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            My professional journey and key contributions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  exp.status === 'current' 
                    ? 'bg-green-500 border-green-200' 
                    : 'bg-blue-500 border-blue-200'
                }`}></div>

                {/* Content */}
                <div className="ml-16 bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <span className="text-gray-600 font-medium">{exp.period}</span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                        exp.status === 'current'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">8+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">100%</div>
            <div className="text-gray-600">Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
}