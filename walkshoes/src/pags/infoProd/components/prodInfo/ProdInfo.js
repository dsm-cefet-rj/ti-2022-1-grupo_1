import './prodInfo.css'
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { postCard as postF } from '../../../../store/favSlice.js'
import { postCard as postC } from '../../../../store/carrinhoSlice'
import { useSelector } from 'react-redux'
import { selectFavsById } from '../../../../store/favSlice.js';
import { selectCardsById } from '../../../../store/carrinhoSlice'

export default function ProdInfo(props) {

  const content = props.content;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkCar = useSelector((state) => selectCardsById(state, content.id));
  const checkFav = useSelector((state) => selectFavsById(state, content.id));

  const [ isCar, setIsCar ] = useState(checkCar);
  const [ isFav , setIsFav ] = useState(checkFav);

  function handleNew(t) {
    switch (t) {
      case 'Fav':
        dispatch(postF(content));
        setIsFav(true);
        // alert('Adicionado aos favoritos');
        // navigate('/favoritos');
        break;
      case 'Car':
        dispatch(postC(content));
        setIsCar(true);
        alert('Adicionado ao carrinho');
        // navigate('/carrinho');
        break;
    }
  }

  return (
    <div className="columns">
      <div className="infoprodct">
        <h3 className="titleproduct">{content.nome}</h3>
        <h4 className="categoryproduct">{content.categoria}</h4>
        <p className="valueproduct">{content.valor}</p>
      </div>
      <div className="infoprodct2">
        <p className="tamproduct">{content.tamanho}</p>
        <p className="descriptionproduct">Sem Descrição</p>
      </div>
      <div className="buttonprodct">
        <button className="productbutton" onClick={() => handleNew("Car")} disabled={isCar}>
          Adicionar ao carrinho
        </button>
        <button className="productbutton" onClick={() => handleNew("Fav")} disabled={isFav}>
          {isFav ? <>Favoritado</> : <>Favoritar</>}
        </button>
      </div>
    </div>
  )
}
