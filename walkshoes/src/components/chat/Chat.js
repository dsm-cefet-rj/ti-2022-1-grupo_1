import React from "react";
import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chat = () => {
  return (
    <>
      <input type="checkbox" id="click"/>
              <label for="click">
                  <i> <FontAwesomeIcon icon="fa-solid fa-message" /></i>
                  <i class="fas fa-times"></i>
              </label>
            <div class="wrapper">
                <div class="head-text">
                    Tem um tenis para vender e está em boas condições? Chama nós!
                </div>
                <div class="chat-box">
                    <div class="desc-text">
                    Preencha seus Dados abaixo
                    </div>
                    <form action="#">
                    <div class="field">
                        <input type="text" placeholder="Nome" required/>
                    </div>
                    <div class="field">
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div class="field textarea">
                        <textarea cols="20" rows="10" placeholder="Conta mais sobre o tênis" required></textarea>
                    </div>
                    <div class="field">
                        <button type="submit">Iniciar Chat</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chat;
