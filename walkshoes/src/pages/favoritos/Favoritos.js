import React from 'react'
import Wrapper from '../../components/favoritosWrapper/FavoritosWrapper'
import Menu from '../../components/header/menu/Menu'
import Footer from '../../components/footer/Footer'

const Favoritos = () => {

  document.title = 'Meus Favoritos - Walkshoes';

  return (
    <>
        <Menu />
        <Wrapper />
        <Footer />
    </>
  )
}

export default Favoritos