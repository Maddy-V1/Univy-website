/**
 * Core Modules Section Component
 * Showcasing main product modules
 */

import {
    FaDesktop, FaFileAlt, FaCalendarCheck, FaUsers,
    FaLightbulb, FaEnvelope, FaUserShield, FaChartBar
} from 'react-icons/fa';
import { FeatureCard } from '../common/Card';
import Button from '../common/Button';
import { SERVICES } from '../../utils/constants';

const sectionStyles = {
    section: {
        padding: 'var(--space-24) 0',
        background: 'var(--neutral-50)',
        position: 'relative',
        overflow: 'hidden',
    },
    bgElement: {
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: '0.08',
        pointerEvents: 'none',
    },
    bgPurple: {
        background: 'var(--secondary-purple)',
        top: '20%',
        right: '-300px',
    },
    bgBlue: {
        background: 'var(--primary-blue)',
        bottom: '10%',
        left: '-300px',
    },
    container: {
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: '0 var(--space-6)',
        position: 'relative',
        zIndex: 10,
    },
    header: {
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto var(--space-16)',
    },
    eyebrow: {
        display: 'inline-block',
        padding: 'var(--space-1) var(--space-3)',
        background: 'var(--gradient-card)',
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
    cta: {
        textAlign: 'center',
        marginTop: 'var(--space-16)',
    },
    ctaText: {
        fontSize: 'var(--text-lg)',
        color: 'var(--neutral-600)',
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

const CoreModulesSection = () => {
    // Only show first 6 services on home page
    const displayedServices = SERVICES.slice(0, 6);

    return (
        <section style={sectionStyles.section} id="modules">
            {/* Background Elements */}
            <div style={{ ...sectionStyles.bgElement, ...sectionStyles.bgPurple }} />
            <div style={{ ...sectionStyles.bgElement, ...sectionStyles.bgBlue }} />

            <div style={sectionStyles.container}>
                {/* Header */}
                <div style={sectionStyles.header}>
                    <span style={sectionStyles.eyebrow}>Core Modules</span>
                    <h2 style={sectionStyles.title}>
                        Everything Your Campus Needs, In One Place
                    </h2>
                    <p style={sectionStyles.subtitle}>
                        Modular solutions that work together seamlessly. Start with what you need,
                        expand as you grow.
                    </p>
                </div>

                {/* Modules Grid */}
                <div style={sectionStyles.grid}>
                    {displayedServices.map((service, index) => {
                        const IconComponent = iconMap[service.id] || FaDesktop;

                        return (
                            <FeatureCard
                                key={service.id}
                                icon={<IconComponent />}
                                title={service.title}
                                description={service.shortDescription}
                                className="fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            />
                        );
                    })}
                </div>

                {/* CTA */}
                <div style={sectionStyles.cta}>
                    <p style={sectionStyles.ctaText}>
                        Discover all our modules and how they can transform your campus.
                    </p>
                    <Button href="/services" variant="primary" size="large">
                        Explore All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CoreModulesSection;
