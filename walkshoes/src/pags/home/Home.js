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

// [HTML]
const Home = (props) => {

  const here = 'home'; // debug

  const cards = useSelector(selectAllData);
  const loading = useSelector(state => state.data.loading);
  const dispatch = useDispatch();

  // Fetch do bd mockado
    useEffect(() => {
      dispatch(fetchData());
    }, []);

  // Debug
    useEffect(() => {
      if(loading == 'failed') console.warn(here, loading);
      else console.log(here, loading);

      if(loading == 'failed') alert('esqueceu do bd irmao');
    }, [loading]);

    useEffect(() => {
      if(cards.length) console.log(here, cards);
      // else console.log(here,'no cards');
    }, [cards]);

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

