import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.png";
import "./Menu.css";

export default class Menu extends React.Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /> </Link>
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
