
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Dashboard',
      description: 'A full-stack saas Dashboard solution with React, Node.js, Express & MongoDB. Features include data visualization with Apache-Echarts, CRUD operations and user management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express', 'Apache-Echarts'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool built with React and Firebase. Includes real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Firebase DB', 'Tailwind CSS', 'JavaScript', 'Express', 'Node.js'],
      github: 'https://github.com/nandiarideep/To-Do-Full-Stack',
      live: '#'
    },
    {
      title: 'Expense Tracker',
      description: 'A responsive full-stack expense tracking application built with React & Apache-Echarts. Features include real-time expense visualization and data export capabilities.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Apache-Echarts', 'Tailwind CSS', 'JavaScript', 'Express', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-200 italic max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-900 transition-colors duration-200"
                    target='_blank'
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (project.github === '#') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-900 transition-colors duration-200"
                    target='_blank'
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (project.live === '#') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed font-semibold italic mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-md text-white text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                  <span>View Project</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;