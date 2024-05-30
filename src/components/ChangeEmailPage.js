// ChangeEmailPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChangeEmailPage.css';

const ChangeEmailPage = () => {
  const [oldEmail, setOldEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [confirmNewEmail, setConfirmNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailUpdated, setEmailUpdated] = useState(false);

  const navigate = useNavigate();

  
  const validEmail = 'user@example.com';  
  const validPassword = '123'; 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldEmail !== validEmail || password !== validPassword) {
      setErrorMessage('Old email or password is incorrect');
      return;
    }
    if (newEmail !== confirmNewEmail) {
      setErrorMessage('Email entries must match');
      return;
    }
    setErrorMessage(''); // önceki hatayı sil
    setEmailUpdated(true); // başarılı email güncellemesi
    setErrorMessage('Email successfully updated');
  };

  const handleBackToAccount = () => {
    navigate('/account'); // Navigate back to account page
  };

  return (
    <div className="change-email-container">
      <h2>Change Email</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Old Email:</label>
          <input
            type="email"
            value={oldEmail}
            onChange={(e) => setOldEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>New Email:</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm New Email:</label>
          <input
            type="email"
            value={confirmNewEmail}
            onChange={(e) => setConfirmNewEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {emailUpdated && <button onClick={handleBackToAccount} className="back-button">Back to the Account Page</button>}
      </form>
    </div>
  );
};

export default ChangeEmailPage;
