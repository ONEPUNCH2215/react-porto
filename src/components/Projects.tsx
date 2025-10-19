export default function Projects() {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'A modern e-commerce website with shopping cart functionality and payment integration.',
      techStack: 'React, Next.js, Stripe API, MongoDB',
      liveDemo: 'https://example.com',
      github: 'https://github.com/aryautama/ecommerce'
    },
    {
      name: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      techStack: 'React, Node.js, Socket.io, PostgreSQL',
      liveDemo: 'https://example.com',
      github: 'https://github.com/aryautama/task-manager'
    },
    {
      name: 'Weather Dashboard',
      description: 'A clean weather dashboard with location-based forecasts and interactive charts.',
      techStack: 'React, Chart.js, OpenWeather API',
      liveDemo: 'https://example.com',
      github: 'https://github.com/aryautama/weather-app'
    },
    {
      name: 'Blog Platform',
      description: 'A responsive blog platform with markdown support and content management system.',
      techStack: 'Next.js, MDX, Tailwind CSS, Prisma',
      liveDemo: 'https://example.com',
      github: 'https://github.com/aryautama/blog-platform'
    },
    {
      name: 'Portfolio Website',
      description: 'A minimalist portfolio website showcasing projects and skills with smooth animations.',
      techStack: 'Next.js, Tailwind CSS, Framer Motion',
      liveDemo: 'https://example.com',
      github: 'https://github.com/aryautama/portfolio'
    },
    {
      name: 'Music Player App',
      description: 'A sleek music player with playlist management and audio visualization features.',
      techStack: 'React, Web Audio API, IndexedDB',
      liveDemo: 'https://example.com',
      github: 'https://github.com/aryautama/music-player'
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              {project.techStack && (
                <p className="text-sm text-gray-500 mb-6">
                  {project.techStack}
                </p>
              )}
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}