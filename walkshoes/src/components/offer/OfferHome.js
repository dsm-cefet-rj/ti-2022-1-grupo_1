import React from "react";
import "./OfferHome.css";
import money from "../../assets/real-icon.png";


export default class OfferHome extends React.Component {
  render() {
    return (
      <div className="offer">
          <img className="money" src={money} />
        <p className="value">
          200,00
        </p>
      </div>
    );
  }
}
