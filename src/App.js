import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProjectScreen from './components/ProjectScreen';
import UploadTrainScreen from './components/UploadTrainScreen';
import HomePage from './components/HomePage';
import AccountPage from './components/AccountPage';
import Navbar from './components/Navbar';
import ChangeEmailPage from './components/ChangeEmailPage';
import ChangePasswordPage from './components/ChangePassword';
import TestResultPage from './components/TestResultPage';
import './styles/LoginPage.css';
import './styles/ProjectScreen.css';
import './styles/Navbar.css';
import './styles/UploadTrainScreen.css';
import './styles/Button.css';
import './styles/HomePage.css';
import './styles/AccountPage.css';
import './styles/ChangeEmailPage.css';
import './styles/ChangePassword.css';
import './styles/TestResultPage.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sayfa yenilendiğinde otomatik olarak giriş sayfasına gitmek için
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" /> }/>
          <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" /> } />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/project" element={isLoggedIn ? <ProjectScreen /> : <Navigate to="/login" />} />
          <Route path="/upload" element={isLoggedIn ? <UploadTrainScreen /> : <Navigate to="/login" />} />
          <Route path="/account" element={isLoggedIn ? <AccountPage /> : <Navigate to="/login" />} />
          <Route path="/change-email" element={isLoggedIn ? <ChangeEmailPage /> : <Navigate to="/login" />} />
          <Route path="/change-password" element={isLoggedIn ? <ChangePasswordPage /> : <Navigate to="/login" />} />
          <Route path="/test-results" element={isLoggedIn ? <TestResultPage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
