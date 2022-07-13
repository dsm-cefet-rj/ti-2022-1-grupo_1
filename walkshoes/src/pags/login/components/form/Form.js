import React from "react";
import './Form.css';
import { useNavigate } from 'react-router-dom'
import { httpDelete, httpGet, httpPut, httpPost} from '../../../../utils'

export default function Form(props) {

  const navigate = useNavigate()
  const conta = props.conta;
  
  async function post() {
    let endpoint = `http://localhost:3000/api/users/login`;
    await httpPost(endpoint, conta);
  }

  async function handleSubmit (e) {
    e.preventDefault();
    await post().then(navigate('/'));
  }

  return (
      <form className="form_login" onSubmit={handleSubmit}>
      <h3 className="form_title">Acesso</h3>

      <div className="login_content">
        <label className="login_label">Login:</label>
        <input
          className="login_input"
          type="text"
          name="email"
          value={conta.email}
          onChange={props.handleUpdatedStatus}
        ></input>
      
        <label className="login_label">Senha:</label>
        <input
          className="login_input"
          type="password"
          name="password"
          value={conta.password}
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
