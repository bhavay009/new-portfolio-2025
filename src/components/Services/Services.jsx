import { useState } from 'react';

const services = [
    {
        icon: '🌐',
        title: 'Web Development',
        description: 'Building responsive, high-performance web applications with React, Next.js, and modern frameworks.',
        tags: ['React', 'Next.js', 'Tailwind'],
    },
    {
        icon: '⚙️',
        title: 'Backend Development',
        description: 'Designing scalable server-side architectures with Node.js, Express, and database systems.',
        tags: ['Node.js', 'Express', 'MongoDB'],
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Crafting intuitive, beautiful interfaces with a focus on user experience and accessibility.',
        tags: ['Figma', 'Prototyping', 'Design Systems'],
    },
    {
        icon: '🔒',
        title: 'Ethical Hacking',
        description: 'Passionate about cybersecurity, vulnerability assessment, and building secure applications.',
        tags: ['Security', 'Pen Testing', 'Python'],
    },
];

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-20 px-[7vw] md:px-[7vw] lg:px-[20vw]">
            {/* Section Title */}
            <div className="text-center mb-14 animate-on-scroll">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white section-title">
                    WHAT I DO
                </h2>
                <p className="text-gray-500 mt-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Specialized services I offer to bring your ideas to life
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`animate-on-scroll ${index > 1 ? 'delay-200' : ''} group relative glass-card gradient-border rounded-2xl p-7 cursor-default transition-all duration-500 ${hoveredIndex === index ? 'scale-[1.02]' : ''
                            }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Glow effect on hover */}
                        <div className={`absolute inset-0 rounded-2xl bg-primary-500/5 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                            }`} />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="tag-pill text-xs text-primary-300 px-2.5 py-1 rounded-full font-medium"
                                    >
                                        {tag}
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

export default Services;
