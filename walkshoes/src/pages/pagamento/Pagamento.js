import React, { useState } from 'react'
import Menu from '../../components/header/menu/Menu'
import Footer from '../../components/footer/Footer'
import "./styles.css"

function Pagamento() {

    

  return (
    <>
        <Menu/>
        <div>
            <form className="dados-cartao">
                <div>
                    <label> Número do cartão </label>
                    <input type="number" placeholder="Digite o número do cartão" name="cartao" required/>

                    <label> Nome impresso no cartão </label>
                    <input type="text" placeholder="Digite o nome impresso no cartão" name="nomeCartao" required/>

                    <select className="parcela" form="parcela">
                        <option >Em quantas parcelas deseja pagar?</option>
                        <option >Pagamento a vista R$2.599,98</option>
                        <option >Pagar em 2x R$1299,99</option>
                        <option >Pagar em 3x R$866,66</option>
                    </select>
                </div>    
            </form>
        </div>
        <Footer/>
    </>            
  )
}

export default Pagamento