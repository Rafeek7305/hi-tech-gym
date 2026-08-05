import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';
import logoImg from '../../assets/logo3.png';
import introAudio from "../../assets/audio/Yeah Buddy Light Weight Baby Ronnie Coleman Motivation Ronnie Coleman Golden Words Edit'Z - Edit'Z (128k) (mp3cut.net).mp3";

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    
    // 1. Initialize HTMLAudioElement
    const audio = new Audio(introAudio);
    audio.preload = "auto";
    audio.volume = 1.0;
    audioRef.current = audio;
    
    // Function to handle the transition to the Hero section
    const triggerFinish = () => {
      setIsFinishing(true);
      setTimeout(() => {
        if (isMounted) setLoading(false);
      }, 1100); 
    };

    // Attach listeners for progress sync and completion
    audio.ontimeupdate = () => {
      if (!isMounted) return;
      const current = audio.currentTime;
      const duration = audio.duration;
      // 5. Synchronize the loader progress with the audio
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    };
    
    audio.onended = () => {
      if (!isMounted) return;
      setProgress(100);
      // 5. Reveal the Hero section after the audio ends
      triggerFinish();
    };

    // 4. Handle autoplay restrictions gracefully
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        isPlayingRef.current = true;
      } catch (err) {
        // 6. If autoplay is blocked: Do NOT throw errors, show overlay
        console.warn("Autoplay blocked by browser policy. Awaiting user interaction.");
        if (isMounted) {
          setShowOverlay(true);
        }
      }
    };

    // 1. Attempt to play audio when Loader starts
    attemptAutoplay();

    return () => {
      // 8. Stop and clean up the audio on component unmount
      isMounted = false;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Clear source to free memory
        audioRef.current = null;
      }
    };
  }, [setLoading]);

  // 6. After the first click: Play intro audio, hide overlay, continue animation
  const handleOverlayClick = () => {
    if (audioRef.current && !isPlayingRef.current) {
      audioRef.current.play().then(() => {
        isPlayingRef.current = true;
        setShowOverlay(false);
      }).catch((err) => {
        console.warn("Manual play failed:", err);
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.loaderContainer}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
      >
        {/* INTERACTION OVERLAY */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div 
              className={styles.interactionOverlay}
              onClick={handleOverlayClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.overlayText}>
                Tap anywhere to begin your workout.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* EXISTING ANIMATIONS */}
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
