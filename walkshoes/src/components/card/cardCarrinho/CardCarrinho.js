import React, { useState, useEffect } from 'react'
import './CardCarrinho.css'
import imagemTenis from '../../../assets/nike-dunk.png'
import priceIcon from '../../../assets/real-icon.png'
import plusIcon from '../../../assets/plus.png'
import minusIcon from '../../../assets/minus.png'
import lixeira from '../../../assets/lixeira.png'

const CardCarrinho = props => {
  const [counter, setCounter] = useState(props.information.quantidade)
  console.log(counter)
  console.log(props)
  const [shoeValue, setShoeValue] = useState(props.information.preco)


  //Incrementa counter
  const increase = () => {
    setCounter(counter + 1)
    modificaQuantidade()
  }

  //Decrementa counter
  const decrease = () => {
    if (counter > 1) {
      setCounter(counter - 1)
      console.log(counter)
    }
    modificaQuantidade()
  }

  function modificaQuantidade() {
    setShoeValue(counter * props.information.preco)
    props.handleChangeQty(counter, props.information.nome)
  }

  return (
    <div className="cardContent">
      <div className="lixeiraLabel"><img src={lixeira}></img></div>
      <div className="shoeContent">
        <img src={imagemTenis} />
        <span className="shoeTitle">
          {props.information.nome} -{' '}
          <span className="shoeSize"> {props.information.tamanho} </span>
        </span>
      </div>
      <div className="utilityContent">
        <div className="valor">
          <span className="textoResponsivo">Preço:</span>
          <img src={priceIcon}></img>
          <span>{shoeValue.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</span>
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
