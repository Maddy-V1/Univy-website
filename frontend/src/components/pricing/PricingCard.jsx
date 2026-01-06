/**
 * PricingCard Component
 * Individual pricing plan card
 */

import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';

const cardStyles = {
    card: {
        background: 'var(--white)',
        border: '2px solid var(--neutral-200)',
        borderRadius: 'var(--radius-2xl)',
        padding: 'var(--space-10)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardFeatured: {
        background: 'var(--gradient-primary)',
        color: 'var(--white)',
        border: 'none',
        transform: 'scale(1.05)',
        boxShadow: 'var(--shadow-purple-hover)',
        zIndex: 10,
    },
    badge: {
        position: 'absolute',
        top: 'var(--space-4)',
        right: 'var(--space-4)',
        padding: 'var(--space-1) var(--space-3)',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-semibold)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
    },
    topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'var(--gradient-primary)',
        transform: 'scaleX(0)',
        transition: 'transform 0.5s ease',
    },
    header: {
        textAlign: 'center',
        marginBottom: 'var(--space-8)',
    },
    name: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        marginBottom: 'var(--space-2)',
    },
    tagline: {
        fontSize: 'var(--text-sm)',
        opacity: 0.8,
        marginBottom: 'var(--space-6)',
    },
    price: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-3xl)',
        fontWeight: 'var(--font-extrabold)',
        marginBottom: 'var(--space-2)',
    },
    bestFor: {
        fontSize: 'var(--text-sm)',
        opacity: 0.7,
        marginBottom: 'var(--space-4)',
    },
    setupTime: {
        fontSize: 'var(--text-xs)',
        padding: 'var(--space-1) var(--space-3)',
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 'var(--radius-full)',
        display: 'inline-block',
    },
    setupTimeFeatured: {
        background: 'rgba(255, 255, 255, 0.15)',
    },
    features: {
        flex: 1,
        marginBottom: 'var(--space-8)',
    },
    featuresList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    feature: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-3) 0',
        fontSize: 'var(--text-sm)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    },
    featureFeatured: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    featureIcon: {
        width: '20px',
        height: '20px',
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.65rem',
        flexShrink: 0,
    },
    featureIconIncluded: {
        background: 'rgba(16, 185, 129, 0.1)',
        color: 'var(--accent-emerald)',
    },
    featureIconIncludedFeatured: {
        background: 'rgba(255, 255, 255, 0.2)',
        color: 'var(--white)',
    },
    featureIconExcluded: {
        background: 'rgba(0, 0, 0, 0.05)',
        color: 'var(--neutral-400)',
    },
    featureIconExcludedFeatured: {
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.4)',
    },
    cta: {
        marginTop: 'auto',
    },
};

const PricingCard = ({
    name,
    tagline,
    price,
    bestFor,
    setupTime,
    features = [],
    featured = false,
    ctaText = 'Get Started',
    ctaHref = '/contact',
}) => {
    const handleMouseEnter = (e) => {
        if (!featured) {
            e.currentTarget.style.transform = 'translateY(-16px) scale(1.02)';
            e.currentTarget.style.borderColor = 'var(--primary-blue)';
            e.currentTarget.style.boxShadow = 'var(--shadow-blue)';
            e.currentTarget.querySelector('[data-topbar]').style.transform = 'scaleX(1)';
        } else {
            e.currentTarget.style.transform = 'translateY(-16px) scale(1.08)';
        }
    };

    const handleMouseLeave = (e) => {
        if (!featured) {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.borderColor = 'var(--neutral-200)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.querySelector('[data-topbar]').style.transform = 'scaleX(0)';
        } else {
            e.currentTarget.style.transform = 'scale(1.05)';
        }
    };

    return (
        <div
            style={{
                ...cardStyles.card,
                ...(featured ? cardStyles.cardFeatured : {}),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Top Bar (for non-featured) */}
            {!featured && <div data-topbar style={cardStyles.topBar} />}

            {/* Badge */}
            {featured && <span style={cardStyles.badge}>Most Popular</span>}

            {/* Header */}
            <div style={cardStyles.header}>
                <h3 style={cardStyles.name}>{name}</h3>
                <p style={cardStyles.tagline}>{tagline}</p>
                <div style={cardStyles.price}>{price}</div>
                <p style={cardStyles.bestFor}>{bestFor}</p>
                <span
                    style={{
                        ...cardStyles.setupTime,
                        ...(featured ? cardStyles.setupTimeFeatured : {}),
                    }}
                >
                    Setup: {setupTime}
                </span>
            </div>

            {/* Features */}
            <div style={cardStyles.features}>
                <ul style={cardStyles.featuresList}>
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            style={{
                                ...cardStyles.feature,
                                ...(featured ? cardStyles.featureFeatured : {}),
                                opacity: feature.included ? 1 : 0.5,
                            }}
                        >
                            <span
                                style={{
                                    ...cardStyles.featureIcon,
                                    ...(feature.included
                                        ? featured
                                            ? cardStyles.featureIconIncludedFeatured
                                            : cardStyles.featureIconIncluded
                                        : featured
                                            ? cardStyles.featureIconExcludedFeatured
                                            : cardStyles.featureIconExcluded),
                                }}
                            >
                                {feature.included ? <FaCheck /> : <FaTimes />}
                            </span>
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <div style={cardStyles.cta}>
                <Button
                    href={ctaHref}
                    variant={featured ? 'glass' : 'primary'}
                    fullWidth
                    rightIcon={<FaArrowRight />}
                >
                    {ctaText}
                </Button>
            </div>
        </div>
    );
};

export default PricingCard;
