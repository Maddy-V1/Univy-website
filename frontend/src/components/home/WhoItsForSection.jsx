/**
 * Who It's For Section - Fresh Modern Design
 */

import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaUserTie } from 'react-icons/fa';
import styles from './WhoItsForSection.module.css';

const userTypes = [
    {
        icon: FaUserGraduate,
        title: 'Students',
        description: 'Access notices instantly, view attendance, apply for certificates online, and stay connected.',
    },
    {
        icon: FaChalkboardTeacher,
        title: 'Faculty',
        description: 'Mark attendance digitally, post announcements easily, and track student progress.',
    },
    {
        icon: FaUsers,
        title: 'Student Cells',
        description: 'Centralized database, bulk email system, event management, and CR list generation.',
    },
    {
        icon: FaUserTie,
        title: 'Administration',
        description: 'Complete campus oversight, analytics dashboard, and document automation.',
    },
];

const WhoItsForSection = () => {
    return (
        <section className={styles.section} id="who-its-for">
            <div className={styles.bgPattern} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Built For Everyone</span>
                    <h2 className={styles.title}>Built For Every Part of Your Campus</h2>
                    <p className={styles.subtitle}>
                        Designed with all stakeholders in mind — students, faculty, Student Cells, and administration.
                    </p>
                </div>

                {/* User Type Cards - Compact Horizontal */}
                <div className={styles.grid}>
                    {userTypes.map((user, index) => {
                        const IconComponent = user.icon;
                        return (
                            <div key={index} className={styles.card} style={{ '--delay': `${index * 0.1}s` }}>
                                <div className={styles.cardIconWrapper}>
                                    <div className={styles.cardIcon}>
                                        <IconComponent />
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>For {user.title}</h3>
                                    <p className={styles.cardDescription}>{user.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhoItsForSection;
