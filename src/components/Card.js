// Card.js
import React from 'react';
import CardItem from './CardItem';
import '../styles/Card.css';
import { FaLock, FaCloud, FaWrench, FaRegLightbulb } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="card-container">
      <div className="top-card">
        <CardItem
          icon={<FaRegLightbulb />}
          title="How Does This Work?"
          description="You can test or train our artificial intelligence model. To test, you need to upload a single photo and click the test button. You can also choose the model version you want when testing the model. We recommend our latest model for the most accurate results. If you want to improve our latest model, you can train our model with your data and contribute to us. To do this, you can upload your photos to the Upload and Train page and click the Train button. While doing these operations, remember that the file name of the photos you use must be in the 'name-surname.fileextension' format!"
        />
      </div>
      <div className="bottom-cards">
        <CardItem
          icon={<FaLock />}
          title="Security & Privacy"
          description="We care about your privacy as much as you do. The federated learning model protects your   privacy and allows you not to share your data with anyone, including us. This way you stay safe"
        />
        <CardItem
          icon={<FaWrench />}
          title="Work on Windows, Linux, Mac, And More"
          description="PrivatizeFace works online in the cloud. Because of this, you don't need to download   software and you can use the PrivatizeFace on all devices, operating systems, and popular browsers."
        />
        <CardItem
          icon={<FaCloud />}
          title="Top-Quality Learning"
          description="We guarantee nearly 100% results with our large data sets and advanced artificial  intelligence model. Our artificial intelligence model, trained with the support of many companies,   gives better results with every update."
        />
      </div>
      {/* Başka kartlar koyabiliriz. */}
    </div>
  );
};

export default Card;
