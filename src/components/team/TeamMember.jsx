/**
 * TeamMember Component
 * Individual team member card
 */

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const memberStyles = {
    card: {
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8) var(--space-6)',
        textAlign: 'center',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
    },
    cardGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--gradient-card)',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: 'none',
    },
    imageWrapper: {
        width: '120px',
        height: '120px',
        margin: '0 auto var(--space-6)',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid var(--white)',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        zIndex: 10,
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    placeholder: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-primary)',
        color: 'var(--white)',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
    },
    name: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-1)',
        position: 'relative',
        zIndex: 10,
    },
    role: {
        fontFamily: 'var(--font-accent)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-medium)',
        color: 'var(--primary-blue)',
        marginBottom: 'var(--space-4)',
        position: 'relative',
        zIndex: 10,
    },
    bio: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
        marginBottom: 'var(--space-5)',
        position: 'relative',
        zIndex: 10,
    },
    socials: {
        display: 'flex',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        position: 'relative',
        zIndex: 10,
    },
    socialLink: {
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius-md)',
        background: 'var(--neutral-100)',
        color: 'var(--neutral-600)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textDecoration: 'none',
    },
};

const TeamMember = ({
    name,
    role,
    bio,
    image,
    initials,
    linkedin,
    email,
}) => {
    const displayInitials = initials || name.split(' ').map((n) => n[0]).join('').toUpperCase();

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'translateY(-12px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
        const gradient = e.currentTarget.querySelector('[data-gradient]');
        if (gradient) gradient.style.opacity = '1';
        const imageWrapper = e.currentTarget.querySelector('[data-image]');
        if (imageWrapper) {
            imageWrapper.style.transform = 'scale(1.05)';
            imageWrapper.style.boxShadow = 'var(--shadow-purple)';
        }
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        const gradient = e.currentTarget.querySelector('[data-gradient]');
        if (gradient) gradient.style.opacity = '0';
        const imageWrapper = e.currentTarget.querySelector('[data-image]');
        if (imageWrapper) {
            imageWrapper.style.transform = 'scale(1)';
            imageWrapper.style.boxShadow = 'var(--shadow-lg)';
        }
    };

    const handleSocialHover = (e, isEnter) => {
        if (isEnter) {
            e.currentTarget.style.background = 'var(--gradient-primary)';
            e.currentTarget.style.color = 'var(--white)';
            e.currentTarget.style.transform = 'translateY(-3px)';
        } else {
            e.currentTarget.style.background = 'var(--neutral-100)';
            e.currentTarget.style.color = 'var(--neutral-600)';
            e.currentTarget.style.transform = 'translateY(0)';
        }
    };

    return (
        <div
            style={memberStyles.card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Gradient overlay */}
            <div data-gradient style={memberStyles.cardGradient} />

            {/* Image */}
            <div data-image style={memberStyles.imageWrapper}>
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        style={memberStyles.image}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }}
                    />
                ) : null}
                <div
                    style={{
                        ...memberStyles.placeholder,
                        display: image ? 'none' : 'flex',
                    }}
                >
                    {displayInitials}
                </div>
            </div>

            {/* Info */}
            <h3 style={memberStyles.name}>{name}</h3>
            <p style={memberStyles.role}>{role}</p>
            <p style={memberStyles.bio}>{bio}</p>

            {/* Socials */}
            <div style={memberStyles.socials}>
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={memberStyles.socialLink}
                        onMouseEnter={(e) => handleSocialHover(e, true)}
                        onMouseLeave={(e) => handleSocialHover(e, false)}
                        aria-label={`${name}'s LinkedIn`}
                    >
                        <FaLinkedin />
                    </a>
                )}
                {email && (
                    <a
                        href={`mailto:${email}`}
                        style={memberStyles.socialLink}
                        onMouseEnter={(e) => handleSocialHover(e, true)}
                        onMouseLeave={(e) => handleSocialHover(e, false)}
                        aria-label={`Email ${name}`}
                    >
                        <FaEnvelope />
                    </a>
                )}
                {!linkedin && !email && (
                    <a
                        href="#"
                        style={memberStyles.socialLink}
                        onMouseEnter={(e) => handleSocialHover(e, true)}
                        onMouseLeave={(e) => handleSocialHover(e, false)}
                        aria-label="Contact coming soon"
                    >
                        <FaEnvelope />
                    </a>
                )}
            </div>
        </div>
    );
};

export default TeamMember;
