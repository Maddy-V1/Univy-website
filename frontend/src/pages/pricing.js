/**
 * Pricing Page
 * Pricing plans with comparison
 */

import Head from 'next/head';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import PricingCard from '../components/pricing/PricingCard';
import FAQSection from '../components/pricing/FAQSection';
import { PRICING_PLANS } from '../utils/constants';

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
        padding: 'var(--space-20) 0',
        background: 'var(--neutral-50)',
    },
    pricingGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-6)',
        alignItems: 'stretch',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    customPlan: {
        marginTop: 'var(--space-16)',
        padding: 'var(--space-10)',
        background: 'var(--white)',
        borderRadius: 'var(--radius-2xl)',
        border: '2px dashed var(--primary-blue)',
        textAlign: 'center',
    },
    customTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-2)',
    },
    customTagline: {
        fontSize: 'var(--text-base)',
        color: 'var(--primary-blue)',
        fontWeight: 'var(--font-medium)',
        marginBottom: 'var(--space-4)',
    },
    customDescription: {
        color: 'var(--neutral-600)',
        maxWidth: '600px',
        margin: '0 auto var(--space-6)',
    },
    customFeatures: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        marginBottom: 'var(--space-6)',
    },
    customFeature: {
        padding: 'var(--space-2) var(--space-4)',
        background: 'var(--gradient-card)',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-700)',
    },
    cta: {
        marginTop: 'var(--space-16)',
        textAlign: 'center',
        padding: 'var(--space-12)',
        background: 'var(--gradient-primary)',
        borderRadius: 'var(--radius-2xl)',
    },
    ctaTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--white)',
        marginBottom: 'var(--space-4)',
    },
    ctaText: {
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 'var(--space-6)',
        maxWidth: '500px',
        margin: '0 auto var(--space-6)',
    },
    ctaButtons: {
        display: 'flex',
        gap: 'var(--space-4)',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
};

const faqs = [
    {
        question: 'Can I try Univy before committing to a subscription plan?',
        answer: 'We offer personalized demos where we set up a complete test environment for your college to explore all features. Our team will guide you through every module and answer your questions. Contact us to schedule your demo session.',
    },
    {
        question: 'How does upgrading or changing my plan work?',
        answer: 'You can upgrade your plan at any time. We\'ll prorate the difference and help migrate your data seamlessly to the new tier without any downtime or data loss.',
    },
    {
        question: 'What kind of support and assistance is included with each plan?',
        answer: 'All plans include email support with 24-48 hour response times. Priority support gets you responses within 4 hours, while Enterprise includes dedicated account managers and phone support.',
    },
    {
        question: 'What is the minimum contract length for colleges?',
        answer: 'We offer flexible annual contracts as our standard option. Multi-year agreements of 2-3 years come with additional discounts of up to 20% on your total subscription cost.',
    },
    {
        question: 'Is there a per-student pricing model or hidden fees?',
        answer: 'No per-student pricing or hidden fees. We charge based on college size tiers for predictable budgeting. What you see is what you pay.',
    },
    {
        question: 'Does Univy include training for our staff and faculty members?',
        answer: 'Yes! All plans include comprehensive training sessions for administrators, faculty members, and Campus Mantri. We ensure everyone is comfortable using the platform.',
    },
    {
        question: 'How secure is my college data on the Univy platform?',
        answer: 'We use enterprise-grade security with end-to-end encryption, regular backups, and compliance with educational data protection standards. Your data is safe with us.',
    },
    {
        question: 'Can Univy integrate with our existing college management systems?',
        answer: 'Absolutely. We offer API integrations with popular ERP systems, attendance software, and learning management systems. Our Enterprise plan includes custom integration support.',
    },
    {
        question: 'What happens to our data if we decide to cancel the subscription?',
        answer: 'You own your data. Upon cancellation, we provide a complete data export in standard formats. We retain backups for 30 days before permanent deletion, giving you time to migrate.',
    },
];

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Pricing Plans | College Tech - Univy</title>
                <meta
                    name="description"
                    content="Flexible pricing plans for colleges of all sizes. From basic digitization to complete campus management. Get a custom quote."
                />
            </Head>

            <Navbar transparent />

            <main>
                {/* Hero */}
                <PageHero
                    size="small"
                    subtitle="Pricing"
                    title="Plans For Every College"
                    description="From basic digitization to complete campus management. Pick what works for you."
                />

                {/* Pricing Cards */}
                <section style={pageStyles.section}>
                    <div style={pageStyles.container}>
                        <div style={pageStyles.pricingGrid}>
                            {PRICING_PLANS.map((plan) => {
                                let ctaText = 'Get Started';
                                if (plan.id === 'basic') ctaText = 'Get Basic';
                                else if (plan.id === 'pro') ctaText = 'Get Pro';
                                else if (plan.id === 'enterprise') ctaText = 'Get Enterprise';

                                return (
                                    <PricingCard
                                        key={plan.id}
                                        name={plan.name}
                                        tagline={plan.tagline}
                                        price={plan.price}
                                        bestFor={plan.bestFor}
                                        setupTime={plan.setupTime}
                                        features={plan.features}
                                        featured={plan.featured}
                                        ctaText={ctaText}
                                        ctaHref="/contact"
                                    />
                                );
                            })}
                        </div>

                        {/* Custom Plan */}
                        <div style={pageStyles.customPlan}>
                            <h2 style={pageStyles.customTitle}>Custom Plan</h2>
                            <p style={pageStyles.customTagline}>Built For Your College</p>
                            <p style={pageStyles.customDescription}>
                                Pick exactly which services you need from our complete suite. Add or remove features anytime.
                                Perfect for colleges with specific requirements.
                            </p>
                            <div style={pageStyles.customFeatures}>
                                <span style={pageStyles.customFeature}>✓ Pay only for what you use</span>
                                <span style={pageStyles.customFeature}>✓ Add features as you grow</span>
                                <span style={pageStyles.customFeature}>✓ Complete flexibility</span>
                                <span style={pageStyles.customFeature}>✓ Custom integrations</span>
                            </div>
                            <Button href="/contact" variant="primary" rightIcon={<FaArrowRight />}>
                                Get Custom Quote
                            </Button>
                        </div>

                        {/* FAQ Section */}
                        <FAQSection faqs={faqs} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
