/**
 * What Is Univy Section - With Service Image Carousel
 */

import { useState, useEffect } from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';
import styles from './WhatIsUnivySection.module.css';

const features = [
    'Built for Indian colleges, not generic ERP',
    'Modular system - pick what you need',
    'Student-friendly modern interfaces',
    'Complete faculty & admin dashboards',
    'Student Cell management software',
    'No ads, no student payments - Pure B2B',
];

const serviceImages = [
    {
        id: 1,
        src: '/images/services/portal-dashboard.jpg',
        alt: 'College Portal Dashboard',
        title: 'Unified College Portal',
        description: 'Complete dashboard for students, faculty, and admin',
        fallback: `data:image/svg+xml;base64,${btoa(`
            <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grad1)"/>
                <rect x="40" y="60" width="520" height="280" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                <rect x="60" y="80" width="120" height="20" rx="4" fill="rgba(255,255,255,0.8)"/>
                <rect x="60" y="120" width="200" height="12" rx="2" fill="rgba(255,255,255,0.6)"/>
                <rect x="60" y="140" width="160" height="12" rx="2" fill="rgba(255,255,255,0.6)"/>
                <rect x="60" y="180" width="480" height="140" rx="8" fill="rgba(255,255,255,0.2)"/>
                <text x="300" y="250" text-anchor="middle" fill="white" font-family="Arial" font-size="18" font-weight="bold">College Portal Dashboard</text>
                <text x="300" y="280" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial" font-size="14">Complete dashboard for students, faculty, and admin</text>
            </svg>
        `)}`
    },
    {
        id: 2,
        src: '/images/services/student-cell.jpg',
        alt: 'Student Cell Management',
        title: 'Student Cell Management',
        description: 'Comprehensive tools for student activities and events',
        fallback: `data:image/svg+xml;base64,${btoa(`
            <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grad2)"/>
                <rect x="40" y="60" width="520" height="280" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                <circle cx="120" cy="140" r="30" fill="rgba(255,255,255,0.2)"/>
                <rect x="170" y="120" width="150" height="16" rx="4" fill="rgba(255,255,255,0.8)"/>
                <rect x="170" y="144" width="100" height="12" rx="2" fill="rgba(255,255,255,0.6)"/>
                <rect x="60" y="200" width="480" height="100" rx="8" fill="rgba(255,255,255,0.2)"/>
                <text x="300" y="250" text-anchor="middle" fill="white" font-family="Arial" font-size="18" font-weight="bold">Student Cell Management</text>
                <text x="300" y="280" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial" font-size="14">Comprehensive tools for student activities and events</text>
            </svg>
        `)}`
    },
    {
        id: 3,
        src: '/images/services/attendance-system.jpg',
        alt: 'Digital Attendance System',
        title: 'Smart Attendance System',
        description: 'Digital attendance tracking with analytics',
        fallback: `data:image/svg+xml;base64,${btoa(`
            <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grad3)"/>
                <rect x="40" y="60" width="520" height="280" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                <rect x="60" y="100" width="480" height="40" rx="6" fill="rgba(255,255,255,0.2)"/>
                <rect x="80" y="110" width="60" height="20" rx="4" fill="rgba(255,255,255,0.8)"/>
                <rect x="160" y="110" width="100" height="20" rx="4" fill="rgba(255,255,255,0.6)"/>
                <rect x="280" y="110" width="80" height="20" rx="4" fill="rgba(34,197,94,0.8)"/>
                <rect x="60" y="160" width="480" height="120" rx="8" fill="rgba(255,255,255,0.2)"/>
                <text x="300" y="230" text-anchor="middle" fill="white" font-family="Arial" font-size="18" font-weight="bold">Smart Attendance System</text>
                <text x="300" y="260" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="Arial" font-size="14">Digital attendance tracking with analytics</text>
            </svg>
        `)}`
    }
];

const WhatIsUnivySection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const SLIDE_DURATION = 4000; // 4 seconds per slide

    useEffect(() => {
        if (isPaused) return;

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setCurrentSlide(current => (current + 1) % serviceImages.length);
                    return 0;
                }
                return prev + (100 / (SLIDE_DURATION / 50)); // Update every 50ms
            });
        }, 50);

        return () => clearInterval(progressInterval);
    }, [currentSlide, isPaused]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % serviceImages.length);
        setProgress(0);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + serviceImages.length) % serviceImages.length);
        setProgress(0);
    };

    return (
        <section className={styles.section} id="what-is-univy">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Content */}
                    <div className={styles.content}>
                        <span className={styles.eyebrow}>The Solution</span>
                        <h2 className={styles.title}>
                            Meet <span className={styles.titleAccent}>Univy</span> —<br />
                            Your College's Digital Workspace
                        </h2>
                        <p className={styles.description}>
                            A modular B2B SaaS platform designed specifically for colleges.
                            We provide a customized digital portal that becomes the daily workspace
                            for your entire campus.
                        </p>

                        {/* Features List - Compact */}
                        <div className={styles.featuresList}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.featureItem}>
                                    <span className={styles.featureIcon}>
                                        <FaCheck />
                                    </span>
                                    <span className={styles.featureText}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className={styles.buttons}>
                            <Button
                                href="/services"
                                variant="primary"
                                size="medium"
                                rightIcon={<FaArrowRight />}
                            >
                                Explore Services
                            </Button>
                            <Button href="/pricing" variant="secondary" size="medium">
                                View Pricing
                            </Button>
                        </div>
                    </div>

                    {/* Service Image Carousel */}
                    <div className={styles.visual}>
                        <div 
                            className={styles.carouselContainer}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* Image Container */}
                            <div className={styles.imageContainer}>
                                {serviceImages.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className={`${styles.imageSlide} ${
                                            index === currentSlide ? styles.active : ''
                                        }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className={styles.serviceImage}
                                            onError={(e) => {
                                                // Use the fallback SVG if image doesn't exist
                                                e.target.src = image.fallback;
                                            }}
                                        />
                                        {/* Subtle fade overlay from bottom */}
                                        <div className={styles.imageFade} />
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Indicators with Progress */}
                            <div className={styles.carouselIndicators}>
                                {serviceImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.indicator} ${
                                            index === currentSlide ? styles.indicatorActive : ''
                                        }`}
                                        onClick={() => goToSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    >
                                        {index === currentSlide && (
                                            <div 
                                                className={styles.progressBar}
                                                style={{ width: `${progress}%` }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Text Content Below Box */}
                        <div className={styles.carouselContent}>
                            <div className={styles.titleRow}>
                                <h3 className={styles.carouselTitle}>
                                    {serviceImages[currentSlide].title}
                                </h3>
                                
                                {/* Navigation Buttons on same line as title */}
                                <div className={styles.navigationButtons}>
                                    <button 
                                        className={styles.navBtn}
                                        onClick={prevSlide}
                                        aria-label="Previous image"
                                    >
                                        ‹
                                    </button>
                                    <button 
                                        className={styles.navBtn}
                                        onClick={nextSlide}
                                        aria-label="Next image"
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>
                            
                            <div className={styles.descriptionContainer}>
                                <p className={styles.carouselDescription}>
                                    {serviceImages[currentSlide].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsUnivySection;