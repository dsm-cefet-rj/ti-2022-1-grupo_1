import React from "react";
import "./InfoProd.css";

const InfoProd = (props) => {
  return (
    <div className="info">
      <h3 className="info_title">Informações do produto</h3>
      <form className="info_form">
        <div className="info_img">
          <label className="info_subtitle">Imagem:</label>
          <input
            className="ident_input"
            type="text"
            name="img"
            value={props.card.img}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

         <div className="info_categoria">
          <p className="info_subtitle">Categoria:</p>
          <label>
            <input type="radio" name="categoria" value='masculino' onChange={props.handleUpdatedStatus} />
            Masculino
          </label>
          <label>
            <input type="radio" name="categoria"  value='feminino' onChange={props.handleUpdatedStatus}  />
            Feminino
          </label>
          <label>
            <input type="radio" name="categoria"  value='infantil' onChange={props.handleUpdatedStatus} />
            Infantil
          </label>
          <label>
            <input type="radio" name="categoria"  value='esportivo' onChange={props.handleUpdatedStatus} />
            Esportivo
          </label>
        </div>

        <div className="ident_estado">
          <label className="info_label">Quantidade:</label>
          <input
            className="info_input"
            type="text"
            name="quantidade"
            value={props.card.quantidade}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

        <div className="info_tamanho">
          <label className="info_label">Tamanho:</label>
          <input
            className="info_input"
            type="text"
            name="tamanho"
            value={props.card.tamanho}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

        <div className="ident_estado">
          <label className="info_label">Estado:</label>
          <input
            className="info_input"
            type="text"
            name="estado"
            value={props.card.estado}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

        <div className="info_value">
          <label className="info_subtitle">
            Preço Venda:
            <input
              className="input_text"
              type="number"
              name="valor"
              value={props.card.valor}
              onChange={props.handleUpdatedStatus}
            ></input>
          </label>
        </div>
      </form>
    </div>
  );
};

export default InfoProd;
