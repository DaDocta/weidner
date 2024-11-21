import React from 'react';
import '../styles/Reviews.css';

const reviews = [
  {
    name: 'Client A',
    feedback: 'Nate did an amazing job with our brand redesign. Highly recommended!'
  },
  {
    name: 'Client B',
    feedback: 'Professional and creative. The logo design exceeded our expectations.'
  },
  {
    name: 'Client C',
    feedback: 'The custom backgrounds Nate provided completely transformed our social media aesthetic.'
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <h2 className="reviews-title">What My Clients Say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className={`review-item bubble-${index % 2 === 0 ? 'left' : 'right'}`}>
            <p className="review-feedback">"{review.feedback}"</p>
            <h4 className="review-name">- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
