import React, { useState } from 'react';
import '../styles/UploadTrainScreen.css';
import cameraIcon from '../assets/camera-icon.png';
import BackgroundVideo from './BackgroundVideo';

const UploadTrainScreen = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleTrain = () => {
    if (selectedFiles.length > 0) {
      console.log('Selected files:', selectedFiles);
      // Yapay zeka modeli ile eğitim işlemi burada yapılacak
    } else {
      alert('Please select some files first!');
    }
  };

  return (
    <div className="upload-train-container">
      <BackgroundVideo />
      <div className="content-wrapper">
        <div className="content">
          <h2>Upload and Train</h2>
          <div className="upload-container">
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="file-upload" className="upload-label">
              <img src={cameraIcon} alt="Upload" className="camera-icon" />
            </label>
            {selectedFiles.length > 0 && (
              <div className="file-info">
                <p>{selectedFiles.length} files selected</p>
              </div>
            )}
          </div>
          <button onClick={handleTrain} className="train-button">
            Train
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadTrainScreen;
