import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Kayıtlı giriş bilgileri
  const validEmail = 'user@example.com';
  const validPassword = '123';

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === validEmail && password === validPassword) {
      console.log('Login Successful');
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      setErrorMessage('Email or password is incorrect');  // Hata mesajı ayarı
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>} 
      </form>
    </div>
  );
};

export default LoginPage;
