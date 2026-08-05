import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import logoImg from '../../assets/logo3.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    if (mobileMenuOpen) setMobileMenuOpen(false);
    
    // If it's home/top
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Gym Logo" className={styles.logoImg} />
      </div>

      <nav className={styles.navLinks}>
        <a href="#" onClick={(e) => scrollToSection(e, '#')} className={styles.navLink}>Home</a>
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className={styles.navLink}>About</a>
        <a href="#facilities" onClick={(e) => scrollToSection(e, '#facilities')} className={styles.navLink}>Programs</a>
        <a href="#membership" onClick={(e) => scrollToSection(e, '#membership')} className={styles.navLink}>Membership</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className={styles.navLink}>Contact</a>
      </nav>

      <button className={styles.ctaBtn} onClick={(e) => scrollToSection(e, '#membership')}>
        Join Now
      </button>

      <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          <a href="#" className={styles.mobileNavLink} onClick={(e) => scrollToSection(e, '#')}>Home</a>
          <a href="#about" className={styles.mobileNavLink} onClick={(e) => scrollToSection(e, '#about')}>About</a>
          <a href="#facilities" className={styles.mobileNavLink} onClick={(e) => scrollToSection(e, '#facilities')}>Programs</a>
          <a href="#membership" className={styles.mobileNavLink} onClick={(e) => scrollToSection(e, '#membership')}>Membership</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
          <button className={styles.mobileCtaBtn} onClick={(e) => scrollToSection(e, '#membership')}>Join Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
