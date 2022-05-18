import React from 'react'
import ItemsPrice from '../../itemsPrice/ItemsPrice'
import CarrinhoWrapper from '../../carrinhoWrapper/CarrinhoWrapper'
import Menu from '../../../components/header/menu/Menu'
import Footer from '../../../components/footer/Footer'
import Button from '../../button/Button'

const Carrinho = () => {
  return (
    <>
    <Menu></Menu>
      <CarrinhoWrapper></CarrinhoWrapper>
      <ItemsPrice></ItemsPrice>
      <Button></Button>
      <Footer></Footer>
    </>
  )
}

export default Carrinho
