export default function About() {
  const skills = [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'Figma',
    'TypeScript',
    'JavaScript',
    'HTML & CSS',
    'MongoDB',
    'Express.js',
    'Responsive Design'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Introduction Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Hello! I&apos;m a passionate web developer with a love for creating 
                beautiful, functional, and user-friendly digital experiences. 
                My journey in web development started with curiosity and has 
                evolved into a deep appreciation for clean code and innovative solutions.
              </p>
              <p>
                I specialize in modern web technologies and enjoy working on 
                projects that challenge me to grow as a developer. Whether it&apos;s 
                building responsive websites, creating interactive applications, 
                or solving complex problems, I approach each project with 
                enthusiasm and attention to detail.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community. I believe in continuous learning and 
                staying updated with the latest trends in web development.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-center text-gray-700 font-medium py-3 px-4 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}