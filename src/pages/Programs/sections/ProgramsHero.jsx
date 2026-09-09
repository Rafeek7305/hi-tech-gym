import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../../assets/programs/hero_bg.webp';
import styles from '../Programs.module.css';

const ProgramsHero = () => {
  const navigate = useNavigate();

  const scrollToOverview = () => {
    const el = document.getElementById('programs-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartClick = () => {
    navigate('/#membership');
    setTimeout(() => {
      const el = document.getElementById('membership');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgWrapper}>
        <img
          src={heroBg}
          alt="Hi-Tech Gym fitness and strength training atmosphere in Tirunelveli"
          fetchpriority="high"
          decoding="async"
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
            <span>TRAINING AT HI-TECH GYM</span>
          </motion.div>

          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Train With <span className={styles.goldGradientText}>Purpose.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSubtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            Whatever your goal, the right training plan can help you move stronger, feel better and stay consistent.
          </motion.p>

          <motion.div
            className={styles.heroCtaWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <button className={styles.primaryBtn} onClick={scrollToOverview}>
              <span>Explore Programs</span>
              <ArrowRight size={18} />
            </button>
            <button className={styles.secondaryBtn} onClick={handleStartClick}>
              <span>Start Your Journey</span>
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
          onClick={scrollToOverview}
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsHero;
