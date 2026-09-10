import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';
import logoImg from '../../assets/logo3.png';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsappIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
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
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.socialIconWrapper} ${styles.socialIconInstagram}`} 
                aria-label="Follow Hi-Tech Gym on Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.socialIconWrapper} ${styles.socialIconFacebook}`} 
                aria-label="Follow Hi-Tech Gym on Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a 
                href="https://www.youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.socialIconWrapper} ${styles.socialIconYoutube}`} 
                aria-label="Visit Hi-Tech Gym on YouTube"
              >
                <YoutubeIcon size={20} />
              </a>
              <a 
                href="https://wa.me/919751808071" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.socialIconWrapper} ${styles.socialIconWhatsapp}`} 
                aria-label="Chat with Hi-Tech Gym on WhatsApp"
              >
                <WhatsappIcon size={20} />
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
