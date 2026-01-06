/**
 * Hero Section Component - Compact Modern Design
 * Portfolio & Pitch Deck Ready
 */

import { useEffect, useState } from 'react';
import { FaArrowRight, FaPlay, FaCheck } from 'react-icons/fa';
import Button from '../common/Button';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className={styles.hero} id="hero">
            {/* Subtle Background Pattern */}
            <div className={styles.heroBg}>
                <div className={styles.gridPattern} />
                <div className={styles.glowOrb} />
            </div>

            {/* Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Badge */}
                    <div className={`${styles.badge} ${mounted ? styles.fadeIn : ''}`}>
                        <FaCheck className={styles.badgeIcon} />
                        <span>Launching Soon</span>
                    </div>

                    {/* Headline */}
                    <h1 className={`${styles.headline} ${mounted ? styles.fadeInDelay1 : ''}`}>
                        The Digital Workspace
                        <br />
                        <span className={styles.headlineAccent}>for Modern Colleges</span>
                    </h1>

                    {/* Subheadline */}
                    <p className={`${styles.subheadline} ${mounted ? styles.fadeInDelay2 : ''}`}>
                        One unified portal for students, faculty, and administration.
                        Replace WhatsApp chaos with organized, professional campus management.
                    </p>

                    {/* CTA Buttons */}
                    <div className={`${styles.buttons} ${mounted ? styles.fadeInDelay3 : ''}`}>
                        <Button
                            href="/contact"
                            variant="primary"
                            size="medium"
                            rightIcon={<FaArrowRight />}
                        >
                            Request a Demo
                        </Button>
                        <Button
                            href="/how-it-works"
                            variant="secondary"
                            size="medium"
                            leftIcon={<FaPlay />}
                        >
                            See How It Works
                        </Button>
                    </div>

                    {/* Quick Stats - Compact */}
                    <div className={`${styles.stats} ${mounted ? styles.fadeInDelay4 : ''}`}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>5+</div>
                            <div className={styles.statLabel}>Core Modules</div>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>100%</div>
                            <div className={styles.statLabel}>College-First</div>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>24/7</div>
                            <div className={styles.statLabel}>Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Scroll</span>
                <div className={styles.scrollDot} />
            </div>
        </section>
    );
};

export default HeroSection;
