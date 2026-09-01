import React, { useState, useEffect } from 'react';
import ProgramsHero from './sections/ProgramsHero';
import GoalSelector from './sections/GoalSelector';
import ProgramsOverview from './sections/ProgramsOverview';
import FeaturedProgram from './sections/FeaturedProgram';
import TrainingProcess from './sections/TrainingProcess';
import BeginnerSection from './sections/BeginnerSection';
import PersonalTraining from './sections/PersonalTraining';
import ProgramComparison from './sections/ProgramComparison';
import MotivationSection from './sections/MotivationSection';
import ProgramFAQ from './sections/ProgramFAQ';
import ProgramsCTA from './sections/ProgramsCTA';
import ProgramModal from './sections/ProgramModal';
import styles from './Programs.module.css';

const ProgramsPage = () => {
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [activeModalProgram, setActiveModalProgram] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.programsPageWrapper}>
      <ProgramsHero />
      <GoalSelector selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} />
      <ProgramsOverview
        selectedGoal={selectedGoal}
        setSelectedGoal={setSelectedGoal}
        onSelectProgram={(program) => setActiveModalProgram(program)}
      />
      <FeaturedProgram onSelectProgram={(program) => setActiveModalProgram(program)} />
      <TrainingProcess />
      <BeginnerSection />
      <PersonalTraining />
      <ProgramComparison />
      <MotivationSection />
      <ProgramFAQ />
      <ProgramsCTA />

      {activeModalProgram && (
        <ProgramModal
          program={activeModalProgram}
          onClose={() => setActiveModalProgram(null)}
        />
      )}
    </div>
  );
};

export default ProgramsPage;
