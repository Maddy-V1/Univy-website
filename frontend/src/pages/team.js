/**
 * Team Page
 * Team members and company story
 */

import Head from 'next/head';
import { FaHeart, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PageHero from '../components/common/PageHero';
import TeamMember from '../components/team/TeamMember';
import Button from '../components/common/Button';
import { TEAM_MEMBERS } from '../utils/constants';

const pageStyles = {
    section: {
        padding: 'var(--space-20) 0',
        background: 'var(--neutral-50)',
    },
    sectionAlt: {
        background: 'var(--white)',
    },
    container: {
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: '0 var(--space-6)',
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
    teamGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-8)',
    },
    storyGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-8)',
        alignItems: 'center',
    },
    storyContent: {
        maxWidth: '600px',
    },
    storyTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-6)',
    },
    storyText: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        marginBottom: 'var(--space-4)',
    },
    storyCard: {
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-8)',
        color: 'var(--white)',
    },
    storyCardTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        marginBottom: 'var(--space-6)',
    },
    storyCardList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    storyCardItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-3) 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: 'var(--text-sm)',
    },
    valuesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--space-6)',
    },
    valueCard: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-6)',
        border: '1px solid var(--neutral-200)',
        textAlign: 'center',
        transition: 'all var(--transition-slow)',
    },
    valueIcon: {
        width: '56px',
        height: '56px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: 'var(--white)',
        margin: '0 auto var(--space-4)',
        boxShadow: 'var(--shadow-purple)',
    },
    valueTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-lg)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-2)',
    },
    valueDescription: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        margin: 0,
    },
    cta: {
        marginTop: 'var(--space-16)',
        textAlign: 'center',
    },
};

const values = [
    {
        icon: FaHeart,
        title: 'Student-First',
        description: 'Everything we build is designed with students in mind. Their experience matters most.',
    },
    {
        icon: FaRocket,
        title: 'Move Fast',
        description: 'We believe in rapid iteration and quick turnarounds. Your time is valuable.',
    },
    {
        icon: FaUsers,
        title: 'Collaboration',
        description: 'We work with colleges, not just for them. Your input shapes our product.',
    },
    {
        icon: FaLightbulb,
        title: 'Innovation',
        description: 'Constantly improving and adding features that make campus life better.',
    },
];

export default function Team() {
    const handleValueHover = (e, isEnter) => {
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
                <title>Our Team | College Tech - Univy</title>
                <meta
                    name="description"
                    content="Meet the team behind Univy. Students building for students, passionate about transforming college operations in India."
                />
            </Head>

            <Navbar transparent />

            <main>
                {/* Hero */}
                <PageHero
                    title="The People Behind Univy"
                    description="Students building for students, backed by a passion for transforming campus life."
                    size="medium"
                />

                {/* Team Members */}
                <section style={pageStyles.section}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.sectionHeader}>
                            <span style={pageStyles.sectionEyebrow}>The Team</span>
                            <h2 style={pageStyles.sectionTitle}>Our Founding Team</h2>
                            <p style={pageStyles.sectionSubtitle}>
                                A passionate group of individuals committed to solving real problems in college operations.
                            </p>
                        </div>

                        <div style={pageStyles.teamGrid}>
                            {TEAM_MEMBERS.map((member) => (
                                <TeamMember
                                    key={member.id}
                                    name={member.name}
                                    role={member.role}
                                    bio={member.bio}
                                    image={member.image}
                                    initials={member.initials}
                                    linkedin={member.linkedin}
                                    email={member.email}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section style={{ ...pageStyles.section, ...pageStyles.sectionAlt }}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.storyGrid}>
                            <div style={pageStyles.storyContent}>
                                <span style={pageStyles.sectionEyebrow}>Our Story</span>
                                <h2 style={pageStyles.storyTitle}>How Univy Started</h2>
                                <p style={pageStyles.storyText}>
                                    College Tech - Univy was born from firsthand experience with broken campus systems.
                                    As students and Student Cell members ourselves, we've experienced the pain points directly.
                                </p>
                                <p style={pageStyles.storyText}>
                                    We realized colleges needed a modern, student-friendly digital workspace. Not a complex
                                    ERP that nobody wants to use, but a daily-use platform designed for how students and
                                    faculty actually work.
                                </p>
                                <p style={pageStyles.storyText}>
                                    Started with our own college as the first test case. Today, we're building the
                                    platform we wish we had.
                                </p>
                            </div>
                            <div style={pageStyles.storyCard}>
                                <h3 style={pageStyles.storyCardTitle}>Problems We've Experienced</h3>
                                <ul style={pageStyles.storyCardList}>
                                    <li style={pageStyles.storyCardItem}>
                                        <FaHeart style={{ flexShrink: 0 }} />
                                        Important notices lost in 300+ member WhatsApp groups
                                    </li>
                                    <li style={pageStyles.storyCardItem}>
                                        <FaHeart style={{ flexShrink: 0 }} />
                                        Manual attendance marking eating class time
                                    </li>
                                    <li style={pageStyles.storyCardItem}>
                                        <FaHeart style={{ flexShrink: 0 }} />
                                        Excel sheets crashing before bulk emails
                                    </li>
                                    <li style={{ ...pageStyles.storyCardItem, borderBottom: 'none' }}>
                                        <FaHeart style={{ flexShrink: 0 }} />
                                        Students missing opportunities due to poor communication
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section style={pageStyles.section}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.sectionHeader}>
                            <span style={pageStyles.sectionEyebrow}>Our Values</span>
                            <h2 style={pageStyles.sectionTitle}>What Drives Us</h2>
                        </div>

                        <div style={pageStyles.valuesGrid}>
                            {values.map((value, index) => {
                                const IconComponent = value.icon;
                                return (
                                    <div
                                        key={index}
                                        style={pageStyles.valueCard}
                                        onMouseEnter={(e) => handleValueHover(e, true)}
                                        onMouseLeave={(e) => handleValueHover(e, false)}
                                    >
                                        <div style={pageStyles.valueIcon}>
                                            <IconComponent />
                                        </div>
                                        <h3 style={pageStyles.valueTitle}>{value.title}</h3>
                                        <p style={pageStyles.valueDescription}>{value.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <div style={pageStyles.cta}>
                            <Button href="/contact" variant="primary" size="large">
                                Join Us on This Journey
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
