/**
 * Services Page
 * Complete list of services/modules with hover-based expansion for desktop
 * Instagram-style swipeable cards for mobile
 */

import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { FaDesktop, FaFileAlt, FaCalendarCheck, FaUsers, FaLightbulb, FaEnvelope, FaUserShield, FaChartBar, FaArrowRight, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import { SERVICES } from '../utils/constants';

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
        padding: 'var(--space-20) 0 var(--space-3) 0',
        background: 'var(--neutral-50)',
    },

    // Desktop Styles
    categorySection: {
        marginBottom: 'var(--space-16)',
    },
    categoryTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-8)',
        textAlign: 'center',
        position: 'relative',
    },
    categoryTitleUnderline: {
        position: 'absolute',
        bottom: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '3px',
        background: 'var(--gradient-primary)',
        borderRadius: '2px',
    },
    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: 'var(--space-8)',
        alignItems: 'start',
    },
    serviceCardWrapper: {
        position: 'relative',
        height: '280px',
    },
    serviceCard: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6)',
        border: '1px solid var(--neutral-200)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        height: '280px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        zIndex: 1,
    },
    serviceCardHovered: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6)',
        border: '2px solid var(--primary-blue)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'visible',
        cursor: 'pointer',
        height: 'auto',
        minHeight: '280px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
        zIndex: 100,
    },
    serviceCardTopBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'var(--gradient-primary)',
        transform: 'scaleX(0)',
        transition: 'transform 0.5s ease',
    },
    serviceCardTopBarHovered: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'var(--gradient-primary)',
        transform: 'scaleX(1)',
        transition: 'transform 0.5s ease',
    },
    serviceIcon: {
        width: '56px',
        height: '56px',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        color: 'var(--white)',
        marginBottom: 'var(--space-4)',
        boxShadow: 'var(--shadow-purple)',
    },
    serviceHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 'var(--space-3)',
    },
    serviceTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-1)',
    },
    serviceTagline: {
        fontSize: 'var(--text-sm)',
        color: 'var(--primary-blue)',
        fontWeight: 'var(--font-medium)',
        marginBottom: 'var(--space-4)',
    },
    serviceDescription: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        marginBottom: 'var(--space-4)',
    },
    expandedContent: {
        opacity: 0,
        maxHeight: 0,
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        marginTop: 'var(--space-2)',
    },
    expandedContentVisible: {
        opacity: 1,
        maxHeight: 'none',
        overflow: 'visible',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        marginTop: 'var(--space-2)',
    },
    sectionTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-semibold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-2)',
        marginTop: 'var(--space-3)',
    },
    featuresList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginBottom: 'var(--space-3)',
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-1) 0',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-700)',
    },
    whoUsesItList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginBottom: 'var(--space-3)',
    },
    whoUsesItItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-1) 0',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-700)',
    },
    featureBullet: {
        width: '4px',
        height: '4px',
        background: 'var(--accent-emerald)',
        borderRadius: '50%',
        flexShrink: 0,
    },
    problemSolved: {
        padding: 'var(--space-3)',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-700)',
        borderLeft: '3px solid var(--accent-emerald)',
        marginTop: 'var(--space-2)',
    },
    arrowIcon: {
        fontSize: '1.5rem',
        color: 'var(--neutral-400)',
        transition: 'all 0.3s ease',
    },
    arrowIconHovered: {
        fontSize: '1.5rem',
        color: 'var(--primary-blue)',
        transition: 'all 0.3s ease',
        transform: 'translateX(4px)',
    },

    // Mobile Styles
    mobileServicesContainer: {
        padding: 'var(--space-6)',
    },
    mobileCategoryTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-6)',
        textAlign: 'center',
        position: 'relative',
    },
    mobileCategoryUnderline: {
        position: 'absolute',
        bottom: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '3px',
        background: 'var(--gradient-primary)',
        borderRadius: '2px',
    },
    mobileCarousel: {
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 'var(--space-8)',
        width: '100%',
        maxWidth: '320px', // Slightly wider than card to center it
        margin: '0 auto var(--space-8) auto', // Center the carousel
    },
    mobileCarouselTrack: {
        display: 'flex',
        transition: 'transform 0.5s ease-in-out',
        gap: 'var(--space-6)', // Increased gap between cards
    },
    mobileServiceCard: {
        minWidth: '300px',
        width: '300px',
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6)',
        border: '1px solid var(--neutral-200)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '400px',
        flexShrink: 0, // Prevent cards from shrinking
    },
    mobileServiceCardExpanded: {
        minWidth: '300px',
        width: '300px',
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6)',
        border: '2px solid var(--primary-blue)',
        boxShadow: '0 8px 25px rgba(59, 130, 246, 0.15)',
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '400px',
        flexShrink: 0, // Prevent cards from shrinking
    },
    mobileShowMoreButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        width: '100%',
        padding: 'var(--space-4) var(--space-6)',
        marginTop: 'auto', // Push button to bottom of card
        marginBottom: 0,
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-lg)',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
        minHeight: '48px',
        zIndex: 10,
        position: 'relative',
    },
    mobileExpandedContent: {
        marginTop: 'var(--space-4)',
        paddingTop: 'var(--space-4)',
        borderTop: '1px solid var(--neutral-200)',
    },
    mobileCarouselDots: {
        display: 'flex',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        marginTop: 'var(--space-4)',
    },
    mobileCarouselDot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'var(--neutral-300)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    mobileCarouselDotActive: {
        width: '24px',
        borderRadius: '12px',
        background: 'var(--primary-blue)',
    },

    // CTA Bar - Premium Dark Theme Matching Footer
    ctaSection: {
        padding: 'var(--space-3) 0',
        background: 'transparent',
        marginTop: 'var(--space-3)',
        marginBottom: 'var(--space-3)',
    },
    ctaContainer: {
        maxWidth: 'var(--container-xl)',
        margin: '0 auto',
        padding: '0 var(--space-6)',
    },
    ctaBar: {
        background: 'var(--neutral-950)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6) var(--space-10)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-8)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        minHeight: '80px',
    },
    ctaBarGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--secondary-purple), var(--primary-blue), transparent)',
        animation: 'pulse 3s ease-in-out infinite',
    },
    ctaBarOrbs: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
    },
    ctaBarContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-1)',
        flex: 1,
        position: 'relative',
        zIndex: 2,
    },
    ctaLabel: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-semibold)',
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '0',
    },
    ctaTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--white)',
        margin: 0,
        lineHeight: '1.3',
        marginBottom: '0',
    },
    ctaText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 'var(--text-sm)',
        margin: 0,
        lineHeight: '1.5',
        fontWeight: 'var(--font-normal)',
        maxWidth: '500px',
        whiteSpace: 'nowrap',
    },
    ctaButton: {
        background: 'var(--gradient-primary)',
        color: 'var(--white)',
        padding: 'var(--space-3) var(--space-6)',
        borderRadius: 'var(--radius-md)',
        fontWeight: 'var(--font-semibold)',
        fontSize: 'var(--text-base)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        whiteSpace: 'nowrap',
        transition: 'all var(--transition-base)',
        height: '48px',
        textDecoration: 'none',
        flexShrink: 0,
        position: 'relative',
        zIndex: 2,
    },
    ctaButtonHover: {
        transform: 'translateY(-2px)',
        boxShadow: 'var(--shadow-purple)',
    },

    // Mobile responsive styles for CTA bar
    ctaBarMobile: {
        background: 'var(--neutral-950)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-6) var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-4)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center',
        minHeight: '120px',
    },
    ctaSectionMobile: {
        padding: 'var(--space-3) 0',
        background: 'transparent',
        marginTop: 'var(--space-3)',
        marginBottom: 'var(--space-3)',
    },
    ctaContentMobile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-1)',
        width: '100%',
        position: 'relative',
        zIndex: 2,
    },
    ctaLabelMobile: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-semibold)',
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '0',
    },
    ctaTitleMobile: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--white)',
        margin: 0,
        lineHeight: '1.3',
        marginBottom: '0',
        textAlign: 'center',
    },
    ctaTextMobile: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 'var(--text-xs)',
        margin: 0,
        lineHeight: '1.5',
        fontWeight: 'var(--font-normal)',
        textAlign: 'center',
        maxWidth: '280px',
        whiteSpace: 'nowrap',
    },
    ctaButtonMobile: {
        background: 'var(--gradient-primary)',
        color: 'var(--white)',
        padding: 'var(--space-3) var(--space-5)',
        borderRadius: 'var(--radius-md)',
        fontWeight: 'var(--font-semibold)',
        fontSize: 'var(--text-base)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        whiteSpace: 'nowrap',
        transition: 'all var(--transition-base)',
        height: '44px',
        textDecoration: 'none',
        marginTop: 'var(--space-2)',
        position: 'relative',
        zIndex: 2,
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

export default function Services() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlides, setCurrentSlides] = useState({}); // Object to track slides for each category
    const [expandedMobileCard, setExpandedMobileCard] = useState(null);
    const [pausedCarousels, setPausedCarousels] = useState(new Set()); // Track which carousels are paused
    const autoSlideRefs = useRef({}); // Object to track intervals for each category

    // Check if mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-slide functionality for mobile
    useEffect(() => {
        if (!isMobile) return;

        const servicesByCategory = SERVICES.reduce((acc, service) => {
            const category = service.category || 'Other';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(service);
            return acc;
        }, {});

        // Initialize current slides for all categories
        const initialSlides = {};
        Object.keys(servicesByCategory).forEach(category => {
            initialSlides[category] = 0;
        });
        setCurrentSlides(initialSlides);

        // Start auto-slide for each category
        Object.keys(servicesByCategory).forEach(category => {
            startAutoSlideForCategory(category);
        });

        return () => {
            // Cleanup all intervals
            Object.values(autoSlideRefs.current).forEach(interval => {
                if (interval) clearInterval(interval);
            });
        };
    }, [isMobile, pausedCarousels]);

    // Handle mobile card expansion with auto-scroll pause
    const handleMobileCardToggle = (service, category) => {
        console.log('Card clicked - Service:', service.id, 'Category:', category);

        const expandedKey = `${category}-${service.id}`;

        console.log('ExpandedKey:', expandedKey);
        console.log('Current expandedMobileCard:', expandedMobileCard);

        if (expandedMobileCard === expandedKey) {
            // Collapsing - resume auto-scroll
            console.log('Collapsing card');
            setExpandedMobileCard(null);
            setPausedCarousels(prev => {
                const newSet = new Set(prev);
                newSet.delete(category);
                return newSet;
            });

            // Restart auto-scroll for this category
            startAutoSlideForCategory(category);
        } else {
            // Expanding - pause auto-scroll
            console.log('Expanding card');
            setExpandedMobileCard(expandedKey);
            setPausedCarousels(prev => new Set(prev).add(category));

            // Stop auto-scroll for this category
            if (autoSlideRefs.current[category]) {
                clearInterval(autoSlideRefs.current[category]);
            }
        }
    };

    // Function to start auto-slide for a specific category
    const startAutoSlideForCategory = (category) => {
        const servicesByCategory = SERVICES.reduce((acc, service) => {
            const cat = service.category || 'Other';
            if (!acc[cat]) {
                acc[cat] = [];
            }
            acc[cat].push(service);
            return acc;
        }, {});

        const services = servicesByCategory[category];
        if (!services || pausedCarousels.has(category)) return;

        autoSlideRefs.current[category] = setInterval(() => {
            setCurrentSlides(prev => ({
                ...prev,
                [category]: (prev[category] + 1) % services.length
            }));
        }, 3000 + Math.random() * 1000);
    };

    // Handle desktop card hover
    const handleCardHover = (cardId, isEnter) => {
        if (isMobile) return; // Don't use hover on mobile

        if (isEnter) {
            setHoveredCard(cardId);
        } else {
            setHoveredCard(null);
        }
    };

    // Handle manual slide change
    const goToSlide = (category, index) => {
        setCurrentSlides(prev => ({
            ...prev,
            [category]: index
        }));
    };

    // Mobile Carousel Component
    const MobileServiceCarousel = ({ services, category }) => {
        const currentSlide = currentSlides[category] || 0;

        return (
            <div style={pageStyles.mobileServicesContainer}>
                <h2 style={pageStyles.mobileCategoryTitle}>
                    {category}
                    <div style={pageStyles.mobileCategoryUnderline} />
                </h2>

                <div style={pageStyles.mobileCarousel}>
                    <div
                        style={{
                            ...pageStyles.mobileCarouselTrack,
                            transform: `translateX(-${currentSlide * (300 + 24)}px)` // 300px card width + 24px gap
                        }}
                    >
                        {services.map((service, idx) => {
                            const IconComponent = iconMap[service.id] || FaDesktop;
                            const cardId = `mobile-${category}-${service.id}-${idx}`;
                            const expandedKey = `${category}-${service.id}`; // Key based on category and service ID
                            const isExpanded = expandedMobileCard === expandedKey;

                            return (
                                <div
                                    key={cardId}
                                    style={isExpanded ? pageStyles.mobileServiceCardExpanded : pageStyles.mobileServiceCard}
                                >
                                    <div style={pageStyles.serviceIcon}>
                                        <IconComponent />
                                    </div>

                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={pageStyles.serviceTitle}>{service.title}</h3>
                                        <p style={pageStyles.serviceTagline}>{service.tagline}</p>
                                        <p style={{ ...pageStyles.serviceDescription, flex: 1 }}>{service.shortDescription}</p>

                                        {/* Always visible Show More Details button */}
                                        <button
                                            style={pageStyles.mobileShowMoreButton}
                                            onClick={() => handleMobileCardToggle(service, category)}
                                        >
                                            {isExpanded ? 'Show Less' : 'Show More Details'}
                                            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>

                                    {/* Expanded Content */}
                                    {isExpanded && (
                                        <div style={pageStyles.mobileExpandedContent}>
                                            <h4 style={pageStyles.sectionTitle}>Key Features</h4>
                                            <ul style={pageStyles.featuresList}>
                                                {service.features.map((feature, featureIdx) => (
                                                    <li key={featureIdx} style={pageStyles.featureItem}>
                                                        <FaCheck style={{ color: 'var(--accent-emerald)', fontSize: '12px' }} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <h4 style={pageStyles.sectionTitle}>Who Uses It</h4>
                                            <ul style={pageStyles.whoUsesItList}>
                                                {service.whoUsesIt.map((user, userIdx) => (
                                                    <li key={userIdx} style={pageStyles.whoUsesItItem}>
                                                        <span style={pageStyles.featureBullet} />
                                                        {user}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div style={pageStyles.problemSolved}>
                                                <strong>Problem Solved:</strong> {service.problemSolved}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Carousel Dots */}
                <div style={pageStyles.mobileCarouselDots}>
                    {services.map((_, idx) => (
                        <div
                            key={idx}
                            style={{
                                ...pageStyles.mobileCarouselDot,
                                ...(currentSlide === idx ? pageStyles.mobileCarouselDotActive : {})
                            }}
                            onClick={() => goToSlide(category, idx)}
                        />
                    ))}
                </div>
            </div>
        );
    };

    // Group services by category
    const servicesByCategory = SERVICES.reduce((acc, service) => {
        const category = service.category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(service);
        return acc;
    }, {});

    // Get core services for mobile
    const coreServices = SERVICES.filter(service => service.category === 'Core Services');

    return (
        <>
            <Head>
                <title>Our Services | College Tech - Univy</title>
                <meta
                    name="description"
                    content="Explore Univy's complete campus digitization services: College Portal, Forms & Applications, Attendance System, Student Cell Software, and more."
                />
                <style jsx>{`
                    @keyframes pulse {
                        0%, 100% { opacity: 0.6; }
                        50% { opacity: 1; }
                    }
                    
                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                `}</style>
            </Head>

            <Navbar transparent />

            <main>
                {/* Hero */}
                <PageHero
                    size="medium"
                    subtitle="Our Services"
                    title="Digital Campus Solutions"
                    description="Modular solutions designed for modern college management. Pick what you need, scale as you grow."
                >
                    <Button
                        href="/contact"
                        variant="primary"
                        size="medium"
                        rightIcon={<FaArrowRight />}
                    >
                        Get Started
                    </Button>
                </PageHero>

                {/* Mobile View - Instagram-style Carousel for All Categories */}
                {isMobile && (
                    <section style={pageStyles.section}>
                        {Object.entries(servicesByCategory).map(([category, services]) => (
                            <MobileServiceCarousel key={category} services={services} category={category} />
                        ))}

                        {/* Mobile CTA Bar */}
                        <div style={pageStyles.ctaSectionMobile}>
                            <div style={pageStyles.ctaContainer}>
                                <div style={pageStyles.ctaBarMobile}>
                                    <div style={pageStyles.ctaBarGradient} />
                                    <div style={pageStyles.ctaBarOrbs} />
                                    <div style={pageStyles.ctaContentMobile}>
                                        <span style={pageStyles.ctaLabelMobile}>Custom Solutions</span>
                                        <h3 style={pageStyles.ctaTitleMobile}>Need something specific for your campus?</h3>
                                        <p style={pageStyles.ctaTextMobile}>Tailored solutions that integrate seamlessly.</p>
                                    </div>
                                    <a 
                                        href="/contact" 
                                        style={pageStyles.ctaButtonMobile}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = 'var(--shadow-purple)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    >
                                        <span style={{ position: 'relative', zIndex: 1 }}>Let's Discuss</span>
                                        <FaArrowRight style={{ position: 'relative', zIndex: 1 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Desktop View - Grid Layout */}
                {!isMobile && (
                    <section style={pageStyles.section}>
                        <div style={pageStyles.container}>
                            {Object.entries(servicesByCategory).map(([category, services]) => (
                                <div key={category} style={pageStyles.categorySection}>
                                    <h2 style={pageStyles.categoryTitle}>
                                        {category}
                                        <div style={pageStyles.categoryTitleUnderline} />
                                    </h2>

                                    <div style={pageStyles.servicesGrid}>
                                        {services.map((service, idx) => {
                                            const IconComponent = iconMap[service.id] || FaDesktop;
                                            const cardId = `${category}-${service.id}-${idx}`;
                                            const isHovered = hoveredCard === cardId;

                                            return (
                                                <div
                                                    key={cardId}
                                                    style={pageStyles.serviceCardWrapper}
                                                    onMouseEnter={() => handleCardHover(cardId, true)}
                                                    onMouseLeave={() => handleCardHover(cardId, false)}
                                                >
                                                    <div style={isHovered ? pageStyles.serviceCardHovered : pageStyles.serviceCard}>
                                                        <div style={isHovered ? pageStyles.serviceCardTopBarHovered : pageStyles.serviceCardTopBar} />

                                                        <div style={pageStyles.serviceIcon}>
                                                            <IconComponent />
                                                        </div>

                                                        <div style={pageStyles.serviceHeader}>
                                                            <div>
                                                                <h3 style={pageStyles.serviceTitle}>{service.title}</h3>
                                                                <p style={pageStyles.serviceTagline}>{service.tagline}</p>
                                                            </div>
                                                            <FaArrowRight style={isHovered ? pageStyles.arrowIconHovered : pageStyles.arrowIcon} />
                                                        </div>

                                                        <p style={pageStyles.serviceDescription}>{service.shortDescription}</p>

                                                        {/* Expanded Content - Hidden by default */}
                                                        <div style={isHovered ? pageStyles.expandedContentVisible : pageStyles.expandedContent}>
                                                            <h4 style={pageStyles.sectionTitle}>Key Features</h4>
                                                            <ul style={pageStyles.featuresList}>
                                                                {service.features.map((feature, featureIdx) => (
                                                                    <li key={featureIdx} style={pageStyles.featureItem}>
                                                                        <FaCheck style={{ color: 'var(--accent-emerald)', fontSize: '12px' }} />
                                                                        {feature}
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                            <h4 style={pageStyles.sectionTitle}>Who Uses It</h4>
                                                            <ul style={pageStyles.whoUsesItList}>
                                                                {service.whoUsesIt.map((user, userIdx) => (
                                                                    <li key={userIdx} style={pageStyles.whoUsesItItem}>
                                                                        <span style={pageStyles.featureBullet} />
                                                                        {user}
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                            <div style={pageStyles.problemSolved}>
                                                                <strong>Problem Solved:</strong> {service.problemSolved}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}

                            {/* CTA Bar */}
                            <div style={pageStyles.ctaSection}>
                                <div style={pageStyles.ctaContainer}>
                                    <div style={pageStyles.ctaBar}>
                                        <div style={pageStyles.ctaBarGradient} />
                                        <div style={pageStyles.ctaBarOrbs} />
                                        <div style={pageStyles.ctaBarContent}>
                                            <span style={pageStyles.ctaLabel}>Custom Solutions</span>
                                            <h3 style={pageStyles.ctaTitle}>Need something specific for your campus?</h3>
                                            <p style={pageStyles.ctaText}>Tailored solutions that integrate seamlessly with your existing systems.</p>
                                        </div>
                                        <a
                                            href="/contact"
                                            style={pageStyles.ctaButton}
                                            onMouseEnter={(e) => {
                                                Object.assign(e.target.style, pageStyles.ctaButtonHover);
                                            }}
                                            onMouseLeave={(e) => {
                                                Object.assign(e.target.style, pageStyles.ctaButton);
                                            }}
                                        >
                                            <span style={{ position: 'relative', zIndex: 1 }}>Let's Discuss</span>
                                            <FaArrowRight style={{ position: 'relative', zIndex: 1 }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </>
    );
}