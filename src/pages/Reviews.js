import React from 'react';
import '../styles/Reviews.css';

const reviews = [
  {
    name: 'Garrett Strange',
    feedback: 'Nate helped me with my logo. I love it!'
  },
  {
    name: 'Garrett Strange (Again)',
    feedback: "I love Nate's passion to help and inspire others."
  },
  {
    name: "He's cool",
    feedback: 'Luke Fedders.'
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
