import React, { useEffect, useState } from 'react'
import icon from "../../../assets/real-icon.png";
import { useNavigate } from 'react-router-dom'
import './CardFavorito.css'

const CardFavorito = (props) => {

    // const navigate = useNavigate();

    const data = props.item;

    //States de propriedades do card
    const [ selected, setSelect ] = useState(data.selected);
    const [ img, setImage ] = useState(data.img);
    const [ nome, setNome ] = useState(data.nome);
    const [ price, setPrice ] = useState(data.preco);
    const [ situation, setSituation ] = useState(data.situation);

    function handleSelect(e) {
        setSelect(!selected);
    }

  return (
    <>
        <div className="cardHand"> {/* Poderia ir pra pagina do produto na real */} {/* onClick={() => navigate("/produto")} */}
            <div className="productItem f1">
                <div className="checkw">
                    <input type="checkbox" checked={selected} onChange={handleSelect} />
                </div>

                <div className="productContentInfo">
                    <div className="productContent">
                        <img src={img} />
                    </div>

                    <div className="productInfo">
                        <div>
                            <span style={{textTransform: "uppercase", fontWeight: "bold"}}>{nome}</span>
                            <button disabled>Add Carrinho</button>
                        </div>
                        
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