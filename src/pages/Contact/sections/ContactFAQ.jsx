import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import styles from '../Contact.module.css';

const faqItems = [
  {
    id: 1,
    question: 'Is Hi-Tech Gym suitable for beginners?',
    answer: 'Yes, Hi-Tech Gym welcomes members of all fitness levels. Our environment is supportive, and our floor team can help you get comfortable with equipment and workout basics from your very first day.'
  },
  {
    id: 2,
    question: 'How can I learn more about the programs?',
    answer: 'You can explore our dedicated Programs page on our website or speak directly with our team at the reception desk during operating hours to discuss which approach fits your personal goals.'
  },
  {
    id: 3,
    question: 'Can I visit the gym before joining?',
    answer: 'Yes, you are welcome to visit our gym in Melapalayam to take a tour of the facility, check out our modern equipment, and experience our high-energy atmosphere.'
  },
  {
    id: 4,
    question: 'What should I bring for my first visit?',
    answer: 'For your first visit, bring comfortable workout attire, supportive athletic shoes, a personal water bottle, and a small workout towel.'
  },
  {
    id: 5,
    question: 'How can I contact the gym?',
    answer: 'You can call us at +91 97518 08071, chat with us on WhatsApp, send an email to contact@hitechgym.com, or submit an enquiry using the contact form on this page.'
  }
];

const ContactFAQ = () => {
  const [openId, setOpenId] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} id="contact-faq" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>CLEAR ANSWERS</span>
          <h2 className={styles.sectionTitle}>Common Questions</h2>
          <p className={styles.sectionSubtitle}>
            Find quick answers to common questions about visiting and contacting Hi-Tech Gym.
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

export default ContactFAQ;
