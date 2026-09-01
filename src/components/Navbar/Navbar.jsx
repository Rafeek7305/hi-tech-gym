import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import logoImg from '../../assets/logo3.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (e, path, sectionId) => {
    e.preventDefault();
    if (mobileMenuOpen) setMobileMenuOpen(false);

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
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={(e) => handleNavClick(e, '/', null)} style={{ cursor: 'pointer' }}>
        <img src={logoImg} alt="Gym Logo" className={styles.logoImg} />
      </div>

      <nav className={styles.navLinks}>
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/', null)}
          className={`${styles.navLink} ${location.pathname === '/' ? styles.activeLink : ''}`}
        >
          Home
        </a>
        <a
          href="/about"
          onClick={(e) => handleNavClick(e, '/about', null)}
          className={`${styles.navLink} ${location.pathname === '/about' ? styles.activeLink : ''}`}
        >
          About
        </a>
        <a
          href="/programs"
          onClick={(e) => handleNavClick(e, '/programs', null)}
          className={`${styles.navLink} ${location.pathname === '/programs' ? styles.activeLink : ''}`}
        >
          Programs
        </a>
        <a
          href="/#membership"
          onClick={(e) => handleNavClick(e, '/', '#membership')}
          className={styles.navLink}
        >
          Membership
        </a>
        <a
          href="/contact"
          onClick={(e) => handleNavClick(e, '/contact', null)}
          className={`${styles.navLink} ${location.pathname === '/contact' ? styles.activeLink : ''}`}
        >
          Contact
        </a>
      </nav>

      <button className={styles.ctaBtn} onClick={(e) => handleNavClick(e, '/', '#membership')}>
        Join Now
      </button>

      <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle Navigation Menu">
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          <a href="/" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/', null)}>Home</a>
          <a href="/about" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/about', null)}>About</a>
          <a href="/programs" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/programs', null)}>Programs</a>
          <a href="/#membership" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/', '#membership')}>Membership</a>
          <a href="/contact" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '/contact', null)}>Contact</a>
          <button className={styles.mobileCtaBtn} onClick={(e) => handleNavClick(e, '/', '#membership')}>Join Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
