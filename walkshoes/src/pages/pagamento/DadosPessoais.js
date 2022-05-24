import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../components/header/menu/Menu'
import Footer from '../../components/footer/Footer'
import "./styles.css"

const DadosPessoais = () => {

    const[email, setEmail] = useState();
    const[nome, setNome] = useState();
    const[cpf, setCpf] = useState();
    const[telefone, setTelefone] = useState();

    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();

        if(!email || !nome || !cpf || !telefone ){
            alert("preencha todos os campos!")
        }
        else{
            handleEntrega();
        }
    }

    function handleEntrega(){
        navigate('/dadosentrega');
    };


  return (
    <>
    <Menu/>
        <h2> FINALIZAR COMPRA</h2>
            <div className="div-etapa-pessoal"> 
                <span> DADOS PESSOAIS</span>
            </div>
            <div >
                <form className="dados" onSubmit={handleSubmit}>
                    <div>
                        <label> Email </label>
                        <input type="text" placeholder="Digite seu Email" name="email" onChange={(event) => setEmail(event.target.value)}/> 

                        <label> Nome </label>
                        <input type="text" placeholder="Digite seu nome" name="nome" onChange={(event) => setNome(event.target.value)}/>

                        <label> CPF </label>
                        <input type="number" placeholder="Digite seu CPF" name="CPF" onChange={(event) => setCpf(event.target.value)}/>

                        <label> Telefone </label>
                        <input type="number" placeholder="Digite seu telefone" name="telefone" onChange={(event) => setTelefone(event.target.value)}/>

                        <button className="btn-proxima" type="submit" value="entrega">IR PARA A ENTREGA</button>
                    </div>
                </form>
            </div>
            <Footer/>
    </>
    
  )
}

export default DadosPessoais