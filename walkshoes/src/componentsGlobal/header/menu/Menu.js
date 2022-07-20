
import { useSelector } from "react-redux";
import React, { useState } from "react";

// [Router]
import { Link, useNavigate, uses } from "react-router-dom";

// [Assets]
import logo from "./../../../assets/logo.png";

// [CSS]
import "./Menu.css";

export default function Menu() {
  const loadingCar = useSelector(state => state.carrinho.loading);
  const loadingFav = useSelector(state => state.fav.loading);
  var token = localStorage.getItem("token");
  const [isLogged, setLogged] = useState(false);

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
          
            {loadingCar == 'done' ? (
              <>
                  <li>
                    <Link to="/carrinho">Carrinho</Link>
                  </li>
                <hr/>
              </>
            ) : (
              <></>
            )}
            {loadingFav == 'done' ? (
              <>
                  <li>
                    <Link to="/favoritos">Favoritos</Link>
                  </li>
                <hr/>
              </>
            ) : (
              <></>
            )}
            {loadingCar && loadingFav == 'done' ? (
              <li>
                <Link to="/" onClick={() => { localStorage.clear(); window.location.reload(); }}>Sair</Link>
              </li>
            ) : (
              <>
                <li>
                  { isLogged &&
                    <Link to="/login">Entrar</Link>
                  }
              </li>
            <hr/>
              <li>
                {
                  isLogged &&
                  <Link to="/cadastro">Inscrever-se</Link>
                }
              </li>
              </>
            )}
        </ul>
      </div>
    </header>
  );
}