import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillCreditCard, AiOutlineBarcode} from "react-icons/ai"
import {IoHomeSharp} from "react-icons/io5";
import Chat from "../../componentsGlobal/chat/Chat";
import Menu from "../../componentsGlobal/header/menu/Menu";
import Footer from "../../componentsGlobal/footer/Footer";
import "./styles.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';


const schema = yup.object().shape({
  email: yup.string().required(),
  nome: yup.string().required(),
  cpf: yup.string().required(),
  telefone: yup.string().required(),
})

const DadosPessoais = () => {
  // const [email, setEmail] = useState();
  // const [nome, setNome] = useState();
  // const [cpf, setCpf] = useState();
  // const [telefone, setTelefone] = useState();


const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  })

  const navigate = useNavigate();

  const onSubmit = (data) => axios.post("http://localhost:8080/postPessoal",{
    email: data.email,
    nome: data.nome,
    cpf: data.cpf,
    telefone: data.telefone
  }).then((res) =>{
    // debugger;
    // console.log("entrou");
    handleEntrega();
  }) 

  // function handleSubmit(event) {
  //   const pessoais = [];
  //   event.preventDefault();
  //   pessoais.push({
  //     email,
  //     nome,
  //     cpf,
  //     telefone
  //   });

  //   //faltando id do usuario
  //   console.log(pessoais);
  //   if (!email || !nome || !cpf || !telefone) {
  //     alert("preencha todos os campos!");
  //   } else{

  //     axios.post("http://localhost:3000/dadosPessoais"),{

  //     }

    //   fetch('http://localhost:3000/dadosPessoais', {
    //        method: 'POST',
    //        headers: { "Content-Type": "application/json"},
    //        body: JSON.stringify(pessoais)
    //    }).then(() =>{
    //         console.log("Sucess");
    //         handleEntrega();
    //    })

  //   }
  // }

  function handleEntrega(){
    navigate("/dadosentrega");
  }

  return (
    <>
      <Menu name="Carrinho"></Menu>
      <div className="div-pagamento">
        <h2> FINALIZAR COMPRA</h2>
        <div className="content-wr">
          <div>
            <form className="dados" onSubmit={handleSubmit(onSubmit)}>
              <div className="div-etapa-pessoal">
                <span> <BsFillPersonFill/> DADOS PESSOAIS</span>
              </div>
              <div>
                <label> Email </label>
                <input
                  type="text"
                  placeholder="Digite seu Email"
                  name="email"
                  {...register("email")}
                  // onChange={(event) => setEmail(event.target.value)}
                />

                <label> Nome </label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  name="nome"
                  {...register("nome")}
                  //onChange={(event) => setNome(event.target.value)}
                />

                <label> CPF </label>
                <input
                  type="number"
                  placeholder="Digite seu CPF"
                  name="cpf"
                  {...register("cpf")}
                  //onChange={(event) => setCpf(event.target.value)}
                />

                <label> Telefone </label>
                <input
                  type="number"
                  placeholder="Digite seu telefone"
                  name="telefone"
                  {...register("telefone")}
                  //onChange={(event) => setTelefone(event.target.value)}
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
