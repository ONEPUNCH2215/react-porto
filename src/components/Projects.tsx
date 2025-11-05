export default function Projects() {
  const projects = [
    {
      name: 'BISINDO-SIGN-LANGUAGE-DETECTOR',
      description: 'a sign language detection web application using machine learning to recognize and translate Indonesian Sign Language (BISINDO) gestures into text in real-time.',
      
      github: 'https://github.com/ONEPUNCH2215/BISINDO-sign-language-Detector'
    },
    {
      name: 'Hear-Chat-TTS-ChatApp',
      description: 'A chat application with text-to-speech functionality, allowing users to send messages that are converted to audio for enhanced communication, particularly for deaf users.',
      github: 'https://github.com/ONEPUNCH2215/Hear-Chat-TTS-ChatApp'
    },
    {
      name: 'Portfolio Website',
      description: 'A minimalist portfolio website showcasing projects and skills with smooth animations.',
      techStack: 'Next.js, Tailwind CSS, Framer Motion',
      // liveDemo: 'https://example.com',
      github: 'https://github.com/aryautama/portfolio'
    },
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
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
              <div className="flex gap-4 mt-auto">
                {/* <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
                >
                  Live Demo
                </a> */}
                <div className="bg-gray-100 rounded-lg px-4 py-2 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition-all duration-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}