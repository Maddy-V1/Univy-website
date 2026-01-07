/**
 * Team Page
 * Team members and company story
 */

import Head from 'next/head';
import { FaHeart, FaBullseye } from 'react-icons/fa';
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
    visionCard: {
        maxWidth: '750px',
        margin: '0 auto',
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8)',
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid var(--neutral-200)',
    },
    visionCardBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'var(--gradient-primary)',
    },
    visionIcon: {
        width: '56px',
        height: '56px',
        background: 'var(--gradient-primary)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: 'var(--white)',
        margin: '0 auto var(--space-4)',
        boxShadow: 'var(--shadow-purple)',
    },
    visionTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-3)',
    },
    visionText: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        maxWidth: '550px',
        margin: '0 auto',
    },
    cta: {
        marginTop: 'var(--space-12)',
        textAlign: 'center',
    },
};

export default function Team() {
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
                    size="small"
                    subtitle="Our Team"
                    title="The People Behind Univy"
                    description="Students building for students, backed by a passion for transforming campus life."
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

                {/* Vision */}
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
                                communication is seamless and every stakeholder has the tools they need to succeed.
                            </p>
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
