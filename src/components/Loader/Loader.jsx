import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';
import logoImg from '../../assets/logo3.png';
import introAudio from "../../assets/audio/Yeah Buddy Light Weight Baby Ronnie Coleman Motivation Ronnie Coleman Golden Words Edit'Z - Edit'Z (128k) (mp3cut.net).mp3";

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    let fallbackInterval;
    let isMounted = true;
    
    audioRef.current = new Audio(introAudio);
    audioRef.current.preload = "auto";
    
    const triggerFinish = () => {
      setIsFinishing(true);
      setTimeout(() => {
        if (isMounted) setLoading(false);
      }, 1100); 
    };

    const attemptPlay = async () => {
      if (isPlayingRef.current) return;
      try {
        await audioRef.current.play();
        isPlayingRef.current = true;
        
        // If it was using fallback, stop fallback and use audio duration
        if (fallbackInterval) {
          clearInterval(fallbackInterval);
        }

        audioRef.current.ontimeupdate = () => {
          if (!isMounted) return;
          const current = audioRef.current.currentTime;
          const duration = audioRef.current.duration;
          if (duration > 0) {
            setProgress((current / duration) * 100);
          }
        };
        
        audioRef.current.onended = () => {
          if (!isMounted) return;
          setProgress(100);
          triggerFinish();
        };
      } catch (err) {
        console.warn("Autoplay blocked by browser policy.");
        if (!fallbackInterval) {
          let simulatedProgress = 0;
          fallbackInterval = setInterval(() => {
            simulatedProgress += 2;
            if (!isMounted) return;
            
            if (simulatedProgress >= 100) {
              clearInterval(fallbackInterval);
              setProgress(100);
              triggerFinish();
            } else {
              setProgress(simulatedProgress);
            }
          }, 80);
        }
      }
    };

    attemptPlay();

    // Global listener to force play if user clicks ANYWHERE
    const forcePlayOnInteraction = () => {
      if (!isPlayingRef.current) {
        attemptPlay();
      }
    };
    
    window.addEventListener('click', forcePlayOnInteraction);
    window.addEventListener('keydown', forcePlayOnInteraction);

    return () => {
      isMounted = false;
      window.removeEventListener('click', forcePlayOnInteraction);
      window.removeEventListener('keydown', forcePlayOnInteraction);
      if (fallbackInterval) clearInterval(fallbackInterval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.loaderContainer}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
      >
        <motion.div 
          className={styles.logo}
          animate={isFinishing ? { scale: 1.15, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={logoImg} alt="Gym Logo" style={{ height: '200px', width: 'auto', objectFit: 'contain', mixBlendMode: 'screen' }} />
        </motion.div>
        
        <motion.div 
          className={styles.progressWrapper}
          animate={isFinishing ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.progressBarContainer}>
            <div 
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={styles.percentageText}>
            {Math.min(100, Math.round(progress))}%
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
