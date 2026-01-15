/**
 * Hero Section Component - Enterprise SaaS Design
 * Interactive animated background with moving dots
 */

import { useEffect, useState, useRef } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import Button from '../common/Button';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);
    const canvasRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        setMounted(true);
        
        // Initialize interactive canvas background
        const canvas = canvasRef.current;
        const heroSection = heroRef.current;
        if (!canvas || !heroSection) return;

        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse tracking - only within hero section
        const mouse = { x: null, y: null };
        
        const handleMouseMove = (event) => {
            const rect = heroSection.getBoundingClientRect();
            const isInsideHero = (
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom
            );
            
            if (isInsideHero) {
                mouse.x = event.clientX;
                mouse.y = event.clientY;
            } else {
                // Reset mouse position when outside hero section
                mouse.x = null;
                mouse.y = null;
            }
        };

        const handleMouseLeave = () => {
            // Reset mouse position when leaving hero section
            mouse.x = null;
            mouse.y = null;
        };
        
        // Add event listeners to window for mouse tracking
        window.addEventListener('mousemove', handleMouseMove);
        heroSection.addEventListener('mouseleave', handleMouseLeave);

        // Dot class
        class Dot {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = 2 + Math.random() * 2;
                this.speedX = -0.5 + Math.random();
                this.speedY = -0.5 + Math.random();
            }

            update() {
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
                
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        this.x += dx * 0.02;
                        this.y += dy * 0.02;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create dots
        const dots = [];
        for (let i = 0; i < 120; i++) {
            dots.push(new Dot());
        }

        // Connect dots function
        function connectDots() {
            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x;
                    const dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 90) {
                        ctx.globalAlpha = 1 - dist / 90;
                        ctx.beginPath();
                        ctx.moveTo(dots[i].x, dots[i].y);
                        ctx.lineTo(dots[j].x, dots[j].y);
                        ctx.stroke();
                    }
                }
            }
            ctx.globalAlpha = 1;
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Set styles
            ctx.fillStyle = "#2563eb";
            ctx.strokeStyle = "#2563eb";
            ctx.lineWidth = 1;
            
            // Update and draw dots
            dots.forEach(dot => dot.update());
            dots.forEach(dot => dot.draw());
            connectDots();
            
            requestAnimationFrame(animate);
        }

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            heroSection.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const scrollToServices = () => {
        const element = document.getElementById('core-modules');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className={styles.hero} id="hero" ref={heroRef}>
            {/* Interactive Canvas Background */}
            <canvas 
                ref={canvasRef}
                className={styles.interactiveCanvas}
            />

            {/* Abstract Background Layer - Fragmented Systems */}
            <div className={styles.heroBg}>
                {/* Base Grid Pattern */}
                <div className={styles.gridPattern} />

                {/* Floating Abstract UI Panels - Stacked Like Images on Wall */}
                <div className={styles.panelsContainer}>
                    {/* Panel 1 - Top Left */}
                    <div className={`${styles.abstractPanel} ${styles.panel1}`}>
                        <div className={styles.panelHeader} />
                        <div className={styles.panelLines}>
                            <span /><span /><span />
                        </div>
                    </div>

                    {/* Panel 2 - Top Right */}
                    <div className={`${styles.abstractPanel} ${styles.panel2}`}>
                        <div className={styles.panelDots}>
                            <span /><span /><span />
                        </div>
                        <div className={styles.panelGrid}>
                            <span /><span /><span /><span />
                        </div>
                    </div>

                    {/* Panel 3 - Mid Left */}
                    <div className={`${styles.abstractPanel} ${styles.panel3}`}>
                        <div className={styles.panelChart} />
                        <div className={styles.panelLines}>
                            <span /><span />
                        </div>
                    </div>

                    {/* Panel 4 - Mid Right */}
                    <div className={`${styles.abstractPanel} ${styles.panel4}`}>
                        <div className={styles.panelHeader} />
                        <div className={styles.panelBars}>
                            <span style={{ width: '80%' }} />
                            <span style={{ width: '60%' }} />
                            <span style={{ width: '90%' }} />
                        </div>
                    </div>

                    {/* Panel 5 - Bottom Left */}
                    <div className={`${styles.abstractPanel} ${styles.panel5}`}>
                        <div className={styles.panelCircle} />
                        <div className={styles.panelLines}>
                            <span /><span />
                        </div>
                    </div>

                    {/* Panel 6 - Bottom Right */}
                    <div className={`${styles.abstractPanel} ${styles.panel6}`}>
                        <div className={styles.panelDots}>
                            <span /><span />
                        </div>
                        <div className={styles.panelLines}>
                            <span /><span /><span />
                        </div>
                    </div>
                </div>

                {/* Connection Nodes & Lines */}
                <div className={styles.connectionLayer}>
                    <div className={`${styles.node} ${styles.node1}`} />
                    <div className={`${styles.node} ${styles.node2}`} />
                    <div className={`${styles.node} ${styles.node3}`} />
                    <div className={`${styles.node} ${styles.node4}`} />
                    <div className={`${styles.node} ${styles.node5}`} />
                    <svg className={styles.connectionLines}>
                        <line x1="15%" y1="25%" x2="35%" y2="55%" />
                        <line x1="85%" y1="30%" x2="65%" y2="50%" />
                        <line x1="25%" y1="75%" x2="50%" y2="50%" />
                        <line x1="75%" y1="70%" x2="50%" y2="50%" />
                    </svg>
                </div>

                {/* Ambient Glow */}
                <div className={styles.glowOrb} />
                <div className={styles.glowOrb2} />
            </div>

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Badge */}
                    <div className={`${styles.badge} ${mounted ? styles.fadeIn : ''}`}>
                        <span className={styles.badgePulse} />
                        <span>Launching Soon</span>
                    </div>

                    {/* Headline */}
                    <h1 className={`${styles.headline} ${mounted ? styles.fadeInDelay1 : ''}`}>
                        The Digital Workspace
                        <br />
                        <span className={styles.headlineAccent}>for Modern Colleges</span>
                    </h1>

                    {/* Subheadline */}
                    <p className={`${styles.subheadline} ${mounted ? styles.fadeInDelay2 : ''}`}>
                        One unified portal for students, faculty, and administration.
                        <br />
                        Replace WhatsApp chaos with organized, professional campus management.
                    </p>

                    {/* CTA Buttons */}
                    <div className={`${styles.buttons} ${mounted ? styles.fadeInDelay3 : ''}`}>
                        <Button
                            href="/contact"
                            variant="primary"
                            size="medium"
                            rightIcon={<FaArrowRight />}
                        >
                            Request a Demo
                        </Button>
                        <Button
                            onClick={scrollToServices}
                            variant="secondary"
                            size="medium"
                            leftIcon={<FaPlay />}
                        >
                            See Our Services
                        </Button>
                    </div>
                </div>
            </div>



            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Scroll</span>
                <div className={styles.scrollArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path 
                            d="M12 5V19M12 19L7 14M12 19L17 14" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
