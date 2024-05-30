import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectScreen.css';
import BackgroundVideo from './BackgroundVideo';
import VersionDropdown from './VersionDropdown';
import Card from './Card';
import TestResultPage from './TestResultPage';
import { FaFile, FaCaretDown, FaDropbox, FaGoogleDrive, FaFolder } from 'react-icons/fa';


const ProjectScreen = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState('v1.1');
  const [showFileDropdown, setShowFileDropdown] = useState(false);
  const [showVersionDropdown, setShowVersionDropdown] = useState(false);
  const navigate = useNavigate(); 

  const toggleFileDropdown = () => {
    setShowFileDropdown(!showFileDropdown);
    if (showVersionDropdown) setShowVersionDropdown(false);
  };

  const handleFileChange = (event) => {
    const files = [...event.target.files];
    const parsedFiles = files.map(file => {
      const [firstName, lastName] = file.name.replace(/\..+$/, '').split('-'); // Dosya adını '.' karakterine göre ayırıp, ad ve soyadı '-' ile ayır
      return { file, firstName, lastName };
    });
    setSelectedFiles(parsedFiles);
  };

  
  const handleTest = () => {
    if (selectedFiles.length > 0) {
      const { file, firstName, lastName } = selectedFiles[0]; // İlk dosyayı ve isim bilgilerini al
      navigate('/test-results', { state: { selectedImage: file, personName: firstName, personSurname: lastName } });
      console.log('Selected files:', selectedFiles);
    } else {
      alert('Please choose a photo to test!');
    }
  };

  return (
    <div className="project-screen-container">
      <BackgroundVideo />
      <VersionDropdown 
        selectedVersion={selectedVersion} 
        setSelectedVersion={setSelectedVersion}
      />
      <div>
      <h1 className="page-title">Project Using Screen</h1>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <div className="upload-container">
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <p className="current-ai-version-info">Current AI model version to test: {selectedVersion}</p>
            <button onClick={toggleFileDropdown} className="file-chooser-button">
              <h2><FaFile /> Choose a Photo</h2> <FaCaretDown />
            </button>
            {showFileDropdown && (
              <ul className="dropdown-menu">
                <li onClick={() => {
                  document.getElementById('file-upload').click();
                  setShowFileDropdown(false);
                }}><FaFolder />  From Device</li>
                <li onClick={() => setShowFileDropdown(false)}><FaGoogleDrive />  From Dropbox</li>
                <li onClick={() => setShowFileDropdown(false)}><FaDropbox />  From Google Drive</li>
              </ul>
            )}
            {selectedFiles.length > 0 && (
              <div className="file-info">
                <p>{selectedFiles.length} photo selected</p>
              </div>
            )}
          </div>
          <button onClick={handleTest} className="test-button">
            Test Our AI Model 
          </button>
          
        </div>
        <Card />  {/* Card bileşenleri buraya geliyor. */}
      </div>
      
    </div>
  );
};

export default ProjectScreen;
