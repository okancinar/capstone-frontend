import React, { useState } from 'react';
import '../styles/UploadTrainScreen.css';
import BackgroundVideo from './BackgroundVideo';
import VersionDropdown from './VersionDropdown';
import Card from './Card';
import { FaFile, FaCaretDown, FaDropbox, FaGoogleDrive, FaFolder, FaSpinner } from 'react-icons/fa';

const UploadTrainScreen = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState('v1.1');
  const [showFileDropdown, setShowFileDropdown] = useState(false);
  const [showVersionDropdown, setShowVersionDropdown] = useState(false);
  const [training, setTraining] = useState(false);
  const [trainingSuccess, setTrainingSuccess] = useState('');

  const toggleFileDropdown = () => {
    setShowFileDropdown(!showFileDropdown);
    if (showVersionDropdown) setShowVersionDropdown(false);
  };

  

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleTrain = async () => {
    if (selectedFiles.length > 0) {
      setTraining(true);
      setTrainingSuccess('');
      setTimeout(() => {
        setTraining(false);
        setTrainingSuccess('Successful training!');
      }, 5000);
    } else {
      alert('Please select some files first!');
    }
  };

  return (
    <div className="upload-train-container">
      <BackgroundVideo />
      
      <div>
      <h1 className="page-title">Upload and Train Page</h1>
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
            <p className="current-ai-version-info">Latest AI model version to train: v1.8</p>
            <button onClick={toggleFileDropdown} className="file-chooser-button">
              <h2><FaFile />              Choose Files</h2> <FaCaretDown />
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
                <p>{selectedFiles.length} files selected</p>
              </div>
            )}
          </div>
          <button onClick={handleTrain} className="train-button">
            Train
          </button>
          {training && (
            <div className="training-spinner">
              <FaSpinner className="spinner" />
              Training...
            </div>
          )}
          {trainingSuccess && (
            <div className="success-message">
              {trainingSuccess}
            </div>
          )}
        </div>
        <Card />  {/* Card bileşenini burada çağırıyoruz */}
      </div>
      
    </div>
  );
};

export default UploadTrainScreen;
