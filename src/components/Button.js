import React from 'react';
import '../styles/Button.css';

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
