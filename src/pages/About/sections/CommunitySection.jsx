import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import communityImg from '../../../assets/about/community_img.webp';
import styles from '../About.module.css';

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.communityGrid}>
          {/* LEFT: CINEMATIC COMMUNITY IMAGE */}
          <motion.div
            className={styles.communityImageColumn}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.communityImageWrapper}>
              <img
                src={communityImg}
                alt="Hi-Tech Gym community members training and working out together"
                loading="lazy"
                decoding="async"
                className={styles.communityImage}
              />
              <div className={styles.communityImageOverlay} />
              <div className={styles.communityBadge}>
                <span>UNITY & STRENGTH</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: EMOTIONAL STORY CONTENT */}
          <motion.div
            className={styles.communityContentColumn}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.sectionCategory}>THE PEOPLE</span>
            <h2 className={styles.sectionTitle}>Every Rep Has A Story.</h2>
            <div className={styles.goldLine} />

            <div className={styles.communityList}>
              <div className={styles.communityListItem}>
                <span className={styles.bulletDot} />
                <p>Someone walks in trying to lose weight.</p>
              </div>
              <div className={styles.communityListItem}>
                <span className={styles.bulletDot} />
                <p>Someone wants to become stronger.</p>
              </div>
              <div className={styles.communityListItem}>
                <span className={styles.bulletDot} />
                <p>Someone is rebuilding their confidence.</p>
              </div>
              <div className={styles.communityListItem}>
                <span className={styles.bulletDot} />
                <p>Someone simply wants to feel better.</p>
              </div>
            </div>

            <div className={styles.communityConclusionBox}>
              <p className={styles.communitySubline}>Different goals. Different journeys.</p>
              <div className={styles.communityBrandTag}>
                <span>ONE PLACE.</span>
                <h3 className={styles.communityBrandTitle}>Hi-Tech Gym.</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
