import React from "react";

import "../App.css";
import { Button, ACBrochureButton, DCBrochureButton } from "./Button";
import video from "../assets/ev-thumbnail-video.mp4";
import "./HomeContent.css";

function HomeContent() {
  return (
    <div className="home-container">
      <video className="video2" src={video} autoPlay loop muted />
      <h1>
        <span>EV</span> Charger
      </h1>
      <p>Power Router</p>
      <p className="thirdp">
        Electrify your fleet faster and easier with <span>BaseEV+</span>
      </p>
      <div className="home-btns">
        <ACBrochureButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          AC Brochure
        </ACBrochureButton>
      </div>
      <div className="home-btns">
        <DCBrochureButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          DC Brochure
        </DCBrochureButton>
      </div>
    </div>
  );
}

export default HomeContent;