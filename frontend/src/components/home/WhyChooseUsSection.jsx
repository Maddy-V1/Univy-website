/**
 * Why Choose Us Section Component
 * Key differentiators and trust signals
 */

import { FaPalette, FaCubes, FaHandshake, FaDollarSign, FaHeadset } from 'react-icons/fa';
import Button from '../common/Button';
import { WHY_CHOOSE_US } from '../../utils/constants';

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
    header: {
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto var(--space-16)',
    },
    eyebrow: {
        display: 'inline-block',
        padding: 'var(--space-1) var(--space-3)',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
        color: 'var(--accent-emerald)',
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
        marginBottom: 'var(--space-4)',
    },
    subtitle: {
        fontSize: 'var(--text-lg)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-8)',
    },
    card: {
        display: 'flex',
        gap: 'var(--space-5)',
        padding: 'var(--space-6)',
        background: 'var(--neutral-50)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--neutral-200)',
        transition: 'all var(--transition-slow)',
    },
    cardIcon: {
        width: '56px',
        height: '56px',
        background: 'var(--gradient-emerald-cyan)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: 'var(--white)',
        flexShrink: 0,
        boxShadow: 'var(--shadow-cyan)',
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-lg)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-2)',
    },
    cardDescription: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        margin: 0,
    },
    cta: {
        marginTop: 'var(--space-16)',
        textAlign: 'center',
        padding: 'var(--space-12)',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-2xl)',
        position: 'relative',
        overflow: 'hidden',
    },
    ctaBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
      radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
    `,
    },
    ctaContent: {
        position: 'relative',
        zIndex: 10,
    },
    ctaTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--white)',
        marginBottom: 'var(--space-4)',
    },
    ctaText: {
        fontSize: 'var(--text-lg)',
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 'var(--space-8)',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ctaButtons: {
        display: 'flex',
        gap: 'var(--space-4)',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
};

const iconMap = {
    design: FaPalette,
    modular: FaCubes,
    bridge: FaHandshake,
    costs: FaDollarSign,
    support: FaHeadset,
};

const WhyChooseUsSection = () => {
    return (
        <section style={sectionStyles.section} id="why-choose-us">
            <div style={sectionStyles.container}>
                {/* Header */}
                <div style={sectionStyles.header}>
                    <span style={sectionStyles.eyebrow}>Why Univy</span>
                    <h2 style={sectionStyles.title}>Why Colleges Trust Univy</h2>
                    <p style={sectionStyles.subtitle}>
                        We're not just another software vendor. We're building the future
                        of college operations, one campus at a time.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div style={sectionStyles.grid}>
                    {WHY_CHOOSE_US.map((reason, index) => {
                        const IconComponent = iconMap[reason.icon] || FaPalette;

                        return (
                            <div
                                key={reason.id}
                                style={sectionStyles.card}
                                className="fade-in-up"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                    e.currentTarget.style.borderColor = 'var(--accent-emerald)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'var(--neutral-200)';
                                }}
                            >
                                <div style={sectionStyles.cardIcon}>
                                    <IconComponent />
                                </div>
                                <div style={sectionStyles.cardContent}>
                                    <h3 style={sectionStyles.cardTitle}>{reason.title}</h3>
                                    <p style={sectionStyles.cardDescription}>{reason.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Final CTA */}
                <div style={sectionStyles.cta}>
                    <div style={sectionStyles.ctaBg} />
                    <div style={sectionStyles.ctaContent}>
                        <h2 style={sectionStyles.ctaTitle}>
                            Ready to Transform Your Campus?
                        </h2>
                        <p style={sectionStyles.ctaText}>
                            Join forward-thinking colleges that have moved beyond WhatsApp and Excel.
                            Give your campus the digital workspace it deserves.
                        </p>
                        <div style={sectionStyles.ctaButtons}>
                            <Button href="/contact" variant="glass" size="large">
                                Schedule a Demo
                            </Button>
                            <Button
                                href="/pricing"
                                variant="glass"
                                size="large"
                                style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                            >
                                Get Custom Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
