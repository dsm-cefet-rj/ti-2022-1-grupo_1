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
    const [wasSent, setMessage] = useState(false);

    const horaFormatada = new Date( Date.now() ).toLocaleTimeString("pt-br", { hour12: false })
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
      })

    const onSubmit = (data) => axios.post("http://localhost:8080/postChat",{
        nome: data.nome,
        email: data.email,
        text: data.text,
        DataEnvio: horaFormatada,
    }).then((res) =>{
        setMessage(true);
      }) 
    ;
    
    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };


  return (
    <>
      <input type="checkbox" id="click"/>
              <label className="chat-label" htmlFor="click" onClick={scrollUp}>
                  <i> <FontAwesomeIcon icon="fa-solid fa-message" /></i>
                  <i className="fas fa-times"></i>
              </label>
            <div className="wrapper">
                {!wasSent &&
                <div className="head-text">
                    Tem um tenis para vender e está em boas condições? Chama nós!
                </div>
                }
                 {wasSent &&
                <div className="head-text">
                    Mensagem Enviada!
                </div>
                }
                <div className="chat-box">
                    {!wasSent &&
                    <div className="desc-text">
                    Preencha seus Dados abaixo
                    </div>
                    }
                    {wasSent &&
                    <div className="desc-text">
                    Em breve entraremos em contato
                    </div>
                    }
                    { !wasSent &&
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
                            <button  type="submit">Enviar</button>
                        </div>
                    </form>
                    }
                </div>
            </div>
        </>
    );
};

export default Chat;
