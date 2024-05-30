import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AccountPage.css';
import accountIcon from '../assets/account-icon.png'; // Örnek kullanıcı fotoğrafı

const AccountPage = () => {
  const navigate = useNavigate();

  const user = {
    photo: accountIcon, // Kullanıcı fotoğrafı
    email: 'user@example.com',
    password: '********',
    modelVersion: 'v1.8', // Modelin versiyonu
    lastTrained: '01/01/2024 12:00' // Son eğitilme tarihi
  };

  const handleChangeEmail = () => {
    navigate('/change-email');
  };

  const handleChangePassword = () => {
    
    navigate('/change-password');
  };

  return (
    <div className="account-page-container">
      <div className="account-info">
        <img src={user.photo} alt="User" className="user-photo" />
        <div className="user-details">
          <label className="user-label">Email</label>
          <h2>{user.email}</h2>
          <button onClick={handleChangeEmail} className="change-button">
            Change Email
          </button>
          <label className="user-label">Password</label>
          <p>{user.password}</p>
          <button onClick={handleChangePassword} className="change-button">
            Change Password
          </button>
          <label className="user-label">Latest Model Version Released</label>
          <p>{user.modelVersion}</p>
          <label className="user-label">Last Trained Date</label>
          <p>{user.lastTrained}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
