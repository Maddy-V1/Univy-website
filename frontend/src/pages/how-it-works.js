/**
 * How It Works Page
 * Step-by-step onboarding process
 */

import Head from 'next/head';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { HOW_IT_WORKS_STEPS } from '../utils/constants';

const pageStyles = {
    hero: {
        background: 'var(--gradient-hero)',
        padding: 'var(--space-24) 0 var(--space-16)',
        paddingTop: '140px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    heroOrbs: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
      radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)
    `,
    },
    container: {
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: '0 var(--space-6)',
        position: 'relative',
        zIndex: 10,
    },
    heroTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 'var(--font-extrabold)',
        color: 'var(--white)',
        marginBottom: 'var(--space-4)',
    },
    heroSubtitle: {
        fontSize: 'var(--text-lg)',
        color: 'rgba(255, 255, 255, 0.8)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    section: {
        padding: 'var(--space-20) 0',
        background: 'var(--neutral-50)',
        position: 'relative',
    },
    timeline: {
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
    },
    timelineLine: {
        position: 'absolute',
        left: '30px',
        top: 0,
        width: '4px',
        height: '100%',
        background: 'linear-gradient(180deg, var(--primary-blue) 0%, var(--secondary-purple) 100%)',
        borderRadius: '2px',
    },
    step: {
        display: 'flex',
        gap: 'var(--space-8)',
        marginBottom: 'var(--space-10)',
        position: 'relative',
    },
    stepNumber: {
        width: '64px',
        height: '64px',
        background: 'var(--gradient-primary)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--white)',
        flexShrink: 0,
        boxShadow: 'var(--shadow-purple)',
        position: 'relative',
        zIndex: 10,
    },
    stepContent: {
        flex: 1,
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-6)',
        border: '1px solid var(--neutral-200)',
        transition: 'all var(--transition-slow)',
    },
    stepHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 'var(--space-3)',
        flexWrap: 'wrap',
        gap: 'var(--space-2)',
    },
    stepTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
    },
    stepDuration: {
        padding: 'var(--space-1) var(--space-3)',
        background: 'var(--gradient-card)',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-semibold)',
        color: 'var(--secondary-purple)',
    },
    stepDescription: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        margin: 0,
    },
    metrics: {
        marginTop: 'var(--space-16)',
        padding: 'var(--space-10)',
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid var(--neutral-200)',
    },
    metricsTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        textAlign: 'center',
        marginBottom: 'var(--space-8)',
    },
    metricsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'var(--space-6)',
    },
    metric: {
        textAlign: 'center',
        padding: 'var(--space-4)',
    },
    metricNumber: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-3xl)',
        fontWeight: 'var(--font-bold)',
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: 'var(--space-2)',
    },
    metricLabel: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
    },
    cta: {
        marginTop: 'var(--space-16)',
        textAlign: 'center',
        padding: 'var(--space-12)',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-2xl)',
    },
    ctaTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--white)',
        marginBottom: 'var(--space-4)',
    },
    ctaText: {
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 'var(--space-6)',
        maxWidth: '500px',
        margin: '0 auto var(--space-6)',
    },
    ctaButtons: {
        display: 'flex',
        gap: 'var(--space-4)',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
};

const successMetrics = [
    { number: '80%+', label: 'Student portal usage within first month' },
    { number: '100%', label: 'Faculty adoption for attendance' },
    { number: '60%', label: 'Reduction in Student Cell workload' },
    { number: '0', label: 'Missed important announcements' },
];

export default function HowItWorks() {
    const handleStepHover = (e, isEnter) => {
        if (isEnter) {
            e.currentTarget.style.transform = 'translateX(8px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            e.currentTarget.style.borderColor = 'var(--primary-blue-light)';
        } else {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--neutral-200)';
        }
    };

    return (
        <>
            <Head>
                <title>How It Works | College Tech - Univy</title>
                <meta
                    name="description"
                    content="From first contact to campus transformation. Learn our simple, proven process to bring your college onto Univy."
                />
            </Head>

            <Navbar transparent />

            <main>
                {/* Hero */}
                <section style={pageStyles.hero}>
                    <div style={pageStyles.heroOrbs} />
                    <div style={pageStyles.container}>
                        <h1 style={pageStyles.heroTitle}>From Contact to Campus Transformation</h1>
                        <p style={pageStyles.heroSubtitle}>
                            A simple, proven process to bring your college onto Univy.
                        </p>
                    </div>
                </section>

                {/* Timeline Section */}
                <section style={pageStyles.section}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.timeline}>
                            {/* Timeline Line */}
                            <div style={pageStyles.timelineLine} />

                            {/* Steps */}
                            {HOW_IT_WORKS_STEPS.map((step, index) => (
                                <div key={step.id} style={pageStyles.step}>
                                    <div style={pageStyles.stepNumber}>{step.id}</div>
                                    <div
                                        style={pageStyles.stepContent}
                                        onMouseEnter={(e) => handleStepHover(e, true)}
                                        onMouseLeave={(e) => handleStepHover(e, false)}
                                    >
                                        <div style={pageStyles.stepHeader}>
                                            <h2 style={pageStyles.stepTitle}>{step.title}</h2>
                                            <span style={pageStyles.stepDuration}>{step.duration}</span>
                                        </div>
                                        <p style={pageStyles.stepDescription}>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Success Metrics */}
                        <div style={pageStyles.metrics}>
                            <h2 style={pageStyles.metricsTitle}>What Success Looks Like</h2>
                            <div style={pageStyles.metricsGrid}>
                                {successMetrics.map((metric, index) => (
                                    <div key={index} style={pageStyles.metric}>
                                        <div style={pageStyles.metricNumber}>{metric.number}</div>
                                        <div style={pageStyles.metricLabel}>{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div style={pageStyles.cta}>
                            <h2 style={pageStyles.ctaTitle}>Ready to Get Started?</h2>
                            <p style={pageStyles.ctaText}>
                                Join colleges that trust Univy. Let's make yours the next success story.
                            </p>
                            <div style={pageStyles.ctaButtons}>
                                <Button href="/contact" variant="glass" size="large" rightIcon={<FaArrowRight />}>
                                    Begin Your Journey
                                </Button>
                                <Button href="/contact" variant="glass" size="large">
                                    Talk to Our Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
