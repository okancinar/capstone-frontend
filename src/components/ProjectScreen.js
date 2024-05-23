import React, { useState } from 'react';
import '../styles/ProjectScreen.css';
import cameraIcon from '../assets/camera-icon.png';
import BackgroundVideo from './BackgroundVideo';

const ProjectScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('File uploaded:', selectedFile);
      // Dosya yükleme işlemi burada yapılacak
    } else {
      alert('Please select a file first!');
    }
  };

  const handleTest = () => {
    if (selectedFile) {
      console.log('Testing with file:', selectedFile);
      // Yapay zeka modeli ile test işlemi burada yapılacak
    } else {
      alert('Please upload a file first!');
    }
  };

  return (
    <div className="project-screen-container">
      <BackgroundVideo />
      <div className="content">
        <h2>Upload and Test</h2>
        <div className="upload-container">
          <input
            type="file"
            id="file-upload"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="file-upload" className="upload-label">
            <img src={cameraIcon} alt="Upload" className="camera-icon" />
          </label>
          {selectedFile && (
            <div className="file-info">
              <p>{selectedFile.name}</p>
              <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="selected-image" />
            </div>
          )}
        </div>
        <button onClick={handleUpload} className="upload-button">
          Upload
        </button>
        <button onClick={handleTest} className="test-button">
          Test
        </button>
      </div>
    </div>
  );
};

export default ProjectScreen;
