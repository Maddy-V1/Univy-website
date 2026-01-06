/**
 * Footer Component
 * Dark premium footer with links and contact info
 */

import Link from 'next/link';
import {
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import { NAV_LINKS, CONTACT_INFO } from '../../utils/constants';
import styles from '../../styles/components/Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = NAV_LINKS;

    const serviceLinks = [
        { label: 'College Portal', href: '/services#portal' },
        { label: 'Student Cell Software', href: '/services#student-cell' },
        { label: 'Attendance System', href: '/services#attendance' },
        { label: 'Forms & Applications', href: '/services#forms' },
        { label: 'Analytics Dashboard', href: '/services#analytics' },
    ];

    const legalLinks = [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
    ];

    return (
        <footer className={styles.footer}>
            {/* Background Elements */}
            <div className={`${styles.footerBg} ${styles.footerBgPurple}`} />
            <div className={`${styles.footerBg} ${styles.footerBgBlue}`} />

            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoText}>UNIVY</span>
                        </Link>
                        <p className={styles.tagline}>
                            The Digital Workspace for Modern Colleges. Transform your campus with
                            unified portal and internal software solutions.
                        </p>
                        <div className={styles.socialLinks}>
                            {CONTACT_INFO.linkedin && (
                                <a
                                    href={CONTACT_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                            )}
                            {CONTACT_INFO.twitter && (
                                <a
                                    href={CONTACT_INFO.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Twitter"
                                >
                                    <FaTwitter />
                                </a>
                            )}
                            {CONTACT_INFO.instagram && (
                                <a
                                    href={CONTACT_INFO.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                            )}
                            {/* Always show email */}
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className={styles.socialLink}
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Quick Links</h4>
                        {quickLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.footerLink}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Services */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Services</h4>
                        {serviceLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.footerLink}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Contact Us</h4>
                        <div className={styles.contactItem}>
                            <FaEnvelope className={styles.contactIcon} />
                            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                        </div>
                        <div className={styles.contactItem}>
                            <FaPhone className={styles.contactIcon} />
                            <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
                        </div>
                        <div className={styles.contactItem}>
                            <FaMapMarkerAlt className={styles.contactIcon} />
                            <span>{CONTACT_INFO.address}</span>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.newsletterCol}>
                        <h4 className={styles.colTitle}>Stay Updated</h4>
                        <p className={styles.tagline}>
                            Get the latest updates on college tech and digital campus solutions.
                        </p>
                        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.newsletterInput}
                                aria-label="Email for newsletter"
                            />
                            <button type="submit" className={styles.newsletterBtn}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {currentYear} College Tech - Univy. All rights reserved.
                    </p>
                    <div className={styles.bottomLinks}>
                        {legalLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={styles.bottomLink}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
