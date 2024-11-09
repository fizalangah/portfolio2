

"use client";
import { useState } from 'react';
import React from 'react';
import styles from './page.module.css';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Main content */}
      <section className={`${styles.mainSection} ${isModalOpen ? styles.blur : ''}`}>

        
        {!isModalOpen && (
          <div className={styles.introContent}>
            <h2>Get In Touch</h2>
            <p>
              I'm currently open for new opportunities. Feel free to reach out!
            </p>
            <button onClick={() => setIsModalOpen(true)} className={styles.contactBtn}>
              Contact Me
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h1>Let's Get In Touch</h1>
            </div>

            <div className={styles.socialLinks}>
              <a href="mailto:fizalangah2001@gmail.com" className={styles.socialLink}>
                <span className={styles.icon}>📧</span>
                <span>Gmail</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/fiza-langah-33543b2b7"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>💼</span>
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/fizalangah"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>💻</span>
                <span>GitHub</span>
              </a>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className={styles.closeBtn}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;