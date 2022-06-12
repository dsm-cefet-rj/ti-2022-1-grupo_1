import React from "react";
import Menu from "../../../componentsGlobal/header/menu/Menu";
import Footer from "../../../componentsGlobal/footer/Footer";
import Form from "./components/form/Form";

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
