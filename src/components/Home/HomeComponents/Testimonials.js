// Testimonials.js

import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Amazing experience! The tours were well-organized, and the guides were knowledgeable.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'I had a fantastic time exploring new places with Tours & Travels. Highly recommend!',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p>{testimonial.text}</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
