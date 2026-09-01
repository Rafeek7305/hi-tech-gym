import React, { useEffect } from 'react';
import ContactHero from './sections/ContactHero';
import ContactInfoCards from './sections/ContactInfoCards';
import ContactForm from './sections/ContactForm';
import QuickContactActions from './sections/QuickContactActions';
import LocationSection from './sections/LocationSection';
import OpeningHours from './sections/OpeningHours';
import WhyContactUs from './sections/WhyContactUs';
import ContactFAQ from './sections/ContactFAQ';
import ContactCTA from './sections/ContactCTA';
import styles from './Contact.module.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contactPageWrapper}>
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <QuickContactActions />
      <LocationSection />
      <OpeningHours />
      <WhyContactUs />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
