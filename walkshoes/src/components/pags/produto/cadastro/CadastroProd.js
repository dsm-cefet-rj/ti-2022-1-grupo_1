import React from "react";
import Menu from "../../../header/menu/Menu";
import Footer from "../../../footer/Footer";
import Form from "../../../formProduto/form/Form";

const CadastroProd = (props) => {
  
  return (
    <>
      <Menu name="Carrinho"></Menu>
      <Form cards={props.cards} setCards={props.setCards}></Form>
      <Footer></Footer>
    </>
  );
};

export default CadastroProd;
