export default function Skills() {
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
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-center text-gray-700 font-medium py-4 px-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}