/**
 * PricingCard Component
 * Individual pricing plan card - Redesigned with modern, sleek styling
 */

import { FaCheck, FaArrowRight, FaStar } from 'react-icons/fa';
import Button from '../common/Button';

const cardStyles = {
    card: {
        background: 'var(--white)',
        border: '1px solid var(--neutral-200)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-6)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    cardFeatured: {
        background: 'var(--white)',
        border: '2px solid var(--primary-blue)',
        boxShadow: '0 8px 25px rgba(59, 130, 246, 0.15)',
        transform: 'scale(1.02)',
        zIndex: 10,
    },
    badge: {
        position: 'absolute',
        top: '-1px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: 'var(--space-1) var(--space-4)',
        background: 'var(--gradient-primary)',
        color: 'var(--white)',
        borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--font-semibold)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-1)',
    },
    header: {
        textAlign: 'center',
        marginBottom: 'var(--space-6)',
        paddingTop: featured => featured ? 'var(--space-6)' : '0',
    },
    name: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-1)',
    },
    tagline: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
        marginBottom: 'var(--space-4)',
        fontWeight: 'var(--font-medium)',
    },
    priceContainer: {
        marginBottom: 'var(--space-4)',
    },
    price: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-extrabold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-1)',
    },
    priceUnit: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-500)',
        fontWeight: 'var(--font-normal)',
    },
    bestFor: {
        fontSize: 'var(--text-xs)',
        color: 'var(--neutral-500)',
        marginBottom: 'var(--space-4)',
        padding: 'var(--space-2) var(--space-3)',
        background: 'var(--neutral-50)',
        borderRadius: 'var(--radius-full)',
        display: 'inline-block',
        fontWeight: 'var(--font-medium)',
    },
    features: {
        flex: 1,
        marginBottom: 'var(--space-6)',
    },
    featuresList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
    },
    feature: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-3)',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-700)',
        lineHeight: 'var(--leading-relaxed)',
    },
    featureIcon: {
        width: '16px',
        height: '16px',
        borderRadius: 'var(--radius-full)',
        background: 'var(--accent-emerald)',
        color: 'var(--white)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.6rem',
        flexShrink: 0,
        marginTop: '2px',
    },
    featureIconExcluded: {
        background: 'var(--neutral-200)',
        color: 'var(--neutral-400)',
    },
    featureText: {
        opacity: 1,
    },
    featureTextExcluded: {
        opacity: 0.6,
        color: 'var(--neutral-500)',
    },
    featureUpgrade: {
        fontSize: 'var(--text-xs)',
        color: 'var(--primary-blue)',
        fontWeight: 'var(--font-semibold)',
        marginLeft: 'var(--space-2)',
        padding: 'var(--space-1) var(--space-2)',
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: 'var(--radius-sm)',
    },
    cta: {
        marginTop: 'auto',
    },
    ctaButton: {
        width: '100%',
        padding: 'var(--space-3) var(--space-4)',
        borderRadius: 'var(--radius-lg)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-semibold)',
        transition: 'all 0.2s ease',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-2)',
        textDecoration: 'none',
    },
    ctaButtonPrimary: {
        background: 'var(--gradient-primary)',
        color: 'var(--white)',
        boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
    },
    ctaButtonSecondary: {
        background: 'var(--white)',
        color: 'var(--primary-blue)',
        border: '1px solid var(--primary-blue)',
    },
    setupTime: {
        fontSize: 'var(--text-xs)',
        color: 'var(--neutral-500)',
        textAlign: 'center',
        marginTop: 'var(--space-2)',
        fontWeight: 'var(--font-medium)',
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
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.borderColor = 'var(--primary-blue)';
        } else {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.2)';
        }
    };

    const handleMouseLeave = (e) => {
        if (!featured) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
            e.currentTarget.style.borderColor = 'var(--neutral-200)';
        } else {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.15)';
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
            {/* Badge */}
            {featured && (
                <div style={cardStyles.badge}>
                    <FaStar size={10} />
                    Most Popular
                </div>
            )}

            {/* Header */}
            <div style={{
                ...cardStyles.header,
                paddingTop: featured ? 'var(--space-6)' : '0',
            }}>
                <h3 style={cardStyles.name}>{name}</h3>
                <p style={cardStyles.tagline}>{tagline}</p>
                
                <div style={cardStyles.priceContainer}>
                    <div style={cardStyles.price}>
                        {price}
                        {price !== 'Contact for Quote' && (
                            <span style={cardStyles.priceUnit}> /month</span>
                        )}
                    </div>
                </div>
                
                <span style={cardStyles.bestFor}>{bestFor}</span>
            </div>

            {/* CTA - Moved above features */}
            <div style={{...cardStyles.cta, marginBottom: 'var(--space-6)', marginTop: '0'}}>
                <a
                    href={ctaHref}
                    style={{
                        ...cardStyles.ctaButton,
                        ...(featured ? cardStyles.ctaButtonPrimary : cardStyles.ctaButtonSecondary),
                    }}
                    onMouseEnter={(e) => {
                        if (featured) {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                        } else {
                            e.currentTarget.style.background = 'var(--primary-blue)';
                            e.currentTarget.style.color = 'var(--white)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (featured) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.2)';
                        } else {
                            e.currentTarget.style.background = 'var(--white)';
                            e.currentTarget.style.color = 'var(--primary-blue)';
                        }
                    }}
                >
                    {ctaText}
                    <FaArrowRight size={12} />
                </a>
            </div>

            {/* Features */}
            <div style={cardStyles.features}>
                <ul style={cardStyles.featuresList}>
                    {features.map((feature, index) => (
                        <li key={index} style={cardStyles.feature}>
                            <span
                                style={{
                                    ...cardStyles.featureIcon,
                                    ...(feature.included ? {} : cardStyles.featureIconExcluded),
                                }}
                            >
                                <FaCheck />
                            </span>
                            <span
                                style={{
                                    ...cardStyles.featureText,
                                    ...(feature.included ? {} : cardStyles.featureTextExcluded),
                                }}
                            >
                                {feature.text}
                                {!feature.included && feature.upgrade && (
                                    <span style={cardStyles.featureUpgrade}>
                                        in {feature.upgrade}
                                    </span>
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Setup Time */}
            <div style={cardStyles.setupTime}>Setup: {setupTime}</div>
        </div>
    );
};

export default PricingCard;
