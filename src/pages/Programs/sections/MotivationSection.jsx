import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../Programs.module.css';

const motivationLines = [
  "SHOW UP.",
  "TRAIN HARD.",
  "STAY CONSISTENT.",
  "GET STRONGER."
];

const MotivationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={styles.motivationSection} ref={ref}>
      <div className={styles.motivationBgGlow} />

      <div className={styles.container}>
        <div className={styles.motivationWrapper}>
          <motion.div
            className={styles.motivationHeader}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionCategory}>THE MINDSET</span>
            <h2 className={styles.motivationHeadline}>
              Your Goal Doesn't Change Overnight.
            </h2>
            <p className={styles.motivationSubtext}>
              Progress comes from showing up, putting in the work and staying consistent when motivation fades.
            </p>
          </motion.div>

          <div className={styles.motivationDivider} />

          <div className={styles.motivationGrid}>
            {motivationLines.map((line, idx) => (
              <motion.div
                key={idx}
                className={styles.motivationCard}
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03 }}
              >
                <span className={styles.motivationNum}>0{idx + 1}</span>
                <span className={styles.motivationText}>{line}</span>
                <div className={styles.motivationGlow} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
