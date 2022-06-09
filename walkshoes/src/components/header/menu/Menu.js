import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.png";
import "./Menu.css";
import { useNavigate } from 'react-router-dom'

export default function Menu(props) {

  const navigate = useNavigate();

    function handleNavigate(){
        navigate('/carrinho');
    };
  
    return (
      <header>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo" /> </Link>
        </div>
        <div className="options">
          <ul>
            <li onClick={handleNavigate}>
              {props.name}
              <hr />
            </li>
            <li>Login</li>
          </ul>
        </div>
      </header>
    );
  }