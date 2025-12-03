import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "./assets/images/testimonial-1.jpg",
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
          <h2 className="section-title">What Our Tutors Say</h2>
          <p className="section-subtitle">Join hundreds of successful educators who have transformed their teaching career with Arise.</p>
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
