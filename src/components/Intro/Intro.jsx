import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/abrish.png";
import glassesimoji from "../../img/glassesimoji.png";
//import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { Navigate, useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I'm</span>
          <span>Eyuel Getachew</span>
          <span>
            Passionated Front-End web & mobile app Developer, producing
            Quality work.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Eyugecho" >
          <img src={Github} alt=""  />
          </a>
          <a href="https://linkedin.com/in/eyuel-getachew-449860252" >
          
          <img src={LinkedIn} alt="" />

          </a>

       
          
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        
        <p style={{position:'absolute' ,paddingTop:'30%',paddingRight:'190%',zIndex:'2',width:'70%',fontFamily:"Neuwelt",textAlign:'justify',lineHeight:'1.5'}}>well-equipped to handle a variety of web and mobile application development tasks, from building dynamic user interfaces with React, managing complex application states with Redux, integrating with APIs for data handling, to developing mobile applications with Flutter.</p>
        <img src={Vector2} alt="" />
        {/* <img src={boy} alt="" /> */}
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
         
          alt=""
        />

        <motion.div
          initial={{ top: "0", left: "0" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div flo"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>
        
        
        <motion.div
          initial={{ top: "0", left: "0" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Mobile" text2="App developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
