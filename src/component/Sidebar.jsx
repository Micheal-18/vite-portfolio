import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaPortrait, FaHome, FaFile, FaBriefcase, FaPhone  } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


function Sidebar() {

  const [isHovered, setIsHovered] = useState(false);

  

  return (
    <div className="sidebar" 
         onMouseOver={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
    >
      <nav>
        <ul >
          <li><Link to="/">{isHovered ? ("Home") : (<FaHome size={20} style={{color:"#111", marginRight: "2rem"}} /> )} </Link></li>
          <li><Link to="/b">{isHovered ? ("Personal") : <FaPortrait size={20} style={{color:"#111", marginRight: "2rem"}} />}</Link></li>
          <li><Link to="/c"> {isHovered ? ("Experience") : <FaFile size={20} style={{color:"#111", marginRight: "2rem"}} />}</Link></li>
          <li><Link to="/d">{isHovered ? ("Project") :  <FaBriefcase size={20} style={{color:"#111", marginRight: "2rem"}} />}</Link></li>
          <li><Link to="/e"> {isHovered ? ("Message") : <FaMessage size={20} style={{color:"#111", marginRight: "2rem"}} />}</Link></li>
          <li><Link to="/f">{isHovered ? ("Contact") : <FaPhone size={20} style={{color:"#111", marginRight: "2rem"}} />}</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
