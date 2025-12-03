import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBook, FaPlay, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    { icon: FaDownload, number: '1', title: 'Sign Up as a Tutor', description: 'Create your tutor account and complete your profile with educational credentials and expertise.' },
    { icon: FaBook, number: '2', title: 'Create Your Content', description: 'Use our content studio to upload videos, create notes, design tests, and organize study materials.' },
    { icon: FaPlay, number: '3', title: 'Launch Your Classes', description: 'Schedule live sessions, manage batches, and engage with students through interactive teaching tools.' },
    { icon: FaChartLine, number: '4', title: 'Monetize and Grow', description: 'Earn from course subscriptions, track performance analytics, and expand your reach with our platform.' },
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Get Started in 4 Easy Steps</h2>
          <p className="section-subtitle">Join our platform and start creating valuable educational content for students.</p>
        </div>
        <motion.div
          className="steps-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">
                  <step.icon />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
