// [React]
import React from "react";
import { useSelector } from "react-redux";

// [Router]
import { Link, useNavigate } from "react-router-dom";

// [Assets]
import logo from "./../../../assets/logo.png";

// [CSS]
import "./Menu.css";

export default function Menu() {
  const auth = localStorage.getItem("isAuthenticated");

  function Reload() {
    localStorage.clear();
    window.location.reload();
  }

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
          {auth ? (
            <>
              <li>
                <Link to="/carrinho">Carrinho</Link>
              </li>
            <hr/>
              <li>
                <Link to="/favoritos">Favoritos</Link>
              </li>
            <hr/>
              <li>
                <Link to="/" onClick={() => {Reload}}>Sair</Link> {/* <-- ruim */}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Entrar</Link>
              </li>
            <hr/>
              <li>
                <Link to="/cadastro">Inscrever-se</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}