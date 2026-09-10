import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Flame, Shield, Activity, Sparkles, ArrowUpRight } from 'lucide-react';
import styles from '../Programs.module.css';

const goals = [
  {
    id: 'muscle',
    title: 'BUILD MUSCLE',
    description: 'Build strength, muscle and a stronger physique.',
    icon: Dumbbell,
    targetProgramId: 'muscle-building'
  },
  {
    id: 'weight',
    title: 'LOSE WEIGHT',
    description: 'Move more, train consistently and work towards a healthier body.',
    icon: Flame,
    targetProgramId: 'weight-loss'
  },
  {
    id: 'strength',
    title: 'BUILD STRENGTH',
    description: 'Improve your strength, power and training performance.',
    icon: Shield,
    targetProgramId: 'strength-training'
  },
  {
    id: 'fit',
    title: 'GET FIT',
    description: 'Build a healthier routine and improve your overall fitness.',
    icon: Activity,
    targetProgramId: 'general-fitness'
  },
  {
    id: 'active',
    title: 'STAY ACTIVE',
    description: 'Keep moving, stay consistent and feel stronger every day.',
    icon: Sparkles,
    targetProgramId: 'functional-training'
  }
];

const GoalSelector = ({ selectedGoal, setSelectedGoal }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const handleGoalClick = (goalId, programId) => {
    setSelectedGoal(selectedGoal === goalId ? 'all' : goalId);
    const el = document.getElementById('programs-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>CHOOSE YOUR PATH</span>
          <h2 className={styles.sectionTitle}>What's Your <span>Goal?</span></h2>
          <p className={styles.sectionSubtitle}>
            Choose what you want to work towards and discover the training approach that fits you.
          </p>
        </motion.div>

        <div className={styles.goalsGrid}>
          {goals.map((goal, idx) => {
            const IconComp = goal.icon;
            const isSelected = selectedGoal === goal.id;
            return (
              <motion.div
                key={goal.id}
                className={`${styles.goalCard} ${isSelected ? styles.goalCardActive : ''}`}
                onClick={() => handleGoalClick(goal.id, goal.targetProgramId)}
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.goalHeader}>
                  <div className={styles.goalIconBox}>
                    <IconComp size={24} />
                  </div>
                  <div className={styles.goalArrowBox}>
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3 className={styles.goalTitle}>{goal.title}</h3>
                <p className={styles.goalDescription}>{goal.description}</p>

                <div className={styles.goalExploreBtn}>
                  <span>Explore Approach</span>
                </div>
                <div className={styles.goalCornerGlow} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GoalSelector;
