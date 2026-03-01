import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white section-title">
          EXPERIENCE
        </h2>
        <p className="text-gray-500 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="animate-on-scroll w-full max-w-xl p-6 sm:p-8 rounded-2xl glass-card gradient-border"
          >
            {/* Role and Company */}
            <div className="flex flex-col space-y-1">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-sm text-primary-400 font-medium">
                {experience.company}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
            </div>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">{experience.desc}</p>

            <div className="mt-5">
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="tag-pill text-xs font-medium text-primary-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
