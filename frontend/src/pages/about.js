/**
 * About Page
 * About us - Team members and company story
 */

import { useState } from 'react';
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
    // Horizontal Card Layout (Icon Left, Content Right)
    cardsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-12)',
        maxWidth: '900px',
        margin: '0 auto',
    },
    horizontalCard: {
        display: 'flex',
        gap: 'var(--space-6)',
        alignItems: 'flex-start',
        padding: 'var(--space-8)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(219, 234, 254, 0.85) 50%, rgba(191, 219, 254, 0.8) 100%)',
        backdropFilter: 'blur(12px)',
        borderRadius: 'var(--radius-xl)',
        transition: 'transform 0.2s ease, box-shadow 0.3s ease',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.12), 0 4px 16px rgba(139, 92, 246, 0.08)',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        position: 'relative',
        overflow: 'hidden',
    },
    cardIcon: {
        flexShrink: 0,
        width: '80px',
        height: '80px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        color: 'var(--white)',
        boxShadow: 'var(--shadow-purple)',
        transition: 'all 0.3s ease',
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-3)',
        lineHeight: '1.3',
    },
    cardText: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        marginBottom: 'var(--space-4)',
    },
    cardList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginTop: 'var(--space-4)',
    },
    cardListItem: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
        lineHeight: '1.8',
        marginBottom: 'var(--space-2)',
        paddingLeft: 'var(--space-4)',
        position: 'relative',
    },
    cardListItemBullet: {
        position: 'absolute',
        left: 0,
        top: '0.7em',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'var(--primary-purple)',
    },
    cta: {
        marginTop: 'var(--space-12)',
        textAlign: 'center',
    },
};

export default function About() {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (cardId) => {
        // Toggle: if clicking the open card, close it. If new card, open it.
        setExpandedCard(prev => prev === cardId ? null : cardId);
    };

    return (
        <>
            <Head>
                <title>About Us | College Tech - Univy</title>
                <meta
                    name="description"
                    content="About Univy - Meet the team behind the platform. Students building for students, passionate about transforming college operations in India."
                />
            </Head>

            <style jsx>{`
                @keyframes scanBorder {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes eyeMove {
                    0% {
                        transform: translateX(0);
                    }
                    25% {
                        transform: translateX(-3px);
                    }
                    50% {
                        transform: translateX(0);
                    }
                    75% {
                        transform: translateX(3px);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                @keyframes heartBeat {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }

                .horizontal-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease, z-index 0s;
                }

                .horizontal-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 16px 48px rgba(99, 102, 241, 0.2), 0 8px 24px rgba(139, 92, 246, 0.15);
                    z-index: 10;
                }

                .horizontal-card::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    background: linear-gradient(
                        60deg,
                        rgba(37, 99, 235, 1) 0%,
                        rgba(59, 130, 246, 1) 25%,
                        rgba(255, 255, 255, 0.95) 50%,
                        rgba(59, 130, 246, 1) 75%,
                        rgba(37, 99, 235, 1) 100%
                    );
                    background-size: 300% 300%;
                    border-radius: var(--radius-xl);
                    z-index: -1;
                    animation: scanBorder 3s linear infinite;
                    filter: blur(8px);
                }

                .horizontal-card:hover::before {
                    animation: none;
                    background: rgba(59, 130, 246, 0.6);
                }

                .horizontal-card::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: inherit;
                    border-radius: var(--radius-xl);
                    z-index: -1;
                }

                /* Icon hover effects - triggered by card hover */
                .horizontal-card:hover .card-icon-bulb {
                    filter: brightness(1.5) drop-shadow(0 0 12px rgba(251, 191, 36, 0.8));
                }

                .horizontal-card:hover .card-icon-heart {
                    color: #ef4444 !important;
                    animation: heartBeat 0.6s ease-in-out;
                }

                .horizontal-card:hover .eye-icon-inner {
                    animation: eyeMove 2s ease-in-out infinite;
                    display: inline-block;
                }

                .horizontal-card:hover .card-icon-eye {
                    transform: scale(1.15);
                }

                @media (max-width: 768px) {
                    .card-content-wrapper {
                        display: none;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }

                    /* Reduce icon size on mobile (0.75x of 80px = 60px) */
                    .horizontal-card .card-icon-heart,
                    .horizontal-card .card-icon-eye, 
                    .horizontal-card .card-icon-bulb {
                        width: 60px !important;
                        height: 60px !important;
                        font-size: 1.5rem !important;
                    }

                    .horizontal-card.mobile-active .card-content-wrapper {
                        display: block;
                        opacity: 1;
                        animation: fadeIn 0.4s ease forwards;
                    }

                    /* Active state animations for mobile (overrides hover dependency) */
                    .horizontal-card.mobile-active .card-icon-bulb {
                        filter: brightness(1.5) drop-shadow(0 0 12px rgba(251, 191, 36, 0.8));
                    }

                    .horizontal-card.mobile-active .card-icon-heart {
                        color: #ef4444 !important;
                        animation: heartBeat 0.6s ease-in-out;
                    }

                    .horizontal-card.mobile-active .eye-icon-inner {
                        animation: eyeMove 2s ease-in-out infinite;
                        display: inline-block;
                    }

                    .horizontal-card.mobile-active .card-icon-eye {
                        transform: scale(1.15);
                    }
                    
                    /* Remove hover effects on mobile to prevent sticky hovers */
                    .horizontal-card:hover {
                        transform: none;
                        box-shadow: 0 8px 32px rgba(99, 102, 241, 0.12), 0 4px 16px rgba(139, 92, 246, 0.08);
                    }
                    
                    .horizontal-card.mobile-active {
                        transform: scale(1.02);
                        box-shadow: 0 16px 48px rgba(99, 102, 241, 0.2), 0 8px 24px rgba(139, 92, 246, 0.15);
                        z-index: 10;
                    }

                    .horizontal-card.mobile-active::before {
                        animation: none;
                        background: rgba(59, 130, 246, 0.6);
                    }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>


            <Navbar transparent />

            <main>
                {/* Hero */}
                <PageHero
                    size="small"
                    subtitle="About Us"
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

                {/* Our Story, Vision, and Problems Cards */}
                <section style={{ ...pageStyles.section, ...pageStyles.sectionAlt }}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.sectionHeader}>
                            <span style={pageStyles.sectionEyebrow}>About Univy</span>
                            <h2 style={pageStyles.sectionTitle}>Our Journey & Mission</h2>
                        </div>

                        <div style={pageStyles.cardsContainer}>
                            {/* Our Story Card */}
                            <div
                                className={`horizontal-card ${expandedCard === 'story' ? 'mobile-active' : ''}`}
                                style={pageStyles.horizontalCard}
                                onClick={() => handleCardClick('story')}
                            >
                                <div className="card-icon-heart" style={pageStyles.cardIcon}>
                                    <FaHeart />
                                </div>
                                <div style={pageStyles.cardContent}>
                                    <h3 style={pageStyles.cardTitle}>Our Story</h3>
                                    <div className="card-content-wrapper">
                                        <p style={pageStyles.cardText}>
                                            College Tech - Univy was born from firsthand experience with broken campus systems.
                                            As students and Student Cell members ourselves, we've experienced the pain points directly.
                                            We realized colleges needed a modern, student-friendly digital workspace — not a complex
                                            ERP that nobody wants to use, but a daily-use platform designed for how students and
                                            faculty actually work.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Our Vision Card */}
                            <div
                                className={`horizontal-card ${expandedCard === 'vision' ? 'mobile-active' : ''}`}
                                style={pageStyles.horizontalCard}
                                onClick={() => handleCardClick('vision')}
                            >
                                <div className="card-icon-eye" style={pageStyles.cardIcon}>
                                    <div className="eye-icon-inner">
                                        <FaBullseye />
                                    </div>
                                </div>
                                <div style={pageStyles.cardContent}>
                                    <h3 style={pageStyles.cardTitle}>Our Vision</h3>
                                    <div className="card-content-wrapper">
                                        <p style={pageStyles.cardText}>
                                            To become the standard digital workspace for every college in India — a platform that
                                            students, faculty, and administrators rely on daily. We envision a future where campus
                                            communication is seamless and every stakeholder has the tools they need to succeed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Problems We've Experienced Card */}
                            <div
                                className={`horizontal-card ${expandedCard === 'problems' ? 'mobile-active' : ''}`}
                                style={pageStyles.horizontalCard}
                                onClick={() => handleCardClick('problems')}
                            >
                                <div className="card-icon-bulb" style={pageStyles.cardIcon}>
                                    💡
                                </div>
                                <div style={pageStyles.cardContent}>
                                    <h3 style={pageStyles.cardTitle}>Problems&nbsp;We've Experienced</h3>
                                    <div className="card-content-wrapper">
                                        <p style={pageStyles.cardText}>
                                            Real challenges we faced as students that inspired us to build Univy:
                                        </p>
                                        <ul style={pageStyles.cardList}>
                                            <li style={pageStyles.cardListItem}>
                                                <span style={pageStyles.cardListItemBullet} />
                                                Important notices lost in 300+ member WhatsApp groups
                                            </li>
                                            <li style={pageStyles.cardListItem}>
                                                <span style={pageStyles.cardListItemBullet} />
                                                Manual attendance marking eating class time
                                            </li>
                                            <li style={pageStyles.cardListItem}>
                                                <span style={pageStyles.cardListItemBullet} />
                                                Excel sheets crashing before bulk emails
                                            </li>
                                            <li style={pageStyles.cardListItem}>
                                                <span style={pageStyles.cardListItemBullet} />
                                                Students missing opportunities due to poor communication
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
