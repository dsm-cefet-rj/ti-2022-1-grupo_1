import React from 'react'
import './ItemsPrice.css'

const ItemsPrice = () => {
  return (
    <div className="generalContent">
      <div className="subtotal">
        <span>Subtotal</span>
        <span>+ 2.599,98</span>
      </div>

      <div className="delivery">
        <span>Taxa de Entrega</span>
        <span>+ Grátis</span>
      </div>

      <div className="allProductPrice">
        <span>Total</span>
        <span>2.599,98</span>
      </div>
    </div>
  )
}

export default ItemsPrice
