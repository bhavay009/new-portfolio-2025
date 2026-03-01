import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white section-title">
          PROJECTS
        </h2>
        <p className="text-gray-500 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className={`animate-on-scroll delay-${index * 200} group glass-card gradient-border rounded-2xl overflow-hidden cursor-pointer`}
          >
            {/* Image with overlay */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  View Details →
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="tag-pill text-xs font-medium text-primary-300 rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={handleCloseModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Content */}
          <div
            className="relative glass-card rounded-2xl lg:w-full w-[95%] max-w-3xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white text-xl transition-all duration-300 hover:scale-110"
            >
              ✕
            </button>

            <div className="flex flex-col">
              {/* Image */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-cover max-h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0920] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="tag-pill text-xs font-medium text-primary-300 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/10 text-gray-300 hover:bg-white/5 hover:border-primary-500/30"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-white btn-shimmer"
                    style={{
                      background: "linear-gradient(135deg, #8245ec, #a855f7, #6366f1)",
                    }}
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
