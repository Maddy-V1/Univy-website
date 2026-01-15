/**
 * PageHero Component Usage Examples
 * How to use the PageHero component on different pages
 */

import { PageHero, Button } from '../common';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

// Example 1: Services Page Hero
const ServicesPageHero = () => (
    <PageHero
        size="medium"
        subtitle="Our Services"
        title="Everything Your Campus Needs"
        description="Comprehensive digital solutions designed specifically for modern colleges. From student portals to administrative tools, we've got you covered."
    >
        <Button
            href="/contact"
            variant="primary"
            size="medium"
            rightIcon={<FaArrowRight />}
        >
            Get Started
        </Button>
        <Button
            href="/demo"
            variant="secondary"
            size="medium"
            leftIcon={<FaPlay />}
        >
            Watch Demo
        </Button>
    </PageHero>
);

// Example 2: About Page Hero
const AboutPageHero = () => (
    <PageHero
        size="small"
        subtitle="About Us"
        title="Building the Future of Campus Technology"
        description="We're on a mission to transform how colleges operate in the digital age."
    />
);

// Example 3: Contact Page Hero
const ContactPageHero = () => (
    <PageHero
        size="small"
        subtitle="Get In Touch"
        title="Ready to Transform Your Campus?"
        description="Let's discuss how Univy can help modernize your college operations."
    />
);

// Example 4: Pricing Page Hero
const PricingPageHero = () => (
    <PageHero
        size="medium"
        subtitle="Pricing"
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your college. No hidden fees, no student charges."
    >
        <Button
            href="/contact"
            variant="primary"
            size="medium"
        >
            Start Free Trial
        </Button>
    </PageHero>
);

export { ServicesPageHero, AboutPageHero, ContactPageHero, PricingPageHero };