import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Membership.module.css';

gsap.registerPlugin(ScrollTrigger);

// Animated Price Counter using requestAnimationFrame
const AnimatedPrice = ({ to, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const duration = 2000; // 2 seconds
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(easeProgress * to));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, to]);

  return <span className={styles.price}>{count}</span>;
};

const Membership = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const tiers = [
    {
      name: "Starter",
      price: 99,
      features: [
        "Full gym access during standard hours",
        "1 Group class per week",
        "Locker room access",
        "Fitness assessment"
      ],
      isCenter: false
    },
    {
      name: "Professional",
      price: 199,
      features: [
        "24/7 unlimited gym access",
        "Unlimited group classes",
        "1 Personal training session/mo",
        "Recovery Lounge access",
        "Custom nutrition plan"
      ],
      isCenter: true
    },
    {
      name: "Elite",
      price: 299,
      features: [
        "All Professional benefits",
        "4 Personal training sessions/mo",
        "Priority class booking",
        "Dedicated VIP locker",
        "Monthly deep tissue massage"
      ],
      isCenter: false
    }
  ];

  const stripItems = [
    "Free Trial",
    "Locker",
    "Personal Coach",
    "Nutrition Guide",
    "Recovery Zone"
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Trigger counter state
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

      // Small title
      tl.from(`.${styles.goldLabel}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0);

      // Main Heading
      tl.from(`.${styles.mainTitle}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.2);

      // Paragraph
      tl.from(`.${styles.luxuryDescription}`, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      }, 0.4);

      // Cards staggered
      tl.from(`.${styles.card}`, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out'
      }, 0.6);

      // Comparison Strip
      tl.from(`.${styles.comparisonStrip}`, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      }, 1.2);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.membershipSection} ref={sectionRef} id="membership">
      <div className={styles.container}>
        
        {/* HEADER */}
        <div className={styles.headerWrapper}>
          <div className={styles.goldLabel}>
            Membership
          </div>
          <h2 className={styles.mainTitle}>
            Choose Your Fitness Journey
          </h2>
          <p className={styles.luxuryDescription}>
            Select a tier that aligns with your ambitions. Every membership grants access to our world-class environment, with escalating benefits for those who demand more.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className={styles.cardsGrid}>
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`${styles.card} ${tier.isCenter ? styles.centerCard : ''}`}
            >
              {tier.isCenter && <div className={styles.popularBadge}>Most Popular</div>}
              
              <h3 className={styles.tierName}>{tier.name}</h3>
              
              <div className={styles.priceContainer}>
                <span className={styles.currency}>$</span>
                <AnimatedPrice to={tier.price} inView={isInView} />
                <span className={styles.period}>/ month</span>
              </div>
              
              <ul className={styles.featureList}>
                {tier.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={styles.joinBtn}>Join Now</button>
            </div>
          ))}
        </div>

        {/* COMPARISON STRIP */}
        <div className={styles.comparisonStrip}>
          {stripItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className={styles.stripItem}>
                <span className={styles.stripIcon}>✓</span>
                {item}
              </div>
              {index < stripItems.length - 1 && <div className={styles.stripDot}></div>}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Membership;
