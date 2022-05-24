import React from "react";
import IdentificProd from "../identificProd/IdentificProd";
import InfoProd from "../infoProd/InfoProd";
import "./Form.css";

const Form = () => {
  return (
    <div className="formgeral">
        <h3 className="form_title">Cadastro de Produto</h3>
      <form>
        <IdentificProd></IdentificProd>
        <InfoProd></InfoProd>
        <div className="button">
          <input className="input_submit" type="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
