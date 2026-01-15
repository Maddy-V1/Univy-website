/**
 * Problem Section Component - Fresh Modern Design
 */

import { FaExclamationTriangle, FaFileAlt, FaUsers, FaUnlink } from 'react-icons/fa';
import { PROBLEMS } from '../../utils/constants';
import styles from './ProblemSection.module.css';

const iconMap = {
    chaos: FaExclamationTriangle,
    manual: FaFileAlt,
    struggles: FaUsers,
    disconnected: FaUnlink,
};

const ProblemSection = () => {
    return (
        <section className={styles.section} id="problems">
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>The Challenge</span>
                    <h2 className={styles.title}>The Campus Management Crisis</h2>
                    <p className={styles.subtitle}>
                        Indian colleges struggle with outdated systems that waste time,
                        create confusion, and frustrate everyone.
                    </p>
                </div>

                {/* Problem Cards - Horizontal Layout */}
                <div className={styles.grid}>
                    {PROBLEMS.map((problem, index) => {
                        const IconComponent = iconMap[problem.icon] || FaExclamationTriangle;

                        return (
                            <div key={problem.id} className={styles.card} style={{ '--delay': `${index * 0.1}s` }}>
                                <div className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</div>
                                <div className={styles.cardIcon}>
                                    <IconComponent />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{problem.title}</h3>
                                    <p className={styles.cardDescription}>{problem.description}</p>
                                </div>
                                <div className={styles.cardLine} />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Line */}
                <div className={styles.bottomLine}>
                    <p className={styles.bottomLineText}>
                        Your college deserves better than WhatsApp groups and Excel sheets.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
