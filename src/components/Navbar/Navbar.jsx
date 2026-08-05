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

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Gym Logo" style={{ height: '90px', width: 'auto', objectFit: 'contain', transform: 'scale(1.2)', transformOrigin: 'left center' }} />
      </div>

      <nav className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/#about" className={styles.navLink}>About</Link>
        <Link to="/#plans" className={styles.navLink}>Membership</Link>
        <Link to="/#trainers" className={styles.navLink}>Trainers</Link>
        <Link to="/#facilities" className={styles.navLink}>Facilities</Link>
      </nav>

      <button className={styles.ctaBtn}>
        Join Now
      </button>

      <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
};

export default Navbar;
