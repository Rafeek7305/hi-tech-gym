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
import SEO from '../../components/SEO/SEO';
import styles from './Programs.module.css';

const programsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Hi-Tech Gym Training Programs",
  "url": "https://hitechgym.in/programs",
  "description": "Comprehensive fitness training programs including strength training, muscle building, weight loss, functional fitness, and personal coaching in Tirunelveli.",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hitechgym.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Programs",
        "item": "https://hitechgym.in/programs"
      }
    ]
  }
};

const ProgramsPage = () => {
  const [selectedGoal, setSelectedGoal] = useState('all');
  const [activeModalProgram, setActiveModalProgram] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.programsPageWrapper}>
      <SEO
        title="Training Programs | Hi-Tech Gym - Strength, Muscle Building & Personal Training"
        description="Explore structured fitness programs at Hi-Tech Gym in Tirunelveli: Strength Training, Muscle Building, Weight Loss, Functional Fitness, and Personal Coaching."
        canonical="https://hitechgym.in/programs"
        ogTitle="Fitness & Training Programs | Hi-Tech Gym Tirunelveli"
        ogDescription="Tailored fitness programs designed for beginners to advanced athletes. Discover strength training, functional conditioning, and 1-on-1 coaching."
        schema={programsSchema}
      />
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
