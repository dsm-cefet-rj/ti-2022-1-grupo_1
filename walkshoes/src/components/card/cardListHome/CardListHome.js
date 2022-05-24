import React from "react";
import CardHome from "../cardHome/CardHome";
import "./CardListHome.css";
import Search from "../../search/Search"

export default class CardListHome extends React.Component {
  constructor(props) {
    super(props);
    this.info = {
      title: "Nike Air-Max Axis Premium",
      type: "Masculino",
      value: "650,00",
    };
  }

  render() {
    return (
      <div className="contentlist">
        <Search></Search>
        <div className="list">
          <CardHome info={this.info}></CardHome>
          <CardHome info={this.info}></CardHome>
          <CardHome info={this.info}></CardHome>
          <CardHome info={this.info}></CardHome>
          <CardHome info={this.info}></CardHome>
          <CardHome info={this.info}></CardHome>
          <CardHome info={this.info}></CardHome>
          <CardHome info={this.info}></CardHome>
        </div>
      </div>
    );
  }
}

