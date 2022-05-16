import React from "react";
import logo from "./../../assets/logo.png";
import "./Menu.css";

export default class Menu extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="options">
          <ul>
            <li>
              Carrinho
              <hr />
            </li>
            <li>Login</li>
          </ul>
        </div>
      </header>
    );
  }
}
