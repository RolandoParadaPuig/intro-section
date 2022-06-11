import { message } from "antd";
import React from "react";
import "./introBodyComponent.css";
export const IntroBodyComponent = () => {
  return (
    <div className={"body--container"}>
      <div className={"body--image-container"}>
        <img
          src="src\images\mobile\image-hero-mobile.png"
          className="body--image-mobile"
        />
        <img
          src="src\images\desktop\image-hero-desktop.png"
          className="body--image-desktop"
        />
      </div>
      <div className="body--main-container">
        <div className="body--text-container">
          <h1 className="body--title">Make remote work</h1>
          <p className="body--text-content">
            Get your team in sync, no matter your location. Streampline
            processes, create team rituals, and watch productivity soar
          </p>
          <button
            onClick={() => {
              message.success("you clicked!");
            }}
            className="body--button"
          >
            Learn more
          </button>
        </div>
        <div className="body--client-container">
          <div className="body--client databiz" />
          <div className="body--client audiophile" />
          <div className="body--client meet" />
          <div className="body--client maker" />
        </div>
      </div>
    </div>
  );
};
