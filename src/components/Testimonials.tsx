import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTitleVisible(entry.isIntersecting);
      },
      {
        rootMargin: '-30% 0px -60% 0px', // Trigger when section top reaches 30% from viewport top
      }
    );

    const sectionElement = document.getElementById('testimonials');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const testimonials = [
    {
      avatar: "../../assets/images/testimonial-1.jpg",
      quote: "Arise has revolutionized how I connect with my students. The live streaming tools and student dashboard are incredibly professional.",
      author: "Dr. Rohan Mehta",
      role: "Anatomy Professor, Delhi"
    },
    {
      avatar: "./assets/images/testimonial-2.jpg",
      quote: "The content creation studio and video recording features have significantly increased my productivity. Best B2B platform for educators!",
      author: "Dr. Sneha Patel",
      role: "Pharmacology Tutor, Mumbai"
    },
    {
      avatar: "./assets/images/testimonial-3.jpg",
      quote: "Finally, a platform that handles everything - class scheduling, payments, and analytics. My revenue has tripled since joining Arise.",
      author: "Prof. Vikash Singh",
      role: "Surgery Instructor, Kolkata"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
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
            What Our <span style={{
              background: 'linear-gradient(180deg, #1988ee 0%, #134d7e 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Tutors</span> Say
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join hundreds of successful educators who have transformed their teaching career with Arise.
          </motion.p>
        </div>
        <motion.div
          className="testimonials-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.author} />
              </div>
              <blockquote>"{testimonial.quote}"</blockquote>
              <cite>
                <strong>{testimonial.author}</strong><br />
                {testimonial.role}
              </cite>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
