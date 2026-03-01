import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / totalHeight) * 100;
            setProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[2px] z-[100]">
            <div
                className="h-full transition-all duration-100 ease-out"
                style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #8245ec, #a855f7, #6366f1, #ec4899)',
                }}
            />
        </div>
    );
};

export default ScrollProgress;
