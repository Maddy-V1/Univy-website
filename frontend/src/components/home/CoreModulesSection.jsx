/**
 * Core Modules Section - Compact Card Design with Mobile Carousel
 */

import { useState, useEffect, useRef } from 'react';
import {
    FaDesktop, FaFileAlt, FaCalendarCheck, FaUsers,
    FaLightbulb, FaEnvelope
} from 'react-icons/fa';
import Button from '../common/Button';
import { SERVICES } from '../../utils/constants';
import styles from './CoreModulesSection.module.css';

const iconMap = {
    'college-portal': FaDesktop,
    'forms-applications': FaFileAlt,
    'attendance': FaCalendarCheck,
    'student-cell': FaUsers,
    'opportunities': FaLightbulb,
    'email-system': FaEnvelope,
    'campus-mantri': FaUsers,
    'analytics': FaEnvelope,
};

const CoreModulesSection = () => {
    const displayedServices = SERVICES.slice(0, 6);
    const [activeIndex, setActiveIndex] = useState(2); // Start from middle (index 2)
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const carouselRef = useRef(null);

    // Create infinite scroll array with more duplicates for seamless loop
    const infiniteServices = [
        ...displayedServices, // First set
        ...displayedServices, // Second set  
        ...displayedServices  // Third set
    ];

    const totalOriginalCards = displayedServices.length;
    const [currentIndex, setCurrentIndex] = useState(activeIndex + totalOriginalCards); // Start in middle set

    // Check if mobile and set initial position
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            
            // Set initial scroll position for infinite carousel
            if (mobile && carouselRef.current) {
                const cardWidth = 240;
                const gap = 12;
                const initialPosition = currentIndex * (cardWidth + gap);
                carouselRef.current.scrollLeft = initialPosition;
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
                                const cardWidth = 240;
                                const gap = 12;
                                carouselRef.current.scrollLeft = totalOriginalCards * (cardWidth + gap);
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

    // Handle scroll positioning
    useEffect(() => {
        if (!isMobile || !carouselRef.current) return;

        const cardWidth = 240;
        const gap = 12;
        const scrollPosition = currentIndex * (cardWidth + gap);

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
        <section className={styles.section} id="core-modules">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Core Modules</span>
                    <h2 className={styles.title}>
                        Everything Your Campus Needs, In One Place
                    </h2>
                    <p className={styles.subtitle}>
                        Modular solutions that work together seamlessly. Start with what you need,
                        expand as you grow.
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
                            {infiniteServices.map((service, index) => {
                                const IconComponent = iconMap[service.id] || FaDesktop;
                                const realIndex = index % totalOriginalCards;
                                const isActive = realIndex === activeIndex && 
                                    index >= totalOriginalCards && 
                                    index < totalOriginalCards * 2;

                                return (
                                    <div 
                                        key={`${service.id}-${index}`} 
                                        className={`${styles.mobileCard} ${isActive ? styles.active : ''}`}
                                    >
                                        <div className={styles.moduleIcon}>
                                            <IconComponent />
                                        </div>
                                        <div className={styles.moduleContent}>
                                            <h3 className={styles.moduleTitle}>{service.title}</h3>
                                            <p className={styles.moduleDescription}>{service.shortDescription}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* Dots Navigation */}
                        <div className={styles.dotsContainer}>
                            {displayedServices.map((_, index) => (
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
                        {displayedServices.map((service, index) => {
                            const IconComponent = iconMap[service.id] || FaDesktop;
                            const isActive = index === activeIndex;

                            return (
                                <div 
                                    key={service.id} 
                                    className={`${styles.moduleCard} ${isActive ? styles.active : ''}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={styles.moduleIcon}>
                                        <IconComponent />
                                    </div>
                                    <div className={styles.moduleContent}>
                                        <h3 className={styles.moduleTitle}>{service.title}</h3>
                                        <p className={styles.moduleDescription}>{service.shortDescription}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className={styles.cta}>
                    <p className={styles.ctaText}>
                        Discover all our modules and how they can transform your campus.
                    </p>
                    <Button href="/services" variant="primary" size="medium">
                        Explore All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CoreModulesSection;
