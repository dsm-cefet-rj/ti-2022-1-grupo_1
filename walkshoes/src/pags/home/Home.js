import React, {state, useState, useEffect} from "react";
import CardListHome from "./components/card/cardListHome/CardListHome";
import Chat from "../../componentsGlobal/chat/Chat";
import HeaderList from "../../componentsGlobal/header/headerList/HeaderList";
import Menu from "../../componentsGlobal/header/menu/Menu";
import Footer from "../../componentsGlobal/footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import { selectAllData, fetchData } from '../../store/dataSlice';

const Home = (props) => {

  const cards = useSelector(selectAllData);
  const dispatch = useDispatch();
  console.log(cards);

  // Fetch do bd mockado
  useEffect(() => {
    dispatch(fetchData())
  }, [])

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

