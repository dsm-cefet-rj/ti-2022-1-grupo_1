import React from "react";
import Menu from "../../componentsGlobal/header/menu/Menu";
import HeaderList from "../../componentsGlobal/header/headerList/HeaderList";
import ContentInfo from "../../pags/infoProd/components/contentInfo/ContentInfo";

const InfoProd = () => {
  
  return (
    <>
      <Menu name="Carrinho"></Menu>
      <HeaderList></HeaderList>
      <ContentInfo></ContentInfo>
    </>
  );
};

export default InfoProd;
