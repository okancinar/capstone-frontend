// CardItem.js
import React from 'react';
import '../styles/CardItem.css';

const CardItem = ({ icon, title, description }) => {
  return (
    <div className="card-item">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default CardItem;
