import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import styles from '../Contact.module.css';

const QuickContactActions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>FASTEST CONNECT</span>
          <h2 className={styles.sectionTitle}>Instant Contact Actions</h2>
          <p className={styles.sectionSubtitle}>
            Tap below to reach us directly on your phone or launch map navigation.
          </p>
        </motion.div>

        <div className={styles.quickActionsGrid}>
          {/* CALL US */}
          <motion.a
            href="tel:+919751808071"
            className={`${styles.actionCard} ${styles.callCard}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.actionIconWrapper}>
              <Phone size={28} />
            </div>
            <div className={styles.actionContent}>
              <span className={styles.actionBadge}>DIRECT LINE</span>
              <h3 className={styles.actionTitle}>Call Us Now</h3>
              <p className={styles.actionDetail}>+91 97518 08071</p>
            </div>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/919751808071?text=Hello%20Hi-Tech%20Gym,%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionCard} ${styles.whatsappCard}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.actionIconWrapper}>
              <MessageCircle size={28} />
            </div>
            <div className={styles.actionContent}>
              <span className={styles.actionBadge}>INSTANT CHAT</span>
              <h3 className={styles.actionTitle}>Chat on WhatsApp</h3>
              <p className={styles.actionDetail}>+91 97518 08071</p>
            </div>
          </motion.a>

          {/* GET DIRECTIONS */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Hi-Tech+Gym+Nethaji+Rd+Engineers+Colony+Raja+Nagar+Melapalayam+Tirunelveli+Tamil+Nadu+627005"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionCard} ${styles.mapCard}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.actionIconWrapper}>
              <MapPin size={28} />
            </div>
            <div className={styles.actionContent}>
              <span className={styles.actionBadge}>NAVIGATION</span>
              <h3 className={styles.actionTitle}>Get Directions</h3>
              <p className={styles.actionDetail}>Melapalayam, Tirunelveli</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default QuickContactActions;
