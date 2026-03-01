import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white section-title">
          EDUCATION
        </h2>
        <p className="text-gray-500 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`animate-on-scroll ${index > 0 ? 'delay-200' : ''} w-full max-w-xl p-6 sm:p-8 rounded-2xl glass-card gradient-border`}
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg sm:text-xl font-display font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-sm text-gray-400">
                {edu.school}
              </h4>
              {edu.date && (
                <p className="text-xs text-gray-500">{edu.date}</p>
              )}

              {/* Grade badge */}
              <div className="inline-flex items-center self-start mt-2">
                <span
                  className="text-sm font-bold text-white px-4 py-1.5 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #8245ec, #a855f7)",
                  }}
                >
                  Grade: {edu.grade}
                </span>
              </div>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
