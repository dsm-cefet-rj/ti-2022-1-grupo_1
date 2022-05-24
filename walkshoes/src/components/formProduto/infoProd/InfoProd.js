import React from "react";
import "./InfoProd.css";

const InfoProd = () => {
  return (
    <div className="info">
      <h3 className="info_title">Informações do produto</h3>
      <form className="info_form">
        <div className="info_img">
          <label className="info_subtitle" for="img">Imagem:</label>
          <input type="file" id="img" name="img" />
        </div>

        <div className="info_categoria">
          <p className="info_subtitle">Categoria:</p>
          <input type="radio" id="masc" name="title" />
          <label for="masc">Masculino</label>
          <input type="radio" id="fem" name="title" />
          <label for="fem">Feminino</label>
          <input type="radio" id="inf" name="title" />
          <label for="inf">Infantil</label>
          <input type="radio" id="esp" name="title" />
          <label for="esp">Esportivo</label>
        </div>

        <div className="info_tamanho">
          <p className="info_subtitle">Tamanhos:</p>
          <div className="primary">
            <input type="checkbox" id="1" name="title" />
            <label for="1">29/30</label>
            <input type="checkbox" id="2" name="title" />
            <label for="2">31/32</label>
            <input type="checkbox" id="3" name="title" />
            <label for="3">33/34</label>
            <input type="checkbox" id="4" name="title" />
            <label for="4">35/36</label>
          </div>
          <div className="secundary">
            <input type="checkbox" id="5" name="title" />
            <label for="5">37/38</label>
            <input type="checkbox" id="6" name="title" />
            <label for="6">39/40</label>
            <input type="checkbox" id="7" name="title" />
            <label for="7">41/42</label>
            <input type="checkbox" id="8" name="title" />
            <label for="8">43/44</label>
          </div>
        </div>

        <div className="info_value">
          <label className="info_subtitle" for="value">Preço Venda:</label>
          <input
            className="input_text"
            type="text"
            id="value"
            name="title"
          ></input>
        </div>

      </form>
    </div>
  );
};

export default InfoProd;
