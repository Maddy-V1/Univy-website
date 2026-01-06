/**
 * Card Component
 * Reusable card with glassmorphism and multiple variants
 */

import Link from 'next/link';
import { FaCheck, FaTimes, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from '../../styles/components/Card.module.css';

/**
 * Base Card component
 */
export const Card = ({
    variant = 'default', // default, solid, dark, gradient, outlined
    size = 'medium', // small, medium, large
    href,
    className = '',
    children,
    ...props
}) => {
    const cardClasses = [
        styles.card,
        styles[variant],
        styles[size],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (href) {
        return (
            <Link href={href} className={cardClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <div className={cardClasses} {...props}>
            {children}
        </div>
    );
};

/**
 * Feature Card component
 * Used for showcasing features/services with icon
 */
export const FeatureCard = ({
    icon,
    title,
    description,
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.featureCard} ${className}`} {...props}>
            <div className={styles.featureIcon}>{icon}</div>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>
        </div>
    );
};

/**
 * Pricing Card component
 * Used for pricing plans display
 */
export const PricingCard = ({
    name,
    tagline,
    price,
    bestFor,
    features = [],
    featured = false,
    ctaText = 'Get Started',
    ctaHref = '/contact',
    className = '',
    ...props
}) => {
    const cardClasses = [
        styles.pricingCard,
        featured && styles.pricingFeatured,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={cardClasses} {...props}>
            {featured && <span className={styles.pricingBadge}>Most Popular</span>}
            <h3 className={styles.pricingPlanName}>{name}</h3>
            <p className={styles.pricingTagline}>{tagline}</p>
            <div className={styles.pricingPrice}>{price}</div>
            <p className={styles.pricingTagline}>{bestFor}</p>

            <ul className={styles.pricingFeatures}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.pricingFeature}>
                        <span className={styles.pricingFeatureIcon}>
                            {feature.included ? <FaCheck /> : <FaTimes style={{ opacity: 0.4 }} />}
                        </span>
                        <span style={{ opacity: feature.included ? 1 : 0.5 }}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            <Link
                href={ctaHref}
                className={`${styles.pricingCta} ${featured ? styles.pricingCtaFeatured : ''}`}
                style={{
                    display: 'inline-block',
                    width: '100%',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    fontWeight: '600',
                    textAlign: 'center',
                    textDecoration: 'none',
                    background: featured ? 'rgba(255,255,255,0.2)' : 'var(--gradient-primary)',
                    color: 'white',
                    border: featured ? '2px solid rgba(255,255,255,0.3)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                {ctaText}
            </Link>
        </div>
    );
};

/**
 * Team Member Card component
 * Used for displaying team members
 */
export const TeamCard = ({
    name,
    role,
    bio,
    image,
    initials,
    linkedin,
    email,
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.teamCard} ${className}`} {...props}>
            <div className={styles.teamImage}>
                {image ? (
                    <img src={image} alt={name} onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }} />
                ) : null}
                <div
                    className={styles.teamImagePlaceholder}
                    style={{ display: image ? 'none' : 'flex' }}
                >
                    {initials || name.split(' ').map(n => n[0]).join('')}
                </div>
            </div>
            <h3 className={styles.teamName}>{name}</h3>
            <p className={styles.teamRole}>{role}</p>
            <p className={styles.teamBio}>{bio}</p>
            <div className={styles.teamSocials}>
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.teamSocialLink}
                        aria-label={`${name}'s LinkedIn`}
                    >
                        <FaLinkedin />
                    </a>
                )}
                {email && (
                    <a
                        href={`mailto:${email}`}
                        className={styles.teamSocialLink}
                        aria-label={`Email ${name}`}
                    >
                        <FaEnvelope />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
