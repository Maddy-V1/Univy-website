/**
 * Home Page
 * Landing page with all home sections
 */

import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import WhatIsUnivySection from '../components/home/WhatIsUnivySection';
import WhoItsForSection from '../components/home/WhoItsForSection';
import CoreModulesSection from '../components/home/CoreModulesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import PartnerCollegesSection from '../components/home/PartnerCollegesSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>College Tech - Univy | The Digital Workspace for Modern Colleges</title>
                <meta
                    name="description"
                    content="Transform your campus with Univy - one unified portal for students, faculty, Student Cells, and administration. Replace WhatsApp chaos with organized, professional campus management."
                />
                <meta property="og:title" content="College Tech - Univy | The Digital Workspace for Modern Colleges" />
                <meta
                    property="og:description"
                    content="Transform your campus with Univy - one unified portal for students, faculty, Student Cells, and administration."
                />
            </Head>

            {/* Navigation */}
            <Navbar transparent />

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <HeroSection />

                {/* Problem Section */}
                <ProblemSection />

                {/* What is Univy Section */}
                <WhatIsUnivySection />

                {/* Who It's For Section */}
                <WhoItsForSection />

                {/* Core Modules Section */}
                <CoreModulesSection />

                {/* Why Choose Us Section */}
                <WhyChooseUsSection />

                {/* Partner Colleges Section */}
                <PartnerCollegesSection />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
