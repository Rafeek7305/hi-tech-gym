import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';
import logoImg from '../../assets/logo3.png';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
);

// Random Particle Generator Component
const Particles = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className={styles.particlesContainer} aria-hidden="true">
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
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (e, path, sectionId) => {
    e.preventDefault();
    if (path === '/about') {
      if (location.pathname === '/about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/about');
      }
      return;
    }

    if (path === '/programs') {
      if (location.pathname === '/programs') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/programs');
      }
      return;
    }

    if (path === '/contact') {
      if (location.pathname === '/contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/contact');
      }
      return;
    }

    if (path === '/') {
      if (location.pathname === '/') {
        if (!sectionId) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        navigate('/');
        if (sectionId) {
          setTimeout(() => {
            const element = document.querySelector(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      }
    }
  };

  return (
    <footer className={styles.footerSection} ref={footerRef} id="contact">
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
              <img
                src={logoImg}
                alt="Hi-Tech Gym Logo"
                loading="lazy"
                decoding="async"
                style={{ height: '120px', width: 'auto', objectFit: 'contain', mixBlendMode: 'screen', marginBottom: '1.5rem' }}
              />
            </div>
            <p className={styles.brandDescription}>
              Transform Your Body.<br />
              Elevate Your Lifestyle.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIconWrapper} aria-label="Follow Hi-Tech Gym on Instagram" rel="noopener noreferrer">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className={styles.socialIconWrapper} aria-label="Follow Hi-Tech Gym on Facebook" rel="noopener noreferrer">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className={styles.socialIconWrapper} aria-label="Visit Hi-Tech Gym on YouTube" rel="noopener noreferrer">
                <YoutubeIcon size={20} />
              </a>
              <a href="https://wa.me/919751808071" target="_blank" rel="noopener noreferrer" className={styles.socialIconWrapper} aria-label="Chat with Hi-Tech Gym on WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          {/* SECTION 2: QUICK LINKS */}
          <motion.div className={styles.linksSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="/" onClick={(e) => handleNavClick(e, '/', null)}>Home</a></li>
              <li className={styles.linkItem}><a href="/about" onClick={(e) => handleNavClick(e, '/about', null)}>About Us</a></li>
              <li className={styles.linkItem}><a href="/programs" onClick={(e) => handleNavClick(e, '/programs', null)}>Programs</a></li>
              <li className={styles.linkItem}><a href="/#membership" onClick={(e) => handleNavClick(e, '/', '#membership')}>Membership</a></li>
              <li className={styles.linkItem}><a href="/contact" onClick={(e) => handleNavClick(e, '/contact', null)}>Contact</a></li>
            </ul>
          </motion.div>

          {/* SECTION 3: CONTACT */}
          <motion.div className={styles.contactSection} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <a href="tel:+919751808071" style={{ color: 'inherit' }}>+91 97518 08071</a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <a href="mailto:contact@hitechgym.com" style={{ color: 'inherit' }}>contact@hitechgym.com</a>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>
                  Nethaji Rd, Engineers Colony,<br />Raja Nagar, Melapalayam,<br />Tirunelveli, Tamil Nadu 627005
                </span>
              </li>
            </ul>
            <div className={styles.workingHours}>
              <span>Open Daily</span>
              6:00 AM – 10:00 AM<br />
              5:00 PM – 9:00 PM
            </div>
          </motion.div>

          {/* SECTION 4: CTA CARD */}
          <motion.div className={styles.ctaSection} variants={itemVariants}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaHeading}>Ready To Become Stronger?</h3>
              <p className={styles.ctaDescription}>
                Join the ultimate fitness community and start your journey towards excellence today.
              </p>
              <button className={styles.ctaButton} onClick={(e) => handleNavClick(e, '/', '#membership')}>Join Today</button>
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
              © 2026 Hi-Tech Gym. All Rights Reserved.
            </div>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <div className={styles.designedWith}>
              Designed with Rafeek
            </div>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
