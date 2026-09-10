import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../Programs.module.css';

const comparisonRows = [
  {
    program: 'Strength Training',
    bestFor: 'Strength & performance',
    focus: 'Structured resistance training',
    level: 'Beginner → Advanced'
  },
  {
    program: 'Muscle Building',
    bestFor: 'Muscle growth & physique',
    focus: 'Hypertrophy & volume',
    level: 'Beginner → Advanced'
  },
  {
    program: 'Weight Loss',
    bestFor: 'Fat loss & body health',
    focus: 'Cardio + steady resistance',
    level: 'Beginner → Intermediate'
  },
  {
    program: 'Functional Training',
    bestFor: 'Athletic conditioning',
    focus: 'Turf, ergs & mobility',
    level: 'All Levels'
  },
  {
    program: 'Personal Training',
    bestFor: 'Direct guidance & form',
    focus: 'Tailored 1-on-1 coaching',
    level: 'Custom Tailored'
  },
  {
    program: 'General Fitness',
    bestFor: 'Overall health & daily energy',
    focus: 'Balanced lifestyle routine',
    level: 'Beginner Friendly'
  }
];

const ProgramComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} id="program-comparison" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>SIDE-BY-SIDE MATRIX</span>
          <h2 className={styles.sectionTitle}>Find The Right <span>Training For You</span></h2>
          <p className={styles.sectionSubtitle}>
            Compare program goals, training focus, and experience levels at a glance.
          </p>
        </motion.div>

        <motion.div
          className={styles.tableWrapper}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Program</th>
                <th>Best For</th>
                <th>Training Focus</th>
                <th>Experience Level</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx}>
                  <td className={styles.tableProgramName}>{row.program}</td>
                  <td>
                    <span className={styles.mobileColLabel}>Best For: </span>
                    {row.bestFor}
                  </td>
                  <td>
                    <span className={styles.mobileColLabel}>Focus: </span>
                    {row.focus}
                  </td>
                  <td>
                    <span className={styles.levelTag}>{row.level}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramComparison;
