import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>eyuti6834@gmail.com</span>
        <div className="f-icons">
<a href="https://linkedin.com/in/eyuel-getachew-449860252">
<Linkedin color="white" size={"3rem"} />
</a>
         <a href="https://github.com/Eyugecho" >
         <Gitub color="white" size={"3rem"} />
        </a> 
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
