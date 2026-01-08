import { FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';
import styles from './CTASection.module.css';

const CTASection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.pattern} />
                    <div className={styles.content}>
                        <h2 className={styles.title}>Ready to Get Started?</h2>
                        <p className={styles.text}>
                            Hundreds of colleges trust Univy. Let's make yours the next success story.
                        </p>
                        <div className={styles.buttons}>
                            <Button href="/contact" variant="glass" size="large" rightIcon={<FaArrowRight />}>
                                Begin Your Journey
                            </Button>
                            <Button href="/contact" variant="glass" size="large">
                                Talk to Our Team
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
