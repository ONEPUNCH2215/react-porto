"use client";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Arya Utama
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Front-end developer focused on clean interfaces and responsive experiences.
          </p>
          <button
            onClick={scrollToProjects}
            className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            View my work →
          </button>
        </div>
      </div>
    </section>
  );
}