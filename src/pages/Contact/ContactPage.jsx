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
import SEO from '../../components/SEO/SEO';
import styles from './Contact.module.css';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Hi-Tech Gym",
  "url": "https://hitechgym.in/contact",
  "description": "Contact information, phone numbers, map location, and training hours for Hi-Tech Gym in Melapalayam, Tirunelveli.",
  "mainEntity": {
    "@type": "ExerciseGym",
    "name": "Hi-Tech Gym",
    "telephone": "+919751808071",
    "email": "contact@hitechgym.com",
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
        "name": "Contact Us",
        "item": "https://hitechgym.in/contact"
      }
    ]
  }
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contactPageWrapper}>
      <SEO
        title="Contact Us | Hi-Tech Gym - Visit Us in Melapalayam, Tirunelveli"
        description="Contact Hi-Tech Gym on Nethaji Rd, Melapalayam, Tirunelveli. Call +91 97518 08071, chat on WhatsApp, view our daily morning/evening hours, or get directions."
        canonical="https://hitechgym.in/contact"
        ogTitle="Contact Hi-Tech Gym | Location, Hours & Phone Support"
        ogDescription="Get in touch with Hi-Tech Gym in Melapalayam, Tirunelveli. Open daily 6:00 AM – 10:00 AM & 5:00 PM – 9:00 PM. Call +91 97518 08071."
        schema={contactSchema}
      />
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
