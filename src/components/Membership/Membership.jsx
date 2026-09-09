import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Membership.module.css';

gsap.registerPlugin(ScrollTrigger);

// Animated Price Counter Component using GSAP
const AnimatedPrice = ({ to }) => {
  const nodeRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: nodeRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          let obj = { val: 0 };
          gsap.to(obj, {
            val: to,
            duration: 2,
            ease: "power4.out",
            onUpdate: () => {
              if (nodeRef.current) {
                nodeRef.current.innerText = Math.round(obj.val);
              }
            }
          });
        }
      });
    }, nodeRef);
    return () => ctx.revert();
  }, [to]);

  return <span className={styles.price} ref={nodeRef}>0</span>;
};

const Membership = () => {
  const sectionRef = useRef(null);

  const tiers = [
    {
      name: "Starter",
      price: 600,
      currency: "₹",
      period: "month",
      features: [
        { text: "Fully access to non A/c room equipments", included: true },
        { text: "User friendly environment", included: true },
        { text: "No personal training", included: false },
        { text: "No advanced equipments", included: false }
      ],
      isCenter: false
    },
    {
      name: "Professional",
      price: 1500,
      currency: "₹",
      period: "month",
      features: [
        { text: "A/c environment", included: true },
        { text: "Personal training", included: true },
        { text: "Advance equipments", included: true },
        { text: "Diet plans", included: true },
        { text: "24/7 support on whatsapp chats", included: true }
      ],
      isCenter: true
    },
    {
      name: "Elite",
      price: 12000,
      currency: "₹",
      period: "yearly plan",
      features: [
        { text: "All Professional benefits", included: true },
        { text: "4 Personal training sessions/mo", included: true },
        { text: "Priority class booking", included: true },
        { text: "Dedicated VIP locker", included: true },
        { text: "Monthly deep tissue massage", included: true }
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });

      // HEADER TEXT ANIMATIONS (Slide from left)
      tl.from(`.${styles.goldLabel}`, {
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

      // CARDS ANIMATION (Move upward, Opacity 0 -> 1, Stagger 0.15s)
      tl.from(`.${styles.card}`, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0.6);

      // BUTTONS (Fade Up, small scale)
      tl.from(`.${styles.joinBtn}`, {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power4.out',
        clearProps: 'all'
      }, 1);

      // COMPARISON STRIP
      tl.from(`.${styles.comparisonStrip}`, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power4.out',
        clearProps: 'all'
      }, 0.8);

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
            <div key={index} className={`${styles.card} ${tier.isCenter ? styles.centerCard : ''}`}>
              {tier.isCenter && <div className={styles.popularBadge}>Most Popular</div>}
              
              <h3 className={styles.tierName}>{tier.name}</h3>
              
              <div className={styles.priceContainer}>
                <span className={styles.currency}>{tier.currency || '$'}</span>
                <AnimatedPrice to={tier.price} />
                <span className={styles.period}>/ {tier.period || 'month'}</span>
              </div>
              
              <ul className={styles.featureList}>
                {tier.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem} style={{ opacity: feature.included ? 1 : 0.5 }}>
                    <span className={feature.included ? styles.checkIcon : styles.crossIcon}>
                      {feature.included ? '✓' : '✗'}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <button
                className={styles.joinBtn}
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Join Now
              </button>
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
