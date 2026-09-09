import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import styles from '../Contact.module.css';

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-15%' });

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Simulate sending enquiry
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: 'General Enquiry',
        message: ''
      });
    }, 1500);
  };

  return (
    <section className={`${styles.section} ${styles.darkBgSection}`} id="contact-form" ref={ref}>
      <div className={styles.container}>
        <div className={styles.formLayout}>
          {/* LEFT SIDE: HEADING & BRAND CONTENT */}
          <motion.div
            className={styles.formContentColumn}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.sectionCategory}>SEND A MESSAGE</span>
            <h2 className={styles.formTitle}>Have A Question?</h2>
            <div className={styles.goldLine} />

            <p className={styles.formLeadText}>
              Tell us what you need and our team can help you find the right direction.
            </p>

            <div className={styles.formPillars}>
              <div className={styles.formPillarItem}>
                <div className={styles.pillarDot} />
                <span>Quick response from our gym management team</span>
              </div>
              <div className={styles.formPillarItem}>
                <div className={styles.pillarDot} />
                <span>No pressure guidance on membership and programs</span>
              </div>
              <div className={styles.formPillarItem}>
                <div className={styles.pillarDot} />
                <span>Custom advice tailored to your fitness goals</span>
              </div>
            </div>

            <div className={styles.directContactNote}>
              <p>Prefer direct calling?</p>
              <a href="tel:+919751808071" className={styles.notePhoneLink}>
                Call +91 97518 08071
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: PREMIUM FORM CARD */}
          <motion.div
            className={styles.formCardColumn}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.formCard}>
              {status === 'success' ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={56} className={styles.successIcon} />
                  <h3 className={styles.statusHeading}>Message Sent Successfully</h3>
                  <p className={styles.statusText}>
                    Thank you for reaching out! Our team will get back to you shortly.
                  </p>
                  <button
                    className={styles.primaryBtn}
                    onClick={() => setStatus('idle')}
                    style={{ marginTop: '1.5rem' }}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.formGrid} noValidate>
                  {/* FULL NAME */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="fullName" className={styles.fieldLabel}>
                      Full Name <span className={styles.requiredStar}>*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      aria-required="true"
                      aria-invalid={errors.fullName ? "true" : "false"}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`${styles.textInput} ${errors.fullName ? styles.inputError : ''}`}
                    />
                    {errors.fullName && <span id="fullName-error" className={styles.errorText} role="alert">{errors.fullName}</span>}
                  </div>

                  {/* PHONE NUMBER */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="phone" className={styles.fieldLabel}>
                      Phone Number <span className={styles.requiredStar}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 97518 08071"
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`${styles.textInput} ${errors.phone ? styles.inputError : ''}`}
                    />
                    {errors.phone && <span id="phone-error" className={styles.errorText} role="alert">{errors.phone}</span>}
                  </div>

                  {/* EMAIL ADDRESS */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="email" className={styles.fieldLabel}>
                      Email Address <span className={styles.optionalTag}>(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`${styles.textInput} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && <span id="email-error" className={styles.errorText} role="alert">{errors.email}</span>}
                  </div>

                  {/* SUBJECT SELECT */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="subject" className={styles.fieldLabel}>
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.selectInput}
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Membership Plans">Membership Plans</option>
                      <option value="Training Programs">Training Programs</option>
                      <option value="Personal Coaching">Personal Coaching</option>
                      <option value="Visit & Facilities">Visit & Facilities</option>
                    </select>
                  </div>

                  {/* MESSAGE TEXTAREA */}
                  <div className={`${styles.fieldGroup} ${styles.fullWidthField}`}>
                    <label htmlFor="message" className={styles.fieldLabel}>
                      Message <span className={styles.requiredStar}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you on your fitness journey?"
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`${styles.textareaInput} ${errors.message ? styles.inputError : ''}`}
                    />
                    {errors.message && <span id="message-error" className={styles.errorText} role="alert">{errors.message}</span>}
                  </div>

                  {status === 'error' && (
                    <div className={styles.formErrorNotice} role="alert">
                      <AlertCircle size={18} />
                      <span>Something went wrong. Please try again or call us directly.</span>
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <div className={styles.fullWidthField}>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={status === 'sending'}
                      aria-busy={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={18} className={styles.spinnerIcon} />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
