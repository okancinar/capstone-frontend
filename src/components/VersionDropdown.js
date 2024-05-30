// VersionDropdown.js
import React, { useState } from 'react';
import '../styles/VersionDropdown.css';  // Eğer css dosyasının adını da değiştirdiyseniz burayı güncelleyin
import { FaCaretDown } from 'react-icons/fa';

const VersionDropdown = ({ selectedVersion, setSelectedVersion }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleVersionChange = (version) => {
        setSelectedVersion(version);
        setShowDropdown(false);
    };

    return (
        <div className="version-selector-mod">
            <button onClick={toggleDropdown} className="dropdown-button-mod">
                {selectedVersion} <FaCaretDown />
            </button>
            {showDropdown && (
                <ul className="dropdown-menu-mod">
                    {['v1.1', 'v1.2', 'v1.3', 'v1.4', 'v1.5', 'v1.6', 'v1.7', 'v1.8'].map(version => (
                        <li key={version} onClick={() => handleVersionChange(version)}>
                            {version}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default VersionDropdown;
