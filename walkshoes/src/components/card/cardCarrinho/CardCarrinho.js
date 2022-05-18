import React from 'react'
import './CardCarrinho.css'
import imagemTenis from '../../assets/nike-dunk.png'
import priceIcon from '../../assets/real-icon.png'
import plusIcon from '../../assets/plus.png'
import minusIcon from '../../assets/minus.png'

const CardCarrinho = props => {
  return (
    <div className="cardContent">
      <div className="shoeContent">
        <img src={imagemTenis} />
        <span className="shoeTitle">
          {props.information.nome} -{' '}
          <span className="shoeSize"> {props.information.tamanho} </span>
        </span>
      </div>
      <div className="utilityContent">
        <div className="valor">
          <img src={priceIcon}></img>
          <span>{props.information.preco}</span> 
        </div>
        <div className="quantidade">
          <img src={minusIcon} />
          <span>1</span> 
          <img src={plusIcon} />
        </div>
      </div>
    </div>
  )
}

export default CardCarrinho
