import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import ctaBg from '../../../assets/programs/cta_bg.webp';
import styles from '../Programs.module.css';

const ProgramsCTA = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
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
          alt="Hi-Tech Gym fitness motivation training background"
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
          <span className={styles.sectionCategory}>TAKE THE FIRST STEP</span>
          <h2 className={styles.ctaHeading}>
            Choose Your Goal.<br />
            <span className={styles.goldGradientText}>Start Your Journey.</span>
          </h2>

          <p className={styles.ctaSubtext}>
            You don't need to have everything figured out.<br />
            You just need to start.
          </p>

          <div className={styles.ctaButtonsGroup}>
            <button className={styles.primaryBtn} onClick={handleJoinClick}>
              <span>Join Hi-Tech Gym</span>
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

export default ProgramsCTA;
