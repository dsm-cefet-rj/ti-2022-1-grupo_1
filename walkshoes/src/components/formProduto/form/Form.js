import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IdentificProd from "../identificProd/IdentificProd";
import InfoProd from "../infoProd/InfoProd";
import "./Form.css";

import { useDispatch } from 'react-redux';
import { createCard } from '../../../store/formSlice.js';

export default function Form(props){

  const [card, setCard] = useState ({});
  // const dispatch = useDispatch();

  function handleUpdatedStatus(e){
    setCard({...card, [e.target.name]: e.target.value});
  }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   props.setCards(props.cards.concat(card));
  //   navigate('/')
  // }

  // function handleSubmit (e) {
  //   e.preventDefault();
  //   dispatch(createCard({
  //       id: 0,
  //       nome: card.title,
  //       preco: card.value,
  //       tamanho: 42,
  //       estado: "usado",
  //       quantidade: 1,
  //       img: "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg",
  //   }));
  //   navigate('/');
  // }

  function handleSubmit (e) {
    e.preventDefault();
    
    fetch('http://localhost:3000/tenis', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 0,
        nome: card.title,
        preco: card.value,
        tamanho: 42,
        estado: "usado",
        quantidade: 1,
        img: "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg",
      })
    })

    navigate('/');
  }

const navigate= useNavigate();
  return (
    <div className="formgeral">
        <h3 className="form_title">Cadastro de Produto</h3>
      <form onSubmit={handleSubmit}>
        <IdentificProd card={card} handleUpdatedStatus={handleUpdatedStatus} ></IdentificProd>
        <InfoProd card={card} handleUpdatedStatus={handleUpdatedStatus} ></InfoProd>
        <div className="button">
          <button className="input_submit" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};


