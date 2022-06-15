import React from 'react'
import CardCarrinho from '../cardCarrinho/CardCarrinho'
import './CarrinhoWrapper.css'

const CarrinhoWrapper = (props) => {

  return (
    <>
      <div className="contentWrapper">
        <h1 className="titleCarrinho">Meu Carrinho</h1>
        <div>
          <span className="titleLabel">Produtos</span>
          {props.items.map(shoe => <CardCarrinho information={shoe} /*handleChangeQty={props.handleChangeQty}*/></CardCarrinho>)}
        </div>
      </div>
    </>
  )
}

export default CarrinhoWrapper
