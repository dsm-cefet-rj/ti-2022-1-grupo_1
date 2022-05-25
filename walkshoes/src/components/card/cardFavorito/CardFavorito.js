import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CardFavorito.css'

const CardFavorito = (props) => {

    const navigate = useNavigate();

    const data = props.item;

    //States de propriedades do card
    const [ img, setImage ] = useState(data.img);
    const [ nome, setNome ] = useState(data.title);
    const [ icon, setIcon ] = useState(data.icon);
    const [ price, setPrice ] = useState(data.value);
    const [ situation, setSituation ] = useState(data.situation);

    //Efeito Colateral para atualizar estados (WIP)
    useEffect(() => {
        
    }, []);

  return (
    <>
        <div className="cardHand" onClick={() => navigate("/carrinho")}> {/* Devia ir pra pagina do produto na real */}
            <div className="productItem f1">
                <div className="checkw">
                    <input type="checkbox" />
                </div>

                <div className="productContentInfo">
                    <div className="productContent">
                        <img src={img} />
                    </div>

                    <div className="productInfo">
                        <span style={{textTransform: "uppercase", fontWeight: "bold"}}>{nome}</span>
                        
                        <div className="middle-h middle-v">
                            <div className="productPrice">
                                <img src={icon} />
                                <span>{price}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="situationInfo">
                    <div>
                        {situation}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardFavorito