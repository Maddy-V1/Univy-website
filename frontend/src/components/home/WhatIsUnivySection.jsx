/**
 * What Is Univy Section - Compact Modern
 */

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

const WhatIsUnivySection = () => {
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

                    {/* Visual Card */}
                    <div className={styles.visual}>
                        <div className={styles.visualCard}>
                            <div className={styles.visualCardBg} />
                            <div className={styles.visualContent}>
                                <h3 className={styles.visualTitle}>What Your Campus Gets</h3>
                                <ul className={styles.visualList}>
                                    {[
                                        'Unified portal for all stakeholders',
                                        'Digital attendance & academics',
                                        'Official announcements channel',
                                        'Student Cell tools & database',
                                        'Forms & applications online',
                                        'Analytics & admin controls',
                                    ].map((item, idx) => (
                                        <li key={idx} className={styles.visualListItem}>
                                            <span className={styles.visualIcon}><FaCheck /></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsUnivySection;
