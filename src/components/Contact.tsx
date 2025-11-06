export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-gray-50 p-12 rounded-3xl brush-border shadow-lg">
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-8">
              Nice to meet you :) Feel free to reach out through these!
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <a
                href="mailto:arya.utama@binus.ac.id"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200 border-2 border-gray-800 rounded-lg px-6 py-3"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/arya-utama-b15b0720a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200 border-2 border-gray-800 rounded-lg px-6 py-3"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ONEPUNCH2215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200 border-2 border-gray-800 rounded-lg px-6 py-3"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
