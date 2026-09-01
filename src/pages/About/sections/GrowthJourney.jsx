import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Compass, Flame, Users, Sparkles } from 'lucide-react';
import styles from '../About.module.css';

const GrowthJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const stages = [
    {
      id: '01',
      title: 'VISION',
      description: 'An idea to create a place where people can become stronger.',
      icon: Compass,
      highlight: 'The Foundation'
    },
    {
      id: '02',
      title: 'DISCIPLINE',
      description: 'Turning that idea into a place where consistency matters.',
      icon: Flame,
      highlight: 'The Execution'
    },
    {
      id: '03',
      title: 'COMMUNITY',
      description: 'Growing together through motivation, support and hard work.',
      icon: Users,
      highlight: 'The Power'
    },
    {
      id: '04',
      title: 'FUTURE',
      description: 'Continuing to improve and inspire more people.',
      icon: Sparkles,
      highlight: 'The Horizon'
    }
  ];

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>EVOLUTION</span>
          <h2 className={styles.sectionTitle}>Built With Passion. Growing With Purpose.</h2>
          <p className={styles.sectionSubtitle}>
            Our growth is defined not by calendar dates, but by the relentless pursuit of strength and excellence.
          </p>
        </motion.div>

        <div className={styles.journeyTrackWrapper}>
          <div className={styles.journeyLine} />

          <div className={styles.journeyGrid}>
            {stages.map((stage, idx) => {
              const IconComp = stage.icon;
              return (
                <motion.div
                  key={stage.id}
                  className={styles.journeyCard}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                >
                  <div className={styles.journeyCardHeader}>
                    <span className={styles.stageNumber}>{stage.id}</span>
                    <div className={styles.stageIconBadge}>
                      <IconComp size={22} />
                    </div>
                  </div>

                  <span className={styles.stageHighlight}>{stage.highlight}</span>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDescription}>{stage.description}</p>

                  <div className={styles.cardHoverGlow} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;
