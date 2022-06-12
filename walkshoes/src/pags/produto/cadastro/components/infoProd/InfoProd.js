import React from "react";
import "./InfoProd.css";

const InfoProd = (props) => {
  return (
    <div className="info">
      <h3 className="info_title">Informações do produto</h3>
      <form className="info_form">
        <div className="info_img">
          <label className="info_subtitle">
            Imagem:
          </label>
          <input type="file" name="img" />
        </div>

        <div className="info_categoria">
          <p className="info_subtitle">Categoria:</p>
          <label>
            <input type="radio" name="type" value='masculino' onChange={props.handleUpdatedStatus} />
            Masculino
          </label>
          <label>
            <input type="radio" name="type"  value='feminino' onChange={props.handleUpdatedStatus}  />
            Feminino
          </label>
          <label>
            <input type="radio" name="type"  value='infantil' onChange={props.handleUpdatedStatus} />
            Infantil
          </label>
          <label>
            <input type="radio" name="type"  value='esportivo' onChange={props.handleUpdatedStatus} />
            Esportivo
          </label>
        </div>

        <div className="info_tamanho">
          <p className="info_subtitle">Tamanhos:</p>
          <div className="primary">
            <label>
              <input type="checkbox" name="tamanho" />
              29/30
            </label>
            <label>
              <input type="checkbox" name="tamanho"/>
              31/32
            </label>
            <label>
              <input type="checkbox" name="tamanho" />
              33/34
            </label>
            <label>
              <input type="checkbox" name="tamanho"/>
              35/36
            </label>
          </div>
          <div className="secundary">
            <label>
              <input type="checkbox" name="tamanho" />
              37/38
            </label>
            <label>
              <input type="checkbox" name="tamanho"/>
              39/40
            </label>
            <label>
              <input type="checkbox" name="tamanho" />
              41/42
            </label>
            <label>
              <input type="checkbox" name="tamanho"/>
              43/44
            </label>
          </div>
        </div>

        <div className="info_value">
          <label className="info_subtitle">
            Preço Venda:
            <input className="input_text" type="text" name="valor" value={props.card.valor} onChange={props.handleUpdatedStatus} ></input>
          </label>
        </div>
      </form>
    </div>
  );
};

export default InfoProd;
