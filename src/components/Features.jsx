import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { FaChalkboardTeacher, FaVideo, FaBookOpen, FaClipboardCheck, FaBrain, FaQuestionCircle, FaHistory, FaTrophy } from 'react-icons/fa';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const features = [
    { icon: FaChalkboardTeacher, title: 'Smart Class Scheduling', description: 'Schedule, manage, and reschedule classes with automated reminders and student notifications.', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { icon: FaVideo, title: 'Professional Video Recording', description: 'Record high-quality lectures with built-in editing tools, screen sharing, and real-time annotations.', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { icon: FaBookOpen, title: 'Content Creation Studio', description: 'Create and upload study materials, notes, assignments, and e-notes with our powerful content editor.', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { icon: FaClipboardCheck, title: 'Assessment & Tests', description: 'Design custom tests, assignments, and monitor student performance with detailed analytics.', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { icon: FaBrain, title: 'Live Streaming with Zoom', description: 'Host interactive live sessions with up to 1000+ students using integrated Zoom features.', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
    { icon: FaQuestionCircle, title: 'Student Management Dashboard', description: 'Track enrollment, attendance, engagement, and manage batches efficiently.', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
    { icon: FaHistory, title: 'Revenue & Analytics', description: 'Monitor earnings, course performance, and student insights with comprehensive analytics.', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
    { icon: FaTrophy, title: 'Secure Payment Gateway', description: 'Built-in payment processing with razorpay for course subscriptions and one-time purchases.', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8
      }
    }
  };

  return (
    <section id="features" className="features" ref={ref}>
      <div className="container">
        <animated.div style={containerSpring} className="text-center">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Complete Teaching Solution
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Everything you need to create engaging educational content and manage your online classes effectively.
          </motion.p>
        </animated.div>

        <div className="grid grid-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -12,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: `linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)`,
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.4)"
              }}
            >
              <motion.div
                className="feature-card-gradient"
                style={{
                  background: feature.gradient,
                  backgroundSize: "400% 100%",
                  animation: "gradientShift 3s ease infinite"
                }}
              />

              <motion.div className="feature-icon-wrapper">
                <div
                  className="feature-icon-bg"
                  style={{ background: feature.gradient }}
                />
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="feature-icon-container"
                >
                  <feature.icon className="feature-icon" />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
