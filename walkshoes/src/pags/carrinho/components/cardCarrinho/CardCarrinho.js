import React, { useState, useEffect } from 'react'
import './CardCarrinho.css'
import imagemTenis from '../../../../assets/nike-dunk.png'
import priceIcon from '../../../../assets/real-icon.png'
import plusIcon from '../../../../assets/plus.png'
import minusIcon from '../../../../assets/minus.png'
import lixeira from '../../../../assets/lixeira.png'

const CardCarrinho = props => {
  const [counter, setCounter] = useState(props.information.quantidade)
  const [shoeValue, setShoeValue] = useState(props.information.valor)

  //Incrementa counter
  const increase = () => {
    setCounter(counter + 1)
    // modificaQuantidade(counter + 1)
  }

  //Decrementa counter
  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1)
      // modificaQuantidade(counter - 1)
      return
    }
    // modificaQuantidade(counter)
  }

  // function modificaQuantidade(contador) {
  //   setShoeValue(contador * props.information.preco)
  //   props.handleChangeQty(contador, props.information.nome)
  // }

  return (
    <div className="cardContent">
      <div className="lixeiraLabel">
        <img src={lixeira}></img>
      </div>
      <div className="shoeContent">
        <img src={props.information.img} />
        <span className="shoeTitle">
          {props.information.nome} -{' '}
          <span className="shoeSize"> {props.information.tamanho} </span>
        </span>
      </div>
      <div className="utilityContent">
        <div className="valor">
          <span className="textoResponsivo">Preço:</span>
          <img src={priceIcon}></img>
          <span>{shoeValue}</span>
        </div>
        <div className="quantidade">
          <span className="textoResponsivo">Quantidade:</span>
          <img src={minusIcon} onClick={decrease} />
          <span>{counter}</span>
          <img src={plusIcon} onClick={increase} />
        </div>
      </div>
    </div>
  )
}

export default CardCarrinho
