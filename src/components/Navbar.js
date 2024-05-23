import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import accountIcon from '../assets/account-icon.png';
import settingsIcon from '../assets/settings.png';
import logoutIcon from '../assets/log-out.png';

const Navbar = ({ setIsLoggedIn }) => {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const navigate = useNavigate();
  const submenuRef = useRef(null);

  const toggleSubmenu = (event) => {
    event.stopPropagation();
    setSubmenuVisible(!submenuVisible);
  };

  const handleLogout = (event) => {
    event.stopPropagation();
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleAccount = (event) => {
    event.stopPropagation();
    navigate('/account');
  };

  // Menü dışına tıklanma olayını yakalamak için useEffect kullanımı
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setSubmenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/project">Project Using Screen</Link>
        </li>
        <li>
          <Link to="/upload">Upload and Train</Link>
        </li>
      </ul>
      <div className="account-container" onClick={toggleSubmenu} ref={submenuRef}>
        <img src={accountIcon} alt="Account" className="account-icon" />
        {submenuVisible && (
          <ul className="submenu" onClick={(e) => e.stopPropagation()}>
            <li onClick={handleAccount}>
              <img src={accountIcon} alt="Account" className="submenu-icon" />
              <span>Account</span>
            </li>
            <li>
              <img src={settingsIcon} alt="Settings" className="submenu-icon" />
              <span>Account Settings</span>
            </li>
            <li onClick={handleLogout}>
              <img src={logoutIcon} alt="Logout" className="submenu-icon" />
              <span>Log Out</span>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
