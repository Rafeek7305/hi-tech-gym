import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, ChevronDown } from 'lucide-react';
import heroBg from '../../../assets/gym_workout_1.png';
import styles from '../Contact.module.css';

const ContactHero = () => {
  const handleScrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToMap = () => {
    const el = document.getElementById('location-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBgWrapper}>
        <img
          src={heroBg}
          alt="Hi-Tech Gym Premium Fitness Atmosphere"
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
          <div className={styles.heroTag}>
            <span>WE ARE HERE FOR YOU</span>
          </div>

          <h1 className={styles.heroHeading}>
            Let's Start <br />
            <span className={styles.goldGradientText}>Your Journey.</span>
          </h1>

          <p className={styles.heroSubtext}>
            Have a question about our programs, training or gym experience? Reach out to us. We're ready to help.
          </p>

          <div className={styles.heroCtaWrapper}>
            <button className={styles.primaryBtn} onClick={handleScrollToForm}>
              <MessageSquare size={18} />
              <span>Contact Us</span>
            </button>

            <button className={styles.secondaryBtn} onClick={handleScrollToMap}>
              <MapPin size={18} />
              <span>Get Directions</span>
            </button>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicatorWrapper}>
        <motion.div
          className={styles.scrollIndicator}
          onClick={handleScrollToForm}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={18} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
