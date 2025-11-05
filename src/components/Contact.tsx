export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-8">
            Nice to meet you :) Feel free to reach out through these!
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="mailto:arya.utama@binus.ac.id"
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/arya-utama-b15b0720a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ONEPUNCH2215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
