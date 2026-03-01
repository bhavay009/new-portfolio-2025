import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom relative"
  >
    {/* Section Title */}
    <div className="text-center mb-12 animate-on-scroll">
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-white section-title">
        SKILLS
      </h2>
      <p className="text-gray-500 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-4 lg:gap-6 py-10 justify-between">
      {SkillsInfo.map((category, catIndex) => (
        <div
          key={category.title}
          className={`animate-on-scroll ${catIndex % 2 === 0 ? '' : 'delay-200'} glass-card gradient-border px-6 sm:px-8 py-8 mb-6 w-full sm:w-[48%] rounded-2xl`}
        >
          <h3 className="text-xl sm:text-2xl font-display font-semibold gradient-text-static mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center justify-center space-x-2 rounded-xl py-2.5 px-3 text-center transition-all duration-300 hover:bg-white/5 border border-white/5 hover:border-primary-500/20 hover:shadow-[0_0_15px_rgba(130,69,236,0.1)]"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
