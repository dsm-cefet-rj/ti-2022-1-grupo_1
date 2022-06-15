import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillCreditCard, AiOutlineBarcode} from "react-icons/ai"
import {IoHomeSharp} from "react-icons/io5";
import {FaMoneyCheckAlt, FaEdit} from "react-icons/fa"
import Menu from "../../componentsGlobal/header/menu/Menu";
import Footer from "../../componentsGlobal/footer/Footer";

function DadosEntrega() {
  // gerenciamento de dados
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");

  function handleSubmit(event) {
    const entrega = [];
    event.preventDefault();

    entrega.push({
      cep,
      rua,
      complemento
    });

    if (!cep || !rua || !complemento) {
      alert("preencha todos os campos!");
    } else {
      fetch('http://localhost:3000/entrega', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(entrega)
      }).then(() =>{
        console.log("Sucess");
        handlePagamento();
      })
    }
  }

  const navigate = useNavigate();

  function handleDadosPessoais(){
    navigate("/dadospessoais")
  }

  function handlePagamento() {
    navigate("/tipopagamento");
  }

  return (
    <>
      <Menu name="Carrinho"></Menu>
      <div className="div-pagamento">
      <h2> FINALIZAR COMPRA</h2>
      <div className="content-wr">
          <div>
            <form className="dados" onSubmit={handleSubmit}>
              <div className="div-etapa-entrega">
                <span> <IoHomeSharp/> ENTREGA</span>
              </div>
              <div>
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
          <div className="card-entrega">
            <span><BsFillPersonFill/> DADOS PESSOAIS <button type="button" onClick={handleDadosPessoais}> <FaEdit/></button></span> 
            <h5>Editar dados pessoais!</h5>
          </div>
          <div className="card-entrega">
            <span> <AiFillCreditCard/> PAGAMENTO </span> 
            <h5>Aguardando o preenchimento dos dados!</h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DadosEntrega;
