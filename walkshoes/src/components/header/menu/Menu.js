import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.png";
import { useDispatch } from 'react-redux';
import { createCard } from '../../../store/favSlice.js';
import "./Menu.css";
import { useNavigate } from 'react-router-dom'

export default function Menu(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

    function handleNavigate(){
        navigate('/carrinho');
    };
  
    return (
      <header>
        <div className="logo" onClick={handleNew}>
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
    
    function handleNew () {
      dispatch(createCard({
        id: 0,
        nome: "Dunk low",
        preco: 799.99,
        tamanho: 42,
        estado: "usado",
        quantidade: 1,
        img: "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg",
      }));
    }
  }