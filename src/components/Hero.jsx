import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-gradient-bg"></div>
      <div className="hero-pattern-overlay"></div>
      <div className="container hero-content">
        <motion.div
          className="hero-app-showcase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-app-mockup">
            <div className="hero-screen-glow"></div>
            <div className="hero-app-frame">
              <div className="hero-app-content">
                <div className="hero-app-header">
                  <div className="hero-app-logo"></div>
                  <div className="hero-app-menu"></div>
                </div>
                <div className="hero-app-dashboard">
                  <div className="hero-app-stats">
                    <div className="hero-stat-card"></div>
                    <div className="hero-stat-card"></div>
                    <div className="hero-stat-card"></div>
                  </div>
                  <div className="hero-app-courses"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            Empower Your <span className="highlight">Teaching Career</span> with Arise
          </h1>
          <p className="hero-subtitle">
            Create, manage, and monetize educational content with our comprehensive platform designed for tutors and educational experts. Join thousands already transforming their teaching experience.
          </p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Active Tutors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500%</div>
              <div className="stat-label">Avg Revenue Increase</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8★</div>
              <div className="stat-label">Tutor Rating</div>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#signup"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Teaching Today
            </motion.a>
            <motion.a
              href="#demo"
              className="btn btn-secondary-outline btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo Video
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
