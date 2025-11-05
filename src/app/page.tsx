import Hero from '@/components/Hero';
import About from '@/components/About';
// import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] relative">
      <AnimatedBackground />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </main>
  );
}
