import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Facilities.module.css';

// Import Assets
import strengthImg from '../../assets/facility_strength.png';
import functionalImg from '../../assets/facility_functional.png';
import cardioImg from '../../assets/facility_cardio.png';
import recoveryImg from '../../assets/facility_recovery_v2.png';

gsap.registerPlugin(ScrollTrigger);

const facilitiesData = [
  {
    id: 'strength',
    name: "Luxury Strength Zone",
    image: strengthImg,
    description: "Equipped with the world's most advanced plate-loaded and selectorized machines. Custom-milled dumbbells and competition-grade power racks ensure you train like an elite athlete.",
    features: [
      "Custom Hammer Strength",
      "Calibrated Eleiko Plates",
      "Multi-station Cable Jungles"
    ]
  },
  {
    id: 'functional',
    name: "Functional Training",
    image: functionalImg,
    description: "A sprawling indoor turf arena designed for dynamic movement. Featuring premium kettlebells, plyo boxes, and custom rig systems for full-body conditioning.",
    features: [
      "30-Meter Sprint Track",
      "Concept2 Ergs & SkiErgs",
      "Suspension Training Rigs"
    ]
  },
  {
    id: 'cardio',
    name: "Cardio Arena",
    image: cardioImg,
    description: "Elevate your heart rate while overlooking the city skyline. Our cardio suite is fitted with state-of-the-art machines featuring interactive screens and seamless device integration.",
    features: [
      "Woodway Treadmills",
      "Peloton Bikes",
      "StairMaster FreeClimbers"
    ]
  },
  {
    id: 'recovery',
    name: "Recovery Lounge",
    image: recoveryImg,
    description: "Accelerate your recovery in our world-class spa environment. Alternate between extreme temperatures to reduce inflammation and optimize your body's healing processes.",
    features: [
      "Ozone Cold Plunge Pools",
      "Full-Spectrum Saunas",
      "Compression Therapy"
    ]
  }
];

const Facilities = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  // Framer Motion Header Variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  useEffect(() => {
    // Header entry animation
    let ctx = gsap.context(() => {
      gsap.from(`.${styles.sectionHeader}`, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power4.out',
        clearProps: 'all'
      });
    }, sectionRef);

    // Apply horizontal scroll animation on all screen sizes
    const mm = gsap.matchMedia();

    mm.add("all", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const bgImages = gsap.utils.toArray(`.${styles.bgImage}`);

      // Calculate how far to scroll horizontally
      // We want to move the track to the left by (track width - viewport width)
      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 100); // 100px buffer
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "center center",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      return () => {
        tween.kill();
      };
    });

    // Parallax for Background Images - DESKTOP ONLY
    mm.add("(min-width: 992px)", () => {
      const bgImages = gsap.utils.toArray(`.${styles.bgImage}`);
      const track = trackRef.current;
      
      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 100);
      };

      const parallaxTweens = bgImages.map((img) => {
        return gsap.to(img, {
          xPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "center center",
            end: () => `+=${getScrollAmount() * -1}`,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
      });

      return () => {
        parallaxTweens.forEach(t => t.kill());
      };
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className={styles.facilitiesSection} ref={sectionRef} id="facilities">
      <div className={styles.container}>
        
        {/* HEADER */}
        <div className={styles.sectionHeader}>
          <div className={styles.goldLabel}>Premium Facilities</div>
          <h2 className={styles.mainTitle}>Everything You Need To Become Your Best.</h2>
          <p className={styles.headerDescription}>
            Explore our meticulously curated zones designed to provide a comprehensive, elite fitness experience.
          </p>
        </div>

        {/* HORIZONTAL SCROLL WRAPPER */}
        <div className={styles.scrollWrapper} ref={wrapperRef}>
          <div className={styles.horizontalTrack} ref={trackRef}>
            
            {facilitiesData.map((facility) => (
              <div className={styles.facilityCard} key={facility.id}>
                
                {/* Background Image & Overlay */}
                <div className={styles.imageContainer}>
                  <img src={facility.image} alt={facility.name} className={styles.bgImage} />
                  <div className={styles.overlay}></div>
                </div>

                {/* Content Overlay */}
                <div className={styles.contentContainer}>
                  <h3 className={styles.facilityName}>
                    {facility.name.split(' ').map((word, index) => {
                       if (['Strength', 'Functional', 'Cardio', 'Recovery'].includes(word)) {
                         return <span key={index} style={{ color: 'var(--color-primary)' }}>{word} </span>;
                       }
                       return word + ' ';
                    })}
                  </h3>
                  <div className={styles.goldenDivider} />
                  <p className={styles.facilityDescription}>{facility.description}</p>
                  
                  <ul className={styles.featureList}>
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <div className={styles.featureLeft}>
                          <span className={styles.featureIcon}>✦</span>
                          {feature}
                        </div>
                        <span className={styles.featureArrow}>→</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={styles.exploreBtn}>Explore</button>
                </div>
                
              </div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
