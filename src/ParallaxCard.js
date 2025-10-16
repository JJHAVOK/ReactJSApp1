import React, { useState } from 'react';

const ParallaxCard = ({ title, content }) => {
  // 1. State to store the rotation and transformation values
  const [transformStyle, setTransformStyle] = useState({});

  // 2. Constants for the effect
  const MAX_ROTATION = 10; // Max tilt in degrees
  const MAX_SHIFT = 20;    // Max background shift in pixels

  // 3. Mouse Move Handler
  const handleMouseMove = (e) => {
    // Get card dimensions and position
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card center (0, 0 is the center)
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate rotation and shift based on relative position
    // Divide by (rect.width/2) to get a value between -1 and 1
    const rotateX = (-y / (rect.height / 2)) * MAX_ROTATION;
    const rotateY = (x / (rect.width / 2)) * MAX_ROTATION;
    
    // Calculate a small translation (shift) for a deeper effect
    const shiftX = (-x / (rect.width / 2)) * MAX_SHIFT;
    const shiftY = (-y / (rect.height / 2)) * MAX_SHIFT;

    setTransformStyle({
      // Card transform (Tilt/Rotation)
      cardTransform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      // Inner/Background transform (Opposite shift for Parallax effect)
      contentTransform: `translateX(${shiftX * 0.5}px) translateY(${shiftY * 0.5}px)`, // *0.5 to make it move less than the edge
      boxShadow: `${-rotateY * 0.5}px ${rotateX * 0.5}px 30px rgba(0, 0, 0, 0.3)`, // Shadow follows the tilt
    });
  };

  // 4. Mouse Leave Handler (Resets the card to original state)
  const handleMouseLeave = () => {
    setTransformStyle({
      cardTransform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      contentTransform: 'translateX(0px) translateY(0px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    });
  };

  return (
    <div 
      className="parallax-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Apply the calculated transform style to the card
      style={{ 
        transform: transformStyle.cardTransform,
        boxShadow: transformStyle.boxShadow,
      }}
    >
      <div 
        className="card-content"
        // Apply the calculated transform style to the inner content (for parallax)
        style={{ transform: transformStyle.contentTransform }}
      >
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default ParallaxCard;