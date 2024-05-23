import React from 'react';
import homepageVideo from '../assets/homepage.mp4'; // Video dosyasının yolu
import '../styles/BackgroundVideo.css';

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted className="background-video">
      <source src={homepageVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
