// src/components/Gallery.js
import React from 'react';
import '../styles/Gallery.css';
import Placeholder from '../assets/Placeholder.png';

const images = [
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  Placeholder,
  // Add more images as needed
]; // Replace with actual images

const Gallery = () => {
  // Duplicate images to ensure seamless infinite scrolling
  const duplicatedImages = [...images, ...images, ...images]; // Tripled for smoother animation

  // Number of total images
  const totalImages = duplicatedImages.length;

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div
        className="carousel"
        style={{
          '--image-count': totalImages, // Pass the total image count as a CSS variable
        }}
      >
        <div className="carousel-track">
          {duplicatedImages.map((img, index) => (
            <div key={index} className="carousel-item">
              <img
                src={img}
                alt={`Gallery Item ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://www.behance.net/YourBehance" // Replace with your portfolio link
        target="_blank"
        rel="noopener noreferrer"
        className="view-portfolio"
      >
        View full portfolio
      </a>
    </section>
  );
};

export default Gallery;
