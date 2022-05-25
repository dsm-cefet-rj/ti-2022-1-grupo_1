import React from "react";
import "./CardHome.css";
import OfferHome from "./../../offer/OfferHome"
import tenis from "./../../../assets/nike-dunk.png";

 
function CardHome (props) {
  
    return (
      <div className="card">
        <div className="picture">
          <img className="product" src={tenis} />
        </div>
        <div className="content">
          <p className="titlehome">{props.card.title}</p>
          <p className="type">{props.card.type}</p>
        </div>
        <OfferHome card={props.card.value}></OfferHome>
        </div>
    );
  }


export default CardHome;