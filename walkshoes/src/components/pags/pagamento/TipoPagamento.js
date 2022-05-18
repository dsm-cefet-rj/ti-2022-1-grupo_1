import React from 'react'
import "./styles.css"

function TipoPagamento() {

    
  return (
    <>
        <div className="div-etapa-pagamento"> 
                <span>PAGAMENTO</span>
            </div>
            <div className="pagamento">   
                <label>Selecione a forma de pagamento</label> 
                
                <button className="boleto"> Boleto Bancário</button>
                <button className="pix"> Pix</button>
                <button className="cartao"> Cartão de crédito</button>
        </div>
    </>
  )
}

export default TipoPagamento