const highlights = [
    {
        icon: '🏆',
        title: '130+ LeetCode',
        description: 'Problems solved across Data Structures & Algorithms',
    },
    {
        icon: '🎓',
        title: '95% in Class X',
        description: 'CBSE Board — Science with Computer Application',
    },
    {
        icon: '💡',
        title: 'Startup Founder',
        description: 'Founded Nexora — a digital solutions platform',
    },
    {
        icon: '🔐',
        title: 'Ethical Hacking',
        description: 'Passionate about cybersecurity & secure development',
    },
    {
        icon: '📱',
        title: 'Full Stack',
        description: 'End-to-end development from React to Node.js & databases',
    },
    {
        icon: '🤝',
        title: 'Team Player',
        description: 'Strong commitment to collaboration & effective decision-making',
    },
];

const Highlights = () => {
    return (
        <section className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw]">
            {/* Section Title */}
            <div className="text-center mb-12 animate-on-scroll">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white section-title">
                    HIGHLIGHTS
                </h2>
                <p className="text-gray-500 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Key achievements and strengths that define my profile
                </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                    <div
                        key={index}
                        className={`animate-on-scroll group glass-card rounded-xl p-5 text-center hover:border-primary-500/20 transition-all duration-400`}
                        style={{ transitionDelay: `${index * 80}ms` }}
                    >
                        <div className="text-2xl mb-3 group-hover:scale-125 transition-transform duration-300">
                            {item.icon}
                        </div>
                        <h4 className="text-sm font-display font-semibold text-white mb-1 group-hover:text-primary-300 transition-colors">
                            {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Highlights;
