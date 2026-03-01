import { useEffect } from 'react';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Stats from "./components/Stats/Stats";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Highlights from "./components/Highlights/Highlights";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import CursorGlow from './components/CursorGlow/CursorGlow';

const App = () => {
  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Initial observe
    const observe = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    };
    observe();

    // Re-observe on DOM changes (for dynamically added elements)
    const mutationObserver = new MutationObserver(() => observe());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#050414] min-h-screen overflow-x-hidden">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Multiple blur blobs for depth */}
      <BlurBlob position={{ top: '10%', left: '15%' }} size={{ width: '35%', height: '35%' }} color="purple" />
      <BlurBlob position={{ top: '35%', left: '80%' }} size={{ width: '25%', height: '30%' }} color="blue" />
      <BlurBlob position={{ top: '55%', left: '10%' }} size={{ width: '20%', height: '25%' }} color="indigo" />
      <BlurBlob position={{ top: '75%', left: '75%' }} size={{ width: '25%', height: '30%' }} color="violet" />
      <BlurBlob position={{ top: '90%', left: '30%' }} size={{ width: '20%', height: '20%' }} color="pink" />

      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDuration: `${Math.random() * 8 + 4}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative">
        <Navbar />
        <main className="pt-20">
          <About />
          <Stats />
          <Services />
          <Skills />
          <Experience />
          <Work />
          <Highlights />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
