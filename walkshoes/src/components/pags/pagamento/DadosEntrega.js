import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Menu from "../../header/menu/Menu";
import Footer from "../../footer/Footer";

function DadosEntrega() {
  // gerenciamento de dados
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!cep || !rua || !complemento) {
      alert("preencha todos os campos!");
    } else {
      handlePagamento();
    }

    console.log(cep);
  }

  const navigate = useNavigate();

  function handlePagamento() {
    navigate("/tipopagamento");
  }

  return (
    <>
      <Menu name="Carrinho"></Menu>
      <div className="div-pagamento">
      <h2> FINALIZAR COMPRA</h2>
      <div className="div-etapa-entrega">
        <span> ENTREGA</span>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="dados">
            <label> CEP </label>
            <input
              type="text"
              placeholder="Digite seu CEP"
              name="cep"
              onChange={(event) => setCep(event.target.value)}
            />

            <label> Rua </label>
            <input
              type="text"
              placeholder="Digite sua Rua"
              name="rua"
              onChange={(event) => setRua(event.target.value)}
            />

            <label> Complemento </label>
            <input
              type="text"
              placeholder="Digite o Complemento"
              name="Complemento"
              onChange={(event) => setComplemento(event.target.value)}
            />

            <button className="btn-proxima" type="submit" value="pagamento">
              IR PARA PAGAMENTO
            </button>
          </div>
        </form>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default DadosEntrega;
