import { Rocket, Target, Users, Zap, TrendingUp, Shield } from 'lucide-react';

export default function Startup() {
  const services = [
    {
      icon: Zap,
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies'
    },
    {
      icon: Shield,
      title: 'DevOps & Automation',
      description: 'Streamlined CI/CD pipelines and cloud infrastructure management'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert guidance on architecture, tech stack, and best practices'
    },
    {
      icon: TrendingUp,
      title: 'Digital Innovation',
      description: 'Transform your business with innovative digital solutions'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section id="startup" className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Rocket className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            DevOps Technologies
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A cutting-edge startup focused on modern software solutions, automation, and digital innovation.
            We help businesses transform their digital presence and achieve their goals.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-cyan-500 to-purple-500 p-8 rounded-2xl">
                    <Target className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and success.
                  We believe in creating value through modern development practices, automation, and continuous innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="mb-4 p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl w-fit">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="relative inline-block mb-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity" />
                    <div className="relative text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                      {stat.number}
                    </div>
                  </div>
                  <p className="text-gray-400 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
