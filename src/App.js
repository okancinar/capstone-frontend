import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProjectScreen from './components/ProjectScreen';
import UploadTrainScreen from './components/UploadTrainScreen';
import HomePage from './components/HomePage';
import AccountPage from './components/AccountPage';
import Navbar from './components/Navbar';
import './styles/LoginPage.css';
import './styles/ProjectScreen.css';
import './styles/Navbar.css';
import './styles/UploadTrainScreen.css';
import './styles/Button.css';
import './styles/HomePage.css';
import './styles/AccountPage.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/project" element={isLoggedIn ? <ProjectScreen /> : <Navigate to="/login" />} />
          <Route path="/upload" element={isLoggedIn ? <UploadTrainScreen /> : <Navigate to="/login" />} />
          <Route path="/account" element={isLoggedIn ? <AccountPage /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
