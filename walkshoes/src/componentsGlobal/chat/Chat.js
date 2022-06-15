import React, { useState } from "react";
import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chat = () => {

    const [isPending, setIsPending] = useState(false);
    
    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };
    
   const handleSubmit = (e) => {
       const chat = [];
       e.preventDefault();
        setIsPending(true);
        chat.push({
            "nome": e.target.form[0].value,
            "email": e.target.form[1].value,
            "text": e.target.form[2].value,
            "id": 1,
            "idUsuario": 1
           }) ;
       
       fetch('http://localhost:3000/chat', {
           method: 'POST',
           headers: { "Content-Type": "application/json"},
           body: JSON.stringify(chat)
       }).then(() =>{
            console.log("Sucess");
            setIsPending(false);
       })
   }

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
                            <input  type="text" placeholder="Nome" required/>
                        </div>
                        <div className="field">
                            <input type="email" placeholder="Email" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="20" rows="10" placeholder="Conta mais sobre o tênis" required></textarea>
                        </div>
                        <div className="field">
                            { !isPending && <button onClick={handleSubmit} type="submit">Enviar</button>}
                            { isPending && <button onClick={handleSubmit} type="submit">Enviando Chat ...</button>}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chat;
