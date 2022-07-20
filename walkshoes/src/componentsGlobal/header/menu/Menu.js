// [React]
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// [Router]
import { Link, useNavigate } from "react-router-dom";

// [Assets]
import logo from "./../../../assets/logo.png";

// [CSS]
import "./Menu.css";

import { httpGet } from '../../../utils'

export default function Menu() {
  const auth = localStorage.getItem("isAuthenticated");
  const [ username, setUsername ] = useState(null);

  const getName = async () => {
    try { 
      let token = localStorage.getItem("token");
      let url = `http://localhost:3000/api/users/profile`;
      let endpoint = `${url}${(token ? `/?token=${token}` : '')}`;
      let user = await httpGet(endpoint);
      setUsername(user.name);
    } catch { 
      // :C
    }
  }

  useEffect(() => {
    getName();
  }, [auth])

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
              {username != null ? (
                <>
                    <li className="menu-welcome">
                      <p>Bem-vindo(a) {username}</p>
                      <hr/>
                    </li>
                </>
              ) : (
                <></>
              )}
              <li>
                <Link to="/carrinho">Carrinho</Link>
                <hr/>
              </li>
              <li>
                <Link to="/favoritos">Favoritos</Link>
                <hr/>
              </li>
              <li>
                <Link to="/" onClick={() => {Reload()}}>Sair</Link> {/* <-- ruim */}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Entrar</Link>
                <hr/>
              </li>
              <li>
                <Link to="/cadastro">Inscrever-se</Link>
                <hr/>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}