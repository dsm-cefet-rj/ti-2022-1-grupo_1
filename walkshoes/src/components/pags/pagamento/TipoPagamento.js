import React from "react";
import "./styles.css";
import Menu from "../../header/menu/Menu";
import Footer from "../../footer/Footer";
import { useNavigate } from "react-router-dom";

function TipoPagamento() {
  const navigate = useNavigate();

  function handleCartao() {
    navigate("/pagamento");
  }

  return (
    <>
      <Menu name="Carrinho"></Menu>
      <div className="div-etapa-pagamento">
        <span>PAGAMENTO</span>
      </div>
      <div className="pagamento">
        <label>Selecione a forma de pagamento</label>
        <button className="boleto"> Boleto Bancário</button>
        <button className="pix"> Pix</button>
        <button className="cartao" onClick={handleCartao}>
          {" "}
          Cartão de crédito
        </button>
      </div>
      <Footer />
    </>
  );
}

export default TipoPagamento;
