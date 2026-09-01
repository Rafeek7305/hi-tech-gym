import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartHandshake, MessageSquare } from 'lucide-react';
import helpImg from '../../../assets/about/community_img.png';
import styles from '../Contact.module.css';

const WhyContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const handleTalkToUs = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} ref={ref}>
      <div className={styles.container}>
        <div className={styles.helpGrid}>
          {/* LEFT: MOTIVATIONAL TEXT */}
          <motion.div
            className={styles.helpContentColumn}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.helpTag}>
              <HeartHandshake size={16} />
              <span>SUPPORTIVE ENVIRONMENT</span>
            </div>

            <h2 className={styles.helpTitle}>
              Not Sure Where <br />
              <span className={styles.goldGradientText}>To Start?</span>
            </h2>

            <div className={styles.goldLine} />

            <div className={styles.helpTextBody}>
              <p className={styles.helpHighlight}>That's completely okay.</p>
              <p className={styles.helpParagraph}>
                Whether you're new to the gym, returning after a break or simply looking for a better way to train, you can reach out to us.
              </p>
              <p className={styles.helpQuote}>
                Let's find the right place to start.
              </p>
            </div>

            <div className={styles.helpCtaBox}>
              <button className={styles.primaryBtn} onClick={handleTalkToUs}>
                <MessageSquare size={18} />
                <span>Talk To Us</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT: COMMUNITY ATMOSPHERE IMAGE */}
          <motion.div
            className={styles.helpVisualColumn}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.helpImageWrapper}>
              <img
                src={helpImg}
                alt="Hi-Tech Gym Community Support"
                className={styles.helpImage}
              />
              <div className={styles.helpImageOverlay} />
              <div className={styles.helpBadge}>
                <span>ALWAYS WELCOMING</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyContactUs;
