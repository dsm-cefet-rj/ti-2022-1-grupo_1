import React from "react";
import "./CardHome.css";
import OfferHome from "./../../offer/OfferHome"
import tenis from "./../../../assets/nike-dunk.png";

function CardHome (props) {
  console.log(props)
    return (
      <div className="card">
        <div className="picture">
          <img className="product" src={tenis} />
        </div>
        <div className="content">
          <p className="titlehome">{props.info.title}</p>
          <p className="type">{props.info.type}</p>
        </div>
        <OfferHome></OfferHome>
        </div>
    );
  }


export default CardHome;