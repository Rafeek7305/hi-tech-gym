import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import styles from '../Programs.module.css';

const faqItems = [
  {
    id: 1,
    question: 'Which program is right for a beginner?',
    answer: 'If you are new to training, General Fitness or beginner-focused Strength Training is a great place to start. These approaches focus on building fundamental movement patterns, learning proper form, and creating a healthy, consistent routine.'
  },
  {
    id: 2,
    question: 'Can I change my training goal later?',
    answer: 'Absolutely. Fitness is an evolving journey. You can adjust your focus—for example, switching from fat loss to muscle building or strength—whenever your goals and priorities change.'
  },
  {
    id: 3,
    question: 'Do I need previous gym experience?',
    answer: 'No previous experience is required. Our facilities and programs are designed to accommodate individuals at all stages of their fitness journey, from complete beginners to experienced lifters.'
  },
  {
    id: 4,
    question: 'How often should I train?',
    answer: 'For most members, training 3 to 4 days a week provides an effective balance of progress and recovery. Consistency over time is much more important than trying to train every single day.'
  },
  {
    id: 5,
    question: 'Can I get guidance with my workouts?',
    answer: 'Yes. Whether through dedicated Personal Training or general orientation on the gym floor, guidance is available to help you understand exercise technique and structure your workouts safely.'
  }
];

const ProgramFAQ = () => {
  const [openId, setOpenId] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>QUESTIONS & ANSWERS</span>
          <h2 className={styles.sectionTitle}>Frequently Asked <span>Questions</span></h2>
          <p className={styles.sectionSubtitle}>
            Clear information to help you get started with confidence.
          </p>
        </motion.div>

        <div className={styles.faqWrapper}>
          {faqItems.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  className={styles.faqQuestionBtn}
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.faqQuestionLeft}>
                    <HelpCircle size={18} className={styles.faqIcon} />
                    <span>{item.question}</span>
                  </div>
                  <div className={styles.faqToggleIcon}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className={styles.faqAnswerBody}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramFAQ;
