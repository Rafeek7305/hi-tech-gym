import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import strengthImg from '../../../assets/programs/strength_training.png';
import muscleImg from '../../../assets/programs/muscle_building.png';
import weightLossImg from '../../../assets/programs/weight_loss.png';
import functionalImg from '../../../assets/programs/functional_training.png';
import personalImg from '../../../assets/programs/personal_training.png';
import generalImg from '../../../assets/programs/beginner_friendly.png';
import styles from '../Programs.module.css';

export const programsData = [
  {
    id: 'strength-training',
    name: 'Strength Training',
    category: 'Strength & Performance',
    difficulty: 'Beginner → Advanced',
    image: strengthImg,
    description: 'Build a stronger foundation through structured resistance training and consistent progression.',
    goals: ['strength', 'muscle'],
    features: ['Power Rack & Barbells', 'Progressive Overload', 'Core Stability']
  },
  {
    id: 'muscle-building',
    name: 'Muscle Building',
    category: 'Physique & Growth',
    difficulty: 'Beginner → Advanced',
    image: muscleImg,
    description: 'Target progressive volume and hypertrophy to sculpt muscle mass with precision plate-loaded machines.',
    goals: ['muscle'],
    features: ['Hypertrophy Focus', 'Targeted Isolation', 'Custom Cables']
  },
  {
    id: 'weight-loss',
    name: 'Weight Loss',
    category: 'Fat Loss & Fitness',
    difficulty: 'Beginner → Intermediate',
    image: weightLossImg,
    description: 'Combine effective training and steady movement to burn calories and build a healthier, energized body.',
    goals: ['weight', 'fit'],
    features: ['Cardio Ergs', 'Caloric Burn', 'Sustainable Pace']
  },
  {
    id: 'functional-training',
    name: 'Functional Training',
    category: 'Athletic Conditioning',
    difficulty: 'All Levels',
    image: functionalImg,
    description: 'Dynamic turf workouts, kettlebell ergs, and mobility drills to improve full-body conditioning.',
    goals: ['active', 'weight', 'strength'],
    features: ['Sprint Track', 'Kettlebell Rigs', 'Agility & Power']
  },
  {
    id: 'personal-training',
    name: 'Personal Training',
    category: 'One-on-One Guidance',
    difficulty: 'Custom Tailored',
    image: personalImg,
    description: 'Tailored one-on-one guidance, direct feedback on form, and custom workouts structured for your unique goals.',
    goals: ['muscle', 'weight', 'strength', 'fit', 'active'],
    features: ['Dedicated Coach', 'Technique Check', 'Custom Schedule']
  },
  {
    id: 'general-fitness',
    name: 'General Fitness',
    category: 'Health & Lifestyle',
    difficulty: 'Beginner Friendly',
    image: generalImg,
    description: 'A balanced all-around approach for members seeking a consistent, sustainable, and enjoyable health routine.',
    goals: ['fit', 'active'],
    features: ['Full Body Routine', 'Flexible Timing', 'Stress Relief']
  }
];

const ProgramsOverview = ({ selectedGoal, setSelectedGoal, onSelectProgram }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  // Filter programs based on goal selection
  const filteredPrograms = selectedGoal === 'all'
    ? programsData
    : programsData.filter(p => p.goals.includes(selectedGoal));

  return (
    <section className={styles.section} id="programs-overview" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>PROGRAM SELECTION</span>
          <h2 className={styles.sectionTitle}>Our Programs</h2>
          <p className={styles.sectionSubtitle}>
            Designed for different goals, different starting points and different journeys.
          </p>

          {selectedGoal !== 'all' && (
            <motion.div
              className={styles.filterNotice}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span>Showing programs matching your selected goal</span>
              <button onClick={() => setSelectedGoal('all')} className={styles.clearFilterBtn}>
                Show All Programs
              </button>
            </motion.div>
          )}
        </motion.div>

        <div className={styles.programsGrid}>
          {filteredPrograms.map((program, idx) => (
            <motion.div
              key={program.id}
              className={styles.programCard}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.programImageContainer}>
                <img src={program.image} alt={program.name} className={styles.programImage} />
                <div className={styles.programOverlay} />
                <div className={styles.programCategoryBadge}>
                  <Layers size={13} />
                  <span>{program.category}</span>
                </div>
                <div className={styles.programDifficultyTag}>{program.difficulty}</div>
              </div>

              <div className={styles.programCardBody}>
                <h3 className={styles.programTitle}>{program.name}</h3>
                <p className={styles.programDescription}>{program.description}</p>

                <div className={styles.programFeaturesList}>
                  {program.features.map((feat, fIdx) => (
                    <div key={fIdx} className={styles.programFeatureTag}>
                      <CheckCircle2 size={13} className={styles.goldCheck} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.programCardFooter}>
                  <button
                    className={styles.viewProgramBtn}
                    onClick={() => onSelectProgram(program)}
                  >
                    <span>View Program</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className={styles.programBorderGlow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
