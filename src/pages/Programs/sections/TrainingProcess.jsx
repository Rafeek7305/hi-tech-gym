import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, MapPin, BicepsFlexed, TrendingUp } from 'lucide-react';
import styles from '../Programs.module.css';

const steps = [
  {
    stepNumber: '01',
    title: 'ASSESS',
    description: 'Understand your current fitness level and goals.',
    icon: Search
  },
  {
    stepNumber: '02',
    title: 'PLAN',
    description: 'Choose a training approach that matches your goal.',
    icon: MapPin
  },
  {
    stepNumber: '03',
    title: 'TRAIN',
    description: 'Follow your workouts with proper form and consistency.',
    icon: BicepsFlexed
  },
  {
    stepNumber: '04',
    title: 'PROGRESS',
    description: 'Keep improving and build better habits over time.',
    icon: TrendingUp
  }
];

const TrainingProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={styles.section} id="training-process" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>THE PROCESS</span>
          <h2 className={styles.sectionTitle}>What Your Training Looks Like</h2>
          <p className={styles.sectionSubtitle}>
            A simple, structured pathway from day one to long-term progress.
          </p>
        </motion.div>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine} />

          <div className={styles.timelineGrid}>
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.stepNumber}
                  className={styles.timelineStepCard}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumText}>{step.stepNumber}</span>
                    <div className={styles.stepIconBox}>
                      <IconComp size={22} />
                    </div>
                  </div>

                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <div className={styles.stepDotMarker} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProcess;
