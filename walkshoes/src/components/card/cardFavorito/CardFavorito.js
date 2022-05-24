import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CardFavorito.css'
import imagemTenis from '../../../assets/nike-dunk.png'
import priceIcon from '../../../assets/real-icon.png'

const CardFavorito = (props) => {

    const navigate = useNavigate();

  return (
    <>
        <div className="cardHand" onClick={() => navigate("/pagamento")}>
            <div className="productItem f1">
                <div className="checkw">
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