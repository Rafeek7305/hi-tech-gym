import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, ShieldAlert } from 'lucide-react';
import featuredImg from '../../../assets/programs/strength_training.webp';
import styles from '../Programs.module.css';

const focusItems = [
  { title: 'Strength', text: 'Developing solid foundational power.' },
  { title: 'Technique', text: 'Executing movements with proper form.' },
  { title: 'Consistency', text: 'Showing up and putting in the work.' },
  { title: 'Progress', text: 'Gradually challenging yourself over time.' }
];

const FeaturedProgram = ({ onSelectProgram }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const handleExplore = () => {
    const el = document.getElementById('training-process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} ref={ref}>
      <div className={styles.container}>
        <div className={styles.featuredLayout}>
          {/* LEFT: ASYMMETRICAL IMAGE FRAME */}
          <motion.div
            className={styles.featuredVisualColumn}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.featuredImageWrapper}>
              <img
                src={featuredImg}
                alt="Strength Training barbell workout and power rack at Hi-Tech Gym"
                loading="lazy"
                decoding="async"
                className={styles.featuredImage}
              />
              <div className={styles.featuredImageOverlay} />
              <div className={styles.featuredCornerBadge}>
                <ShieldAlert size={16} />
                <span>SIGNATURE PILLAR</span>
              </div>
              <div className={styles.featuredFrameBorder} />
            </div>
          </motion.div>

          {/* RIGHT: FEATURED CONTENT */}
          <motion.div
            className={styles.featuredContentColumn}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.sectionCategory}>FEATURED APPROACH</span>
            <h2 className={styles.featuredTitle}>Build Your Strength</h2>
            <div className={styles.goldLine} />

            <p className={styles.featuredSubtext}>
              Strength is built through consistency, proper training and the decision to keep going.
            </p>

            <div className={styles.focusBlock}>
              <h3 className={styles.focusHeaderTitle}>What You'll Focus On:</h3>
              <div className={styles.focusGrid}>
                {focusItems.map((item, idx) => (
                  <div key={idx} className={styles.focusItem}>
                    <div className={styles.focusCheckCircle}>
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className={styles.focusItemTitle}>{item.title}</h4>
                      <p className={styles.focusItemText}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.featuredCtaBox}>
              <button className={styles.primaryBtn} onClick={handleExplore}>
                <span>Explore This Approach</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgram;
