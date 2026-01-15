/**
 * How It Works Page
 */

import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PageHero from '../components/common/PageHero';
import TimelineSection from '../components/how-it-works/TimelineSection';
import CTASection from '../components/how-it-works/CTASection';

export default function HowItWorks() {
    return (
        <>
            <Head>
                <title>How It Works | College Tech - Univy</title>
                <meta
                    name="description"
                    content="From first contact to campus transformation. Learn our simple, proven process to bring your college onto Univy."
                />
            </Head>

            <Navbar transparent />

            <main>
                <PageHero
                    title="From Contact to Campus Transformation"
                    description="A simple, proven process to bring your college onto Univy."
                    size="small"
                />

                <TimelineSection />

                <CTASection />
            </main>

            <Footer />
        </>
    );
}
