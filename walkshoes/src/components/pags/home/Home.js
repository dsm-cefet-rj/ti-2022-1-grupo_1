import React from "react";
import CardListHome from "../../card/cardListHome/CardListHome";
import Chat from "../../chat/Chat";
import HeaderList from "../../header/headerList/HeaderList";
import Menu from "../../header/menu/Menu";
import Footer from "../../footer/Footer";

const Home = (props) => {

    return (
      <>
        <Menu></Menu>
        <HeaderList></HeaderList>
        <CardListHome card={props.cards}></CardListHome>
        <Footer></Footer>
        <Chat></Chat>
      </>
    );
  }

export default Home;

