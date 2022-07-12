// [React]
import React, {state, useState, useEffect} from "react";

// [Redux]
import { useSelector, useDispatch } from 'react-redux';
import { selectAllData, fetchData } from '../../store/dataSlice';
import { fetchData as fetchFav } from '../../store/favSlice';

// [Components]
import Menu from "../../componentsGlobal/header/menu/Menu";
import Footer from "../../componentsGlobal/footer/Footer";
import HeaderList from "../../componentsGlobal/header/headerList/HeaderList";
import CardListHome from "./components/card/cardListHome/CardListHome";
import Chat from "../../componentsGlobal/chat/Chat";

const Home = (props) => {

  const cards = useSelector(selectAllData);                   // var - todos os itens no slice
  const loading = useSelector(state => state.data.loading);   // var - 'loading' ou 'done'
  const dispatch = useDispatch();                             // func - pra mandar os dispatches

  // Fetch do bd mockado
    useEffect(() => {
      dispatch(fetchData());
      dispatch(fetchFav());
    }, []);

  // Debug
    // se o fetch falhar
    useEffect(() => {
      if(loading == 'failed') {
        console.warn(loading);
        alert('BD não conectado');
      }
      // else console.log(loading);

    }, [loading]);

    // pra ver as cards
    useEffect(() => {
      if(cards.length) console.log(cards);
      // else console.log('no cards');
    }, [cards]);

  // HTML
  return (
    <>
      <Menu></Menu>
      <HeaderList ></HeaderList>
      {loading == 'done' ? 
        <CardListHome card={cards}></CardListHome>
      : (
        <div className="load-content-home">
          <div className="spinner-container">
            <div className="loading-spinner" />
          </div>
        </div>
      )}
      <Footer></Footer>
      <Chat></Chat>
    </>
  );
}

export default Home;

