export default function About() {
  const skills = [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'HTML & CSS',
    'Git',
    'Figma',
    'C',
    'Python',
    'Responsive Design'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Introduction Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Hello! I&apos;m a Computer Science student in Binus University with a <b>3.43 GPA</b>, passionate about continuous learning and hands-on experience in software development. 
                I&apos;m deeply interested in building interactive, efficient, and user-focused applications, eager to explore new technologies and improve my technical skills.
              </p>
              <p>
                I have practical experience working with React, Next.js, and Tailwind CSS for frontend development, alongside proficiency in Python and C for problem-solving and backend logic. 
                Additionally, I possess a foundational understanding of Machine Learning, which helps me connect programming with intelligent data-driven solutions.
              </p>
              <p>
                As a studious learner, I&apos;m always ready to take on new challenges, collaborate with others, and grow both technically and professionally in the ever-evolving world of technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-4 py-2 rounded-lg" style={{ backgroundColor: '#FFFCFB' }}>
                <span className="text-2xl font-bold text-blue-600">3.43</span>
                <p className="text-sm text-gray-700">GPA</p>
              </div>
              <div className="px-4 py-2 rounded-lg" style={{ backgroundColor: '#FFFCFB' }}>
                <span className="text-2xl font-bold text-purple-600">2027</span>
                <p className="text-sm text-gray-700">Graduation</p>
              </div>
              <div className="px-4 py-2 rounded-lg" style={{ backgroundColor: '#FFFCFB' }}>
                <span className="text-2xl font-bold text-green-600">4+</span>
                <p className="text-sm text-gray-700">Projects</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-gray-700 font-medium py-3 px-4 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-sm text-center"
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