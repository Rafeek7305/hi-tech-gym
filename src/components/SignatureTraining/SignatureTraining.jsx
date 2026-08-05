import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SignatureTraining.module.css';

// Import Assets
import strengthImg from '../../assets/strength_training.png';
import functionalImg from '../../assets/functional_fitness.png';
import coachingImg from '../../assets/personal_coaching.png';
import recoveryImg from '../../assets/recovery_zone.png';

gsap.registerPlugin(ScrollTrigger);

// Counter Component using requestAnimationFrame (no framer-motion)
const AnimatedCounter = ({ from, to, duration = 2, suffix = "", inView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(easeProgress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <div className={styles.statValue}>
      <span>{count}</span>
      <span className={styles.statSuffix}>{suffix}</span>
    </div>
  );
};

const SignatureTraining = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const cardsData = [
    {
      title: "Strength Training",
      image: strengthImg,
      icon: "🏋️",
      description: "Push your limits with our elite free weights, custom racks, and top-tier resistance machines designed for maximum hypertrophic gains."
    },
    {
      title: "Functional Fitness",
      image: functionalImg,
      icon: "⚡",
      description: "Enhance your agility, core strength, and stamina in our dedicated functional zones featuring kettlebells, battle ropes, and sleds."
    },
    {
      title: "Personal Coaching",
      image: coachingImg,
      icon: "🎯",
      description: "Achieve bespoke results with our certified elite trainers who craft personalized, scientifically-backed programs tailored to your unique goals."
    },
    {
      title: "Recovery Zone",
      image: recoveryImg,
      icon: "🧘",
      description: "Rejuvenate in our luxury spa, featuring cold plunges, infrared saunas, and sports massage therapy to accelerate muscle recovery."
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => setIsInView(true)
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });

      // TEXT ANIMATION
      // Small title -> Slides from left, Opacity 0->1, Duration 0.8s
      tl.from(`.${styles.goldenSubtitle}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0);

      // Main Heading -> Delay 0.2s
      tl.from(`.${styles.mainTitle}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.2);

      // Paragraph -> Delay 0.4s
      tl.from(`.${styles.luxuryDescription}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.4);

      // Marquee container fade in
      tl.from(`.${styles.marqueeContainer}`, {
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      }, 0.6);

      // Stats stagger
      tl.from(`.${styles.statItem}`, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out'
      }, 0.8);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.signatureSection} ref={sectionRef} id="signature">
      <div className={styles.container}>
        
        {/* TOP HEADER SECTION */}
        <div className={styles.headerWrapper}>
          <span className={styles.goldenSubtitle}>
            WHY MEMBERS CHOOSE US
          </span>
          <h2 className={styles.mainTitle}>
            Train Beyond Limits
          </h2>
          <p className={styles.luxuryDescription}>
            We offer more than just equipment; we provide a comprehensive fitness ecosystem. Our meticulously designed spaces ensure that every aspect of your training and recovery is executed with precision and luxury.
          </p>
        </div>
      </div>

      {/* CARDS MARQUEE - Placed outside container for true full width */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[...cardsData, ...cardsData, ...cardsData, ...cardsData].map((card, index) => (
              <div 
                key={index} 
                className={styles.card}
              >
                <div className={styles.cardInner}>
                  <img src={card.image} alt={card.title} className={styles.cardImage} />
                  <div className={styles.overlay}></div>
                  <div className={styles.cardBorder}></div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.cardIcon}>
                      {card.icon}
                    </div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className={styles.container}>
        {/* STATS SECTION */}
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <AnimatedCounter from={0} to={500} duration={2.5} suffix="+" inView={isInView} />
            <span className={styles.statLabel}>Happy Members</span>
          </div>
          <div className={styles.statItem}>
            <AnimatedCounter from={0} to={12} duration={2.5} inView={isInView} />
            <span className={styles.statLabel}>Professional Trainers</span>
          </div>
          <div className={styles.statItem}>
            <AnimatedCounter from={0} to={98} duration={2.5} suffix="%" inView={isInView} />
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.statItem}>
            <AnimatedCounter from={0} to={15} duration={2.5} suffix="+" inView={isInView} />
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureTraining;
