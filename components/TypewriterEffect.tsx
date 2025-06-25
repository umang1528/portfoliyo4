
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = '',
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText(''); // Reset when text prop changes
    setIsTyping(true);
    
    let timeoutId: number | undefined; // Use number for browser timeout IDs

    if (delay > 0) {
      timeoutId = window.setTimeout(() => startTyping(), delay); // Explicitly use window.setTimeout
    } else {
      startTyping();
    }
    
    function startTyping() {
      if (text.length === 0) {
        setIsTyping(false);
        if (onComplete) onComplete();
        return;
      }
      
      let i = 0;
      const intervalId = window.setInterval(() => { // Explicitly use window.setInterval
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        if (i === text.length) {
          window.clearInterval(intervalId); // Explicitly use window.clearInterval
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, speed);
      return () => window.clearInterval(intervalId); // Cleanup interval on unmount or if effect re-runs
    }


    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId); // Explicitly use window.clearTimeout
      }
    };

  }, [text, speed, delay, onComplete]);

  return (
    <span className={`${className} ${isTyping ? 'typewriter-cursor' : ''}`}>
      {displayedText}
    </span>
  );
};

export default TypewriterEffect;
