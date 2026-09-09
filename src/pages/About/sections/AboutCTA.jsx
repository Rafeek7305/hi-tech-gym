import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import ctaBg from '../../../assets/about/cta_bg.webp';
import styles from '../About.module.css';

const AboutCTA = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/#membership');
    setTimeout(() => {
      const el = document.getElementById('membership');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBgWrapper}>
        <img
          src={ctaBg}
          alt="Hi-Tech Gym fitness training atmosphere background"
          loading="lazy"
          decoding="async"
          className={styles.ctaBgImage}
        />
        <div className={styles.ctaOverlay} />
        <div className={styles.ctaGlow} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.ctaCardBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.sectionCategory}>TAKE ACTION</span>
          <h2 className={styles.ctaHeading}>
            Your Journey Starts With One Decision.
          </h2>

          <p className={styles.ctaSubtext}>
            Don't wait for the perfect day.<br />
            Start today. Stay consistent. Become stronger.
          </p>

          <div className={styles.ctaButtonsGroup}>
            <button className={styles.primaryBtn} onClick={handleStartClick}>
              <span>Start Your Journey</span>
              <ArrowRight size={18} />
            </button>

            <button className={styles.secondaryBtn} onClick={handleContactClick}>
              <PhoneCall size={18} />
              <span>Contact Us</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
