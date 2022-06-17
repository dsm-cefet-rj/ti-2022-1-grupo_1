import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import IdentificProd from '../identificProd/IdentificProd'
import InfoProd from '../infoProd/InfoProd'
import './Form.css'

import { useDispatch } from 'react-redux';
import { postData } from '../../../../../store/dataSlice';

export default function Form(props) {
  const [card, setCard] = useState({})
  const dispatch = useDispatch();

  function handleUpdatedStatus(e) {
    setCard({ ...card, [e.target.name]: e.target.value })
  }

  // Essa funcao setava o forms diretamente nas props
    // function handleSubmit(e){
    //   e.preventDefault();
    //   props.setCards(props.cards.concat(card));
    //   navigate('/')
    // }

  //Essa funcao escrevia o forms no bd (que acaba caindo nas props pelo fetch)
    // function handleSubmit(e) {
    //   e.preventDefault()

    //   // fetch('http://localhost:3000/tenis', {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json'
    //   //   },
    //   //   body: JSON.stringify(card)
    //   // })

    //   navigate('/')
    // }

    //Essa seta o forms na store (que escreve no bd (que cai nas props))
    function handleSubmit (e) {
      e.preventDefault();
      dispatch(postData(card));
      navigate('/');
    }

  const navigate = useNavigate()
  return (
    <div className="formgeral">
      <h3 className="form_title">Cadastro de Produto</h3>
      <form onSubmit={handleSubmit}>
        <IdentificProd
          card={card}
          handleUpdatedStatus={handleUpdatedStatus}
        ></IdentificProd>
        <InfoProd
          card={card}
          handleUpdatedStatus={handleUpdatedStatus}
        ></InfoProd>
        <div className="button">
          <button className="input_submit" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
