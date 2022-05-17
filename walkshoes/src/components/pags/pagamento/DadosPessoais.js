import React from 'react'
import Menu from '../../header/menu/Menu'
import Footer from '../../footer/Footer'
import "./styles.css"

const DadosPessoais = () => {
  return (
    <>
        <h2> FINALIZAR COMPRA</h2>
            <div class="div-etapa-pessoal"> 
                <span> DADOS PESSOAIS</span>
            </div>
            <div >
                <form class="dados">
                    <div>
                        <label> Email </label>
                        <input type="text" placeholder="Digite seu Email" name="email" required/> 

                        <label> Nome </label>
                        <input type="text" placeholder="Digite seu nome" name="nome" required/>

                        <label> CPF </label>
                        <input type="number" placeholder="Digite seu CPF" name="CPF" required/>

                        <label> Telefone </label>
                        <input type="number" placeholder="Digite seu telefone" name="telefone" required/>

                        <button>IR PARA A ENTREGA</button>
                    </div>
                </form>
            </div>
    </>
    
  )
}

export default DadosPessoais