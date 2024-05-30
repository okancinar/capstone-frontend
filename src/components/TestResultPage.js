import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/TestResultPage.css';
import { FaArrowLeft } from "react-icons/fa6";

const TestResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state); // Konsola geçiş durumunu yazdır

  if (!location.state || !location.state.selectedImage) {
    return <div>Yüklenen resim bulunamadı. Lütfen geri dönüp bir resim seçiniz.</div>;
  }

  const { selectedImage, personName, personSurname } = location.state;
  const accuracy = 100;

  const handleBack = () => {
    navigate('/project'); // Project Using Screen sayfasına yönlendir
  };

  return (
    <div className="test-result-page">
      <button onClick={handleBack} className="back-to-project-button">
        <FaArrowLeft /> Back to the Project Using Screen
      </button>
      
      <h1>Test Results</h1>
      <div className="results-container">
        <div className="results-container-img">
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
        </div>
        <div className="person-info">
          <p>First Name: {personName}</p>
          <p>Last Name: {personSurname}</p>
          <p>Prediction Accuracy Rate: %{accuracy}</p>
        </div>
      </div>
    </div>
  );
};

export default TestResultPage;
