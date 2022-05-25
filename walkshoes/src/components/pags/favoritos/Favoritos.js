import React from "react";
import Wrapper from "../../favoritosWrapper/FavoritosWrapper";
import Menu from "../../../components/header/menu/Menu";
import Footer from "../../../components/footer/Footer";

const Favoritos = () => {
  return (
    <>
      <Menu name="Carrinho"></Menu>
      <Wrapper />
      <Footer />
    </>
  );
};

export default Favoritos;
