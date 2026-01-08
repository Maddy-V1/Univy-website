import { FaArrowRight, FaPhone } from 'react-icons/fa';
import Button from '../common/Button';
import styles from './CTASection.module.css';

const CTASection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Simple Content */}
                <div className={styles.content}>
                    <h2 className={styles.title}>Ready to Transform Your Campus?</h2>
                    <p className={styles.description}>
                        Join hundreds of colleges that have already digitized their operations with Univy. 
                        Our proven process makes campus transformation simple and effective.
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className={styles.buttons}>
                        <Button
                            href="/contact"
                            variant="primary"
                            size="large"
                            rightIcon={<FaArrowRight />}
                        >
                            Begin Your Journey
                        </Button>
                        <Button
                            href="/contact"
                            variant="secondary"
                            size="large"
                            leftIcon={<FaPhone />}
                        >
                            Contact the Team
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;