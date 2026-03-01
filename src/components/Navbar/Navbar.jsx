import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Auto-detect active section
      const sections = ["about", "skills", "experience", "work", "education", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled
          ? "bg-[#050414]/70 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5"
          : "bg-transparent"
        }`}
    >
      <div className="text-white py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-lg font-display font-bold cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="gradient-text-static group-hover:opacity-80 transition-opacity">&lt;</span>
          <span className="text-white group-hover:text-gray-200 transition-colors">Bhavay</span>
          <span className="gradient-text-static group-hover:opacity-80 transition-opacity">/</span>
          <span className="text-white group-hover:text-gray-200 transition-colors">Goyal</span>
          <span className="gradient-text-static group-hover:opacity-80 transition-opacity">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-white/5 rounded-lg" />
                )}
                <span className="relative">{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://github.com/bhavay009"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhavay-goyal-3149bb184/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX className="text-2xl text-primary-400" />
          ) : (
            <FiMenu className="text-2xl text-primary-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="glass-card rounded-2xl mb-4 p-4">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === item.id
                      ? "text-white bg-white/5"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-white/5">
            <a
              href="https://github.com/bhavay009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhavay-goyal-3149bb184/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
