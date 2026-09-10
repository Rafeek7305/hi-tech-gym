import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, UserCheck, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import personalImg from '../../../assets/programs/personal_training.webp';
import styles from '../Programs.module.css';

const pillars = [
  { title: 'Goal Focus', icon: Target, desc: 'Targeting specific results effectively.' },
  { title: 'Personal Guidance', icon: UserCheck, desc: 'Direct support tailored to your pace.' },
  { title: 'Better Technique', icon: ShieldCheck, desc: 'Safe execution to prevent injury.' },
  { title: 'Consistent Progress', icon: TrendingUp, desc: 'Steady tracking week after week.' }
];

const PersonalTraining = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/#contact');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className={styles.section} id="personal-training" ref={ref}>
      <div className={styles.container}>
        <div className={styles.personalGrid}>
          {/* LEFT IMAGE */}
          <motion.div
            className={styles.personalVisualColumn}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.personalImageWrapper}>
              <img
                src={personalImg}
                alt="One-on-one personal training coaching session at Hi-Tech Gym"
                loading="lazy"
                decoding="async"
                className={styles.personalImage}
              />
              <div className={styles.personalImageOverlay} />
              <div className={styles.personalBadge}>
                <span>ONE-ON-ONE COACHING</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className={styles.personalContentColumn}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.sectionCategory}>FOCUSED SUPPORT</span>
            <h2 className={styles.sectionTitle}>Train With <span>Guidance.</span></h2>
            <div className={styles.goldLine} />

            <p className={styles.personalLeadText}>
              Sometimes the right guidance can make the journey easier.
            </p>
            <p className={styles.personalBodyText}>
              Get focused support, better technique and a training approach built around your goals.
            </p>

            <div className={styles.pillarsGrid}>
              {pillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className={styles.pillarCard}>
                    <div className={styles.pillarIconBox}>
                      <IconComp size={18} />
                    </div>
                    <div>
                      <h3 className={styles.pillarTitle}>{item.title}</h3>
                      <p className={styles.pillarDesc}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.personalCtaBox}>
              <button className={styles.primaryBtn} onClick={handleLearnMore}>
                <span>Learn More About Guidance</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
