/**
 * What Is Univy Section Component
 * Solution introduction with key features
 */

import { FaCheck, FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';

const sectionStyles = {
    section: {
        padding: 'var(--space-24) 0',
        background: 'var(--white)',
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: '0 var(--space-6)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'var(--space-12)',
        alignItems: 'center',
    },
    content: {
        maxWidth: '600px',
    },
    eyebrow: {
        display: 'inline-block',
        padding: 'var(--space-1) var(--space-3)',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        color: 'var(--secondary-purple)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-semibold)',
        borderRadius: 'var(--radius-full)',
        marginBottom: 'var(--space-4)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
    },
    title: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-6)',
        lineHeight: '1.2',
    },
    titleAccent: {
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    description: {
        fontSize: 'var(--text-lg)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        marginBottom: 'var(--space-8)',
    },
    featuresList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--space-4)',
        marginBottom: 'var(--space-8)',
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-3) var(--space-4)',
        background: 'var(--neutral-50)',
        borderRadius: 'var(--radius-md)',
        transition: 'all var(--transition-base)',
    },
    featureIcon: {
        width: '24px',
        height: '24px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--white)',
        fontSize: '0.75rem',
        flexShrink: 0,
    },
    featureText: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-700)',
        fontWeight: 'var(--font-medium)',
    },
    buttons: {
        display: 'flex',
        gap: 'var(--space-4)',
        flexWrap: 'wrap',
    },
    visual: {
        position: 'relative',
    },
    visualCard: {
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-8)',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-purple)',
    },
    visualCardBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
      radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
    `,
    },
    visualContent: {
        position: 'relative',
        zIndex: 10,
    },
    visualTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        marginBottom: 'var(--space-4)',
    },
    visualList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    visualListItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-3) 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: 'var(--text-base)',
    },
    visualIcon: {
        width: '20px',
        height: '20px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.7rem',
    },
};

const features = [
    'Built for Indian colleges, not adapted from generic ERP',
    'Modular system - pick what you need',
    'Student-friendly interfaces',
    'Faculty and admin dashboards',
    'Student Cell management software',
    'No ads, no student payments',
];

const WhatIsUnivySection = () => {
    return (
        <section style={sectionStyles.section} id="what-is-univy">
            <div style={sectionStyles.container}>
                <div style={{ ...sectionStyles.grid, gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                    {/* Content */}
                    <div style={sectionStyles.content}>
                        <span style={sectionStyles.eyebrow}>The Solution</span>
                        <h2 style={sectionStyles.title}>
                            Meet <span style={sectionStyles.titleAccent}>Univy</span> —<br />
                            Your College's Digital Workspace
                        </h2>
                        <p style={sectionStyles.description}>
                            College Tech - Univy is a modular B2B SaaS platform designed specifically for colleges.
                            We provide a customized digital portal and internal software suite that becomes the
                            daily workspace for your entire campus.
                        </p>

                        {/* Features List */}
                        <div style={sectionStyles.featuresList}>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    style={sectionStyles.featureItem}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--gradient-card)';
                                        e.currentTarget.style.transform = 'translateX(5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'var(--neutral-50)';
                                        e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                >
                                    <span style={sectionStyles.featureIcon}>
                                        <FaCheck />
                                    </span>
                                    <span style={sectionStyles.featureText}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={sectionStyles.buttons}>
                            <Button
                                href="/services"
                                variant="primary"
                                rightIcon={<FaArrowRight />}
                            >
                                Explore Services
                            </Button>
                            <Button href="/pricing" variant="secondary">
                                View Pricing
                            </Button>
                        </div>
                    </div>

                    {/* Visual Card */}
                    <div style={sectionStyles.visual}>
                        <div style={sectionStyles.visualCard}>
                            <div style={sectionStyles.visualCardBg} />
                            <div style={sectionStyles.visualContent}>
                                <h3 style={sectionStyles.visualTitle}>
                                    What Your Campus Gets
                                </h3>
                                <ul style={sectionStyles.visualList}>
                                    <li style={sectionStyles.visualListItem}>
                                        <span style={sectionStyles.visualIcon}><FaCheck /></span>
                                        Unified portal for all stakeholders
                                    </li>
                                    <li style={sectionStyles.visualListItem}>
                                        <span style={sectionStyles.visualIcon}><FaCheck /></span>
                                        Digital attendance & academics
                                    </li>
                                    <li style={sectionStyles.visualListItem}>
                                        <span style={sectionStyles.visualIcon}><FaCheck /></span>
                                        Official announcements channel
                                    </li>
                                    <li style={sectionStyles.visualListItem}>
                                        <span style={sectionStyles.visualIcon}><FaCheck /></span>
                                        Student Cell tools & database
                                    </li>
                                    <li style={sectionStyles.visualListItem}>
                                        <span style={sectionStyles.visualIcon}><FaCheck /></span>
                                        Forms & applications online
                                    </li>
                                    <li style={{ ...sectionStyles.visualListItem, borderBottom: 'none' }}>
                                        <span style={sectionStyles.visualIcon}><FaCheck /></span>
                                        Analytics & admin controls
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsUnivySection;
