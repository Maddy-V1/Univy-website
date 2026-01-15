/**
 * Next.js Custom App Component
 * Wraps all pages with global providers and styles
 */

import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#1E40AF" />

                {/* Default SEO (can be overridden per page) */}
                <title>College Tech - Univy | Digital Workspace for Modern Colleges</title>
                <meta
                    name="description"
                    content="Transform your campus with Univy - the unified portal and software suite designed for Indian colleges. Replace WhatsApp chaos with organized, professional campus management."
                />
                <meta name="keywords" content="college portal, campus management, student portal, faculty dashboard, college software, B2B SaaS, education technology, India" />

                {/* Open Graph / Social Media */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="College Tech - Univy" />
                <meta property="og:title" content="College Tech - Univy | Digital Workspace for Modern Colleges" />
                <meta
                    property="og:description"
                    content="Transform your campus with Univy - the unified portal and software suite designed for Indian colleges."
                />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
