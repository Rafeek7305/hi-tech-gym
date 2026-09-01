import React, { useEffect } from 'react';
import AboutHero from './sections/AboutHero';
import OurStory from './sections/OurStory';
import GrowthJourney from './sections/GrowthJourney';
import Philosophy from './sections/Philosophy';
import TeamSection from './sections/TeamSection';
import WhatWeBelieve from './sections/WhatWeBelieve';
import CommunitySection from './sections/CommunitySection';
import FutureVision from './sections/FutureVision';
import AboutCTA from './sections/AboutCTA';
import styles from './About.module.css';

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when loading the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.aboutPageWrapper}>
      <AboutHero />
      <OurStory />
      <GrowthJourney />
      <Philosophy />
      <TeamSection />
      <WhatWeBelieve />
      <CommunitySection />
      <FutureVision />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
