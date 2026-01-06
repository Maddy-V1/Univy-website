/**
 * Partner Colleges Section - Auto-Scrolling
 */

import styles from './PartnerCollegesSection.module.css';

// Replace with actual partner college data
const partnerColleges = [
    { name: 'ABC College of Engineering', location: 'Mumbai' },
    { name: 'XYZ Institute of Technology', location: 'Delhi' },
    { name: 'PQR University', location: 'Bangalore' },
    { name: 'LMN Engineering College', location: 'Chennai' },
    { name: 'DEF Institute of Science', location: 'Pune' },
    { name: 'GHI College of Management', location: 'Hyderabad' },
    // Duplicate for infinite scroll
    { name: 'ABC College of Engineering', location: 'Mumbai' },
    { name: 'XYZ Institute of Technology', location: 'Delhi' },
    { name: 'PQR University', location: 'Bangalore' },
    { name: 'LMN Engineering College', location: 'Chennai' },
    { name: 'DEF Institute of Science', location: 'Pune' },
    { name: 'GHI College of Management', location: 'Hyderabad' },
];

const PartnerCollegesSection = () => {
    return (
        <section className={styles.section} id="partners">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Our Partners</span>
                    <h3 className={styles.title}>Colleges We're Proud to Partner With</h3>
                </div>

                {/* Auto-Scrolling Partner Logos */}
                <div className={styles.scrollWrapper}>
                    <div className={styles.scrollContent}>
                        {partnerColleges.map((college, index) => (
                            <div key={index} className={styles.collegeCard}>
                                <div className={styles.collegeLogo}>
                                    {college.name.charAt(0)}
                                </div>
                                <div className={styles.collegeInfo}>
                                    <div className={styles.collegeName}>{college.name}</div>
                                    <div className={styles.collegeLocation}>{college.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerCollegesSection;


