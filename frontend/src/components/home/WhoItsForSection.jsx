/**
 * Who It's For Section Component
 * Targeting different user types
 */

import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaUserTie } from 'react-icons/fa';

const sectionStyles = {
    section: {
        padding: 'var(--space-24) 0',
        background: 'linear-gradient(135deg, var(--neutral-900) 0%, #1E293B 100%)',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden',
    },
    bgOrbs: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
      radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 40%)
    `,
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
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.9)',
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
        marginBottom: 'var(--space-4)',
    },
    subtitle: {
        fontSize: 'var(--text-lg)',
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 'var(--leading-relaxed)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-8)',
    },
    card: {
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8)',
        transition: 'all var(--transition-slow)',
        position: 'relative',
        overflow: 'hidden',
    },
    cardGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'var(--gradient-primary)',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--transition-slow)',
    },
    cardIcon: {
        width: '64px',
        height: '64px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        marginBottom: 'var(--space-6)',
        boxShadow: 'var(--shadow-purple)',
    },
    cardTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        marginBottom: 'var(--space-4)',
    },
    cardList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    cardListItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-3)',
        padding: 'var(--space-2) 0',
        fontSize: 'var(--text-sm)',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    cardBullet: {
        width: '6px',
        height: '6px',
        background: 'var(--accent-emerald)',
        borderRadius: '50%',
        marginTop: '6px',
        flexShrink: 0,
    },
};

const userTypes = [
    {
        id: 'students',
        icon: FaUserGraduate,
        title: 'For Students',
        benefits: [
            'Access notices instantly',
            'View attendance anytime',
            'Apply for certificates online',
            'Participate in campus opportunities',
            'Stay connected with college activities',
        ],
    },
    {
        id: 'faculty',
        icon: FaChalkboardTeacher,
        title: 'For Faculty',
        benefits: [
            'Mark attendance digitally',
            'Post announcements easily',
            'Manage course materials',
            'Track student progress',
            'Simplified workflows',
        ],
    },
    {
        id: 'student-cells',
        icon: FaUsers,
        title: 'For Student Cells',
        benefits: [
            'Centralized student database',
            'Bulk email system',
            'Event management workflows',
            'CR list generation',
            'Batch/course filters',
        ],
    },
    {
        id: 'administration',
        icon: FaUserTie,
        title: 'For Administration',
        benefits: [
            'Complete campus oversight',
            'Analytics dashboard',
            'Document automation',
            'Permission controls',
            'Workflow management',
        ],
    },
];

const WhoItsForSection = () => {
    return (
        <section style={sectionStyles.section} id="who-its-for">
            {/* Background */}
            <div style={sectionStyles.bgOrbs} />

            <div style={sectionStyles.container}>
                {/* Header */}
                <div style={sectionStyles.header}>
                    <span style={sectionStyles.eyebrow}>Who Benefits</span>
                    <h2 style={sectionStyles.title}>Built For Every Part of Your Campus</h2>
                    <p style={sectionStyles.subtitle}>
                        One platform, multiple stakeholders. Univy adapts to serve everyone
                        from students to the principal's office.
                    </p>
                </div>

                {/* Cards Grid */}
                <div style={sectionStyles.grid}>
                    {userTypes.map((user) => {
                        const IconComponent = user.icon;

                        return (
                            <div
                                key={user.id}
                                style={sectionStyles.card}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-12px)';
                                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                                    e.currentTarget.querySelector('[data-gradient]').style.transform = 'scaleX(1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.querySelector('[data-gradient]').style.transform = 'scaleX(0)';
                                }}
                            >
                                <div data-gradient style={sectionStyles.cardGradient} />
                                <div style={sectionStyles.cardIcon}>
                                    <IconComponent />
                                </div>
                                <h3 style={sectionStyles.cardTitle}>{user.title}</h3>
                                <ul style={sectionStyles.cardList}>
                                    {user.benefits.map((benefit, index) => (
                                        <li key={index} style={sectionStyles.cardListItem}>
                                            <span style={sectionStyles.cardBullet} />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhoItsForSection;
