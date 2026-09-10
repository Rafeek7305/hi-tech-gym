import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import styles from '../Contact.module.css';

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const mapEmbedUrl = `https://maps.google.com/maps?q=Hi-Tech%20Gym%20Nethaji%20Rd%20Engineers%20Colony%20Raja%20Nagar%20Melapalayam%20Tirunelveli%20Tamil%20Nadu%20627005&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=Hi-Tech+Gym+Nethaji+Rd+Engineers+Colony+Raja+Nagar+Melapalayam+Tirunelveli+Tamil+Nadu+627005`;

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} id="location-section" ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.centerHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionCategory}>OUR LOCATION</span>
          <h2 className={styles.sectionTitle}>Find <span>Us</span></h2>
          <p className={styles.sectionSubtitle}>
            Your next workout could be closer than you think. Visit our high-tech facility in Melapalayam.
          </p>
        </motion.div>

        <div className={styles.locationLayout}>
          {/* LEFT: MAP EMBED */}
          <motion.div
            className={styles.mapColumn}
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -35 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mapFrameWrapper}>
              <iframe
                title="Hi-Tech Gym Location Map"
                src={mapEmbedUrl}
                className={styles.mapIframe}
                loading="lazy"
                allowFullScreen
              />
              <div className={styles.mapOverlayBadge}>
                <MapPin size={16} className={styles.goldIcon} />
                <span>MELAPALAYAM, TIRUNELVELI</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: ADDRESS DETAILS */}
          <motion.div
            className={styles.locationDetailsColumn}
            initial={{ opacity: 0, x: 35 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 35 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.locationDetailCard}>
              <h3 className={styles.locationDetailTitle}>Hi-Tech Gym Tirunelveli</h3>
              <div className={styles.goldLine} />

              <div className={styles.locationInfoRow}>
                <MapPin size={22} className={styles.infoIcon} />
                <div>
                  <h4 className={styles.infoRowHeading}>Address</h4>
                  <p className={styles.infoRowText}>
                    Nethaji Rd, Engineers Colony, Raja Nagar,<br />
                    Melapalayam, Tirunelveli,<br />
                    Tamil Nadu 627005
                  </p>
                </div>
              </div>

              <div className={styles.locationInfoRow}>
                <Clock size={22} className={styles.infoIcon} />
                <div>
                  <h4 className={styles.infoRowHeading}>Daily Schedule</h4>
                  <p className={styles.infoRowText}>
                    Morning: 6:00 AM – 10:00 AM<br />
                    Evening: 5:00 PM – 9:00 PM
                  </p>
                </div>
              </div>

              <div className={styles.locationInfoRow}>
                <Phone size={22} className={styles.infoIcon} />
                <div>
                  <h4 className={styles.infoRowHeading}>Phone Contact</h4>
                  <p className={styles.infoRowText}>+91 97518 08071</p>
                </div>
              </div>

              <div className={styles.locationCtaWrapper}>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryBtn}
                >
                  <Navigation size={18} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
