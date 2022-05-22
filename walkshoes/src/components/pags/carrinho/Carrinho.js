import React from 'react'
import ItemsPrice from '../../itemsPrice/ItemsPrice'
import CarrinhoWrapper from '../../carrinhoWrapper/CarrinhoWrapper'
import Menu from '../../../components/header/menu/Menu'
import Button from '../../button/Button'

const Carrinho = () => {
  const information = {
    nome: 'NIKE DUNK LOW GREEN',
    tamanho: '38',
    preco: '1,299,99'
  }

  const information2 = {
    nome: 'NIKE DUNK LOW GREEN-LEAF',
    tamanho: '42',
    preco: '1,399,99'
  }

  const information3 = {
    nome: 'NIKE DUNK LOW GREEN OLIVE',
    tamanho: '39',
    preco: '1,000,00'
  }

  const information4 = {
    nome: 'NIKE DUNK LOW GREEN MILITARY',
    tamanho: '44',
    preco: '1,699,99'
  }

  const prices = {
    precoTotal: '5.399,97'
  }

  return (
    <>
      <Menu></Menu>
      <CarrinhoWrapper
        information={information}
        information2={information2}
        information3={information3}
        information4={information4}
      ></CarrinhoWrapper>
      <ItemsPrice prices={prices}></ItemsPrice>
      <Button></Button>
    </>
  )
}

export default Carrinho
