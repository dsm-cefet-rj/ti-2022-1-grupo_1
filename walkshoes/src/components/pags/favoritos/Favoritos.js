import React from 'react'
import Wrapper from '../../favoritosWrapper/FavoritosWrapper'
import Menu from '../../../components/header/menu/Menu'
import Footer from '../../../components/footer/Footer'
import Chat from "../../chat/Chat";

const Favoritos = () => {
  return (
    <>
        <Menu />
        <Wrapper />
        <Footer />
        <Chat></Chat>
    </>
  )
}

export default Favoritos