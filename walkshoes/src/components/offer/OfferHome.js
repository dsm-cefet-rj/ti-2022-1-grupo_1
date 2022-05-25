import React from "react";
import "./OfferHome.css";
import money from "../../assets/real-icon.png";


export default function OfferHome(props){

    return (
      <div className="offer">
          <img className="money" src={money} />
        <p className="value">
          {props.card}
        </p>
      </div>
    );
  }

