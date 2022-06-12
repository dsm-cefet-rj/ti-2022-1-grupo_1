import React from 'react'
import Wrapper from './components/favoritosWrapper/FavoritosWrapper'
import Menu from '../../componentsGlobal/header/menu/Menu'
import Footer from '../../componentsGlobal/footer/Footer'

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
