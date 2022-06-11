// [React]
import React from "react";

// [Router]
import { Link, useNavigate } from "react-router-dom";

// [Assets]
import logo from "./../../../assets/logo.png";

// [CSS]
import "./Menu.css";

export default function Menu() {
  // [HTML]
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="options">
        <ul>
          <li>
            <Link to="/carrinho">Carrinho</Link>
          </li>
        <hr/>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
        <hr/>
          <li>Login</li>
        </ul>
      </div>
    </header>
  );
}