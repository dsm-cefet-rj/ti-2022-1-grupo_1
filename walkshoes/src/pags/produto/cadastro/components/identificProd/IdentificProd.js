import React from "react";
import './IdentificProd.css'

const IdentificProd = props => {
  return (
    <div className="ident">
      <h3 className="ident_title">Identificação do produto</h3>

      <form className="ident_form">
        <div className="ident_content">
          <label className="ident_label">Código:</label>
          <input
            className="ident_input"
            type="text"
            name="id"
            value={props.card.id}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

        <div className="ident_content">
          <label className="ident_label">Título:</label>
          <input
            className="ident_input"
            type="text"
            name="nome"
            value={props.card.nome}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>
      </form>
    </div>
  )
}

export default IdentificProd
