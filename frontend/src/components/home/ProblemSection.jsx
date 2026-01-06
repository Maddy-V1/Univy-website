/**
 * Problem Section Component
 * Showcasing campus management challenges
 */

import { FaExclamationTriangle, FaFileAlt, FaUsers, FaUnlink } from 'react-icons/fa';
import { PROBLEMS } from '../../utils/constants';

const problemStyles = {
    section: {
        padding: 'var(--space-24) 0',
        background: 'var(--neutral-50)',
        position: 'relative',
        overflow: 'hidden',
    },
    bgElement: {
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: '0.1',
        pointerEvents: 'none',
    },
    bgPurple: {
        background: 'var(--secondary-purple)',
        top: '-200px',
        right: '-200px',
    },
    bgBlue: {
        background: 'var(--primary-blue)',
        bottom: '-200px',
        left: '-200px',
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
        background: 'rgba(239, 68, 68, 0.1)',
        color: '#DC2626',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-6)',
    },
    card: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8)',
        border: '1px solid var(--neutral-200)',
        transition: 'all var(--transition-slow)',
        position: 'relative',
        overflow: 'hidden',
    },
    cardHover: {
        transform: 'translateY(-8px)',
        boxShadow: 'var(--shadow-lg)',
        borderColor: 'rgba(239, 68, 68, 0.3)',
    },
    cardIcon: {
        width: '56px',
        height: '56px',
        background: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)',
        color: '#DC2626',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        marginBottom: 'var(--space-5)',
    },
    cardTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-3)',
    },
    cardDescription: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
    },
    bottomLine: {
        marginTop: 'var(--space-12)',
        textAlign: 'center',
        padding: 'var(--space-6) var(--space-8)',
        background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
    },
    bottomLineText: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-semibold)',
        color: '#B91C1C',
        margin: 0,
    },
};

const iconMap = {
    chaos: FaExclamationTriangle,
    manual: FaFileAlt,
    struggles: FaUsers,
    disconnected: FaUnlink,
};

const ProblemSection = () => {
    return (
        <section style={problemStyles.section} id="problems">
            {/* Background Elements */}
            <div style={{ ...problemStyles.bgElement, ...problemStyles.bgPurple }} />
            <div style={{ ...problemStyles.bgElement, ...problemStyles.bgBlue }} />

            <div style={problemStyles.container}>
                {/* Section Header */}
                <div style={problemStyles.header}>
                    <span style={problemStyles.eyebrow}>The Challenge</span>
                    <h2 style={problemStyles.title}>The Campus Management Crisis</h2>
                    <p style={problemStyles.subtitle}>
                        Indian colleges struggle with outdated systems that waste time, create confusion,
                        and frustrate everyone from students to administrators.
                    </p>
                </div>

                {/* Problem Cards */}
                <div style={problemStyles.grid}>
                    {PROBLEMS.map((problem, index) => {
                        const IconComponent = iconMap[problem.icon] || FaExclamationTriangle;

                        return (
                            <div
                                key={problem.id}
                                style={problemStyles.card}
                                className="fade-in-up"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'var(--neutral-200)';
                                }}
                            >
                                <div style={problemStyles.cardIcon}>
                                    <IconComponent />
                                </div>
                                <h3 style={problemStyles.cardTitle}>{problem.title}</h3>
                                <p style={problemStyles.cardDescription}>{problem.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Line */}
                <div style={problemStyles.bottomLine}>
                    <p style={problemStyles.bottomLineText}>
                        Your college deserves better than WhatsApp groups and Excel sheets.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
