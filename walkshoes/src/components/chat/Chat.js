import React from "react";
import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };


const Chat = () => {
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
                    <form action="#">
                    <div className="field">
                        <input type="text" placeholder="Nome" required/>
                    </div>
                    <div className="field">
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div className="field textarea">
                        <textarea cols="20" rows="10" placeholder="Conta mais sobre o tênis" required></textarea>
                    </div>
                    <div className="field">
                        <button type="submit">Iniciar Chat</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chat;
