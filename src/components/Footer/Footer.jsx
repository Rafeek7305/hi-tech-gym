import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './Footer.module.css';
import logoImg from '../../assets/logo3.png';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

// Random Particle Generator Component
const Particles = () => {
  const particles = Array.from({ length: 20 });
  
  return (
    <div className={styles.particlesContainer}>
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: '-10px'
            }}
            animate={{
              y: [0, -window.innerHeight * 0.8],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
};

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-10%" });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 } 
    }
  };

  return (
    <footer className={styles.footerSection} ref={footerRef}>
      <div className={styles.topGradient}></div>
      {isInView && <Particles />}
      
      <div className={styles.container}>
        <motion.div 
          className={styles.footerGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* SECTION 1: BRAND */}
          <motion.div className={styles.brandSection} variants={itemVariants}>
            <div className={styles.logoText}>
              <img src={logoImg} alt="Gym Logo" style={{ height: '120px', width: 'auto', objectFit: 'contain', mixBlendMode: 'screen', marginBottom: '1.5rem' }} />
            </div>
            <p className={styles.brandDescription}>
              Transform Your Body.<br />
              Elevate Your Lifestyle.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIconWrapper} aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className={styles.socialIconWrapper} aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className={styles.socialIconWrapper} aria-label="Youtube">
                <YoutubeIcon size={20} />
              </a>
              <a href="#" className={styles.socialIconWrapper} aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          {/* SECTION 2: QUICK LINKS */}
          <motion.div className={styles.linksSection} variants={itemVariants}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#">Home</a></li>
              <li className={styles.linkItem}><a href="#about">About</a></li>
              <li className={styles.linkItem}><a href="#facilities">Programs</a></li>
              <li className={styles.linkItem}><a href="#membership">Membership</a></li>
              <li className={styles.linkItem}><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          {/* SECTION 3: CONTACT */}
          <motion.div className={styles.contactSection} variants={itemVariants}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                +1 (555) 123-4567
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                elite@titangym.com
              </li>
              <li className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                123 Luxury Avenue,<br />Beverly Hills, CA 90210
              </li>
            </ul>
            <div className={styles.workingHours}>
              <span>Open Daily</span>
              6:00 AM – 10:00 PM
            </div>
          </motion.div>

          {/* SECTION 4: CTA CARD */}
          <motion.div className={styles.ctaSection} variants={itemVariants}>
            <div className={styles.ctaCard}>
              <h4 className={styles.ctaHeading}>Ready To Become Stronger?</h4>
              <p className={styles.ctaDescription}>
                Join the ultimate fitness community and start your journey towards excellence today.
              </p>
              <button className={styles.ctaButton}>Join Today</button>
            </div>
          </motion.div>

        </motion.div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBarWrapper}>
          <motion.div 
            className={styles.animatedDivider}
            variants={dividerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ transformOrigin: "center" }}
          />
          <motion.div 
            className={styles.bottomBarContent}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className={styles.copyright}>
              © 2026 Titan Gym. All Rights Reserved.
            </div>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <div className={styles.designedWith}>
              Designed with ❤️
            </div>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
