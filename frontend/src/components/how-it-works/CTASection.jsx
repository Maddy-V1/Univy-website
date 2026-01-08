import { FaArrowRight, FaUserShield } from 'react-icons/fa';
import Button from '../common/Button';
import styles from './CTASection.module.css';

const CTASection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Custom Plan Style Content */}
                <div className={styles.content}>
                    <h2 className={styles.title}>Ready to Transform Your Campus?</h2>
                    <p className={styles.tagline}>Built For Your College</p>
                    <p className={styles.description}>
                        Join hundreds of colleges that have already digitized their operations with Univy. 
                        Our proven process makes campus transformation simple and effective.
                    </p>
                    
                    {/* Feature Pills */}
                    <div className={styles.features}>
                        <span className={styles.feature}>✓ Proven 7-step process</span>
                        <span className={styles.feature}>✓ Dedicated support team</span>
                        <span className={styles.feature}>✓ Complete flexibility</span>
                        <span className={styles.feature}>✓ Custom integrations</span>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className={styles.buttons}>
                        <Button
                            href="/contact"
                            variant="primary"
                            size="large"
                            rightIcon={<FaArrowRight />}
                        >
                            Onboard Your College
                        </Button>
                        <Button
                            href="/contact"
                            variant="secondary"
                            size="large"
                            leftIcon={<FaUserShield />}
                        >
                            Join as Campus Mantri
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;