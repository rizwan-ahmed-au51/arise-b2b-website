import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCrown, FaStar } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹4,999',
      duration: '/month',
      description: 'Perfect for new educators starting their online teaching journey',
      features: [
        'Up to 50 students per batch',
        'Basic video recording & editing',
        'Student management dashboard',
        'Email support',
        'Basic analytics',
        'Content storage: 10GB'
      ],
      recommended: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '₹12,999',
      duration: '/month',
      description: 'Ideal for established tutors growing their student base',
      features: [
        'Up to 500 students per batch',
        'Advanced video recording & editing',
        'Advanced analytics & reporting',
        'Live streaming with Zoom',
        'Priority support',
        'Content storage: 100GB',
        'Revenue insights dashboard',
        'Custom domain support'
      ],
      recommended: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '₹29,999',
      duration: '/month',
      description: 'Complete solution for large educational institutions and coaching centers',
      features: [
        'Unlimited students',
        'Professional studio recording tools',
        'Advanced learning management',
        'White-label solution',
        'Dedicated account manager',
        'Content storage: Unlimited',
        'Custom integrations',
        'API access',
        '24/7 premium support'
      ],
      recommended: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">Flexible pricing designed to scale with your teaching business</p>
        </div>
        <motion.div
          className="pricing-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {plan.recommended && (
                <div className="recommended-badge">
                  <FaCrown className="recommended-icon" />
                  Most Popular
                </div>
              )}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  <span className="price">{plan.price}</span>
                  <span className="duration">{plan.duration}</span>
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaCheck className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`btn ${plan.recommended ? 'btn-primary' : 'btn-secondary'} pricing-btn`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
