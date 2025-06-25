import React, { useState, useEffect } from 'react';

interface HeroBackdropSwiperProps {
  imageUrls: string[];
  interval?: number; // in milliseconds
  transitionDuration?: number; // in milliseconds
}

const HeroBackdropSwiper: React.FC<HeroBackdropSwiperProps> = ({ 
  imageUrls, 
  interval = 7000, 
  transitionDuration = 1500 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length <= 1) return; // No need to swipe if 0 or 1 image

    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, interval);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, imageUrls, interval]);

  if (!imageUrls || imageUrls.length === 0) {
    return null; 
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity ease-in-out"
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            transitionDuration: `${transitionDuration}ms`,
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center', // Ensure center positioning
          }}
          role="img" // ARIA role for semantic meaning
          aria-label={`Portfolio backdrop image ${index + 1}`} // ARIA label
          aria-hidden={index !== currentIndex} // Hide non-visible images from assistive tech
        />
      ))}
    </div>
  );
};

export default HeroBackdropSwiper;