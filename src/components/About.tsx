import { Rocket, Target, Zap, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Pioneering modern solutions with cutting-edge technologies and creative approaches to complex challenges.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering scalable, high-performance applications that exceed client expectations.'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Rapid development with attention to detail, ensuring quality without compromising on speed.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to best practices, clean code, and exceptional user experiences in every project.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  As a passionate MERN Stack Developer and React.js Specialist, I bring ideas to life through elegant code and stunning interfaces. My expertise spans the full stack, with a special focus on creating intuitive, high-performance frontend experiences that users love.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Entrepreneurial Spirit</h3>
                <p className="text-gray-300 leading-relaxed">
                  As Co-Founder of DevOps Technologies, I'm building a startup focused on modern software solutions, automation, and digital innovation. We're dedicated to helping businesses transform their digital presence through cutting-edge technology.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="mb-4 p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl w-fit">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">My Mission</h3>
            <p className="text-gray-300 text-center text-lg leading-relaxed max-w-4xl mx-auto">
              To craft exceptional digital experiences that combine beautiful design with powerful functionality. I believe in writing clean, maintainable code and creating interfaces that are not just visually stunning but also intuitive and accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
