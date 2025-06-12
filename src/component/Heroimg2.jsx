import React from "react";
import "./Heroimg2.css";
import img2 from "../assets/dick.JPG";
import { Link } from "react-router-dom";
function Heroimg2() {
  return (
    <div className="hero-img2">
      <div className="content">
        <div className="img-container">
          <img src={img2} className="img2" alt="Profile" />
        </div>
      </div>
    </div>
  );
}
export default Heroimg2;