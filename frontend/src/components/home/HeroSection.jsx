/**
 * Hero Section Component - Enterprise SaaS Design
 * Abstract background representing fragmented systems
 * Stacked UI panels like "images on wall"
 */

import { useEffect, useState } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import Button from '../common/Button';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToServices = () => {
        const element = document.getElementById('core-modules');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className={styles.hero} id="hero">
            {/* Abstract Background Layer - Fragmented Systems */}
            <div className={styles.heroBg}>
                {/* Base Grid Pattern */}
                <div className={styles.gridPattern} />

                {/* Floating Abstract UI Panels - Stacked Like Images on Wall */}
                <div className={styles.panelsContainer}>
                    {/* Panel 1 - Top Left */}
                    <div className={`${styles.abstractPanel} ${styles.panel1}`}>
                        <div className={styles.panelHeader} />
                        <div className={styles.panelLines}>
                            <span /><span /><span />
                        </div>
                    </div>

                    {/* Panel 2 - Top Right */}
                    <div className={`${styles.abstractPanel} ${styles.panel2}`}>
                        <div className={styles.panelDots}>
                            <span /><span /><span />
                        </div>
                        <div className={styles.panelGrid}>
                            <span /><span /><span /><span />
                        </div>
                    </div>

                    {/* Panel 3 - Mid Left */}
                    <div className={`${styles.abstractPanel} ${styles.panel3}`}>
                        <div className={styles.panelChart} />
                        <div className={styles.panelLines}>
                            <span /><span />
                        </div>
                    </div>

                    {/* Panel 4 - Mid Right */}
                    <div className={`${styles.abstractPanel} ${styles.panel4}`}>
                        <div className={styles.panelHeader} />
                        <div className={styles.panelBars}>
                            <span style={{ width: '80%' }} />
                            <span style={{ width: '60%' }} />
                            <span style={{ width: '90%' }} />
                        </div>
                    </div>

                    {/* Panel 5 - Bottom Left */}
                    <div className={`${styles.abstractPanel} ${styles.panel5}`}>
                        <div className={styles.panelCircle} />
                        <div className={styles.panelLines}>
                            <span /><span />
                        </div>
                    </div>

                    {/* Panel 6 - Bottom Right */}
                    <div className={`${styles.abstractPanel} ${styles.panel6}`}>
                        <div className={styles.panelDots}>
                            <span /><span />
                        </div>
                        <div className={styles.panelLines}>
                            <span /><span /><span />
                        </div>
                    </div>
                </div>

                {/* Connection Nodes & Lines */}
                <div className={styles.connectionLayer}>
                    <div className={`${styles.node} ${styles.node1}`} />
                    <div className={`${styles.node} ${styles.node2}`} />
                    <div className={`${styles.node} ${styles.node3}`} />
                    <div className={`${styles.node} ${styles.node4}`} />
                    <div className={`${styles.node} ${styles.node5}`} />
                    <svg className={styles.connectionLines}>
                        <line x1="15%" y1="25%" x2="35%" y2="55%" />
                        <line x1="85%" y1="30%" x2="65%" y2="50%" />
                        <line x1="25%" y1="75%" x2="50%" y2="50%" />
                        <line x1="75%" y1="70%" x2="50%" y2="50%" />
                    </svg>
                </div>

                {/* Ambient Glow */}
                <div className={styles.glowOrb} />
                <div className={styles.glowOrb2} />
            </div>

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Badge */}
                    <div className={`${styles.badge} ${mounted ? styles.fadeIn : ''}`}>
                        <span className={styles.badgePulse} />
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
                        <br />
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
                            onClick={scrollToServices}
                            variant="secondary"
                            size="medium"
                            leftIcon={<FaPlay />}
                        >
                            See Our Services
                        </Button>
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
