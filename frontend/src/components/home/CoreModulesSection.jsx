/**
 * Core Modules Section - Compact Card Design
 */

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

                {/* Compact Module Cards */}
                <div className={styles.grid}>
                    {displayedServices.map((service) => {
                        const IconComponent = iconMap[service.id] || FaDesktop;

                        return (
                            <div key={service.id} className={styles.moduleCard}>
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
