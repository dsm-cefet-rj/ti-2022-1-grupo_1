import './prodInfo.css'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postCard } from '../../../../store/favSlice.js'
import { postCardCarrinho } from '../../../../store/carrinhoSlice'
import { useSelector } from 'react-redux'
import { selectFavsById } from '../../../../store/favSlice.js';

export default function ProdInfo(props) {

  const content = props.content;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ isCar, setIsCar ] = useState(false);
  const [ isFav , setIsFav ] = useState(false);

  // const checkCar = useSelector((state) => selectItemById(state, content.id));  // nome do select é vc que cria
  const checkFav = useSelector((state) => selectFavsById(state, content.id));

  useEffect (() => {
    // if(checkCar) setIsCar(true);
    if(checkFav) setIsFav(true); 
  });

  function handleNew(t) {
    switch (t) {
      case 'Fav':
        dispatch(postCard(content));
        alert('Adicionado aos favoritos');
        // navigate('/favoritos');
        break;
      case 'Car':
        dispatch(postCardCarrinho(content));
        alert('Adicionado ao carrinho');
        navigate('/carrinho');
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
