import { useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with advanced features including real-time inventory, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
      gradient: 'from-cyan-500 to-blue-500',
      github: 'https://github.com/ashishhpdave/NeeramSetu-web'
    },
    {
      title: 'SaaS Billing',
      description: 'Modern analytics billing dashbord with real-time data visualization, user management, and AI-powered insights.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'TailwindCSS', 'Firebase', 'Chart.js'],
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/ashishhpdave/RaghavMobile'
    },
    {
      title: 'Hisab App',
      description: 'Cross-platform mobile application for workout tracking, meal planning, and progress monitoring.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'REST API'],
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/ashishhpdave/HisabApp'
    },
    {
      title: ' Old Portfolio',
      description: 'Headless CMS for portfolio websites with drag-and-drop builder, SEO optimization, and analytics.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS'],
      gradient: 'from-pink-500 to-purple-500',
      github: 'https://github.com/ashishhpdave/new-portfolio'
    },
    {
      title: 'Real-Time Chat App',
      description: 'WebSocket-based chat application with rooms, file sharing, and end-to-end encryption.',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'Socket.io', 'Node.js', 'MongoDB'],
      gradient: 'from-cyan-500 to-purple-500',
      github: 'https://github.com/ashishhpdave/chat-app'
    },
    {
      title: 'Food del',
      description: 'powered food del, SEO optimization,and ecommers platfrom.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React.js', 'OpenAI', 'MongoDB', 'TailwindCSS'],
      gradient: 'from-blue-500 to-pink-500',
      github: 'https://github.com/ashishhpdave/food-del'
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-300">Showcasing innovation, creativity, and technical excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`} />

              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-cyan-500 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transform perspective-1000">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                  <div className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ${hoveredProject === index ? 'translate-y-0' : 'translate-y-4'}`}>
                    <a
                      href="#"
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </a>
                    <a
                      href={project.github || '#'}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
