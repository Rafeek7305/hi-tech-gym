import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import beginnerImg from '../../../assets/programs/beginner_friendly.webp';
import styles from '../Programs.module.css';

const BeginnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });
  const navigate = useNavigate();

  const handleBeginnerClick = () => {
    navigate('/#membership');
    setTimeout(() => {
      const el = document.getElementById('membership');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} ref={ref}>
      <div className={styles.container}>
        <div className={styles.beginnerGrid}>
          {/* LEFT: EMOTIONAL TEXT CONTENT */}
          <motion.div
            className={styles.beginnerContentColumn}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.beginnerTag}>
              <HeartHandshake size={16} />
              <span>WELCOME TO FIRST STEPS</span>
            </div>

            <h2 className={styles.beginnerTitle}>
              Never Trained Before?<br />
              <span className={styles.goldGradientText}>That's Okay.</span>
            </h2>

            <div className={styles.goldLine} />

            <div className={styles.beginnerTextBody}>
              <p className={styles.beginnerHighlight}>Everyone starts somewhere.</p>
              <p className={styles.beginnerParagraph}>
                You don't need to be strong before you start.<br />
                You don't need to know every exercise.<br />
                You simply need to take the first step.
              </p>
              <p className={styles.beginnerQuote}>
                We'll help you build confidence one workout at a time.
              </p>
            </div>

            <div className={styles.beginnerCtaGroup}>
              <button className={styles.primaryBtn} onClick={handleBeginnerClick}>
                <span>Start As A Beginner</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: WELCOMING IMAGE */}
          <motion.div
            className={styles.beginnerVisualColumn}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.beginnerImageWrapper}>
              <img
                src={beginnerImg}
                alt="Beginner-friendly and welcoming gym environment at Hi-Tech Gym"
                loading="lazy"
                decoding="async"
                className={styles.beginnerImage}
              />
              <div className={styles.beginnerImageOverlay} />
              <div className={styles.beginnerBadge}>
                <span>SAFE & SUPPORTIVE SPACE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeginnerSection;
