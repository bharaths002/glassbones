import React, { useState, useEffect } from 'react';
import './GoToTop.css';

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="go-to-top-button">
          &#8593;
        </button>
      )}
    </>
  );
}

export default GoToTop;
