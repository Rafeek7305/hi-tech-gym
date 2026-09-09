import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import storyImg from '../../../assets/about/story_img.webp';
import styles from '../About.module.css';

const OurStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-15%' });

  return (
    <section className={styles.section} id="our-story" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.storyGrid}>
          {/* LEFT: STORY CONTENT */}
          <motion.div
            className={styles.storyContentColumn}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionCategory}>OUR PURPOSE</span>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <div className={styles.goldLine} />
            </div>

            <div className={styles.storyTextWrapper}>
              <p className={styles.storyParagraphHighlight}>
                Hi-Tech Gym was built with a simple belief — everyone deserves a place where they can become stronger, healthier and more confident.
              </p>

              <p className={styles.storyParagraph}>
                What started as a vision continues to grow through the people who walk through our doors every day. Every workout, every challenge and every small improvement becomes part of our journey.
              </p>

              <div className={styles.storyQuoteBox}>
                <p>
                  "We are not only building a gym. We are building a community that believes in showing up, pushing forward and never giving up."
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: STORY IMAGE */}
          <motion.div
            className={styles.storyImageColumn}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.storyImageWrapper}>
              <img
                src={storyImg}
                alt="Athletic strength and endurance training workout at Hi-Tech Gym"
                loading="lazy"
                decoding="async"
                className={styles.storyImage}
              />
              <div className={styles.imageOverlayGradient} />
              <div className={styles.imageGoldFrame} />
              <div className={styles.imageBadge}>
                <span className={styles.imageBadgeTitle}>BUILT ON PURPOSE</span>
                <span className={styles.imageBadgeSub}>Dedication • Discipline • Strength</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
