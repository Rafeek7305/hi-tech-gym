import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Stats.module.css';

// Custom Counter Hook for the numbers
const Counter = ({ from = 0, to, duration = 2, inView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span>{count}</span>;
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const statsData = [
    { value: 500, suffix: '+', label: 'HAPPY MEMBERS' },
    { value: 12, suffix: '', label: 'PROFESSIONAL TRAINERS' },
    { value: 98, suffix: '%', label: 'CLIENT SATISFACTION' },
    { value: 15, suffix: '+', label: 'YEARS EXPERIENCE' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  return (
    <section className={styles.statsSection} ref={ref}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {statsData.map((stat, index) => (
          <motion.div key={index} className={styles.statCard} variants={itemVariants}>
            <div className={styles.statNumber}>
              <Counter to={stat.value} inView={isInView} />
              <span className={styles.suffix}>{stat.suffix}</span>
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
