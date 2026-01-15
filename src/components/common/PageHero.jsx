/**
 * Page Hero Component - Reusable Hero Section
 * Same theme and background as homepage hero
 */

import { useEffect, useRef } from 'react';
import styles from './PageHero.module.css';

const PageHero = ({ 
    title, 
    subtitle, 
    description, 
    children,
    size = 'medium' // 'small', 'medium', 'large'
}) => {
    const canvasRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
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

    return (
        <section className={`${styles.hero} ${styles[size]}`} ref={heroRef}>
            {/* Interactive Canvas Background */}
            <canvas 
                ref={canvasRef}
                className={styles.interactiveCanvas}
            />

            {/* Background Elements */}
            <div className={styles.heroBg}>
                <div className={styles.gridPattern} />
                <div className={styles.footerBg} />
                <div className={styles.footerBgBlue} />
            </div>

            {/* Main Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    {subtitle && (
                        <span className={styles.subtitle}>{subtitle}</span>
                    )}
                    
                    {title && (
                        <h1 className={styles.title}>{title}</h1>
                    )}
                    
                    {description && (
                        <p className={styles.description}>{description}</p>
                    )}
                    
                    {children && (
                        <div className={styles.actions}>
                            {children}
                        </div>
                    )}
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

export default PageHero;