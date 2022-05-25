import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IdentificProd from "../identificProd/IdentificProd";
import InfoProd from "../infoProd/InfoProd";
import "./Form.css";

export default function Form(props){

  const [card, setCard] = useState ({});

  function handleUpdatedStatus(e){
  setCard({...card, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    props.setCards(props.cards.concat(card));
    navigate('/')
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


