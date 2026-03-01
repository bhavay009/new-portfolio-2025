import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container mx-auto">
        {/* Back to top */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center space-y-2 text-gray-500 hover:text-primary-400 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-primary-500/30 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(130,69,236,0.2)] group-hover:-translate-y-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <span className="text-xs tracking-wider uppercase">Back to top</span>
          </button>
        </div>

        {/* Logo */}
        <h2 className="text-center text-xl font-display font-bold gradient-text-static">
          Bhavay Goyal
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-1 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="px-4 py-2 text-sm text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-3 mt-6">
          {[
            { icon: <FaGithub size={18} />, link: "https://github.com/bhavay009" },
            { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/bhavay-goyal-3149bb184/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl text-gray-500 hover:text-white border border-white/5 hover:border-primary-500/20 hover:shadow-[0_0_20px_rgba(130,69,236,0.15)] transition-all duration-300 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 mt-8 text-center tracking-wide">
          © 2025 Bhavay Goyal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
