/**
 * Hero Section Component - Enhanced Premium Version
 * Animated gradient background with floating particles and 3D effects
 */

import { useEffect, useState } from 'react';
import { FaArrowRight, FaPlay, FaRocket } from 'react-icons/fa';
import Button from '../common/Button';

const heroStyles = {
    hero: {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
    },
    heroBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--gradient-hero)',
        opacity: 0.9,
    },
    heroBgOrbs: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 60% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.2) 0%, transparent 40%)
        `,
        animation: 'gradientShift 12s ease infinite alternate',
    },
    // Floating particles container
    particles: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
    },
    particle: {
        position: 'absolute',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        animation: 'floatParticle 20s linear infinite',
    },
    // Grid pattern overlay
    gridOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
    },
    container: {
        position: 'relative',
        zIndex: 10,
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: '0 var(--space-6)',
        paddingTop: '120px',
    },
    content: {
        maxWidth: '850px',
        textAlign: 'center',
        margin: '0 auto',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-2) var(--space-5)',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 'var(--radius-full)',
        color: 'rgba(255, 255, 255, 0.95)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-medium)',
        marginBottom: 'var(--space-8)',
        animation: 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        boxShadow: '0 0 30px -10px rgba(139, 92, 246, 0.5)',
    },
    badgeIcon: {
        fontSize: '0.9rem',
        color: '#10B981',
    },
    headline: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 7vw, 5rem)',
        fontWeight: 'var(--font-extrabold)',
        lineHeight: '1.05',
        letterSpacing: '-0.03em',
        color: 'var(--white)',
        marginBottom: 'var(--space-6)',
        animation: 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.1s both',
    },
    headlineAccent: {
        background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #34D399 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        position: 'relative',
        display: 'inline-block',
    },
    subheadline: {
        fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
        lineHeight: '1.7',
        color: 'rgba(255, 255, 255, 0.75)',
        marginBottom: 'var(--space-10)',
        maxWidth: '640px',
        margin: '0 auto var(--space-10)',
        animation: 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both',
        fontWeight: 'var(--font-normal)',
    },
    buttons: {
        display: 'flex',
        gap: 'var(--space-4)',
        justifyContent: 'center',
        flexWrap: 'wrap',
        animation: 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.3s both',
    },
    stats: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'var(--space-6)',
        marginTop: 'var(--space-16)',
        paddingTop: 'var(--space-12)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        animation: 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.4s both',
    },
    stat: {
        textAlign: 'center',
        position: 'relative',
    },
    statNumber: {
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
        fontWeight: 'var(--font-bold)',
        background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: 'var(--space-1)',
    },
    statLabel: {
        fontSize: 'var(--text-sm)',
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: 'var(--font-medium)',
    },
    scrollIndicator: {
        position: 'absolute',
        bottom: 'var(--space-10)',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-3)',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 'var(--text-xs)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        animation: 'fadeIn 1s ease-out 1s both',
    },
    scrollDot: {
        width: '28px',
        height: '44px',
        border: '2px solid rgba(255, 255, 255, 0.25)',
        borderRadius: 'var(--radius-full)',
        position: 'relative',
    },
    scrollDotInner: {
        position: 'absolute',
        top: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '4px',
        height: '10px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)',
        borderRadius: 'var(--radius-full)',
        animation: 'scrollBounce 2s ease-in-out infinite',
    },
    // Glowing orb behind content
    glowOrb: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 5,
    },
};

// CSS animations (injected client-side)
const injectAnimations = () => {
    if (typeof document === 'undefined') return;

    const styleId = 'hero-animations';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        @keyframes scrollBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
            50% { transform: translateX(-50%) translateY(12px); opacity: 0.3; }
        }
        @keyframes floatParticle {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes gradientShift {
            0% { transform: scale(1) rotate(0deg); }
            100% { transform: scale(1.1) rotate(3deg); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
};

// Generate random particles
const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 2,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 20 + 15,
    }));
};

const HeroSection = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        injectAnimations();
        // Generate particles only on client-side to avoid hydration mismatch
        setParticles(generateParticles(20));
    }, []);

    return (
        <section style={heroStyles.hero} id="hero">
            {/* Background */}
            <div style={heroStyles.heroBg} />
            <div style={heroStyles.heroBgOrbs} />
            <div style={heroStyles.gridOverlay} />

            {/* Floating Particles */}
            <div style={heroStyles.particles}>
                {particles.map((p) => (
                    <div
                        key={p.id}
                        style={{
                            ...heroStyles.particle,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            left: `${p.left}%`,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Central Glow */}
            <div style={heroStyles.glowOrb} />

            {/* Content */}
            <div style={heroStyles.container}>
                <div style={heroStyles.content}>
                    {/* Badge */}
                    <span style={heroStyles.badge}>
                        <FaRocket style={heroStyles.badgeIcon} />
                        Launching Soon for Indian Colleges
                    </span>

                    {/* Headline */}
                    <h1 style={heroStyles.headline}>
                        The <span style={heroStyles.headlineAccent}>Digital Workspace</span>
                        <br />
                        for Modern Colleges
                    </h1>

                    {/* Subheadline */}
                    <p style={heroStyles.subheadline}>
                        One unified portal for students, faculty, Student Cells, and administration.
                        Replace WhatsApp chaos with organized, professional campus management.
                    </p>

                    {/* CTA Buttons */}
                    <div style={heroStyles.buttons}>
                        <Button
                            href="/contact"
                            variant="primary"
                            size="large"
                            rightIcon={<FaArrowRight />}
                        >
                            Request a Demo
                        </Button>
                        <Button
                            href="/how-it-works"
                            variant="glass"
                            size="large"
                            leftIcon={<FaPlay />}
                        >
                            See How It Works
                        </Button>
                    </div>

                    {/* Stats */}
                    <div style={heroStyles.stats}>
                        <div style={heroStyles.stat}>
                            <div style={heroStyles.statNumber}>5+</div>
                            <div style={heroStyles.statLabel}>Core Modules</div>
                        </div>
                        <div style={heroStyles.stat}>
                            <div style={heroStyles.statNumber}>100%</div>
                            <div style={heroStyles.statLabel}>College-First Design</div>
                        </div>
                        <div style={heroStyles.stat}>
                            <div style={heroStyles.statNumber}>24/7</div>
                            <div style={heroStyles.statLabel}>Support Available</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div style={heroStyles.scrollIndicator}>
                <span>Scroll to explore</span>
                <div style={heroStyles.scrollDot}>
                    <div style={heroStyles.scrollDotInner} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
