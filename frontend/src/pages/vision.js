/**
 * Vision Page
 * Company vision and future plans
 */

import Head from 'next/head';
import { FaRocket, FaGlobe, FaGraduationCap, FaHandshake, FaChartLine, FaBullseye } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

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
        maxWidth: '700px',
        margin: '0 auto',
    },
    section: {
        padding: 'var(--space-20) 0',
        background: 'var(--neutral-50)',
    },
    sectionAlt: {
        background: 'var(--white)',
    },
    visionCard: {
        maxWidth: '900px',
        margin: '0 auto',
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-12)',
        boxShadow: 'var(--shadow-xl)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    visionCardBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'var(--gradient-primary)',
    },
    visionIcon: {
        width: '80px',
        height: '80px',
        background: 'var(--gradient-primary)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        color: 'var(--white)',
        margin: '0 auto var(--space-6)',
        boxShadow: 'var(--shadow-purple)',
    },
    visionTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-3xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-6)',
    },
    visionText: {
        fontSize: 'var(--text-lg)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        maxWidth: '700px',
        margin: '0 auto',
    },
    sectionHeader: {
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto var(--space-12)',
    },
    sectionEyebrow: {
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
    sectionTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-4)',
    },
    sectionSubtitle: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
    },
    goalsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-8)',
    },
    goalCard: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8)',
        border: '1px solid var(--neutral-200)',
        transition: 'all var(--transition-slow)',
    },
    goalIcon: {
        width: '56px',
        height: '56px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: 'var(--white)',
        marginBottom: 'var(--space-5)',
        boxShadow: 'var(--shadow-purple)',
    },
    goalTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-3)',
    },
    goalDescription: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        margin: 0,
    },
    roadmap: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--space-6)',
    },
    roadmapPhase: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-6)',
        border: '1px solid var(--neutral-200)',
        position: 'relative',
        overflow: 'hidden',
    },
    roadmapBadge: {
        display: 'inline-block',
        padding: 'var(--space-1) var(--space-3)',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-semibold)',
        marginBottom: 'var(--space-4)',
    },
    roadmapTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-lg)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-3)',
    },
    roadmapList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    roadmapItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-2) 0',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
    },
    roadmapBullet: {
        width: '6px',
        height: '6px',
        background: 'var(--accent-emerald)',
        borderRadius: '50%',
        flexShrink: 0,
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
};

const goals = [
    {
        icon: FaGraduationCap,
        title: 'Every College, Digital',
        description: 'Our mission is to bring every Indian college onto a modern digital platform that students and faculty actually want to use.',
    },
    {
        icon: FaHandshake,
        title: 'Student-Admin Harmony',
        description: 'Bridge the gap between administration and students with transparent, efficient communication systems.',
    },
    {
        icon: FaChartLine,
        title: 'Data-Driven Decisions',
        description: 'Empower college leadership with insights and analytics to make better decisions for their institutions.',
    },
];

const roadmapPhases = [
    {
        phase: 'Phase 1',
        status: 'Current',
        statusColor: 'var(--accent-emerald)',
        title: 'Foundation',
        items: ['Core portal features', 'Attendance system', 'Basic forms', 'Student Cell tools'],
    },
    {
        phase: 'Phase 2',
        status: 'Next',
        statusColor: 'var(--primary-blue)',
        title: 'Enhancement',
        items: ['Advanced analytics', 'Bulk email system', 'Event management', 'Mobile app'],
    },
    {
        phase: 'Phase 3',
        status: 'Future',
        statusColor: 'var(--secondary-purple)',
        title: 'Innovation',
        items: ['AI-powered insights', 'Alumni network', 'Placement integration', 'Multi-campus'],
    },
];

export default function Vision() {
    const handleGoalHover = (e, isEnter) => {
        if (isEnter) {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            e.currentTarget.style.borderColor = 'var(--primary-blue-light)';
        } else {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--neutral-200)';
        }
    };

    return (
        <>
            <Head>
                <title>Our Vision | College Tech - Univy</title>
                <meta
                    name="description"
                    content="Discover Univy's vision for the future of college operations in India. Our roadmap to transforming campus experiences."
                />
            </Head>

            <Navbar transparent />

            <main>
                {/* Hero */}
                <section style={pageStyles.hero}>
                    <div style={pageStyles.heroOrbs} />
                    <div style={pageStyles.container}>
                        <h1 style={pageStyles.heroTitle}>Our Vision for the Future</h1>
                        <p style={pageStyles.heroSubtitle}>
                            We're building more than software. We're creating the future of how colleges operate,
                            communicate, and empower their communities.
                        </p>
                    </div>
                </section>

                {/* Vision Statement */}
                <section style={pageStyles.section}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.visionCard}>
                            <div style={pageStyles.visionCardBg} />
                            <div style={pageStyles.visionIcon}>
                                <FaBullseye />
                            </div>
                            <h2 style={pageStyles.visionTitle}>Our Vision</h2>
                            <p style={pageStyles.visionText}>
                                To become the standard digital workspace for every college in India — a platform that
                                students, faculty, and administrators rely on daily. We envision a future where campus
                                communication is seamless, operations are efficient, and every stakeholder has the
                                tools they need to succeed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Goals */}
                <section style={{ ...pageStyles.section, ...pageStyles.sectionAlt }}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.sectionHeader}>
                            <span style={pageStyles.sectionEyebrow}>Our Goals</span>
                            <h2 style={pageStyles.sectionTitle}>What We're Working Towards</h2>
                        </div>

                        <div style={pageStyles.goalsGrid}>
                            {goals.map((goal, index) => {
                                const IconComponent = goal.icon;
                                return (
                                    <div
                                        key={index}
                                        style={pageStyles.goalCard}
                                        onMouseEnter={(e) => handleGoalHover(e, true)}
                                        onMouseLeave={(e) => handleGoalHover(e, false)}
                                    >
                                        <div style={pageStyles.goalIcon}>
                                            <IconComponent />
                                        </div>
                                        <h3 style={pageStyles.goalTitle}>{goal.title}</h3>
                                        <p style={pageStyles.goalDescription}>{goal.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Roadmap */}
                <section style={pageStyles.section}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.sectionHeader}>
                            <span style={pageStyles.sectionEyebrow}>Roadmap</span>
                            <h2 style={pageStyles.sectionTitle}>Our Journey Ahead</h2>
                            <p style={pageStyles.sectionSubtitle}>
                                Here's what we're building now and what's coming next.
                            </p>
                        </div>

                        <div style={pageStyles.roadmap}>
                            {roadmapPhases.map((phase, index) => (
                                <div key={index} style={pageStyles.roadmapPhase}>
                                    <span
                                        style={{
                                            ...pageStyles.roadmapBadge,
                                            background: `${phase.statusColor}20`,
                                            color: phase.statusColor,
                                        }}
                                    >
                                        {phase.phase} — {phase.status}
                                    </span>
                                    <h3 style={pageStyles.roadmapTitle}>{phase.title}</h3>
                                    <ul style={pageStyles.roadmapList}>
                                        {phase.items.map((item, idx) => (
                                            <li key={idx} style={pageStyles.roadmapItem}>
                                                <span style={pageStyles.roadmapBullet} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div style={pageStyles.cta}>
                            <h2 style={pageStyles.ctaTitle}>Be Part of Our Story</h2>
                            <p style={pageStyles.ctaText}>
                                Join us in transforming college campuses across India.
                            </p>
                            <Button href="/contact" variant="glass" size="large">
                                Start the Conversation
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
