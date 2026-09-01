import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Navigation } from 'lucide-react';
import ctaBg from '../../../assets/gym_workout_3.png';
import styles from '../Contact.module.css';

const ContactCTA = () => {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=Hi-Tech+Gym+Nethaji+Rd+Engineers+Colony+Raja+Nagar+Melapalayam+Tirunelveli+Tamil+Nadu+627005`;

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBgWrapper}>
        <img
          src={ctaBg}
          alt="Hi-Tech Gym Motivational Atmosphere"
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
            One Message Can Be The Start <br />
            <span className={styles.goldGradientText}>Of Something Stronger.</span>
          </h2>

          <p className={styles.ctaSubtext}>
            Have a question? Need some direction? Reach out and take the first step.
          </p>

          <div className={styles.ctaButtonsGroup}>
            <a href="tel:+919751808071" className={styles.primaryBtn}>
              <Phone size={18} />
              <span>Call Us</span>
            </a>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <Navigation size={18} />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
