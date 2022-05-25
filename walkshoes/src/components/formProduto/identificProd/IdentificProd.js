import React, { useState } from "react";
import "./IdentificProd.css";

export default function IdentificProd(props){

  const [card, setCard] = useState ({});

  function handleUpdatedStatus(e){
  setCard({...card, [e.target.name]: e.target.value});
  }
 
  return (
    <div className="ident">
      <h3 className="ident_title">Identificação do produto</h3>

      <form className="ident_form">

        <div className="ident_content">
          <label className="ident_label" for="title">
            Título:
          </label>
          <input
            className="ident_input"
            type="text"
            id="title"
            name="title"
            value={card.title}
            onChange={handleUpdatedStatus}
          ></input>
        </div>

        <div className="ident_content">
          <label className="ident_label" for="cod">
            Código:
          </label>
          <input
            className="ident_input"
            type="text"
            id="cod"
            name="cod"
            value={card.cod}
            onChange={handleUpdatedStatus}
          ></input>
        </div>

        <div className="ident_content">
          <label className="ident_label" for="brand">
            Marca:
          </label>
          <input
            className="ident_input"
            type="text"
            id="brand"
            name="brand"
            value={card.value}
            onChange={handleUpdatedStatus}
          ></input>
        </div>

      </form>
    </div>
  );
};

