import { useEffect, useState, useRef } from 'react';

const stats = [
    { label: 'LeetCode Problems', value: 130, suffix: '+', icon: '🧩' },
    { label: 'Projects Built', value: 10, suffix: '+', icon: '🚀' },
    { label: 'Tech Stack', value: 15, suffix: '+', icon: '⚡' },
    { label: 'Months Experience', value: 12, suffix: '+', icon: '💼' },
];

const AnimatedCounter = ({ target, suffix, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, target]);

    return (
        <span className="tabular-nums">
            {count}{suffix}
        </span>
    );
};

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="animate-on-scroll glass-card rounded-2xl p-6 text-center group hover:border-primary-500/30 transition-all duration-500"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                        <div className="text-3xl md:text-4xl font-display font-bold gradient-text-static mb-2">
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                        </div>
                        <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
