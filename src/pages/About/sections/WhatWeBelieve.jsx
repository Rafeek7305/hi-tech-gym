import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flame, Repeat, Shield, HeartHandshake } from 'lucide-react';
import styles from '../About.module.css';

const beliefs = [
  {
    id: 'discipline',
    title: 'DISCIPLINE',
    text: 'Motivation can start the journey. Discipline keeps it moving.',
    icon: Flame,
    color: '#D4AF37'
  },
  {
    id: 'consistency',
    title: 'CONSISTENCY',
    text: 'Small efforts repeated every day create big changes.',
    icon: Repeat,
    color: '#E5C158'
  },
  {
    id: 'confidence',
    title: 'CONFIDENCE',
    text: 'Strength is not only what you lift. It is how you carry yourself.',
    icon: Shield,
    color: '#F4D068'
  },
  {
    id: 'community',
    title: 'COMMUNITY',
    text: 'We grow stronger when we support each other.',
    icon: HeartHandshake,
    color: '#FFD700'
  }
];

const WhatWeBelieve = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>CORE VALUES</span>
          <h2 className={styles.sectionTitle}>What We Believe</h2>
          <p className={styles.sectionSubtitle}>
            These principles guide everything we do and every person we train.
          </p>
        </motion.div>

        <div className={styles.beliefsGrid}>
          {beliefs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                className={styles.beliefCard}
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.beliefIconBox}>
                  <IconComp size={26} />
                </div>
                <h3 className={styles.beliefTitle}>{item.title}</h3>
                <p className={styles.beliefText}>"{item.text}"</p>
                <div className={styles.beliefCornerGlow} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
