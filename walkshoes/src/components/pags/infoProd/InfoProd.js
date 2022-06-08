import React from "react";
import Menu from "../../header/menu/Menu";
import Footer from "../../footer/Footer";
import HeaderList from "../../header/headerList/HeaderList";
import ContentInfo from "../../product/contentInfo/ContentInfo";

const InfoProd = (props) => {
  
  return (
    <>
      <Menu name="Carrinho"></Menu>
      <HeaderList></HeaderList>
      <ContentInfo cards={props.cards}></ContentInfo>
      <Footer></Footer>
    </>
  );
};

export default InfoProd;
