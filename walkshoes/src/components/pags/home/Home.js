import React from "react";
import CardListHome from "../../card/cardListHome/CardListHome";
import HeaderList from "../../header/headerList/HeaderList";
import Menu from "../../header/menu/Menu";
import Footer from "../../footer/Footer";

const Home = () => {
    return (
        <>
       <Menu></Menu>
        <HeaderList></HeaderList>
        <CardListHome></CardListHome>
        <Footer></Footer>
        </>
    );
  }

export default Home;

