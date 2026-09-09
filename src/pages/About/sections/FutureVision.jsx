import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Zap, Target } from 'lucide-react';
import futureImg from '../../../assets/about/future_gym.webp';
import styles from '../About.module.css';

const FutureVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={`${styles.section} ${styles.futureSection}`} ref={ref}>
      <div className={styles.container}>
        <div className={styles.futureGrid}>
          {/* LEFT CONTENT */}
          <motion.div
            className={styles.futureContentColumn}
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.futureBadge}>
              <Rocket size={16} />
              <span>THE ROAD AHEAD</span>
            </div>

            <h2 className={styles.sectionTitle}>Our Future</h2>
            <div className={styles.goldLine} />

            <div className={styles.futureTextWrapper}>
              <p className={styles.futureLead}>We are not stopping here.</p>
              <p className={styles.futureBody}>
                Our goal is to keep improving the gym, the experience and the community around it. We want Hi-Tech Gym to become a place where more people discover their strength, build confidence and create healthier lives.
              </p>
            </div>

            <div className={styles.futureHighlights}>
              <div className={styles.futurePill}>
                <Zap size={16} className={styles.goldIcon} />
                <span>Next-Gen Equipment</span>
              </div>
              <div className={styles.futurePill}>
                <Target size={16} className={styles.goldIcon} />
                <span>Expanded Programs</span>
              </div>
            </div>

            <div className={styles.futureCallout}>
              <p className={styles.futureCalloutStart}>The journey has started.</p>
              <p className={styles.futureCalloutEnd}>The best is still ahead.</p>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className={styles.futureVisualColumn}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.futureImageFrame}>
              <img
                src={futureImg}
                alt="Hi-Tech Gym modern fitness concept and advanced equipment vision"
                loading="lazy"
                decoding="async"
                className={styles.futureImage}
              />
              <div className={styles.futureImageOverlay} />
              <div className={styles.futureGlassCard}>
                <div className={styles.futureGlassTitle}>CONTINUOUS INNOVATION</div>
                <p>Elevating physical fitness & community excellence daily.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
