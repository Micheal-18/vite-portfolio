import React from "react";
import "./Heroimg.css";
import { Link } from "react-router-dom";
import img1 from "../assets/me.jpg";

function Heroimg() {
  return (
    <div className="hero-img">
      <div className="mask">
        <div className="content">
          <div className="left-section">
            <div className="img-contain">
              <img src={img1} className="img" alt="Eleke Michael profile picture" />
            </div>
          </div>
          <div className="right-section">
            <h1>Hi, I'm Eleke Michael</h1>
            <p>
              I am a Frontend Developer with a passion for creating dynamic and responsive web applications.
              My expertise lies in React, where I build user-friendly interfaces that enhance user experience.
            </p>
            <Link to="/b" className="btn">Project</Link>
            <Link to="/f" className="btn-light">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
