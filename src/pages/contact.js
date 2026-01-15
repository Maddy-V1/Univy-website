/**
 * Contact Page
 * Contact form and information
 */

import Head from 'next/head';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaClock } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/contact/ContactForm';
import { CONTACT_INFO } from '../utils/constants';

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
        maxWidth: '600px',
        margin: '0 auto',
    },
    section: {
        padding: 'var(--space-20) 0',
        background: 'var(--neutral-50)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'var(--space-12)',
        alignItems: 'start',
    },
    contactInfo: {
        order: 2,
    },
    contactForm: {
        order: 1,
    },
    infoCard: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-8)',
        border: '1px solid var(--neutral-200)',
        marginBottom: 'var(--space-6)',
    },
    infoTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-6)',
    },
    infoItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-4)',
        padding: 'var(--space-4) 0',
        borderBottom: '1px solid var(--neutral-100)',
    },
    infoIcon: {
        width: '48px',
        height: '48px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--white)',
        fontSize: '1.25rem',
        flexShrink: 0,
        boxShadow: 'var(--shadow-purple)',
    },
    infoContent: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-500)',
        marginBottom: 'var(--space-1)',
    },
    infoValue: {
        fontSize: 'var(--text-base)',
        color: 'var(--neutral-900)',
        fontWeight: 'var(--font-medium)',
    },
    infoLink: {
        color: 'var(--primary-blue)',
        textDecoration: 'none',
        transition: 'color var(--transition-fast)',
    },
    quickContact: {
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-8)',
        color: 'var(--white)',
        textAlign: 'center',
    },
    quickContactTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        marginBottom: 'var(--space-4)',
    },
    quickContactText: {
        fontSize: 'var(--text-base)',
        opacity: 0.9,
        marginBottom: 'var(--space-6)',
    },
    quickContactButtons: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
    },
    quickContactButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-4)',
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--white)',
        textDecoration: 'none',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-medium)',
        transition: 'all var(--transition-base)',
    },
    formTypeToggle: {
        display: 'flex',
        gap: 'var(--space-2)',
        marginBottom: 'var(--space-6)',
    },
    toggleBtn: {
        flex: 1,
        padding: 'var(--space-3) var(--space-4)',
        border: '2px solid var(--neutral-200)',
        borderRadius: 'var(--radius-md)',
        background: 'var(--white)',
        color: 'var(--neutral-600)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-medium)',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
        fontFamily: 'var(--font-accent)',
    },
    toggleBtnActive: {
        background: 'var(--gradient-primary)',
        color: 'var(--white)',
        border: '2px solid transparent',
    },
};

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | College Tech - Univy</title>
                <meta
                    name="description"
                    content="Get in touch with the Univy team. Request a demo, ask questions, or get a custom quote for your college."
                />
            </Head>

            <Navbar transparent />

            <main>
                {/* Hero */}
                <PageHero
                    size="small"
                    subtitle="Get In Touch"
                    title="Let's Talk"
                    description="Ready to transform your campus? Request a demo, ask questions, or just say hello."
                />

                {/* Contact Section */}
                <section style={pageStyles.section}>
                    <div style={pageStyles.container}>
                        <div
                            style={{
                                ...pageStyles.grid,
                                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            }}
                        >
                            {/* Contact Form */}
                            <div style={pageStyles.contactForm}>
                                <ContactForm type="demo" />
                            </div>

                            {/* Contact Info */}
                            <div style={pageStyles.contactInfo}>
                                {/* Contact Details Card */}
                                <div style={pageStyles.infoCard}>
                                    <h2 style={pageStyles.infoTitle}>Contact Information</h2>

                                    <div style={pageStyles.infoItem}>
                                        <div style={pageStyles.infoIcon}>
                                            <FaEnvelope />
                                        </div>
                                        <div style={pageStyles.infoContent}>
                                            <div style={pageStyles.infoLabel}>Email</div>
                                            <a
                                                href={`mailto:${CONTACT_INFO.email}`}
                                                style={{ ...pageStyles.infoValue, ...pageStyles.infoLink }}
                                            >
                                                {CONTACT_INFO.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div style={pageStyles.infoItem}>
                                        <div style={pageStyles.infoIcon}>
                                            <FaPhone />
                                        </div>
                                        <div style={pageStyles.infoContent}>
                                            <div style={pageStyles.infoLabel}>Phone</div>
                                            <a
                                                href={`tel:${CONTACT_INFO.phone}`}
                                                style={{ ...pageStyles.infoValue, ...pageStyles.infoLink }}
                                            >
                                                {CONTACT_INFO.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div style={pageStyles.infoItem}>
                                        <div style={pageStyles.infoIcon}>
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div style={pageStyles.infoContent}>
                                            <div style={pageStyles.infoLabel}>Office</div>
                                            <div style={pageStyles.infoValue}>{CONTACT_INFO.address}</div>
                                        </div>
                                    </div>

                                    <div style={{ ...pageStyles.infoItem, borderBottom: 'none' }}>
                                        <div style={pageStyles.infoIcon}>
                                            <FaClock />
                                        </div>
                                        <div style={pageStyles.infoContent}>
                                            <div style={pageStyles.infoLabel}>Response Time</div>
                                            <div style={pageStyles.infoValue}>Within 24 hours</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Contact Card */}
                                <div style={pageStyles.quickContact}>
                                    <h3 style={pageStyles.quickContactTitle}>Prefer Quick Chat?</h3>
                                    <p style={pageStyles.quickContactText}>
                                        Reach out directly through your preferred channel.
                                    </p>
                                    <div style={pageStyles.quickContactButtons}>
                                        <a
                                            href={`mailto:${CONTACT_INFO.email}`}
                                            style={pageStyles.quickContactButton}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                            }}
                                        >
                                            <FaEnvelope /> Send Email
                                        </a>
                                        <a
                                            href={`tel:${CONTACT_INFO.phone}`}
                                            style={pageStyles.quickContactButton}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                            }}
                                        >
                                            <FaPhone /> Give Us a Call
                                        </a>
                                        {CONTACT_INFO.linkedin && (
                                            <a
                                                href={CONTACT_INFO.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={pageStyles.quickContactButton}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                                }}
                                            >
                                                <FaLinkedin /> Connect on LinkedIn
                                            </a>
                                        )}
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
