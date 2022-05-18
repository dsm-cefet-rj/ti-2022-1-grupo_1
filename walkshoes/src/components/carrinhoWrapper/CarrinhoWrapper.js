import React from 'react'
import CardCarrinho from '../card/cardCarrinho/CardCarrinho'
import './CarrinhoWrapper.css'

const CarrinhoWrapper = () => {

  const information = {
    nome: 'NIKE DUNK LOW GREEN',
    tamanho: '38',
    preco: '1,299,99',
  }

  return (
    <>
      <div className="contentWrapper">
        <h1 className="titleCarrinho">Meu Carrinho</h1>
        <div>
          <span className="titleLabel">Produtos</span>
          <CardCarrinho information={information}></CardCarrinho>
          <CardCarrinho information={information}></CardCarrinho>
        </div>
      </div>
    </>
  )
}

export default CarrinhoWrapper
