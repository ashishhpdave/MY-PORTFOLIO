import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-12 border-t border-gray-800">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-50" />
              <div className="relative bg-gradient-to-br from-cyan-500 to-purple-500 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Ashish Dave
              </div>
              <div className="text-sm text-gray-400">MERN Stack Developer</div>
            </div>
          </div>


          <div className="text-gray-500 text-sm">
            {currentYear} Ashish Dave. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Co-Founder</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
             <a href="https://devpstechnologies.in/">DevOps Technologies</a> 
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
