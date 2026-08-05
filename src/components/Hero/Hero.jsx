import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import styles from './Hero.module.css';

const phrases = [
  { prefix: "Sculpt Your", highlight: "Legacy" },
  { prefix: "Forge Your", highlight: "Strength" },
  { prefix: "Unleash Your", highlight: "Potential" }
];

const Hero = () => {
  const containerRef = useRef(null);
  const backgroundWrapperRef = useRef(null);
  const headingWrapperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Infinite slow zoom for background
      gsap.to(`.${styles.background}`, {
        scale: 1.15,
        duration: 20,
        ease: "none",
        yoyo: true,
        repeat: -1
      });

      // Master Reveal Timeline
      
      // Background fade in
      tl.from(backgroundWrapperRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });

      // Heading reveals line-by-line
      tl.from(`.${styles.badge}`, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");

      tl.from(headingWrapperRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");

      // Paragraph fades upward
      tl.from(`.${styles.descriptionWrapper}`, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");

      // Buttons appear one after another
      tl.from(`.${styles.primaryBtn}, .${styles.secondaryBtn}`, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.6");

      // Statistics animate
      tl.from(`.${styles.statItem}`, {
        opacity: 0,
        x: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8");

      // Scroll indicator
      tl.from(`.${styles.scrollIndicator}`, {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power3.out"
      }, "-=0.2");

    }, containerRef); // Scope to containerRef

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <motion.div 
        ref={backgroundWrapperRef} 
        style={{ y: yBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <div className={styles.background} style={{ width: '100%', height: '100%', transformOrigin: 'center center' }} />
      </motion.div>
      <div className={styles.overlay} />
      <div className={styles.glow} />

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <motion.div 
          className={styles.leftContent}
          style={{ opacity }}
        >
          <div className={styles.badge}>
            EST. 2026
          </div>

          <div ref={headingWrapperRef}>
            <AnimatePresence mode="wait">
              <motion.h1 
                key={currentIndex}
                className={styles.heading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {phrases[currentIndex].prefix} <span className={styles.highlight}>{phrases[currentIndex].highlight}</span>
              </motion.h1>
            </AnimatePresence>
          </div>
          
          <div className={styles.descriptionWrapper}>
            <div className={styles.verticalLine} />
            <p className={styles.description}>
              Join the best gym in town. We offer top-quality equipment, expert personal trainers, and a clean, welcoming space for everyone to achieve their fitness goals.
            </p>
          </div>
          
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn} onClick={() => document.getElementById('membership').scrollIntoView({ behavior: 'smooth' })}>Join Now</button>
            <button className={styles.secondaryBtn} onClick={() => document.getElementById('facilities').scrollIntoView({ behavior: 'smooth' })}>View Facilities</button>
          </div>
        </motion.div>

        {/* RIGHT CONTENT (STATS) */}
        <motion.div 
          className={styles.rightContent}
          style={{ opacity }}
        >
          <div className={styles.statsGlass}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Members</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber} style={{ fontSize: '2rem' }}>A/C & Non A/C</span>
              <span className={styles.statLabel}>Facilities</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber} style={{ fontSize: '2rem' }}>6AM-10AM</span>
              <span className={styles.statLabel}>& 5PM-9PM Daily</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>SCROLL</span>
      </div>

    </section>
  );
};

export default Hero;
