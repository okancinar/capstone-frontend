import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import Button from './Button';
import BackgroundVideo from './BackgroundVideo'; // BackgroundVideo bileşeni

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <BackgroundVideo />
      <div className="content">
        <h1>MyApp</h1>
        <p>Your Gateway to the Future</p>
        <div className="button-group">
          <Button className="primary" onClick={() => navigate('/project')}>
            Go to Project Screen
          </Button>
          <Button className="secondary" onClick={() => navigate('/upload')}>
            Go to Upload and Train
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
