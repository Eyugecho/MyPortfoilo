import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color},height:'240px'}}> 
      <img src={emoji} alt="" style={{width:'220px'}}/>
      <span style={{width:'220px'}}>{heading}</span>
      <span style={{width:'220px'}}>{detail}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
