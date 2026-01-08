import { useState, useEffect, useRef } from 'react';
import { 
    FaChartLine, 
    FaUserCheck, 
    FaClock, 
    FaBullhorn 
} from 'react-icons/fa';
import styles from './SuccessMetricsSection.module.css';

const successMetrics = [
    { 
        number: 80, 
        suffix: '%+', 
        label: 'Student portal usage within first month',
        icon: FaChartLine,
        features: ['High Adoption', 'Quick Start', 'User Friendly']
    },
    { 
        number: 100, 
        suffix: '%', 
        label: 'Faculty adoption for attendance',
        icon: FaUserCheck,
        features: ['Complete Buy-in', 'Easy Transition', 'Reliable System']
    },
    { 
        number: 60, 
        suffix: '%', 
        label: 'Reduction in Student Cell workload',
        icon: FaClock,
        features: ['Time Saved', 'Automated Tasks', 'Efficient Workflow']
    },
    { 
        number: 0, 
        suffix: '', 
        label: 'Missed important announcements',
        icon: FaBullhorn,
        features: ['Zero Misses', 'Perfect Delivery', 'Reliable Notifications']
    },
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
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
};

const SuccessMetricsSection = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Start from middle (index 1 for 4 cards)
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);

    // Create infinite scroll array with more duplicates for seamless loop
    const infiniteMetrics = [
        ...successMetrics, // First set
        ...successMetrics, // Second set  
        ...successMetrics  // Third set
    ];

    const totalOriginalCards = successMetrics.length;
    const [currentIndex, setCurrentIndex] = useState(activeIndex + totalOriginalCards); // Start in middle set

    // Check if mobile and set initial position
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);

            // Set initial scroll position for infinite carousel - center the card
            if (mobile && carouselRef.current) {
                const cardWidth = 220;
                const gap = 16;
                const cardTotalWidth = cardWidth + gap;
                const scrollPosition = currentIndex * cardTotalWidth;
                carouselRef.current.scrollLeft = scrollPosition;
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [currentIndex]);

    // Auto-cycle through cards
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            if (isMobile) {
                // Mobile: use currentIndex for infinite scroll
                setCurrentIndex(prevIndex => {
                    const nextIndex = prevIndex + 1;
                    // If we're at the end of the second set, reset to beginning of second set
                    if (nextIndex >= totalOriginalCards * 2) {
                        // Reset to start of middle set after a delay
                        setTimeout(() => {
                            if (carouselRef.current) {
                                carouselRef.current.style.scrollBehavior = 'auto';
                                setCurrentIndex(totalOriginalCards);
                                const cardWidth = 220;
                                const gap = 16;
                                const cardTotalWidth = cardWidth + gap;
                                const scrollPosition = totalOriginalCards * cardTotalWidth;
                                carouselRef.current.scrollLeft = scrollPosition;
                                setTimeout(() => {
                                    if (carouselRef.current) {
                                        carouselRef.current.style.scrollBehavior = 'smooth';
                                    }
                                }, 50);
                            }
                        }, 300);
                        return nextIndex;
                    }
                    return nextIndex;
                });
            } else {
                // Desktop: use activeIndex for simple cycling
                setActiveIndex(prevIndex => (prevIndex + 1) % totalOriginalCards);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, isMobile, totalOriginalCards]);

    // Handle scroll positioning - center the card in viewport
    useEffect(() => {
        if (!isMobile || !carouselRef.current) return;

        const cardWidth = 220;
        const gap = 16;
        const cardTotalWidth = cardWidth + gap;
        const scrollPosition = currentIndex * cardTotalWidth;

        carouselRef.current.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        // Update active index for dots (always show which card in the original set)
        const realIndex = currentIndex % totalOriginalCards;
        setActiveIndex(realIndex);
    }, [currentIndex, isMobile, totalOriginalCards]);

    const handleMouseEnter = (index) => {
        if (!isMobile) {
            setIsPaused(true);
            setActiveIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsPaused(false);
        }
    };

    const handleDotClick = (index) => {
        setActiveIndex(index);
        setCurrentIndex(index + totalOriginalCards); // Set to middle set
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 2000); // Resume after 2 seconds
    };

    const handleTouchStart = () => {
        setIsPaused(true);
    };

    const handleTouchEnd = () => {
        setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
    };

    return (
        <section className={styles.section}>
            {/* Background Elements - Same as Footer */}
            <div className={`${styles.footerBg} ${styles.footerBgPurple}`} />
            <div className={`${styles.footerBg} ${styles.footerBgBlue}`} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Proven Results</span>
                    <h2 className={styles.title}>What Success Looks Like</h2>
                    <p className={styles.subtitle}>
                        Real metrics from colleges that have transformed their campus operations with Univy.
                    </p>
                </div>

                {/* Desktop Grid / Mobile Carousel */}
                {isMobile ? (
                    <>
                        <div
                            className={styles.mobileCarousel}
                            ref={carouselRef}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            {infiniteMetrics.map((metric, index) => {
                                const IconComponent = metric.icon;
                                const realIndex = index % totalOriginalCards;
                                const isActive = realIndex === activeIndex &&
                                    index >= totalOriginalCards &&
                                    index < totalOriginalCards * 2;

                                return (
                                    <div
                                        key={`${metric.label}-${index}`}
                                        className={`${styles.mobileCard} ${isActive ? styles.active : ''}`}
                                    >
                                        <div className={styles.cardIcon}>
                                            <IconComponent />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>
                                                <CountUp end={metric.number} suffix={metric.suffix} />
                                            </h3>
                                            <p className={styles.cardDescription}>{metric.label}</p>
                                            <div className={styles.cardFeatures}>
                                                {metric.features.map((feature, featureIndex) => (
                                                    <span key={featureIndex} className={styles.feature}>
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Dots Navigation */}
                        <div className={styles.dotsContainer}>
                            {successMetrics.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={styles.grid}>
                        {successMetrics.map((metric, index) => {
                            const IconComponent = metric.icon;
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={index}
                                    className={`${styles.card} ${isActive ? styles.active : ''}`}
                                    style={{ '--delay': `${index * 0.1}s` }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={styles.cardIcon}>
                                        <IconComponent />
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>
                                            <CountUp end={metric.number} suffix={metric.suffix} />
                                        </h3>
                                        <p className={styles.cardDescription}>{metric.label}</p>
                                        <div className={styles.cardFeatures}>
                                            {metric.features.map((feature, featureIndex) => (
                                                <span key={featureIndex} className={styles.feature}>
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default SuccessMetricsSection;
