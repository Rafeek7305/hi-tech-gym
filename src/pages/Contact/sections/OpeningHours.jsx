import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, CalendarCheck } from 'lucide-react';
import styles from '../Contact.module.css';

const daysSchedule = [
  { day: 'Monday', morning: '6:00 AM – 10:00 AM', evening: '5:00 PM – 9:00 PM', dayIdx: 1 },
  { day: 'Tuesday', morning: '6:00 AM – 10:00 AM', evening: '5:00 PM – 9:00 PM', dayIdx: 2 },
  { day: 'Wednesday', morning: '6:00 AM – 10:00 AM', evening: '5:00 PM – 9:00 PM', dayIdx: 3 },
  { day: 'Thursday', morning: '6:00 AM – 10:00 AM', evening: '5:00 PM – 9:00 PM', dayIdx: 4 },
  { day: 'Friday', morning: '6:00 AM – 10:00 AM', evening: '5:00 PM – 9:00 PM', dayIdx: 5 },
  { day: 'Saturday', morning: '6:00 AM – 10:00 AM', evening: '5:00 PM – 9:00 PM', dayIdx: 6 },
  { day: 'Sunday', morning: '6:00 AM – 10:00 AM', evening: '5:00 PM – 9:00 PM', dayIdx: 0 }
];

const OpeningHours = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });
  const todayIdx = new Date().getDay();

  return (
    <section className={styles.section} id="opening-hours" ref={ref}>
      <div className={styles.container}>
        <div className={styles.hoursCardWrapper}>
          <motion.div
            className={styles.hoursCard}
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.hoursHeader}>
              <div className={styles.hoursHeaderLeft}>
                <div className={styles.hoursIconBox}>
                  <Clock size={24} />
                </div>
                <div>
                  <span className={styles.sectionCategory}>TRAINING SCHEDULE</span>
                  <h2 className={styles.hoursTitle}>When To Visit</h2>
                </div>
              </div>
              <div className={styles.openDailyTag}>
                <CalendarCheck size={16} />
                <span>OPEN DAILY</span>
              </div>
            </div>

            <div className={styles.hoursList}>
              {daysSchedule.map((item) => {
                const isToday = item.dayIdx === todayIdx;
                return (
                  <div
                    key={item.day}
                    className={`${styles.hoursRow} ${isToday ? styles.hoursRowToday : ''}`}
                  >
                    <div className={styles.dayNameCell}>
                      <span className={styles.dayName}>{item.day}</span>
                      {isToday && <span className={styles.todayIndicator}>TODAY</span>}
                    </div>
                    <div className={styles.hoursBadgesGroup}>
                      <span className={styles.sessionBadge}>{item.morning}</span>
                      <span className={styles.sessionDivider}>•</span>
                      <span className={styles.sessionBadge}>{item.evening}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
