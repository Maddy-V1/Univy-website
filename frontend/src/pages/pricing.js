/**
 * Pricing Page
 * Pricing plans with comparison
 */

import Head from 'next/head';
import { FaArrowRight, FaQuestionCircle } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import PageHero from '../components/common/PageHero';
import PricingCard from '../components/pricing/PricingCard';
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-8)',
        alignItems: 'stretch',
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
    faq: {
        marginTop: 'var(--space-20)',
    },
    faqTitle: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--neutral-900)',
        textAlign: 'center',
        marginBottom: 'var(--space-10)',
    },
    faqGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-6)',
    },
    faqItem: {
        padding: 'var(--space-6)',
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--neutral-200)',
    },
    faqQuestion: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-semibold)',
        color: 'var(--neutral-900)',
        marginBottom: 'var(--space-3)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
    },
    faqAnswer: {
        fontSize: 'var(--text-sm)',
        color: 'var(--neutral-600)',
        lineHeight: 'var(--leading-relaxed)',
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
        question: 'Is there a free trial?',
        answer: 'We offer personalized demos where we set up a test environment for your college to explore. Contact us to schedule.',
    },
    {
        question: 'Can we upgrade plans later?',
        answer: 'Absolutely! You can upgrade your plan anytime. We\'ll help migrate your data seamlessly.',
    },
    {
        question: 'What\'s included in support?',
        answer: 'All plans include email support. Priority and dedicated support get faster response times and direct contact.',
    },
    {
        question: 'How long is the contract?',
        answer: 'We offer flexible annual contracts. Multi-year agreements come with additional discounts.',
    },
    {
        question: 'Do you charge per student?',
        answer: 'No per-student pricing. We charge based on college size tiers for predictable budgeting.',
    },
    {
        question: 'Is training included?',
        answer: 'Yes! All plans include training sessions for admin, faculty, and Campus Mantri.',
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
                            {PRICING_PLANS.map((plan) => (
                                <PricingCard
                                    key={plan.id}
                                    name={plan.name}
                                    tagline={plan.tagline}
                                    price={plan.price}
                                    bestFor={plan.bestFor}
                                    setupTime={plan.setupTime}
                                    features={plan.features}
                                    featured={plan.featured}
                                    ctaText="Get Started"
                                    ctaHref="/contact"
                                />
                            ))}
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
                        <div style={pageStyles.faq}>
                            <h2 style={pageStyles.faqTitle}>Frequently Asked Questions</h2>
                            <div style={pageStyles.faqGrid}>
                                {faqs.map((faq, index) => (
                                    <div key={index} style={pageStyles.faqItem}>
                                        <h3 style={pageStyles.faqQuestion}>
                                            <FaQuestionCircle style={{ color: 'var(--primary-blue)' }} />
                                            {faq.question}
                                        </h3>
                                        <p style={pageStyles.faqAnswer}>{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div style={pageStyles.cta}>
                            <h2 style={pageStyles.ctaTitle}>Not Sure Which Plan Fits?</h2>
                            <p style={pageStyles.ctaText}>
                                Every college is unique. Let's discuss your specific needs and build the perfect solution together.
                            </p>
                            <div style={pageStyles.ctaButtons}>
                                <Button href="/contact" variant="glass" size="large">
                                    Schedule Consultation
                                </Button>
                                <Button href="/contact" variant="glass" size="large">
                                    Get Custom Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
