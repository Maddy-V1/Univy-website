/**
 * Home Page
 * Landing page with all home sections
 */

import Head from 'next/head';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import WhatIsUnivySection from '../components/home/WhatIsUnivySection';
import WhoItsForSection from '../components/home/WhoItsForSection';
import CoreModulesSection from '../components/home/CoreModulesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';


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

                {/* Problem Bar Section */}
                <section className="problemBarSection">
                    <div className="problemBarContainer">
                        <div className="problemBar">
                            <div className="problemBarContent">
                                <span className="problemBarLabel">The Problem</span>
                                <div className="problemBarItems">
                                    <div>
                                        <span className="problemBarItem">Manual Overload</span>
                                        <span className="problemBarDot">•</span>
                                        <span className="problemBarItem">Disconnected Systems</span>
                                        <span className="problemBarDot">•</span>
                                        <span className="problemBarItem">Communication Chaos</span>
                                        <span className="problemBarDot">•</span>
                                        <span className="problemBarItem">WhatsApp Dependency</span>
                                        <span className="problemBarDot">•</span>
                                        <span className="problemBarItem">Excel Sheet Mess</span>
                                        <span className="problemBarDot">•</span>
                                        <span className="problemBarItem">No Digital Records</span>
                                        <span className="problemBarDot">•</span>
                                        <span className="problemBarItem">Manual Overload</span>
                                        <span className="problemBarDot">•</span>
                                        <span className="problemBarItem">Disconnected Systems</span>
                                        <span className="problemBarDot">•</span>
                                        <span className="problemBarItem">Communication Chaos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Univy Section with Problem/Solution Carousel */}
                <WhatIsUnivySection />

                {/* Who It's For Section */}
                <WhoItsForSection />

                {/* Core Modules Section */}
                <CoreModulesSection />

                {/* Why Choose Us Section */}
                <WhyChooseUsSection />


            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
