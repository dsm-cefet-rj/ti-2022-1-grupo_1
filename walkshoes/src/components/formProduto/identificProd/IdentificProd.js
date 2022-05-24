import React from "react";
import "./IdentificProd.css";

const IdentificProd = () => {
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
            name="title"
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
            name="title"
          ></input>
        </div>

      </form>
    </div>
  );
};

export default IdentificProd;
