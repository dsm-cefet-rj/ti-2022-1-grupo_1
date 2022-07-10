import React from "react";
import './Form.css';
import { useNavigate } from 'react-router-dom'

export default function Form(props) {
  
    function handleSubmit (e) {
        e.preventDefault();
        navigate('/');
      }

      const navigate = useNavigate()

    return (
        <form className="form_login" onSubmit={handleSubmit}>
        <h3 className="form_title">Acesso</h3>

        <div className="login_content">
          <label className="login_label">Login:</label>
          <input
            className="login_input"
            type="text"
            name="login"
            value={props.conta.login}
            onChange={props.handleUpdatedStatus}
          ></input>
        
          <label className="login_label">Senha:</label>
          <input
            className="login_input"
            type="password"
            name="senha"
            value={props.conta.senha}
            onChange={props.handleUpdatedStatus}
          ></input>
        </div>

          <div className="button">
            <button className="input_submit" type="submit">
              Entrar
            </button>
          </div>
        </form>
    );
  }
  