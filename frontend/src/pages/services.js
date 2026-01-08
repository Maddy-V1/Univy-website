/**
 * Services Page
 * Complete list of services/modules with hover-based expansion for desktop
 * Instagram-style swipeable cards for mobile
 */

import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { FaDesktop, FaFileAlt, FaCalendarCheck, FaUsers, FaLightbulb, FaEnvelope, FaUserShield, FaChartBar, FaArrowRight, FaCheck, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(372px, 1fr))',
        gap: 'var(--space-8)',
        alignItems: 'stretch',
    },
    serviceCardWrapper: {
        position: 'relative',
        height: '238px',
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
        height: '238px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
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
        minHeight: '238px',
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
        display: 'none',
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
        display: 'none',
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
        marginRight: 'var(--space-4)',
        boxShadow: 'var(--shadow-purple)',
        flexShrink: 0,
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
        minHeight: '40px',
        display: 'flex',
        alignItems: 'flex-start',
    },
    serviceDescription: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        marginBottom: 'var(--space-4)',
        flex: 1,
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
        minHeight: '220px',
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
    popupOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'var(--space-4)',
        opacity: 0,
        animation: 'fadeIn 0.2s forwards',
    },
    popupContent: {
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        width: '100%',
        maxWidth: '400px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: 'var(--shadow-2xl)',
        transform: 'scale(0.95)',
        animation: 'popIn 0.3s forwards',
        display: 'flex',
        flexDirection: 'column',
    },
    popupHeader: {
        padding: 'var(--space-5)',
        borderBottom: '1px solid var(--neutral-200)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
    },
    popupCloseButton: {
        position: 'absolute',
        top: 'var(--space-4)',
        right: 'var(--space-4)',
        background: 'var(--neutral-100)',
        border: 'none',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--neutral-600)',
        fontSize: '14px',
    },
    popupBody: {
        padding: 'var(--space-5)',
        overflowY: 'auto',
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
    const [selectedMobileService, setSelectedMobileService] = useState(null);
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

                {/* Vertical Stack of Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                    {services.map((service, idx) => {
                        const IconComponent = iconMap[service.id] || FaDesktop;
                        const cardId = `mobile-${category}-${service.id}-${idx}`;

                        return (
                            <div
                                key={cardId}
                                style={pageStyles.mobileServiceCard}
                            >
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    {/* Tagline Priority: Top Center */}
                                    <p style={{
                                        ...pageStyles.serviceTagline,
                                        order: 0,
                                        marginBottom: 'var(--space-2)',
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        color: 'var(--primary-600)',
                                        fontWeight: '600'
                                    }}>{service.tagline}</p>

                                    {/* Title Only */}
                                    <h3 style={{ ...pageStyles.serviceTitle, order: 1, marginBottom: 'var(--space-3)' }}>{service.title}</h3>

                                    {/* Tiny Description */}
                                    <p style={{
                                        ...pageStyles.serviceDescription,
                                        order: 2,
                                        flex: 'none',
                                        fontSize: '0.85rem',
                                        lineHeight: '1.4',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        marginBottom: 'var(--space-4)',
                                        minHeight: 'auto'
                                    }}>{service.shortDescription}</p>

                                    {/* Redesigned Show More Button */}
                                    <button
                                        style={{
                                            ...pageStyles.mobileShowMoreButton,
                                            order: 3,
                                            background: 'transparent',
                                            boxShadow: 'none',
                                            color: 'var(--neutral-500)',
                                            fontSize: '0.75rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            padding: 0,
                                            marginTop: 'auto',
                                            height: 'auto',
                                            minHeight: 'auto'
                                        }}
                                        onClick={() => setSelectedMobileService(service)}
                                    >
                                        <div style={{ height: '1px', flex: 1, background: 'var(--neutral-200)', marginRight: 'var(--space-3)' }} />
                                        Show More
                                        <FaChevronDown style={{ fontSize: '10px', marginLeft: '6px' }} />
                                        <div style={{ height: '1px', flex: 1, background: 'var(--neutral-200)', marginLeft: 'var(--space-3)' }} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    // Service Detail Popup Component
    const ServiceDetailPopup = () => {
        if (!selectedMobileService) return null;

        const service = selectedMobileService;
        const IconComponent = iconMap[service.id] || FaDesktop;

        // Get emoji based on feature keywords
        const getFeatureEmoji = (text) => {
            const lower = text.toLowerCase();
            if (lower.includes('student')) return '🎓';
            if (lower.includes('course')) return '📚';
            if (lower.includes('attendance')) return '📊';
            if (lower.includes('dashboard')) return '📊';
            if (lower.includes('notice')) return '📢';
            if (lower.includes('event')) return '📅';
            if (lower.includes('document')) return '📄';
            if (lower.includes('link')) return '🔗';
            if (lower.includes('form')) return '📝';
            if (lower.includes('application')) return '📋';
            if (lower.includes('email')) return '📧';
            if (lower.includes('database')) return '💾';
            if (lower.includes('filter')) return '🔍';
            if (lower.includes('pdf')) return '📑';
            if (lower.includes('opportunity') || lower.includes('idea')) return '💡';
            if (lower.includes('collaboration') || lower.includes('partner')) return '🤝';
            if (lower.includes('moderate')) return '🛡️';
            if (lower.includes('analytics')) return '📈';
            if (lower.includes('permission')) return '🔐';
            if (lower.includes('template')) return '📄';
            return '✨';
        };

        return (
            <div style={pageStyles.popupOverlay} onClick={() => setSelectedMobileService(null)}>
                <div style={pageStyles.popupContent} onClick={e => e.stopPropagation()}>
                    {/* Header */}
                    <div style={pageStyles.popupHeader}>
                        <div style={{ ...pageStyles.serviceIcon, width: '40px', height: '40px', flexShrink: 0 }}>
                            <IconComponent size={18} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ ...pageStyles.serviceTitle, marginBottom: '2px', fontSize: '1.1rem' }}>{service.title}</h3>
                            <p style={{ ...pageStyles.serviceTagline, minHeight: 'auto', marginBottom: 0 }}>{service.tagline}</p>
                        </div>
                        <button
                            style={pageStyles.popupCloseButton}
                            onClick={() => setSelectedMobileService(null)}
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Body */}
                    <div style={pageStyles.popupBody}>
                        <p style={{ ...pageStyles.serviceDescription, marginBottom: 'var(--space-6)' }}>
                            {service.fullDescription}
                        </p>

                        <h4 style={pageStyles.sectionTitle}>Key Features</h4>
                        <ul style={pageStyles.featuresList}>
                            {service.features.map((feature, featureIdx) => (
                                <li key={featureIdx} style={pageStyles.featureItem}>
                                    <span style={{ fontSize: '16px', marginRight: 'var(--space-3)' }}>
                                        {getFeatureEmoji(feature)}
                                    </span>
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

                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    @keyframes popIn {
                        from { transform: scale(0.95); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                `}</style>
            </Head>

            {/* Mobile Service Detail Popup */}
            <ServiceDetailPopup />

            <Navbar transparent />

            <main>
                {/* Hero */}
                <PageHero
                    size="small"
                    subtitle="Our Services"
                    title="Digital Campus Solutions"
                    description="Modular solutions for modern college management. Pick what you need, scale as you grow."
                />

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

                                            // Apply additional width and height reduction for specific cards
                                            const isNarrowCard = service.id === 'college-portal' || service.id === 'attendance' || service.id === 'forms-applications';
                                            const isCompactCard = service.id === 'student-cell' || service.id === 'opportunities';
                                            const wrapperStyle = isNarrowCard
                                                ? { ...pageStyles.serviceCardWrapper, maxWidth: '98%' }
                                                : isCompactCard
                                                    ? { ...pageStyles.serviceCardWrapper, height: '190px' }
                                                    : pageStyles.serviceCardWrapper;
                                            const cardStyle = isCompactCard
                                                ? { ...pageStyles.serviceCard, height: '190px' }
                                                : pageStyles.serviceCard;
                                            const cardHoveredStyle = isCompactCard
                                                ? { ...pageStyles.serviceCardHovered, minHeight: '190px' }
                                                : pageStyles.serviceCardHovered;

                                            return (
                                                <div
                                                    key={cardId}
                                                    style={wrapperStyle}
                                                    onMouseEnter={() => handleCardHover(cardId, true)}
                                                    onMouseLeave={() => handleCardHover(cardId, false)}
                                                >
                                                    <div style={isHovered ? cardHoveredStyle : cardStyle}>
                                                        <div style={isHovered ? pageStyles.serviceCardTopBarHovered : pageStyles.serviceCardTopBar} />

                                                        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                                                            <div style={pageStyles.serviceIcon}>
                                                                <IconComponent />
                                                            </div>
                                                            <div style={{ flex: 1 }}>
                                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                                                    <div>
                                                                        <h3 style={pageStyles.serviceTitle}>{service.title}</h3>
                                                                        <p style={pageStyles.serviceTagline}>{service.tagline}</p>
                                                                    </div>
                                                                    <FaArrowRight style={isHovered ? pageStyles.arrowIconHovered : pageStyles.arrowIcon} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p style={
                                                            service.id === 'college-portal'
                                                                ? (isHovered
                                                                    ? { ...pageStyles.serviceDescription, marginTop: '-15px' }
                                                                    : pageStyles.serviceDescription)
                                                                : service.id === 'email-system'
                                                                    ? { ...pageStyles.serviceDescription, marginTop: '-20px' }
                                                                    : pageStyles.serviceDescription
                                                        }>{service.shortDescription}</p>

                                                        {/* Expanded Content - Hidden by default */}
                                                        <div style={
                                                            isHovered
                                                                ? (service.id !== 'student-cell' && service.id !== 'opportunities'
                                                                    ? { ...pageStyles.expandedContentVisible, maxWidth: '372px' }
                                                                    : pageStyles.expandedContentVisible)
                                                                : pageStyles.expandedContent
                                                        }>
                                                            {(service.id === 'student-cell' || service.id === 'opportunities') ? (
                                                                /* Two-column layout for Student Cell & Opportunities */
                                                                <>
                                                                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                                                                        <div style={{ flex: 1 }}>
                                                                            <h4 style={pageStyles.sectionTitle}>Key Features</h4>
                                                                            <ul style={pageStyles.featuresList}>
                                                                                {service.features.map((feature, featureIdx) => {
                                                                                    // Get emoji based on feature keywords
                                                                                    const getFeatureEmoji = (text) => {
                                                                                        const lower = text.toLowerCase();
                                                                                        if (lower.includes('student')) return '🎓';
                                                                                        if (lower.includes('course')) return '📚';
                                                                                        if (lower.includes('attendance')) return '📊';
                                                                                        if (lower.includes('dashboard')) return '📊';
                                                                                        if (lower.includes('notice')) return '📢';
                                                                                        if (lower.includes('event')) return '📅';
                                                                                        if (lower.includes('document')) return '📄';
                                                                                        if (lower.includes('link')) return '🔗';
                                                                                        if (lower.includes('form')) return '📝';
                                                                                        if (lower.includes('application')) return '📋';
                                                                                        if (lower.includes('email')) return '📧';
                                                                                        if (lower.includes('database')) return '💾';
                                                                                        if (lower.includes('filter')) return '🔍';
                                                                                        if (lower.includes('pdf')) return '📑';
                                                                                        if (lower.includes('opportunity') || lower.includes('idea')) return '💡';
                                                                                        if (lower.includes('collaboration') || lower.includes('partner')) return '🤝';
                                                                                        if (lower.includes('moderate')) return '🛡️';
                                                                                        if (lower.includes('analytics')) return '📈';
                                                                                        if (lower.includes('permission')) return '🔐';
                                                                                        if (lower.includes('template')) return '📄';
                                                                                        return '✨';
                                                                                    };

                                                                                    return (
                                                                                        <li key={featureIdx} style={pageStyles.featureItem}>
                                                                                            <span style={{ fontSize: '14px', marginRight: '8px' }}>{getFeatureEmoji(feature)}</span>
                                                                                            {feature}
                                                                                        </li>
                                                                                    );
                                                                                })}
                                                                            </ul>
                                                                        </div>
                                                                        <div style={{ flex: 1 }}>
                                                                            <h4 style={pageStyles.sectionTitle}>Who Uses It</h4>
                                                                            <ul style={pageStyles.whoUsesItList}>
                                                                                {service.whoUsesIt.map((user, userIdx) => (
                                                                                    <li key={userIdx} style={pageStyles.whoUsesItItem}>
                                                                                        <span style={pageStyles.featureBullet} />
                                                                                        {user}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div style={pageStyles.problemSolved}>
                                                                        <strong>Problem Solved:</strong> {service.problemSolved}
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                /* Standard Layout */
                                                                <>
                                                                    <h4 style={pageStyles.sectionTitle}>Key Features</h4>
                                                                    <ul style={pageStyles.featuresList}>
                                                                        {service.features.map((feature, featureIdx) => {
                                                                            // Get emoji based on feature keywords
                                                                            const getFeatureEmoji = (text) => {
                                                                                const lower = text.toLowerCase();
                                                                                if (lower.includes('student')) return '🎓';
                                                                                if (lower.includes('course')) return '📚';
                                                                                if (lower.includes('attendance')) return '📊';
                                                                                if (lower.includes('dashboard')) return '📊';
                                                                                if (lower.includes('notice')) return '📢';
                                                                                if (lower.includes('event')) return '📅';
                                                                                if (lower.includes('document')) return '📄';
                                                                                if (lower.includes('link')) return '🔗';
                                                                                if (lower.includes('form')) return '📝';
                                                                                if (lower.includes('application')) return '📋';
                                                                                if (lower.includes('email')) return '📧';
                                                                                if (lower.includes('database')) return '💾';
                                                                                if (lower.includes('filter')) return '🔍';
                                                                                if (lower.includes('pdf')) return '📑';
                                                                                if (lower.includes('opportunity') || lower.includes('idea')) return '💡';
                                                                                if (lower.includes('collaboration') || lower.includes('partner')) return '🤝';
                                                                                if (lower.includes('moderate')) return '🛡️';
                                                                                if (lower.includes('analytics')) return '📈';
                                                                                if (lower.includes('permission')) return '🔐';
                                                                                if (lower.includes('template')) return '📄';
                                                                                return '✨';
                                                                            };

                                                                            return (
                                                                                <li key={featureIdx} style={pageStyles.featureItem}>
                                                                                    <span style={{ fontSize: '14px', marginRight: '8px' }}>{getFeatureEmoji(feature)}</span>
                                                                                    {feature}
                                                                                </li>
                                                                            );
                                                                        })}
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
                                                                </>
                                                            )}
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