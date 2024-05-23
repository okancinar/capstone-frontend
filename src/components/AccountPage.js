import React from 'react';
import '../styles/AccountPage.css';
import accountIcon from '../assets/account-icon.png'; // Örnek kullanıcı fotoğrafı

const AccountPage = () => {
  const user = {
    photo: accountIcon, // Kullanıcı fotoğrafı
    email: 'user@example.com',
    password: '********',
    modelVersion: 'v1.0.0', // Modelin versiyonu
    lastTrained: '01/01/2024 12:00' // Son eğitilme tarihi
  };

  const handleChangeEmail = () => {
    // Email değiştirme işlemi burada yapılacak
    alert('Change Email clicked');
  };

  const handleChangePassword = () => {
    // Şifre değiştirme işlemi burada yapılacak
    alert('Change Password clicked');
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
          <label className="user-label">Current Model Version (English)</label>
          <p>{user.modelVersion}</p>
          <label className="user-label">Last Trained Date</label>
          <p>{user.lastTrained}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
