/**
 * What Is Univy Section - With Problem/Solution Carousel
 */

import { useState, useEffect } from 'react';
import { 
    FaCheck, 
    FaArrowRight, 
    FaExclamationTriangle, 
    FaFileAlt, 
    FaUsers, 
    FaUnlink,
    FaDesktop,
    FaBullhorn,
    FaChartLine,
    FaDatabase,
    FaTimes,
    FaQuestion,
    FaLink,
    FaShieldAlt
} from 'react-icons/fa';
import Button from '../common/Button';
import { PROBLEMS } from '../../utils/constants';
import styles from './WhatIsUnivySection.module.css';

const features = [
    'Built for Indian colleges, not generic ERP',
    'Modular system - pick what you need',
    'Student-friendly modern interfaces',
    'Complete faculty & admin dashboards',
    'Student Cell management software',
    'No ads, no student payments - Pure B2B',
];

const problemIconMap = {
    chaos: FaBullhorn, // Changed to Bullhorn for communication chaos
    manual: FaFileAlt,
    struggles: FaUsers,
    disconnected: FaUnlink,
};

const solutionItems = [
    { text: 'Unified portal for all stakeholders', icon: FaDesktop },
    { text: 'Digital attendance & academics', icon: FaCheck },
    { text: 'Official announcements channel', icon: FaBullhorn },
    { text: 'Student Cell tools & database', icon: FaUsers },
    { text: 'Forms & applications online', icon: FaFileAlt },
    { text: 'Analytics & admin controls', icon: FaChartLine },
];

const WhatIsUnivySection = () => {
    const [showProblems, setShowProblems] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowProblems(prev => !prev);
        }, 5000); // Slower switch (5s) to let user read/hover

        return () => clearInterval(interval);
    }, []);

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

                    {/* Auto-Scrolling Problem/Solution Carousel */}
                    <div className={styles.visual}>
                        <div className={styles.visualCard}>
                            <div className={styles.visualCardBg} />
                            
                            {/* Problems View */}
                            <div className={`${styles.carouselView} ${showProblems ? styles.active : styles.inactive}`}>
                                <div className={styles.visualContent}>
                                    <div className={styles.carouselHeader}>
                                        <span className={styles.problemBadge}>Current Problems</span>
                                        <h3 className={styles.visualTitle}>What Colleges Face Today</h3>
                                    </div>
                                    <ul className={styles.visualList}>
                                        {PROBLEMS.map((problem, idx) => {
                                            const IconComponent = problemIconMap[problem.icon] || FaExclamationTriangle;
                                            return (
                                                <li key={idx} className={styles.visualListItem}>
                                                    <div className={`${styles.visualIcon} ${styles.problemIcon}`}>
                                                        <IconComponent />
                                                    </div>
                                                    <div className={styles.itemContent}>
                                                        <span className={styles.itemTitle}>{problem.title}</span>
                                                        <span className={styles.problemDesc}>{problem.description}</span>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                {/* Chaotic Side Graphic */}
                                <div className={styles.sideGraphic}>
                                    <div className={styles.graphicContent}>
                                        <div className={`${styles.floatingIcon} ${styles.chaosIcon1}`} style={{'--rotation': '15deg'}}>
                                            <FaExclamationTriangle />
                                        </div>
                                        <div className={`${styles.floatingIcon} ${styles.chaosIcon2}`} style={{'--rotation': '-10deg'}}>
                                            <FaTimes />
                                        </div>
                                        <div className={`${styles.floatingIcon} ${styles.chaosIcon3}`} style={{'--rotation': '5deg'}}>
                                            <FaQuestion />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Solutions View */}
                            <div className={`${styles.carouselView} ${!showProblems ? styles.active : styles.inactive}`}>
                                <div className={styles.visualContent}>
                                    <div className={styles.carouselHeader}>
                                        <span className={styles.solutionBadge}>Our Solution</span>
                                        <h3 className={styles.visualTitle}>What Your Campus Gets</h3>
                                    </div>
                                    <ul className={styles.visualList}>
                                        {solutionItems.map((item, idx) => (
                                            <li key={idx} className={styles.visualListItem}>
                                                <div className={`${styles.visualIcon} ${styles.solutionIcon}`}>
                                                    <item.icon />
                                                </div>
                                                <div className={styles.itemContent}>
                                                    <span className={styles.itemTitle}>{item.text}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Organized Side Graphic */}
                                <div className={styles.sideGraphic}>
                                    <div className={styles.graphicContent}>
                                        <div className={styles.connectorLine} />
                                        <div className={`${styles.floatingIcon} ${styles.orderIcon1}`}>
                                            <FaDesktop />
                                        </div>
                                        <div className={`${styles.floatingIcon} ${styles.orderIcon2}`}>
                                            <FaDatabase />
                                        </div>
                                        <div className={`${styles.floatingIcon} ${styles.orderIcon3}`}>
                                            <FaLink />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Carousel Indicators */}
                            <div className={styles.carouselIndicators}>
                                <div 
                                    className={`${styles.indicator} ${showProblems ? styles.indicatorActive : ''}`} 
                                    onClick={() => setShowProblems(true)}
                                />
                                <div 
                                    className={`${styles.indicator} ${!showProblems ? styles.indicatorActive : ''}`} 
                                    onClick={() => setShowProblems(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsUnivySection;
