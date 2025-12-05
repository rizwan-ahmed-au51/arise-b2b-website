import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

// SVG Icon Components - Vibrant and colorful designs!
const ClassSchedulingIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calendar with vibrant colors */}
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#FF6B9D" stroke="#FF4081" strokeWidth="2"/>
    <rect x="4" y="6" width="16" height="12" fill="#FFFFFF" rx="1"/>
    {/* Month header */}
    <rect x="4" y="6" width="16" height="3" fill="#4ECDC4"/>
    <text x="12" y="8.5" textAnchor="middle" fill="white" fontSize="2" fontWeight="bold">JAN</text>
    {/* Day numbers */}
    <text x="6" y="12" fill="#333" fontSize="2.5" fontWeight="600">1</text>
    <text x="10" y="12" fill="#333" fontSize="2.5" fontWeight="600">2</text>
    <text x="14" y="12" fill="#333" fontSize="2.5" fontWeight="600">3</text>
    <text x="18" y="12" fill="#333" fontSize="2.5" fontWeight="600">4</text>
    <text x="6" y="15" fill="#333" fontSize="2.5" fontWeight="600">5</text>
    <text x="10" y="15" fill="#333" fontSize="2.5" fontWeight="600">6</text>
    <text x="14" y="15" fill="#FF1744" fontSize="2.5" fontWeight="600">7</text>
    <text x="18" y="15" fill="#333" fontSize="2.5" fontWeight="600">8</text>
    {/* Highlight current day with check */}
    <circle cx="14" cy="14.5" r="2" fill="#4CAF50" opacity="0.2"/>
    <path d="M13 14.5l0.5 0.5 1.5-1.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VideoRecordingIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Modern camera design */}
    <circle cx="12" cy="12" r="10" fill="#512DA8"/>
    <circle cx="12" cy="12" r="8" fill="#673AB7"/>
    <circle cx="12" cy="12" r="5" fill="#7C4DFF"/>
    {/* Lens highlights */}
    <circle cx="10.5" cy="10.5" r="2" fill="#BA68C8" opacity="0.7"/>
    <circle cx="10.5" cy="10.5" r="1" fill="white" opacity="0.9"/>
    {/* Camera controls */}
    <circle cx="17" cy="7" r="2" fill="#FF5722" stroke="white" strokeWidth="1">
      <animate attributeName="fill" values="#FF5722;#FF8A65;#FF5722" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <text x="17" y="7.8" textAnchor="middle" fill="white" fontSize="1.2" fontWeight="bold">REC</text>
    {/* Flash effect */}
    <polygon points="7,5 9,5 8,8" fill="#FFC107"/>
    <circle cx="8" cy="2" r="1" fill="#FFD54F">
      <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
    </circle>
    {/* Screen border */}
    <circle cx="12" cy="12" r="9.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
  </svg>
);

const ContentStudioIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Creative studio design */}
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#009688"/>
    <rect x="5" y="5" width="14" height="14" fill="#B2DFDB"/>
    {/* Pages with colorful content */}
    <rect x="6" y="7" width="12" height="10" fill="#FFFFFF" rx="1"/>
    <rect x="7" y="8" width="10" height="1" fill="#FF6B35" rx="0.5"/>
    <rect x="7" y="10" width="8" height="1" fill="#F7931E" rx="0.5"/>
    <rect x="7" y="12" width="9" height="1" fill="#4CAF50" rx="0.5"/>
    <rect x="7" y="14" width="7" height="1" fill="#2196F3" rx="0.5"/>
    {/* Creative tools */}
    <circle cx="16" cy="16" r="1.5" fill="#FF5722"/>
    <path d="M8 4l2-2 1 1-2 2z" fill="#9C27B0"/>
    <rect x="19" y="2" width="2" height="4" fill="#3F51B5" rx="1"/>
    <path d="M21 2l-1 4 1-0.5 1 0.5z" fill="#FFC107"/>
  </svg>
);

const AssessmentIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Test/exam theme */}
    <rect x="2" y="4" width="20" height="16" rx="3" fill="#4CAF50"/>
    <rect x="4" y="6" width="16" height="12" fill="#81C784"/>
    {/* Multiple choice options */}
    <circle cx="7" cy="9" r="1.2" fill="white"/>
    <circle cx="7" cy="12" r="1.2" fill="white"/>
    <circle cx="7" cy="15" r="1.2" fill="white"/>
    <path d="M6.5 8.5l1 1 2-2" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7" cy="9" r="0.5" fill="#4CAF50"/>
    {/* Question mark */}
    <text x="13" y="12" fill="white" fontSize="3" fontWeight="bold">?</text>
    <circle cx="17" cy="8" r="1" fill="#FFC107"/>
    <rect x="15.5" y="9.5" width="3" height="0.8" fill="#FFC107" rx="0.4"/>
  </svg>
);

const LiveStreamingIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Live streaming monitor */}
    <rect x="2" y="6" width="20" height="12" rx="2" fill="#263238"/>
    <rect x="3" y="7" width="18" height="10" fill="#37474F"/>
    {/* Screen content */}
    <circle cx="8" cy="12" r="2" fill="#FF5722"/>
    <rect x="7" y="14" width="2" height="1" fill="#FFC107" rx="0.5"/>
    <circle cx="16" cy="12" r="1.5" fill="#4CAF50"/>
    <rect x="13" y="15" width="6" height="1" fill="#FF6B35" rx="0.5"/>
    {/* Stream indicators */}
    <circle cx="6" cy="4" r="1" fill="#FF5722">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="10" cy="4" r="1" fill="#4CAF50">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" begin="0.2s"/>
    </circle>
    <circle cx="14" cy="4" r="1" fill="#FFC107">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" begin="0.4s"/>
    </circle>
    {/* Monitor stand */}
    <rect x="10" y="18" width="4" height="2" fill="#455A64" rx="1"/>
    <rect x="11" y="20" width="2" height="4" fill="#546E7A" rx="1"/>
  </svg>
);

const ManagementIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* People management theme */}
    <circle cx="12" cy="8" r="3" fill="#2196F3"/>
    <circle cx="7" cy="14" r="2.5" fill="#4CAF50"/>
    <circle cx="17" cy="14" r="2.5" fill="#FF5722"/>
    <circle cx="5" cy="20" r="2" fill="#FFC107"/>
    <circle cx="12" cy="20" r="2" fill="#9C27B0"/>
    <circle cx="19" cy="20" r="2" fill="#795548"/>
    {/* Connection lines */}
    <line x1="12" y1="11" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    <line x1="12" y1="11" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    <line x1="7" y1="16.5" x2="5" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    <line x1="7" y1="16.5" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    <line x1="17" y1="16.5" x2="19" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    <line x1="17" y1="16.5" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    {/* Gear/manager symbol */}
    <circle cx="12" cy="8" r="1.2" fill="white"/>
    <path d="m12 10 0.5 1.5h-1l0.5-1.5z" fill="white" opacity="0.8"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Colorful data visualization */}
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#3F51B5"/>
    <rect x="3" y="5" width="18" height="14" fill="#303F9F"/>
    {/* Chart elements */}
    <rect x="5" y="8" width="3" height="10" fill="#4CAF50" rx="1"/>
    <rect x="9" y="6" width="3" height="12" fill="#2196F3" rx="1"/>
    <rect x="13" y="4" width="3" height="14" fill="#FFC107" rx="1"/>
    <rect x="17" y="9" width="3" height="9" fill="#FF5722" rx="1"/>
    {/* Trend lines */}
    <path d="m4 19 2-3 4-1 4-6 4-2" stroke="lightblue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Data points */}
    <circle cx="6" cy="16" r="1" fill="#FFFFFF"/>
    <circle cx="10" cy="15" r="1" fill="#FFFFFF"/>
    <circle cx="14" cy="9" r="1" fill="#FFFFFF"/>
    <circle cx="18" cy="11" r="1" fill="#FFFFFF"/>
  </svg>
);

const PaymentIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Credit card with colorful elements */}
    <rect x="2" y="6" width="20" height="12" rx="3" fill="#E53935"/>
    <rect x="3" y="7" width="18" height="10" fill="#EF5350"/>
    {/* Card details */}
    <rect x="5" y="12" width="14" height="1" fill="#FFE0B2" rx="0.5"/>
    <rect x="5" y="14" width="10" height="1" fill="#FFE0B2" rx="0.5"/>
    {/* Chip */}
    <rect x="5" y="9" width="4" height="2.5" fill="#FFC107" rx="0.5"/>
    <rect x="5.5" y="9.5" width="3" height="1.5" fill="#FF8F00"/>
    {/* Network symbol */}
    <circle cx="19" cy="9" r="2" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="19" cy="9" r="1.5" fill="#FFC107"/>
    <path d="M17 9l2-2 1 1-2-2 1-1-3 3z" fill="#FFC107"/>
    {/* Currency symbols */}
    <text x="13" y="16" fill="#FFE0B2" fontSize="2" fontWeight="bold">$</text>
  </svg>
);

const IconType: any = {}; // Placeholder for TypeScript

interface FeatureType {
  IconComponent: React.ComponentType;
  title: string;
  description: string;
  gradient: string;
}

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const [titleVisible, setTitleVisible] = useState(false);

  const containerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: { mass: 1, tension: 280, friction: 60 },
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show heading when scrolled past hero section (assuming hero is 100vh)
      const heroHeight = window.innerHeight; // Hero section height
      const scrolled = window.scrollY;

      setTitleVisible(scrolled > heroHeight - 100); // Show when nearly past hero
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features: FeatureType[] = [
    { IconComponent: ClassSchedulingIcon, title: 'Smart Class Scheduling', description: 'Schedule, manage, and reschedule classes with automated reminders and student notifications.', gradient: 'linear-gradient(135deg, #a3c9f1 0%, #c6d4f0 100%)' },
    { IconComponent: VideoRecordingIcon, title: 'Professional Video Recording', description: 'Record high-quality lectures with built-in editing tools, screen sharing, and real-time annotations.', gradient: 'linear-gradient(135deg, #f8c8dc 0%, #fce4ec 100%)' },
    { IconComponent: ContentStudioIcon, title: 'Content Creation Studio', description: 'Create and upload study materials, notes, assignments, and e-notes with our powerful content editor.', gradient: 'linear-gradient(135deg, #b8dcf3 0%, #dcf3f9 100%)' },
    { IconComponent: AssessmentIcon, title: 'Assessment & Tests', description: 'Design custom tests, assignments, and monitor student performance with detailed analytics.', gradient: 'linear-gradient(135deg, #c8e7d9 0%, #e8f5ea 100%)' },
    { IconComponent: LiveStreamingIcon, title: 'Live Streaming with Zoom', description: 'Host interactive live sessions with up to 1000+ students using integrated Zoom features.', gradient: 'linear-gradient(135deg, #f7c8d6 0%, #fce4ec 100%)' },
    { IconComponent: ManagementIcon, title: 'Student Management Dashboard', description: 'Track enrollment, attendance, engagement, and manage batches efficiently.', gradient: 'linear-gradient(135deg, #d4e2f8 0%, #e8f0fc 100%)' },
    { IconComponent: AnalyticsIcon, title: 'Revenue & Analytics', description: 'Monitor earnings, course performance, and student insights with comprehensive analytics.', gradient: 'linear-gradient(135deg, #e2d4f8 0%, #f0e8fc 100%)' },
    { IconComponent: PaymentIcon, title: 'Secure Payment Gateway', description: 'Built-in payment processing with razorpay for course subscriptions and one-time purchases.', gradient: 'linear-gradient(135deg, #f8e4d4 0%, #fce8e0 100%)' },
  ];

  const cardVariants: any = {
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

  const iconVariants: any = {
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
            Complete <span style={{
              background: 'linear-gradient(180deg, #1988ee 0%, #134d7e 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Teaching</span> Solution
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
        </div>

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
                  <div className="feature-icon">
                    <feature.IconComponent />
                  </div>
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
