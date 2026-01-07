/**
 * Why Choose Us Section - Auto-Scrolling Cards
 */

import { FaPalette, FaCubes, FaHandshake, FaDollarSign, FaHeadset } from 'react-icons/fa';
import Button from '../common/Button';
import { WHY_CHOOSE_US } from '../../utils/constants';
import styles from './WhyChooseUsSection.module.css';

const iconMap = {
    design: FaPalette,
    modular: FaCubes,
    bridge: FaHandshake,
    costs: FaDollarSign,
    support: FaHeadset,
};

const WhyChooseUsSection = () => {
    // Duplicate items for infinite scroll effect
    const duplicatedReasons = [...WHY_CHOOSE_US, ...WHY_CHOOSE_US];

    return (
        <section className={styles.section} id="why-choose-us">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Why Choose Us</span>
                    <h2 className={styles.title}>Why Colleges Trust Univy</h2>
                    <p className={styles.subtitle}>
                        Built specifically for Indian colleges with a deep understanding of campus workflows.
                    </p>
                </div>

                {/* Auto-Scrolling Cards Container */}
                <div className={styles.scrollWrapper}>
                    <div className={styles.scrollContent}>
                        {duplicatedReasons.map((reason, index) => {
                            const IconComponent = iconMap[reason.icon] || FaPalette;
                            return (
                                <div key={`${reason.id}-${index}`} className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        <IconComponent />
                                    </div>
                                    <h3 className={styles.cardTitle}>{reason.title}</h3>
                                    <p className={styles.cardDescription}>{reason.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.cta}>
                    <Button href="/contact" variant="primary" size="medium">
                        Get Started Today
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
