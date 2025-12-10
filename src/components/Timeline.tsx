import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Timeline() {
  const experiences = [
    {
      type: 'work',
      title: 'Co-Founder & Lead Developer',
      organization: 'DevOps Technologies',
      period: '2023 - Present',
      description: 'Leading development of modern software solutions, automation tools, and digital innovation projects. Managing a team of developers and driving technical strategy.',
      skills: ['Leadership', 'Full-Stack', 'DevOps', 'Cloud']
    },
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      organization: 'Tech Solutions Inc.',
      period: '2021 - 2023',
      description: 'Architected and developed responsive web applications using React.js and modern frontend technologies. Improved performance by 40% through optimization.',
      skills: ['React.js', 'TypeScript', 'UI/UX', 'Performance']
    },
    {
      type: 'education',
      title: 'Bachelor of Technology',
      organization: 'Computer Science & Engineering',
      period: '2017 - 2021',
      description: 'Specialized in Software Engineering and Web Technologies. Graduated with honors and led multiple technical projects.',
      skills: ['DSA', 'Web Dev', 'Databases', 'Networking']
    },
    {
      type: 'work',
      title: 'MERN Stack Developer',
      organization: 'Digital Innovations',
      period: '2020 - 2021',
      description: 'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Collaborated with cross-functional teams.',
      skills: ['MERN', 'REST APIs', 'MongoDB', 'Express']
    }
  ];

  return (
    <section id="timeline" className="relative py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Journey & Milestones
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-300">A timeline of growth, learning, and achievement</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 rounded-full shadow-lg shadow-cyan-500/50" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isWork = item.type === 'work';
              const Icon = isWork ? Briefcase : GraduationCap;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${isWork ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

                      <div className={`relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isLeft ? 'text-right' : 'text-left'}`}>
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${isWork ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-cyan-400">
                            <Calendar className="w-4 h-4" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-purple-400 font-semibold mb-3">
                          {item.organization}
                        </p>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          {item.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-700 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${isWork ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'} flex items-center justify-center shadow-lg border-4 border-gray-900`}>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${isWork ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'} animate-ping opacity-20`} />
                      <Icon className="w-8 h-8 text-white relative z-10" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
