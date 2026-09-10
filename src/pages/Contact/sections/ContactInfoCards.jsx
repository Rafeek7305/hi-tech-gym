import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from '../Contact.module.css';

const contactInfoData = [
  {
    id: 'visit',
    category: 'VISIT US',
    title: 'Nethaji Rd, Engineers Colony',
    subtitle: 'Raja Nagar, Melapalayam, Tirunelveli, Tamil Nadu 627005',
    tagline: 'Come in and experience Hi-Tech Gym.',
    icon: MapPin,
    actionText: 'View On Map',
    actionHref: '#location-section',
    isExternal: false
  },
  {
    id: 'call',
    category: 'CALL US',
    title: '+91 97518 08071',
    subtitle: 'Available during working hours',
    tagline: 'Speak with our team.',
    icon: Phone,
    actionText: 'Call Now',
    actionHref: 'tel:+919751808071',
    isExternal: true
  },
  {
    id: 'email',
    category: 'EMAIL US',
    title: 'contact@hitechgym.com',
    subtitle: 'Prompt response to all enquiries',
    tagline: 'Send us your questions.',
    icon: Mail,
    actionText: 'Send Email',
    actionHref: 'mailto:contact@hitechgym.com',
    isExternal: true
  },
  {
    id: 'hours',
    category: 'OPENING HOURS',
    title: 'Open Daily',
    subtitle: '6:00 AM – 10:00 AM | 5:00 PM – 9:00 PM',
    tagline: 'Plan your training time.',
    icon: Clock,
    actionText: 'Check Schedule',
    actionHref: '#opening-hours',
    isExternal: false
  }
];

const ContactInfoCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={styles.section} id="contact-info" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>REACH OUT TO US</span>
          <h2 className={styles.sectionTitle}>Get In Touch <span>Directly</span></h2>
          <p className={styles.sectionSubtitle}>
            Whether you want to visit, call or email, we're here to assist you every step of the way.
          </p>
        </motion.div>

        <div className={styles.infoCardsGrid}>
          {contactInfoData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className={styles.infoCard}
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className={styles.infoCardHeader}>
                  <div className={styles.infoIconBox}>
                    <IconComponent size={22} />
                  </div>
                  <span className={styles.infoCategoryBadge}>{item.category}</span>
                </div>

                <div className={styles.infoCardBody}>
                  <h3 className={styles.infoCardTitle}>{item.title}</h3>
                  <p className={styles.infoCardSubtitle}>{item.subtitle}</p>
                  <p className={styles.infoTagline}>{item.tagline}</p>
                </div>

                <div className={styles.infoCardFooter}>
                  <a
                    href={item.actionHref}
                    className={styles.infoActionBtn}
                    target={item.isExternal ? '_blank' : '_self'}
                    rel={item.isExternal ? 'noopener noreferrer' : ''}
                    onClick={(e) => {
                      if (!item.isExternal && item.actionHref.startsWith('#')) {
                        e.preventDefault();
                        const targetEl = document.querySelector(item.actionHref);
                        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span>{item.actionText}</span>
                  </a>
                </div>

                <div className={styles.infoCornerGlow} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
