export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-8">
            Interested in collaborating or just want to say hi?
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="mailto:arya@example.com"
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/aryautama"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aryautama"
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