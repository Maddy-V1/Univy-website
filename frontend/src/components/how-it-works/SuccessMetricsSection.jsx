import { useState, useEffect, useRef } from 'react';
import styles from './SuccessMetricsSection.module.css';

const successMetrics = [
    { number: 80, suffix: '%+', label: 'Student portal usage within first month' },
    { number: 100, suffix: '%', label: 'Faculty adoption for attendance' },
    { number: 60, suffix: '%', label: 'Reduction in Student Cell workload' },
    { number: 0, suffix: '', label: 'Missed important announcements' }, // Special case 0 is just 0
];

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - percentage, 3);

            setCount(Math.floor(end * easeOut));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef} className={styles.cardNumber}>
            {count}{suffix}
        </span>
    );
};

const SuccessMetricsSection = () => {
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % successMetrics.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.bgGradient1} />
            <div className={styles.bgGradient2} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Proven Results</span>
                    <h2 className={styles.title}>What Success Looks Like</h2>
                </div>

                <div className={styles.grid}>
                    {successMetrics.map((metric, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${index === activeCard ? styles.active : ''}`}
                            onMouseEnter={() => setActiveCard(index)} // Optional: User control on hover
                        >
                            <CountUp end={metric.number} suffix={metric.suffix} />
                            <p className={styles.cardLabel}>{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessMetricsSection;
