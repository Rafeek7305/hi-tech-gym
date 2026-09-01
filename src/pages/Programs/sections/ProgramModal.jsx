import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from '../Programs.module.css';

const ProgramModal = ({ program, onClose }) => {
  const navigate = useNavigate();

  if (!program) return null;

  const handleStartProgram = () => {
    onClose();
    navigate('/#membership');
    setTimeout(() => {
      const el = document.getElementById('membership');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <AnimatePresence>
      <div className={styles.modalOverlay} onClick={onClose}>
        <motion.div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close Modal">
            <X size={20} />
          </button>

          <div className={styles.modalImageHeader}>
            <img src={program.image} alt={program.name} className={styles.modalHeaderImg} />
            <div className={styles.modalHeaderOverlay} />
            <div className={styles.modalBadgeGroup}>
              <span className={styles.modalCatBadge}>{program.category}</span>
              <span className={styles.modalDiffBadge}>{program.difficulty}</span>
            </div>
          </div>

          <div className={styles.modalBody}>
            <h2 className={styles.modalTitle}>{program.name}</h2>
            <p className={styles.modalDescription}>{program.description}</p>

            <div className={styles.modalSectionBox}>
              <h4 className={styles.modalSectionHeading}>Program Highlights</h4>
              <div className={styles.modalHighlightsList}>
                {program.features.map((feat, idx) => (
                  <div key={idx} className={styles.modalHighlightItem}>
                    <CheckCircle2 size={16} className={styles.goldCheck} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.primaryBtn} onClick={handleStartProgram}>
                <span>Start This Program</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProgramModal;
