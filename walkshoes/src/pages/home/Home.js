import React from "react";
import CardListHome from "../../components/card/cardListHome/CardListHome";
import HeaderList from "../../components/header/headerList/HeaderList";
import Menu from "../../components/header/menu/Menu";
import Footer from "../../components/footer/Footer";

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

