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
      <div className="home-content">
        <h1 className="app-h1">Privatize<span className="highlight">Face</span></h1>
        <span className="slogan">Secure and Private</span>
        <div className="button-group">
          <Button className="primary" onClick={() => navigate('/project')}>
            Go to Project Screen
          </Button>
          <Button className="primary" onClick={() => navigate('/upload')}>
            Go to Upload and Train
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
