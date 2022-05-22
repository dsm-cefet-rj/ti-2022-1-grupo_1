import React from 'react'
import CardCarrinho from '../card/cardCarrinho/CardCarrinho'
import './CarrinhoWrapper.css'

const CarrinhoWrapper = (props) => {

  return (
    <>
      <div className="contentWrapper">
        <h1 className="titleCarrinho">Meu Carrinho</h1>
        <div>
          <span className="titleLabel">Produtos</span>
          <CardCarrinho information={props.information}></CardCarrinho>
          <CardCarrinho information={props.information2}></CardCarrinho>    
          <CardCarrinho information={props.information3}></CardCarrinho> 
          <CardCarrinho information={props.information4}></CardCarrinho>
        </div>
      </div>
    </>
  )
}

export default CarrinhoWrapper
