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
import SEO from '../../components/SEO/SEO';
import styles from './About.module.css';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Hi-Tech Gym",
  "url": "https://hitechgym.in/about",
  "description": "The story, mission, core values, and leadership behind Hi-Tech Gym in Melapalayam, Tirunelveli.",
  "mainEntity": {
    "@type": "ExerciseGym",
    "name": "Hi-Tech Gym",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nethaji Rd, Engineers Colony, Raja Nagar, Melapalayam",
      "addressLocality": "Tirunelveli",
      "addressRegion": "Tamil Nadu",
      "postalCode": "627005",
      "addressCountry": "IN"
    }
  },
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
        "name": "About Us",
        "item": "https://hitechgym.in/about"
      }
    ]
  }
};

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.aboutPageWrapper}>
      <SEO
        title="About Us | Hi-Tech Gym - Our Story, Philosophy & Leadership in Tirunelveli"
        description="Discover the story behind Hi-Tech Gym in Melapalayam, Tirunelveli. Built on discipline, consistency, and community with leadership from Yahiya and Gym Master Rilwan."
        canonical="https://hitechgym.in/about"
        ogTitle="About Hi-Tech Gym | Built With Passion, Growing With Purpose"
        ogDescription="Learn about Hi-Tech Gym's journey, philosophy, leadership, and our commitment to championing strength and healthy lifestyles in Tirunelveli."
        schema={aboutSchema}
      />
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
