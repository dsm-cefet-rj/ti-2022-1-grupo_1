import React, { useState } from "react";
import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required(),
    text: yup.string().required(),
  })

const Chat = () => {

    const [isPending, setIsPending] = useState(false);

    const horaFormatada = new Date( Date.now() ).toLocaleTimeString("pt-br", { hour12: false })
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
      })

    const onSubmit = (data) => axios.post("http://localhost:8080/postChat",{
        nome: data.nome,
        email: data.email,
        text: data.text,
        DataEnvio: horaFormatada,
    });
    
    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };
    
//    const handleSubmit = (e) => {
//        const chat = [];
//        e.preventDefault();
//         setIsPending(true);
//         chat.push({
//             "nome": e.target.form[0].value,
//             "email": e.target.form[1].value,
//             "text": e.target.form[2].value,
//             "id": 1,
//             "idUsuario": 1
//            }) ;
       
//        fetch('http://localhost:8080/postChat', {
//            method: 'POST',
//            headers: { "Content-Type": "application/json"},
//            body: JSON.stringify(chat)
//        }).then(() =>{
//             console.log("Sucess");
//             setIsPending(false);
//        })
//    }

  return (
    <>
      <input type="checkbox" id="click"/>
              <label className="chat-label" htmlFor="click" onClick={scrollUp}>
                  <i> <FontAwesomeIcon icon="fa-solid fa-message" /></i>
                  <i className="fas fa-times"></i>
              </label>
            <div className="wrapper">
                <div className="head-text">
                    Tem um tenis para vender e está em boas condições? Chama nós!
                </div>
                <div className="chat-box">
                    <div className="desc-text">
                    Preencha seus Dados abaixo
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="field">
                            <input  type="text" placeholder="Nome" name="nome" {...register("nome")} />
                        </div>
                        <div className="field">
                            <input type="email" placeholder="Email" name="email" {...register("email")}/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="20" rows="10" placeholder="Conta mais sobre o tênis" name="text" {...register("text")}></textarea>
                        </div>
                        <div className="field">
                            { !isPending && <button  type="submit">Enviar</button>}
                            { isPending && <button type="submit">Enviando Chat ...</button>}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chat;
