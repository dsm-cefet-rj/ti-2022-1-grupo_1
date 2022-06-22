// [React]
import React, {state, useState, useEffect} from "react";

// [Redux]
import { useSelector, useDispatch } from 'react-redux';
import { selectAllData, fetchData } from '../../store/dataSlice';

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
    }, []);

  // Debug
    // se o fetch falhar
    useEffect(() => {
      if(loading == 'failed') {
        console.warn(loading);
        alert('esqueceu do bd irmao');
      }
      else console.log(loading);

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
      <CardListHome card={cards}></CardListHome>
      <Footer></Footer>
      <Chat></Chat>
    </>
  );
}

export default Home;

