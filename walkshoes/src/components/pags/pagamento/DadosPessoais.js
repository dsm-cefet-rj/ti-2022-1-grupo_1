import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillCreditCard, AiOutlineBarcode} from "react-icons/ai"
import {IoHomeSharp} from "react-icons/io5";
import {FaMoneyCheckAlt, FaEdit} from "react-icons/fa"
import Chat from "../../chat/Chat";
import Menu from "../../header/menu/Menu";
import Footer from "../../footer/Footer";
import "./styles.css";

const DadosPessoais = () => {
  const [email, setEmail] = useState();
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [telefone, setTelefone] = useState();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !nome || !cpf || !telefone) {
      alert("preencha todos os campos!");
    } else {
      handleEntrega();
    }
  }

  function handleEntrega(){
    navigate("/dadosentrega")
  }

  return (
    <>
      <Menu name="Carrinho"></Menu>
      <div className="div-pagamento">
        <h2> FINALIZAR COMPRA</h2>
        <div className="content-wr">
          <div>
            <form className="dados" onSubmit={handleSubmit}>
              <div className="div-etapa-pessoal">
                <span> <BsFillPersonFill/> DADOS PESSOAIS</span>
              </div>
              <div>
                <label> Email </label>
                <input
                  type="text"
                  placeholder="Digite seu Email"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                />

                <label> Nome </label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  name="nome"
                  onChange={(event) => setNome(event.target.value)}
                />

                <label> CPF </label>
                <input
                  type="number"
                  placeholder="Digite seu CPF"
                  name="CPF"
                  onChange={(event) => setCpf(event.target.value)}
                />

                <label> Telefone </label>
                <input
                  type="number"
                  placeholder="Digite seu telefone"
                  name="telefone"
                  onChange={(event) => setTelefone(event.target.value)}
                />

                <button className="btn-proxima" type="submit" value="entrega">
                  IR PARA A ENTREGA
                </button>
              </div>
            </form>
          </div>
          <div className="card-entrega">
              <span> <IoHomeSharp/> DADOS ENTREGA </span> 
              <h5>Aguardando o preenchimento dos dados!</h5>
          </div>
          <div className="card-entrega">
            <span> <AiFillCreditCard/> PAGAMENTO </span> 
            <h5>Aguardando o preenchimento dos dados!</h5>
          </div>
        </div>
      </div>
      <Chat/>
      <Footer />
    </>
  );
};

export default DadosPessoais;
