import React from 'react'
import './ItemsPrice.css'

const ItemsPrice = (props) => {

  return (
    <div className="generalContent">
      <div className="subtotal">
        <span>Subtotal</span>
        <span>+ {props.prices.precoTotal}</span>
      </div>

      <div className="delivery">
        <span>Taxa de Entrega</span>
        <span>+ Grátis</span>
      </div>

      <div className="allProductPrice">
        <span>Total</span>
        <span>{props.prices.precoTotal}</span>
      </div>
    </div>
  )
}

export default ItemsPrice
