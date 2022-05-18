import React from 'react'
import './CardFavorito.css'
import imagemTenis from '../../../assets/nike-dunk.png'
import priceIcon from '../../../assets/real-icon.png'

const CardFavorito = (props) => {
  return (
    <>
        <div>
            <div className="productItem f1">
                <div style={{marginLeft: "10px"}}>
                    <input type="checkbox" />
                </div>

                <div className="productContentInfo">
                    <div className="productContent">
                        <img src={imagemTenis} />
                    </div>

                    <div className="productInfo">
                        <span style={{textTransform: "uppercase", fontWeight: "bold"}}>{props.name}</span>
                        
                        <div className="middle-h middle-v">
                            <div className="productPrice">
                                <img src={priceIcon} />
                                <span>{props.price}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="situationInfo">
                    <div>
                        {props.situacao}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardFavorito