import React from 'react';
import './NameJumpAnimation.css'; // Import your CSS file

const NameJumpAnimation = ({ nameWords }) => {
  return (
    <div className="name-jump-animation">
      {nameWords.map((word, index) => (
        <span key={index} className="jumping-word" style={{ '--delay-index': index }}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default NameJumpAnimation;