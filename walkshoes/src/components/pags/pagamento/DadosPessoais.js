import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.css"

const DadosPessoais = () => {

    const navigate = useNavigate();

    function handleEntrega  ()  {
        navigate('/dadosentrega');
    };


  return (
    <>
    <Menu></Menu>
        <h2> FINALIZAR COMPRA</h2>
            <div className="div-etapa-pessoal"> 
                <span> DADOS PESSOAIS</span>
            </div>
            <div >
                <form className="dados">
                    <div>
                        <label> Email </label>
                        <input type="text" placeholder="Digite seu Email" name="email" required/> 

                        <label> Nome </label>
                        <input type="text" placeholder="Digite seu nome" name="nome" required/>

                        <label> CPF </label>
                        <input type="number" placeholder="Digite seu CPF" name="CPF" required/>

                        <label> Telefone </label>
                        <input type="number" placeholder="Digite seu telefone" name="telefone" required/>

                        <button onClick={handleEntrega}>IR PARA A ENTREGA</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
    </>
    
  )
}

export default DadosPessoais