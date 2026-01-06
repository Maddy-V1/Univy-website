/**
 * Services Page
 * Complete list of services/modules with details
 */

import Head from 'next/head';
import { FaDesktop, FaFileAlt, FaCalendarCheck, FaUsers, FaLightbulb, FaEnvelope, FaUserShield, FaChartBar, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { SERVICES } from '../utils/constants';

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
    },
    sectionAlt: {
        background: 'var(--white)',
    },
    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 'var(--space-8)',
    },
    serviceCard: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-8)',
        border: '1px solid var(--neutral-200)',
        transition: 'all var(--transition-slow)',
        position: 'relative',
        overflow: 'hidden',
    },
    serviceCardTopBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'var(--gradient-primary)',
        transform: 'scaleX(0)',
        transition: 'transform 0.5s ease',
    },
    serviceIcon: {
        width: '64px',
        height: '64px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        color: 'var(--white)',
        marginBottom: 'var(--space-6)',
        boxShadow: 'var(--shadow-purple)',
    },
    serviceTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-2)',
    },
    serviceTagline: {
        fontSize: 'var(--text-sm)',
        color: 'var(--primary-blue)',
        fontWeight: 'var(--font-medium)',
        marginBottom: 'var(--space-4)',
    },
    serviceDescription: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        marginBottom: 'var(--space-6)',
    },
    featuresList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginBottom: 'var(--space-6)',
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-2) 0',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-700)',
    },
    featureBullet: {
        width: '6px',
        height: '6px',
        background: 'var(--accent-emerald)',
        borderRadius: '50%',
        flexShrink: 0,
    },
    problemSolved: {
        padding: 'var(--space-4)',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-700)',
        borderLeft: '3px solid var(--accent-emerald)',
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
    },
};

const iconMap = {
    'college-portal': FaDesktop,
    'forms-applications': FaFileAlt,
    'attendance': FaCalendarCheck,
    'student-cell': FaUsers,
    'opportunities': FaLightbulb,
    'email-system': FaEnvelope,
    'campus-mantri': FaUserShield,
    'analytics': FaChartBar,
};

export default function Services() {
    const handleCardHover = (e, isEnter) => {
        const topBar = e.currentTarget.querySelector('[data-topbar]');
        if (isEnter) {
            e.currentTarget.style.transform = 'translateY(-12px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
            e.currentTarget.style.borderColor = 'var(--primary-blue-light)';
            if (topBar) topBar.style.transform = 'scaleX(1)';
        } else {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--neutral-200)';
            if (topBar) topBar.style.transform = 'scaleX(0)';
        }
    };

    return (
        <>
            <Head>
                <title>Our Services | College Tech - Univy</title>
                <meta
                    name="description"
                    content="Explore Univy's complete campus digitization services: College Portal, Forms & Applications, Attendance System, Student Cell Software, and more."
                />
            </Head>

            <Navbar transparent />

            <main>
                {/* Hero */}
                <section style={pageStyles.hero}>
                    <div style={pageStyles.heroOrbs} />
                    <div style={pageStyles.container}>
                        <h1 style={pageStyles.heroTitle}>Our Services</h1>
                        <p style={pageStyles.heroSubtitle}>
                            Modular solutions designed for modern college management. Pick what you need, scale as you grow.
                        </p>
                    </div>
                </section>

                {/* Services Grid */}
                <section style={pageStyles.section}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.servicesGrid}>
                            {SERVICES.map((service) => {
                                const IconComponent = iconMap[service.id] || FaDesktop;

                                return (
                                    <div
                                        key={service.id}
                                        id={service.id}
                                        style={pageStyles.serviceCard}
                                        onMouseEnter={(e) => handleCardHover(e, true)}
                                        onMouseLeave={(e) => handleCardHover(e, false)}
                                    >
                                        <div data-topbar style={pageStyles.serviceCardTopBar} />
                                        <div style={pageStyles.serviceIcon}>
                                            <IconComponent />
                                        </div>
                                        <h2 style={pageStyles.serviceTitle}>{service.title}</h2>
                                        <p style={pageStyles.serviceTagline}>{service.tagline}</p>
                                        <p style={pageStyles.serviceDescription}>{service.shortDescription}</p>

                                        <ul style={pageStyles.featuresList}>
                                            {service.features.slice(0, 5).map((feature, idx) => (
                                                <li key={idx} style={pageStyles.featureItem}>
                                                    <span style={pageStyles.featureBullet} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={pageStyles.problemSolved}>
                                            <strong>Problem Solved:</strong> {service.problemSolved}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div style={pageStyles.cta}>
                            <h2 style={pageStyles.ctaTitle}>Need a Custom Solution?</h2>
                            <p style={pageStyles.ctaText}>
                                We can build tailored modules for your specific campus needs.
                            </p>
                            <Button href="/contact" variant="glass" size="large" rightIcon={<FaArrowRight />}>
                                Let's Discuss
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
