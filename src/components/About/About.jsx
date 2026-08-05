import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

// Importing the generated images from assets
import img1 from '../../assets/gym_workout_1.png';
import img2 from '../../assets/gym_workout_2.png';
import img3 from '../../assets/gym_workout_3.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a master timeline for this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true, // Animation should happen only once
        }
      });

      // TEXT ANIMATION
      // Small title
      tl.from(`.${styles.goldenLabel}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0);

      // Main Heading
      tl.from(`.${styles.sectionTitle}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.2); // Slight delay 0.2s

      // Paragraph
      tl.from(`.${styles.sectionDescription}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.4); // Delay 0.4s

      // List Items (can stagger from left)
      tl.from(`.${styles.featureRow}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out'
      }, 0.4);

      // Buttons (Fade Up, Small Scale, Delay 0.6s)
      tl.from(`.${styles.discoverButton}`, {
        y: 20,
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.6);

      // IMAGE ANIMATION
      // Slide from RIGHT, Scale 1.08 -> 1, Opacity 0 -> 1, Duration 1 second, Ease power4.out
      tl.from(`.${styles.collageImage}`, {
        x: 50,
        scale: 1.08,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out'
      }, 0);

      // Floating border (Fade in then float)
      tl.from(`.${styles.goldBorder}`, {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: 'power4.out'
      }, 0);

      gsap.to(`.${styles.goldBorder} > div`, {
        y: -15,
        rotation: -1,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });

    }, containerRef); // Scope to container

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className={styles.aboutSection} ref={containerRef}>
      <div className={styles.container}>
        
        {/* LEFT SIDE: Image Collage */}
        <div className={styles.imageColumn}>
          <div className={styles.collageContainer}>
            <div className={styles.goldBorder}>
              <div style={{width: '100%', height: '100%'}} />
            </div>
            
            <img 
              src={img3} 
              alt="Gym Equipment" 
              className={`${styles.collageImage} ${styles.image3}`} 
            />
            <img 
              src={img1} 
              alt="Weightlifting" 
              className={`${styles.collageImage} ${styles.image1}`} 
            />
            <img 
              src={img2} 
              alt="Pullups" 
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

          <button className={styles.discoverButton}>
            Discover More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
