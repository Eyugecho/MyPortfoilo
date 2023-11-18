import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import erp_1 from "../../img/erp_1.png";
import website from "../../img/website.png";
import ui_1 from "../../img/ui_1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./Eyuel_CV.pdf";
import { CgWebsite } from "react-icons/cg";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          I have worked on plenty of projects
          <br />
          using ReactJs, React Redux and Api Integration.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          
        >
          
          <Card
      
            emoji={erp_1}
            
            heading={"Odoo ERP System"}
            detail={"ODOO, Phython"}
          />
          
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          
          <Card
            emoji={website}
            heading={"Web app"}
            detail={"Html, Css, JavaScript, ReactJs, Redux"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={ui_1}
            heading={"UI/UX"}
            detail={"I use Figma designs to make products in to reality."}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
