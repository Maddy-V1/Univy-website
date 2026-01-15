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
    // FAQ-style expandable sections
    faqContainer: {
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    },
    faqItem: {
        borderTop: '1px solid var(--neutral-200)',
        transition: 'all 0.3s ease',
    },
    faqItemOpen: {
        background: 'rgba(59, 130, 246, 0.02)',
        borderRadius: 'var(--radius-lg)',
        borderTop: '1px solid rgba(59, 130, 246, 0.2)',
        transform: 'scale(1.01)',
        boxShadow: '0 4px 20px rgba(59, 130, 246, 0.08)',
    },
    faqQuestion: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 'var(--space-6) var(--space-4)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.2s ease',
        borderRadius: 'var(--radius-lg)',
    },
    faqQuestionOpen: {
        color: 'var(--primary-blue)',
        padding: 'var(--space-6)',
    },
    faqQuestionContent: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        flex: 1,
    },
    faqIcon: {
        width: '48px',
        height: '48px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        color: 'var(--white)',
        flexShrink: 0,
        transition: 'all 0.3s ease',
    },
    faqQuestionText: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-lg)',
        fontWeight: 'var(--font-semibold)',
        color: 'var(--neutral-900)',
        transition: 'color 0.2s ease',
    },
    faqToggle: {
        fontSize: '1.5rem',
        fontWeight: '300',
        color: 'var(--neutral-500)',
        transition: 'all 0.2s ease',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    faqToggleOpen: {
        color: 'var(--primary-blue)',
        transform: 'rotate(180deg)',
    },
    faqAnswer: {
        maxHeight: 0,
        overflow: 'hidden',
        opacity: 0,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '0 var(--space-4)',
    },
    faqAnswerOpen: {
        maxHeight: '600px',
        opacity: 1,
        padding: '0 var(--space-6) var(--space-6)',
    },
    problemsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        marginTop: 'var(--space-4)',
    },
    problemItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-3)',
        background: 'rgba(59, 130, 246, 0.05)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-700)',
        lineHeight: '1.5',
    },
    problemIcon: {
        fontSize: '1.1rem',
        flexShrink: 0,
    },
};

export default function About() {
    // Start with first section open by default
    const [expandedCard, setExpandedCard] = useState('story');

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
                .faq-item:hover .faq-question {
                    background: rgba(59, 130, 246, 0.05);
                }

                .faq-item:hover .faq-icon {
                    transform: scale(1.05);
                    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
                }

                .faq-answer p {
                    font-size: var(--text-sm);
                    color: var(--neutral-600);
                    line-height: 1.6;
                    margin-bottom: var(--space-3);
                }

                .faq-answer p:last-child {
                    margin-bottom: 0;
                }

                @media (max-width: 768px) {
                    .faq-icon {
                        width: 40px !important;
                        height: 40px !important;
                        font-size: 1rem !important;
                    }
                    
                    .faq-question-text {
                        font-size: var(--text-base) !important;
                    }
                    
                    .faq-question {
                        padding: var(--space-4) !important;
                    }
                    
                    .faq-answer-open {
                        padding: 0 var(--space-4) var(--space-4) !important;
                    }
                    
                    .faq-answer p {
                        font-size: var(--text-xs) !important;
                    }
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

                {/* Our Journey & Mission - FAQ Style */}
                <section style={{ ...pageStyles.section, ...pageStyles.sectionAlt }}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.sectionHeader}>
                            <span style={pageStyles.sectionEyebrow}>About Univy</span>
                            <h2 style={pageStyles.sectionTitle}>Our Journey & Mission</h2>
                            <p style={pageStyles.sectionSubtitle}>
                                Students building for students. Here's our story and what drives us.
                            </p>
                        </div>

                        <div style={pageStyles.faqContainer}>
                            {/* Our Story */}
                            <div 
                                className="faq-item"
                                style={{
                                    ...pageStyles.faqItem,
                                    ...(expandedCard === 'story' ? pageStyles.faqItemOpen : {}),
                                }}
                            >
                                <button
                                    className="faq-question"
                                    style={{
                                        ...pageStyles.faqQuestion,
                                        ...(expandedCard === 'story' ? pageStyles.faqQuestionOpen : {}),
                                    }}
                                    onClick={() => handleCardClick('story')}
                                    aria-expanded={expandedCard === 'story'}
                                >
                                    <div style={pageStyles.faqQuestionContent}>
                                        <div className="faq-icon" style={pageStyles.faqIcon}>
                                            <FaHeart />
                                        </div>
                                        <span className="faq-question-text" style={pageStyles.faqQuestionText}>Our Story</span>
                                    </div>
                                    <span style={{
                                        ...pageStyles.faqToggle,
                                        ...(expandedCard === 'story' ? pageStyles.faqToggleOpen : {}),
                                    }}>
                                        {expandedCard === 'story' ? '−' : '+'}
                                    </span>
                                </button>
                                <div style={{
                                    ...pageStyles.faqAnswer,
                                    ...(expandedCard === 'story' ? pageStyles.faqAnswerOpen : {}),
                                }}>
                                    <p>
                                        We're students who got tired of broken campus systems. As Student Cell members, 
                                        we lived through the chaos of WhatsApp groups, manual attendance, and crashed Excel sheets.
                                    </p>
                                    <p>
                                        So we built what we wished we had — a platform that actually works for students and faculty, 
                                        not another complex ERP that sits unused.
                                    </p>
                                </div>
                            </div>

                            {/* Our Vision */}
                            <div 
                                className="faq-item"
                                style={{
                                    ...pageStyles.faqItem,
                                    ...(expandedCard === 'vision' ? pageStyles.faqItemOpen : {}),
                                }}
                            >
                                <button
                                    className="faq-question"
                                    style={{
                                        ...pageStyles.faqQuestion,
                                        ...(expandedCard === 'vision' ? pageStyles.faqQuestionOpen : {}),
                                    }}
                                    onClick={() => handleCardClick('vision')}
                                    aria-expanded={expandedCard === 'vision'}
                                >
                                    <div style={pageStyles.faqQuestionContent}>
                                        <div className="faq-icon" style={pageStyles.faqIcon}>
                                            <FaBullseye />
                                        </div>
                                        <span className="faq-question-text" style={pageStyles.faqQuestionText}>Our Vision</span>
                                    </div>
                                    <span style={{
                                        ...pageStyles.faqToggle,
                                        ...(expandedCard === 'vision' ? pageStyles.faqToggleOpen : {}),
                                    }}>
                                        {expandedCard === 'vision' ? '−' : '+'}
                                    </span>
                                </button>
                                <div style={{
                                    ...pageStyles.faqAnswer,
                                    ...(expandedCard === 'vision' ? pageStyles.faqAnswerOpen : {}),
                                }}>
                                    <p>
                                        Every college in India should have a digital workspace that people actually want to use. 
                                        Not because they have to, but because it makes their day easier.
                                    </p>
                                    <p>
                                        We're building the platform that becomes as essential as WhatsApp — 
                                        but organized, professional, and built for education.
                                    </p>
                                </div>
                            </div>

                            {/* Problems We Solved */}
                            <div 
                                className="faq-item"
                                style={{
                                    ...pageStyles.faqItem,
                                    ...(expandedCard === 'problems' ? pageStyles.faqItemOpen : {}),
                                }}
                            >
                                <button
                                    className="faq-question"
                                    style={{
                                        ...pageStyles.faqQuestion,
                                        ...(expandedCard === 'problems' ? pageStyles.faqQuestionOpen : {}),
                                    }}
                                    onClick={() => handleCardClick('problems')}
                                    aria-expanded={expandedCard === 'problems'}
                                >
                                    <div style={pageStyles.faqQuestionContent}>
                                        <div className="faq-icon" style={pageStyles.faqIcon}>
                                            💡
                                        </div>
                                        <span className="faq-question-text" style={pageStyles.faqQuestionText}>Problems We Solved</span>
                                    </div>
                                    <span style={{
                                        ...pageStyles.faqToggle,
                                        ...(expandedCard === 'problems' ? pageStyles.faqToggleOpen : {}),
                                    }}>
                                        {expandedCard === 'problems' ? '−' : '+'}
                                    </span>
                                </button>
                                <div style={{
                                    ...pageStyles.faqAnswer,
                                    ...(expandedCard === 'problems' ? pageStyles.faqAnswerOpen : {}),
                                }}>
                                    <div style={pageStyles.problemsList}>
                                        <div style={pageStyles.problemItem}>
                                            <span style={pageStyles.problemIcon}>�</span>
                                            <span>Important notices drowning in 300+ member WhatsApp groups</span>
                                        </div>
                                        <div style={pageStyles.problemItem}>
                                            <span style={pageStyles.problemIcon}>⏰</span>
                                            <span>Manual attendance eating up precious class time</span>
                                        </div>
                                        <div style={pageStyles.problemItem}>
                                            <span style={pageStyles.problemIcon}>💥</span>
                                            <span>Excel sheets crashing right before sending bulk emails</span>
                                        </div>
                                        <div style={pageStyles.problemItem}>
                                            <span style={pageStyles.problemIcon}>😞</span>
                                            <span>Students missing opportunities due to poor communication</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
