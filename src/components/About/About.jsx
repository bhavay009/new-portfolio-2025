import ReactTypingEffect from "react-typing-effect";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const codeLines = [
  { text: 'const developer = {', color: 'text-purple-300' },
  { text: '  name: "Bhavay Goyal",', color: 'text-emerald-300' },
  { text: '  role: "Fullstack Dev",', color: 'text-emerald-300' },
  { text: '  skills: ["React",', color: 'text-amber-300' },
  { text: '    "Node", "Python"],', color: 'text-amber-300' },
  { text: '  passion: "Building",', color: 'text-sky-300' },
  { text: '  available: true,', color: 'text-pink-300' },
  { text: '};', color: 'text-purple-300' },
];

const CodeVisual = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < codeLines.length ? prev + 1 : prev));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Outer glow rings */}
      <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-primary-500/10 animate-spin-slow" />
      <div className="absolute w-[260px] h-[260px] md:w-[310px] md:h-[310px] rounded-full border border-indigo-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
      <div className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-primary-500/5 animate-spin-slow" style={{ animationDuration: '30s' }} />

      {/* Floating dots on orbit */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-pulse-dot hidden md:block"
          style={{
            background: i % 2 === 0 ? '#8245ec' : '#6366f1',
            top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 190}px)`,
            left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 190}px)`,
            animationDelay: `${i * 0.3}s`,
            boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(130,69,236,0.5)' : 'rgba(99,102,241,0.5)'}`,
          }}
        />
      ))}

      {/* Code terminal */}
      <div className="relative glass-card rounded-2xl p-5 w-[280px] md:w-[320px] z-10">
        {/* Terminal header */}
        <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="text-[10px] text-gray-500 ml-2 font-mono">developer.js</span>
        </div>

        {/* Code content */}
        <div className="font-mono text-xs md:text-[13px] leading-6 space-y-0.5">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${i < visibleLines
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4'
                }`}
            >
              <span className="text-gray-600 select-none mr-3">{i + 1}</span>
              <span className={line.color}>{line.text}</span>
            </div>
          ))}
          {visibleLines >= codeLines.length && (
            <div className="flex items-center mt-1">
              <span className="text-gray-600 select-none mr-3">9</span>
              <span className="w-2 h-4 bg-primary-400 animate-pulse rounded-sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const socialLinks = [
  { icon: <FaGithub size={18} />, href: "https://github.com/bhavay009", label: "GitHub" },
  { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/bhavay-goyal-3149bb184/", label: "LinkedIn" },
  { icon: <SiLeetcode size={18} />, href: "https://leetcode.com/u/bhavay009/", label: "LeetCode" },
  { icon: <FaEnvelope size={18} />, href: "mailto:bhavaygoyal62@gmail.com", label: "Email" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 relative"
    >
      {/* Decorative floating elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-primary-500/10 rounded-full animate-spin-slow pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 left-0 w-32 h-32 border border-indigo-500/5 rounded-full animate-spin-slow pointer-events-none hidden lg:block" style={{ animationDuration: '30s' }} />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left - Text */}
        <div className="w-full md:w-[55%] text-center md:text-left mt-8 md:mt-0">
          {/* Status badge */}
          <div className="animate-on-scroll inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-dot" />
            <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">Available for internships</span>
          </div>

          <h1 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-300 mb-2 leading-tight tracking-tight">
            Hi, I am
          </h1>
          <h2 className="animate-on-scroll delay-100 text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 leading-tight tracking-tight">
            <span className="gradient-text">Bhavay Goyal</span>
          </h2>
          <h3 className="animate-on-scroll delay-200 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-gray-400">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "App Developer",
                "UI/UX Designer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="gradient-text-static">{cursor}</span>
              )}
              displayTextRenderer={(text) => (
                <span className="gradient-text-static">{text}</span>
              )}
            />
          </h3>

          <p className="animate-on-scroll delay-300 text-base sm:text-lg md:text-lg text-gray-500 mb-8 mt-8 leading-relaxed max-w-2xl">
            I am a passionate developer with a strong focus on ethical hacking and web development. I have successfully solved over 130 LeetCode problems, showcasing my problem-solving skills. Proficient in Python, JavaScript, React, and MySQL, I am constantly improving my technical abilities wile maintaining a strong commitment to teamwork and effective decision-making.
          </p>

          {/* Social Quick Links */}
          <div className="animate-on-scroll delay-400 flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-4 py-2.5 rounded-xl glass-card hover:border-primary-500/30 transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-400 group-hover:text-primary-400 transition-colors">{link.icon}</span>
                <span className="text-xs text-gray-500 group-hover:text-gray-300 font-medium transition-colors">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="animate-on-scroll delay-500">
            <a
              href="https://drive.google.com/file/d/1UJaumX5FyLugoXj1LwUOtik8lZhkvvZ_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-white py-3.5 px-8 rounded-full text-base font-semibold transition-all duration-500 btn-shimmer animate-glow-pulse"
              style={{
                background: "linear-gradient(135deg, #8245ec, #a855f7, #6366f1)",
                boxShadow: "0 0 20px rgba(130, 69, 236, 0.3), 0 0 40px rgba(130, 69, 236, 0.1)",
              }}
            >
              <span>DOWNLOAD CV</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right - Animated Code Visual */}
        <div className="w-full md:w-[45%] flex items-center justify-center animate-on-scroll delay-200">
          <CodeVisual />
        </div>
      </div>
    </section>
  );
};

export default About;
