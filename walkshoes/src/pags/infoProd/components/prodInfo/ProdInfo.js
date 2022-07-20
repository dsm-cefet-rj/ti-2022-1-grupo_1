import './prodInfo.css'
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { postCard as postF } from '../../../../store/favSlice.js'
import { postCard as postC } from '../../../../store/carrinhoSlice'
import { useSelector } from 'react-redux'
import { selectById as selectTotalCars } from '../../../../store/carrinhoSlice'
import { selectById as selectTotalFavs } from '../../../../store/favSlice.js';

export default function ProdInfo(props) {
  var token = localStorage.getItem("token");
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    if(token != undefined || null)
        setLogged(true);
  }, []);

  function redirecionarParaLogin(){
    navigate("/login");
  };
  const content = props.content;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isCar = useSelector((state) => selectTotalCars(state, content.id));
  const isFav = useSelector((state) => selectTotalFavs(state, content.id));

  const auth = localStorage.getItem("isAuthenticated");

  function handleNew(t) {
    switch (t) {
      case 'Fav':
        dispatch(postF(content));
        // alert('Adicionado aos favoritos');
        // navigate('/favoritos');
        break;
      case 'Car':
        dispatch(postC(content));
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
        {isLogged && <button className="productbutton" onClick={() => handleNew("Car")}disabled={isCar}>
          Adicionar ao carrinho
        </button>}
        {!isLogged && <button className="productbutton" onClick={() => redirecionarParaLogin()} >
          Adicionar ao carrinho
        </button>}
        {auth ? (
          <button className="productbutton" onClick={() => handleNew("Fav")} disabled={isFav}>
            {isFav ? <>Favoritado</> : <>Favoritar</>}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
