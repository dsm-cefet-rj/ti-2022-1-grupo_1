import React, { useEffect } from 'react';
import ProdImg from "../prodImg/ProdImg";
import ProdInfo from "../prodInfo/ProdInfo";
import { fetchData, selectCardsById } from '../../../../store/dataSlice.js';
import { fetchData as fetchCar } from '../../../../store/carrinhoSlice.js';
import { fetchData as fetchFav } from '../../../../store/favSlice.js';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import './ContentInfo.css';


export default function ContentInfo() {

  let { id } = useParams();
  const content = useSelector((state) => selectCardsById(state, id));
  const data = useSelector(state => state.data.loading);
  const car = useSelector(state => state.carrinho.loading);
  const fav = useSelector(state => state.fav.loading);

  const dispatch = useDispatch();
  useEffect(() => {

    if(data == 'idle') {
      dispatch(fetchData());
    }

    if(car == 'idle') {
      dispatch(fetchCar());
    }

    if(fav == 'idle') {
      dispatch(fetchFav());
    }
  }, [])


  
  return (
    <div className="contentinfo">
      {(data == 'done') ? (
        <>
          <ProdImg className="prodimg" content={content}></ProdImg>
          <ProdInfo className="prodinfo" content={content}></ProdInfo>
        </>
        ) : (
        <>
          <p>Carregando...</p>
        </>
        )}
    </div>
  );
}
