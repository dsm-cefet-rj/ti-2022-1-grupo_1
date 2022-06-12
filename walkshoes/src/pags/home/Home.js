import React from "react";
import CardListHome from "./components/card/cardListHome/CardListHome";
import Chat from "../../componentsGlobal/chat/Chat";
import HeaderList from "../../componentsGlobal/header/headerList/HeaderList";
import Menu from "../../componentsGlobal/header/menu/Menu";
import Footer from "../../componentsGlobal/footer/Footer";

const Home = (props) => {

    return (
        <>
       <Menu name="Carrinho"  navigate="/carrinho"></Menu>
        <HeaderList></HeaderList>
        <CardListHome card={props.cards}></CardListHome>
        <Footer></Footer>
        <Chat></Chat>
        </>
    );
  }

export default Home;

