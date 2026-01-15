import { useEffect, useRef } from 'react';
import {
    FaEnvelope,
    FaVideo,
    FaFileContract,
    FaCogs,
    FaChalkboardTeacher,
    FaRocket,
    FaHeadset
} from 'react-icons/fa';
import { HOW_IT_WORKS_STEPS } from '../../utils/constants';
import styles from './TimelineSection.module.css';

const iconMap = [
    { id: 1, icon: FaEnvelope },
    { id: 2, icon: FaVideo },
    { id: 3, icon: FaFileContract },
    { id: 4, icon: FaCogs },
    { id: 5, icon: FaChalkboardTeacher },
    { id: 6, icon: FaRocket },
    { id: 7, icon: FaHeadset },
];

const TimelineSection = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const stepsRef = useRef([]);

    useEffect(() => {
        // OPTIMIZATION: Use IntersectionObserver for active state (Off-main-thread text detection)
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Active only when in middle 20% of screen
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.active);
                } else {
                    entry.target.classList.remove(styles.active);
                }
            });
        }, observerOptions);

        stepsRef.current.forEach(step => {
            if (step) observer.observe(step);
        });

        // OPTIMIZATION: Throttled scroll for progress line only
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (sectionRef.current && lineRef.current) {
                        const sectionRect = sectionRef.current.getBoundingClientRect();
                        const windowHeight = window.innerHeight;

                        const startOffset = windowHeight * 0.4;
                        const endOffset = windowHeight * 0.4;
                        const scrollDist = windowHeight - sectionRect.top - startOffset;
                        const totalHeight = sectionRect.height - startOffset - endOffset;

                        let progress = Math.max(0, Math.min(1, scrollDist / totalHeight));
                        lineRef.current.style.height = `${progress * 100}%`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.curvedLine} />
            <div className={styles.container}>
                <div className={styles.timeline}>
                    <div className={styles.timelineLineBg} />
                    <div className={styles.timelineLineProgress} ref={lineRef} />

                    {HOW_IT_WORKS_STEPS.map((step, index) => {
                        const Icon = iconMap.find(i => i.id === step.id)?.icon || FaEnvelope;

                        return (
                            <div
                                key={step.id}
                                className={styles.step}
                                ref={el => stepsRef.current[index] = el}
                            >
                                {/* Decorative Visual (Opposite Side) */}
                                <div className={styles.stepVisual}>
                                    <div className={styles.visualInner}>
                                        <div className={`${styles.visualShape} ${styles.shape1}`} />
                                        <div className={`${styles.visualShape} ${styles.shape2}`} />
                                        <Icon className={styles.visualIconLarge} />
                                    </div>
                                </div>

                                {/* Marker (Center Icon) */}
                                <div className={styles.stepMarker}>
                                    <div className={styles.stepMarkerInner}>
                                        <Icon />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={styles.stepContent}>
                                    <div className={styles.stepHeader}>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <span className={styles.stepDuration}>{step.duration}</span>
                                    </div>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
