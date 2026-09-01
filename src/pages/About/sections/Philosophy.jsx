import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../About.module.css';

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const coreLines = [
    "Show up.",
    "Work hard.",
    "Stay consistent.",
    "Become stronger."
  ];

  return (
    <section className={`${styles.section} ${styles.philosophySection}`} ref={ref}>
      <div className={styles.philosophyBgGlow} />

      <div className={styles.container}>
        <div className={styles.philosophyWrapper}>

          {/* MAIN STATEMENT */}
          <motion.div
            className={styles.philosophyMainBlock}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.sectionCategory}>OUR PHILOSOPHY</span>
            <h2 className={styles.philosophyHeadline}>
              "Your strongest version is not created in one day."
            </h2>
            <p className={styles.philosophySubhead}>
              It is built one workout, one decision and one disciplined day at a time.
            </p>
          </motion.div>

          <div className={styles.philosophyDivider} />

          {/* SECOND STATEMENT: LINE BY LINE ANIMATION */}
          <div className={styles.philosophyLinesGrid}>
            {coreLines.map((line, idx) => (
              <motion.div
                key={idx}
                className={styles.philosophyLineCard}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 35, scale: 0.95 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + idx * 0.18,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className={styles.lineIndex}>0{idx + 1}</div>
                <div className={styles.lineText}>{line}</div>
                <div className={styles.lineGlow} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
