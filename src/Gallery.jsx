import React, { useState } from 'react';
import './TheatreGallery.css'; // Import your CSS file for styling
import frame from "./Frame.svg";
import framee from "./Framee.png";

const TheatreGallery = () => {
  const images = [
    frame,
    framee,
    frame,
    frame,
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
      <div className="words">
        <h1 className='Galleryname'>GALLERY</h1>
        <h3>Ajanta Cinemas</h3>
      </div>
      <button className="arrow-button lefts" onClick={handlePrevClick}>&lt;</button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Theatre Image ${index + 1}`}
            className={`gallery-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button className="arrow-button rights" onClick={handleNextClick}>&gt;</button>
    </div>
  );
}

export default TheatreGallery;