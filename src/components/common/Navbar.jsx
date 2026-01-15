/**
 * Navbar Component
 * Premium glassmorphism navigation with responsive mobile menu
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiMenu, HiX } from 'react-icons/hi';
import Button from './Button';
import { NAV_LINKS } from '../../utils/constants';
import styles from '../../styles/components/Navbar.module.css';

const Navbar = ({ transparent = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [router.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const isTransparent = transparent && !isScrolled;

    return (
        <nav
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className={styles.navbarContainer}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    {/* TODO: Replace with actual logo image */}
                    <span
                        className={`${styles.logoText} ${isTransparent ? styles.logoTextLight : ''}`}
                    >
                        UNIVY
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className={styles.navLinks}>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${styles.navLink} ${router.pathname === link.href ? styles.active : ''
                                    } ${isTransparent ? styles.light : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA Button */}
                <div className={styles.navCta}>
                    <Button
                        href="/contact"
                        variant={isTransparent ? 'glass' : 'primary'}
                        size="small"
                    >
                        Request Demo
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`${styles.mobileMenuBtn} ${isTransparent ? styles.light : ''} ${isMobileMenuOpen ? styles.open : ''
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${styles.mobileNavLink} ${router.pathname === link.href ? styles.active : ''
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
                <div className={styles.mobileNavCta}>
                    <Button href="/contact" variant="primary" fullWidth>
                        Request Demo
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
