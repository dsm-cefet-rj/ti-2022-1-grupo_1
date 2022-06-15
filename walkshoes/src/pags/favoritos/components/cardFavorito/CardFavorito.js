// [React]
import React, { useEffect, useState } from 'react'

// [Assets]
import icon from "../../../../assets/real-icon.png";

// [Router]
import { useNavigate } from 'react-router-dom'

// [CSS]
import './CardFavorito.css'

const CardFavorito = (props) => {

    // Router
    const navigate = useNavigate();

    // Dados
    const data = props.item;

    // Propriedades do card
    const img = data.img;
    const nome = data.nome;
    const price = data.preco;
    const situation = data.situation;

    // States
    const [ selected, setSelected ] = useState(false);

    // Funcao que cuida do select usando hooks
    function handleSelect () {
        setSelected(!selected);
    }

    // (WIP): Funcao que manda o id para /infoProd/:id
    function handleRedirect () {

        // (Todo): Redirecionar os dados pra pagina

        navigate("/infoprod"); // <-- isso n
    }

    // [HTML]
    return (
        <>
            <div className="cardHand" onClick={handleRedirect}>
                <div className="productItem f1">
                    <div className="checkw">
                        <input
                            type="checkbox"
                            checked={selected}
                            onChange={handleSelect}
                        />
                    </div>

                    <div className="productContentInfo">
                        <div className="productContent">
                            <img src={img} />
                        </div>

                        <div className="productInfo">
                            <div className="distancee">
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
                        <span>{situation}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFavorito