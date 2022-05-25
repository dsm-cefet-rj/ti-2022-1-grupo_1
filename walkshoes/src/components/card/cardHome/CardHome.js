import React from "react";
import "./CardHome.css";
import OfferHome from "./../../offer/OfferHome"
 
function CardHome (props) {
  console.log(props)
    return (
      <div className="card">
        <div className="picture">
          <img className="product" src={props.card.img} />
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