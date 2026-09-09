import { useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

import img1 from '../../assets/gym_workout_1.webp';
import img2 from '../../assets/gym_workout_2.webp';
import img3 from '../../assets/gym_workout_3.webp';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });

      // TEXT ANIMATIONS (Slides from RIGHT since it's on the right side)
      tl.from(`.${styles.goldenLabel}`, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0);

      tl.from(`.${styles.sectionTitle}`, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0.2);

      tl.from(`.${styles.sectionDescription}`, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0.4);

      tl.from(`.${styles.featureRow}`, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0.4);

      // BUTTON ANIMATION (Fade Up, Small Scale)
      tl.from(`.${styles.discoverButton}`, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.8,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0.6);

      // IMAGE ANIMATIONS (Slide from LEFT since they are on the left side)
      tl.from(`.${styles.collageImage}`, {
        opacity: 0,
        x: -50,
        scale: 1.08,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0);

      // GOLD BORDER (Floating animation loop)
      gsap.to(`.${styles.goldBorder}`, {
        y: -15,
        rotate: 1,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* LEFT SIDE: Image Collage */}
        <div className={styles.imageColumn}>
          <div className={styles.collageContainer}>
            <div className={styles.goldBorder}>
              <div style={{width: '100%', height: '100%'}} />
            </div>
            
            <img 
              src={img3} 
              alt="Premium weight training equipment and dumbbells at Hi-Tech Gym" 
              loading="lazy"
              decoding="async"
              className={`${styles.collageImage} ${styles.image3}`} 
            />
            <img 
              src={img1} 
              alt="Athlete performing heavy barbell strength workout at Hi-Tech Gym" 
              loading="lazy"
              decoding="async"
              className={`${styles.collageImage} ${styles.image1}`} 
            />
            <img 
              src={img2} 
              alt="Functional fitness and pullup training zone at Hi-Tech Gym" 
              loading="lazy"
              decoding="async"
              className={`${styles.collageImage} ${styles.image2}`} 
            />
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className={styles.contentColumn}>
          <div className={styles.goldenLabel}>
            WHO WE ARE
          </div>
          
          <h2 className={styles.sectionTitle}>
            More Than A Gym.<br />
            <span>A Lifestyle Built For Champions.</span>
          </h2>

          <p className={styles.sectionDescription}>
            Welcome to a new era of fitness. We blend cutting-edge equipment with a premium atmosphere to create an environment where excellence is the only option. Achieve your goals surrounded by luxury and guided by the industry's elite professionals.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureRow}>
              <div className={styles.featureIcon}>✓</div>
              <span className={styles.featureText}>Elite Equipment</span>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureIcon}>✓</div>
              <span className={styles.featureText}>Certified Coaches</span>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.featureIcon}>✓</div>
              <span className={styles.featureText}>Personal Training</span>
            </div>
          </div>

          <button className={styles.discoverButton} onClick={() => navigate('/about')}>
            Discover More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
