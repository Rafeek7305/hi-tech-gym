import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import heroBg from '../../../assets/about/hero_bg.webp';
import styles from '../About.module.css';

const AboutHero = () => {
  const scrollToStory = () => {
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgWrapper}>
        <img
          src={heroBg}
          alt="Hi-Tech Gym modern fitness training environment in Melapalayam"
          fetchpriority="high"
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />
      </div>

      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.heroTag}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>ABOUT HI-TECH GYM</span>
          </motion.div>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            More Than a Gym.<br />
            <span className={styles.goldGradientText}>A Journey of Strength.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            Every strong body starts with a decision.<br />
            At Hi-Tech Gym, we believe that decision can become a lifestyle.
          </motion.p>

          <motion.div
            className={styles.heroCtaWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <button className={styles.primaryBtn} onClick={scrollToStory}>
              <span>Discover Our Journey</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicatorWrapper}>
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          onClick={scrollToStory}
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
