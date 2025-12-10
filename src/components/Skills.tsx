import { Code, Palette, Database, Smartphone, Layers, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      skills: ['HTML', 'CSS', 'CSS3', 'JavaScript', 'React.js', 'TailwindCSS', 'Bootstrap']
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Supabase']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React Native', 'Responsive Design', 'Mobile-First']
    },
    {
      category: 'Design',
      icon: Palette,
      color: 'from-pink-500 to-purple-500',
      skills: ['Modern UI/UX', 'Custom Components', 'Futuristic Design']
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Sparkles className="w-12 h-12 text-cyan-400 mx-auto animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Skills & Technologies
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-300">Mastering modern technologies to build exceptional experiences</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl p-8 h-full transform perspective-1000">
                  <div className={`mb-6 p-4 bg-gradient-to-br ${category.color} rounded-2xl w-fit mx-auto transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white text-center mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.category}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="relative group/skill"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-lg blur opacity-0 group-hover/skill:opacity-50 transition-opacity duration-300`} />
                        <div className="relative bg-gray-700/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:translate-x-2">
                          <p className="text-gray-300 group-hover/skill:text-white transition-colors text-center font-medium">
                            {skill}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Scalable Architecture', 'Clean Code', 'Performance', 'Best Practices'].map((item, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center hover:scale-105">
                <Layers className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <p className="text-white font-semibold">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
