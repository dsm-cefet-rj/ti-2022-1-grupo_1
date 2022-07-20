import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillCreditCard, AiOutlineBarcode} from "react-icons/ai"
import {IoHomeSharp} from "react-icons/io5";
import {FaMoneyCheckAlt, FaEdit} from "react-icons/fa"
import Menu from "../../componentsGlobal/header/menu/Menu";
import Footer from "../../componentsGlobal/footer/Footer";
import Modal from "../../componentsGlobal/modal/Modal";


function TipoPagamento() {
  const navigate = useNavigate();

  function handleCartao() {
    navigate("/pagamento");
  }

  function handleDados(){
    navigate("/dadospessoais")
  }

  function handleEntrega(){
    navigate("/dadosentrega")
  }
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Menu name="Carrinho"></Menu>
      <div className="div-pagamento">
        <h2> FINALIZAR COMPRA</h2>
        <div className="content-wr">       
          <div className="pagamento">
            <div className="div-etapa-pagamento">
              <span>PAGAMENTO</span>
            </div>
            <label>Selecione a forma de pagamento</label>
            <button className="boleto"><AiOutlineBarcode/>  Boleto Bancário</button>
            <button  onClick={() => {setModalOpen(true);}} className="pix"> <FaMoneyCheckAlt/> Pix</button>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <button className="cartao"> <AiFillCreditCard/>Cartão de crédito</button>
          </div>
          <div className="card-entrega">
              <span><BsFillPersonFill/> DADOS PESSOAIS <button type="button" onClick={handleDados}> <FaEdit/></button></span> 
              <h5>Editar dados pessoais!</h5>
          </div>
          <div className="card-entrega">
            <span><IoHomeSharp/> ENTREGA <button type="button" onClick={handleEntrega}> <FaEdit/></button></span> 
            <h5>Editar dados da entrega!</h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TipoPagamento;
