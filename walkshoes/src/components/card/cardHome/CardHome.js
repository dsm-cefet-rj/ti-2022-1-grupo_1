import React from "react";
import "./CardHome.css";
import OfferHome from "./../../offer/OfferHome"
 
function CardHome (props) {
    return (
      <div className="card">
        <div className="picture">
          <img className="product" src={props.card.img} />
        </div>
        <div className="content">
          <p className="titlehome">{props.card.nome}</p>
          <p className="type">{props.card.categoria}</p>
        </div>
        <OfferHome card={props.card.preco}></OfferHome>
        </div>
    );
  }


export default CardHome;