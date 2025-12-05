import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTitleVisible(entry.isIntersecting);
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    const sectionElement = document.getElementById('how-it-works');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      // Animate progress bar and active step
      const timer = setTimeout(() => {
        setProgress(prev => {
          if (prev < 100) {
            const newProgress = prev + 2;
            setActiveStep(Math.min(Math.floor(newProgress / 25) + 1, 4));
            return newProgress;
          }
          return prev;
        });
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [progress, isInView]);

  const steps = [
    {
      number: '1',
      title: 'Sign Up as a Tutor',
      description: 'Create your tutor account and complete your profile with educational credentials and expertise.',
      position: { cx: '120', cy: '100' },
      color: '#E91E63'
    },
    {
      number: '2',
      title: 'Create Your Content',
      description: 'Use our content studio to upload videos, create notes, design tests, and organize study materials.',
      position: { cx: '300', cy: '50' },
      color: '#9C27B0'
    },
    {
      number: '3',
      title: 'Launch Your Classes',
      description: 'Schedule live sessions, manage batches, and engage with students through interactive teaching tools.',
      position: { cx: '480', cy: '100' },
      color: '#F44336'
    },
    {
      number: '4',
      title: 'Monetize and Grow',
      description: 'Earn from course subscriptions, track performance analytics, and expand your reach with our platform.',
      position: { cx: '660', cy: '150' },
      color: '#4CAF50'
    },
  ];

  const AnimatedIcon = () => {
    const currentStep = activeStep - 1;
    const color = steps[currentStep]?.color || '#2196F3';

    // Rocket icon that moves along the path
    const rocketPath = "M0,0 L10,5 L8,15 L0,20 L-8,15 L-10,5 Z";
    const flamePath = "M-3,20 Q-2,25 0,30 Q2,25 3,20 Z";

    return (
      <svg width="32" height="32" viewBox="-16 -16 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>

        {/* Rocket body */}
        <path d={rocketPath} fill="url(#rocketGradient)" stroke={color} strokeWidth="1" />

        {/* Rocket fins */}
        <path d="M-10,5 L-15,8 L-12,5 Z" fill={color} />
        <path d="M10,5 L15,8 L12,5 Z" fill={color} />
        <path d="M-10,15 L-12,18 L-8,17 Z" fill={color} />
        <path d="M10,15 L12,18 L8,17 Z" fill={color} />

        {/* Rocket flame with animation */}
        <motion.path
          d={flamePath}
          fill="#FF9800"
          stroke="#FFC107"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Rocket window */}
        <circle cx="0" cy="2" r="3" fill="#87CEEB" stroke="#4682B4" strokeWidth="0.5" />

        {/* Rocket direction indicator */}
        <path d="M-6,-6 L-3,-12 L0,-6 Z" fill="#FF6B35" />
      </svg>
    );
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="how-it-works" className="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="text-center">
          <motion.h2
            className="section-title"
            animate={{
              opacity: titleVisible ? 1 : 0,
              y: titleVisible ? 0 : 20
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
          >
            Get Started in <span style={{
              background: 'linear-gradient(180deg, #1988ee 0%, #134d7e 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>4 Easy</span> Steps
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join our platform and start creating valuable educational content for students.
          </motion.p>
        </div>

        <div className="process-container">
          {/* SVG Path with animated movement */}
          <svg
            className="process-path"
            viewBox="0 0 800 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background gradient */}
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E3F2FD" />
                <stop offset="25%" stopColor="#F3E5F5" />
                <stop offset="50%" stopColor="#FFEDED" />
                <stop offset="75%" stopColor="#E8F5E8" />
                <stop offset="100%" stopColor="#FFF3E0" />
              </linearGradient>

              {/* Dot pattern */}
              <pattern id="dotPattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="7.5" cy="7.5" r="1.5" fill="#263238" opacity="0.9"/>
              </pattern>

              {/* Speech bubble filter for glowing effect */}
              <filter id="speechBubbleGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Dotted background */}
            <rect width="800" height="300" fill="url(#dotPattern)" opacity="0.1" />

            {/* Curved path - Dramatic organic waves with extreme curves */}
            <motion.path
              d="M 120 100 C 180 50 240 150 300 60 C 360 170 420 30 480 140 C 540 50 600 160 660 100"
              fill="none"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="0,12"
              animate={{
                strokeDasharray: progress > 0 ? `${progress * 10 / 100},12` : "0,12"
              }}
              transition={{ duration: 0.1 }}
            />

            {/* Progress bar background */}
            <rect x="50" y="220" width="700" height="8" fill="#E0E0E0" rx="4"/>
            <motion.rect
              x="50"
              y="220"
              width={progress * 7}
              height="8"
              fill="url(#pathGradient)"
              rx="4"
              initial={{ width: 0 }}
              animate={{ width: progress * 7 }}
              transition={{ duration: 0.1 }}
            />

            {/* Animated rocket along path */}
            <AnimatePresence>
              {progress > 0 && (
                <motion.g
                  initial={{ offsetDistance: '0%' }}
                  animate={{ offsetDistance: '100%' }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                  style={{
                    offsetPath: `path('M 120 100 C 180 50 240 150 300 60 C 360 170 420 30 480 140 C 540 50 600 160 660 100')`,
                    offsetRotate: 'auto'
                  }}
                >
                  <foreignObject width="40" height="40" transform="translate(-20,-20)">
                    <div style={{ transform: 'translateX(10px) translateY(10px)' }}>
                      <AnimatedIcon />
                    </div>
                  </foreignObject>
                </motion.g>
              )}
            </AnimatePresence>

            {/* Step circles */}
            {steps.map((step, index) => (
              <motion.g key={index}>
                {/* Step circle */}
                <motion.circle
                  cx={step.position.cx}
                  cy={step.position.cy}
                  r="16"
                  fill={step.color}
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={{ scale: activeStep > index ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />

                {/* Step number inside circle */}
                <motion.text
                  x={step.position.cx}
                  y={step.position.cy + 1}
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeStep > index ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  {step.number}
                </motion.text>

                {/* Completion checkmark */}
                <motion.path
                  d={`M${parseInt(step.position.cx) - 5} ${parseInt(step.position.cy)} L${parseInt(step.position.cx) - 2} ${parseInt(step.position.cy) + 3} L${parseInt(step.position.cx) + 5} ${parseInt(step.position.cy) - 1}`}
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeStep > index ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                />

                {/* Speech bubble above the circle */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: activeStep > index ? 1 : 0, scale: activeStep > index ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                >
                  {/* Speech bubble background */}
                  <rect
                    x={parseInt(step.position.cx) - 55}
                    y={parseInt(step.position.cy) - 75}
                    width="110"
                    height="50"
                    rx="8"
                    fill="white"
                    stroke={step.color}
                    strokeWidth="2"
                    filter="url(#speechBubbleGlow)"
                  />
                  {/* Bubble pointer */}
                  <path
                    d={`M${parseInt(step.position.cx)} ${parseInt(step.position.cy) - 16} L${parseInt(step.position.cx) - 8} ${parseInt(step.position.cy) - 25} L${parseInt(step.position.cx) + 8} ${parseInt(step.position.cy) - 25} Z`}
                    fill="white"
                    stroke={step.color}
                    strokeWidth="2"
                    filter="url(#speechBubbleGlow)"
                  />
                  {/* Step title */}
                  <text
                    x={parseInt(step.position.cx)}
                    y={parseInt(step.position.cy) - 62}
                    textAnchor="middle"
                    fill={step.color}
                    fontSize="10"
                    fontWeight="bold"
                  >
                    {step.title}
                  </text>
                  {/* Step description - line 1 */}
                  <text
                    x={parseInt(step.position.cx)}
                    y={parseInt(step.position.cy) - 50}
                    textAnchor="middle"
                    fill="#666"
                    fontSize="8"
                    dominantBaseline="middle"
                  >
                    {step.description.substring(0, 25)}...
                  </text>
                </motion.g>
              </motion.g>
            ))}
          </svg>

          {/* Step cards below the path */}
          <div className="step-cards">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`step-card ${activeStep > index ? 'active' : ''}`}
                variants={stepVariants}
                initial="hidden"
                animate={activeStep > index ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="step-header"
                  style={{ borderLeftColor: step.color }}
                >
                  <div className="step-number-large" style={{ color: step.color }}>
                    {step.number}
                  </div>
                  <h3>{step.title}</h3>
                </motion.div>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
