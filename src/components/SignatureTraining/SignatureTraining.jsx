import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SignatureTraining.module.css';

import strengthImg from '../../assets/strength_training.png';
import functionalImg from '../../assets/functional_fitness.png';
import coachingImg from '../../assets/personal_coaching.png';
import recoveryImg from '../../assets/recovery_zone.png';

gsap.registerPlugin(ScrollTrigger);

// Custom Counter Hook for the numbers
const AnimatedCounter = ({ from = 0, to, duration = 2.5, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: nodeRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          let obj = { val: from };
          gsap.to(obj, {
            val: to,
            duration: duration,
            ease: "power2.out",
            onUpdate: () => setCount(Math.round(obj.val))
          });
        }
      });
    }, nodeRef);
    return () => ctx.revert();
  }, [from, to, duration]);

  return (
    <div className={styles.statValue} ref={nodeRef}>
      <span>{count}</span>
      <span className={styles.statSuffix}>{suffix}</span>
    </div>
  );
};

const SignatureTraining = () => {
  const sectionRef = useRef(null);

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });

      // TEXT ANIMATIONS
      tl.from(`.${styles.goldenSubtitle}`, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power4.out'
      }, 0);

      tl.from(`.${styles.mainTitle}`, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.2);

      tl.from(`.${styles.luxuryDescription}`, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.4);

      // MARQUEE CARDS ANIMATION (Staggered 1 by 1)
      tl.from(`.${styles.card}`, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1, // Quick stagger for each card
        ease: 'power4.out',
        clearProps: 'all'
      }, 0.6);

      // STATS ANIMATION
      tl.from(`.${styles.statItem}`, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0.6);

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
              <div key={index} className={styles.card}>
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
            <AnimatedCounter from={0} to={100} duration={2.5} suffix="+" />
            <span className={styles.statLabel}>Happy Members</span>
          </div>
          <div className={styles.statItem}>
            <AnimatedCounter from={0} to={100} duration={2.5} suffix="%" />
            <span className={styles.statLabel}>Friendly Environment</span>
          </div>
          <div className={styles.statItem}>
            <AnimatedCounter from={0} to={98} duration={2.5} suffix="%" />
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.statItem}>
            <AnimatedCounter from={0} to={10} duration={2.5} suffix="+" />
            <span className={styles.statLabel}>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureTraining;
