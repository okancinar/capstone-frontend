// ChangePassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChangePassword.css';

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const navigate = useNavigate();

  
  const validPassword = '123'; 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldPassword !== validPassword) {
      setErrorMessage('Old password is incorrect');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setErrorMessage('New password entries must match');
      return;
    }
    setErrorMessage(''); // Clear any previous errors
    setPasswordUpdated(true); // Password update success
    setErrorMessage('Password successfully updated');
  };

  const handleBackToAccount = () => {
    navigate('/account'); // Navigate back to account page
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Old Password:</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {passwordUpdated && <button onClick={handleBackToAccount} className="back-button">Go to the Account Page</button>}
      </form>
    </div>
  );
};

export default ChangePasswordPage;
