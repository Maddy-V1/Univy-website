/**
 * Who It's For Section - Footer Theme with Mobile Carousel
 */

import { useState, useEffect, useRef } from 'react';
import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaUsers,
    FaUserTie,
    FaBell,
    FaCertificate,
    FaClipboardList,
    FaCalendarCheck,
    FaBullhorn,
    FaChartLine,
    FaEnvelope,
    FaCalendarAlt,
    FaDatabase,
    FaChartBar,
    FaCogs,
    FaBuilding
} from 'react-icons/fa';
import styles from './WhoItsForSection.module.css';

const userTypes = [
    {
        icon: FaUserGraduate,
        title: 'For Students',
        description: 'Access notices, apply online, stay connected.',
        features: ['Notifications', 'Applications', 'Resources']
    },
    {
        icon: FaChalkboardTeacher,
        title: 'For Faculty',
        description: 'Manage attendance, post updates, track progress.',
        features: ['Attendance', 'Announcements', 'Tracking']
    },
    {
        icon: FaUsers,
        title: 'For Student Cells',
        description: 'Bulk messaging, event management, CR lists.',
        features: ['Messaging', 'Events', 'Management']
    },
    {
        icon: FaUserTie,
        title: 'For Administration',
        description: 'Campus analytics, automation, oversight.',
        features: ['Analytics', 'Automation', 'Oversight']
    },
];

const WhoItsForSection = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Start from middle (index 1 for 4 cards)
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);

    // Create infinite scroll array with more duplicates for seamless loop
    const infiniteUserTypes = [
        ...userTypes, // First set
        ...userTypes, // Second set  
        ...userTypes  // Third set
    ];

    const totalOriginalCards = userTypes.length;
    const [currentIndex, setCurrentIndex] = useState(activeIndex + totalOriginalCards); // Start in middle set

    // Check if mobile and set initial position
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);

            // Set initial scroll position for infinite carousel - center the card
            // With CSS padding of (50vw - cardWidth/2), first card is centered at scrollLeft=0
            // Each card needs to scroll by index * cardTotalWidth
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
    // With CSS padding of (50vw - cardWidth/2), first card is centered at scrollLeft=0
    useEffect(() => {
        if (!isMobile || !carouselRef.current) return;

        const cardWidth = 220;
        const gap = 16;
        const cardTotalWidth = cardWidth + gap;
        // Each card needs to scroll by index * cardTotalWidth
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
        <section className={styles.section} id="who-its-for">
            {/* Background Elements */}
            <div className={`${styles.footerBg} ${styles.footerBgPurple}`} />
            <div className={`${styles.footerBg} ${styles.footerBgBlue}`} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Built For Everyone</span>
                    <h2 className={styles.title}>Built For Everyone On Your Campus</h2>
                    <p className={styles.subtitle}>
                        Designed with all stakeholders in mind — students, faculty, Student Cells, and administration.
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
                            {infiniteUserTypes.map((user, index) => {
                                const IconComponent = user.icon;
                                const realIndex = index % totalOriginalCards;
                                const isActive = realIndex === activeIndex &&
                                    index >= totalOriginalCards &&
                                    index < totalOriginalCards * 2;

                                return (
                                    <div
                                        key={`${user.title}-${index}`}
                                        className={`${styles.mobileCard} ${isActive ? styles.active : ''}`}
                                    >
                                        <div className={styles.cardIcon}>
                                            <IconComponent />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <h3 className={styles.cardTitle}>{user.title}</h3>
                                            <p className={styles.cardDescription}>{user.description}</p>
                                            <div className={styles.cardFeatures}>
                                                {user.features.map((feature, featureIndex) => (
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
                            {userTypes.map((_, index) => (
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
                        {userTypes.map((user, index) => {
                            const IconComponent = user.icon;
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
                                        <h3 className={styles.cardTitle}>{user.title}</h3>
                                        <p className={styles.cardDescription}>{user.description}</p>
                                        <div className={styles.cardFeatures}>
                                            {user.features.map((feature, featureIndex) => (
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

export default WhoItsForSection;
