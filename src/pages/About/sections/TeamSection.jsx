import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Award, UserCheck } from 'lucide-react';
import organizerImgPlaceholder from '../../../assets/about/organizer_placeholder.webp';
import masterImgPlaceholder from '../../../assets/about/master_placeholder.webp';
import styles from '../About.module.css';

// Default team data structured for easy future updates/replacement of real photos & details
const teamMembers = [
  {
    id: 'organizer',
    roleTitle: 'GYM ORGANIZER',
    name: 'Yahiya',
    bio: 'Leading the vision and helping Hi-Tech Gym continue to grow with purpose.',
    image: organizerImgPlaceholder,
    badgeIcon: ShieldCheck,
    tagline: 'Vision & Operations'
  },
  {
    id: 'master',
    roleTitle: 'GYM MASTER',
    name: 'Gym Master Rilwan',
    bio: 'Helping members stay focused, disciplined and committed to their fitness journey.',
    image: masterImgPlaceholder,
    badgeIcon: Award,
    tagline: 'Master Fitness & Technique'
  }
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className={styles.section} ref={ref} id="team">
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>THE LEADERSHIP</span>
          <h2 className={styles.sectionTitle}>The People Behind The Journey</h2>
          <p className={styles.sectionSubtitle}>
            Behind every successful gym is a team that believes in the people they train.
          </p>
        </motion.div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, idx) => {
            const BadgeIcon = member.badgeIcon;
            return (
              <motion.div
                key={member.id}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.9, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.teamImageContainer}>
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.roleTitle} at Hi-Tech Gym`}
                    loading="lazy"
                    decoding="async"
                    className={styles.teamImage}
                  />
                  <div className={styles.teamImageOverlay} />
                  <div className={styles.teamRoleBadge}>
                    <BadgeIcon size={16} />
                    <span>{member.roleTitle}</span>
                  </div>
                  <div className={styles.placeholderNote}>
                    <UserCheck size={14} />
                    <span>Official Profile</span>
                  </div>
                </div>

                <div className={styles.teamContent}>
                  <span className={styles.teamTagline}>{member.tagline}</span>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>

                <div className={styles.teamCardBorder} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
