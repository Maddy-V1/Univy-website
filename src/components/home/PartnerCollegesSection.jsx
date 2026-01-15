/**
 * Partner Colleges Section - Enhanced with Magic UI Marquee
 */

import { Marquee } from '../magicui/marquee';
import styles from './PartnerCollegesSection.module.css';

// Enhanced college data with more details
const colleges = [
    {
        name: "Delhi University",
        logo: "/images/colleges/du.png",
        students: "400K+",
        type: "Central University",
        location: "Delhi"
    },
    {
        name: "IIT Delhi",
        logo: "/images/colleges/iit-delhi.png", 
        students: "15K+",
        type: "Technical Institute",
        location: "Delhi"
    },
    {
        name: "Jamia Millia Islamia",
        logo: "/images/colleges/jamia.png",
        students: "25K+", 
        type: "Central University",
        location: "Delhi"
    },
    {
        name: "NSUT Delhi",
        logo: "/images/colleges/nsut.png",
        students: "8K+",
        type: "State University",
        location: "Delhi"
    },
    {
        name: "Amity University",
        logo: "/images/colleges/amity.png",
        students: "35K+",
        type: "Private University",
        location: "Noida"
    },
    {
        name: "Guru Gobind Singh Indraprastha University",
        logo: "/images/colleges/ggsipu.png",
        students: "100K+",
        type: "State University",
        location: "Delhi"
    }
];

const CollegeCard = ({ college }) => {
    return (
        <div className={styles.collegeCard}>
            <div className={styles.collegeLogo}>
                {/* Placeholder for college logo */}
                <div className={styles.logoPlaceholder}>
                    {college.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </div>
            </div>
            <div className={styles.collegeInfo}>
                <h4 className={styles.collegeName}>{college.name}</h4>
                <div className={styles.collegeStats}>
                    <span className={styles.studentCount}>{college.students} Students</span>
                    <span className={styles.collegeType}>{college.type}</span>
                </div>
                <div className={styles.collegeLocation}>{college.location}</div>
            </div>
        </div>
    );
};

const PartnerCollegesSection = () => {
    const firstRow = colleges.slice(0, Math.ceil(colleges.length / 2));
    const secondRow = colleges.slice(Math.ceil(colleges.length / 2));

    return (
        <section className={styles.section} id="partners">
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Our Partners</span>
                    <h3 className={styles.title}>
                        Colleges We're Proud to <span className={styles.titleAccent}>Partner With</span>
                    </h3>
                    <p className={styles.subtitle}>
                        Join hundreds of colleges already transforming their campus operations with Univy
                    </p>
                </div>

                {/* Marquee Colleges */}
                <div className={styles.marqueeContainer}>
                    <Marquee pauseOnHover className="[--duration:30s]">
                        {firstRow.map((college, index) => (
                            <CollegeCard key={`first-${index}`} college={college} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:25s]">
                        {secondRow.map((college, index) => (
                            <CollegeCard key={`second-${index}`} college={college} />
                        ))}
                    </Marquee>
                </div>

                {/* Trust Stats */}
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>50+</div>
                        <div className={styles.statLabel}>Partner Colleges</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>500K+</div>
                        <div className={styles.statLabel}>Students Served</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>95%</div>
                        <div className={styles.statLabel}>Satisfaction Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerCollegesSection;


