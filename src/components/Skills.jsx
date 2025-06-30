export default function Skills() {
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

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-900",
      green: "bg-green-50 border-green-200 text-green-900",
      purple: "bg-purple-50 border-purple-200 text-purple-900",
      orange: "bg-orange-50 border-orange-200 text-orange-900",
      pink: "bg-pink-50 border-pink-200 text-pink-900"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getSkillBadgeColor = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800",
      green: "bg-green-100 text-green-800",
      purple: "bg-purple-100 text-purple-800",
      orange: "bg-orange-100 text-orange-800",
      pink: "bg-pink-100 text-pink-800"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillBadgeColor(category.color)} transition-all duration-200 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">React.js</span>
                  <span className="text-blue-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">Python/Flask</span>
                  <span className="text-green-600 font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">PHP/Laravel</span>
                  <span className="text-purple-600 font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">MySQL</span>
                  <span className="text-orange-600 font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">JavaScript</span>
                  <span className="text-yellow-600 font-semibold">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">Git/Version Control</span>
                  <span className="text-red-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}