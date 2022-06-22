// [React]
import React, { useEffect, useState } from 'react'

// [Redux]
import { useDispatch } from 'react-redux';
import { deleteCard, switchSelect } from '../../../../store/favSlice'

// [Assets]
import icon from "../../../../assets/real-icon.png";

// [Router]
import { useNavigate } from 'react-router-dom'

// [CSS]
import './CardFavorito.css'

const CardFavorito = (props) => {

    const dispatch = useDispatch();

    // Router
    const navigate = useNavigate();

    // Dados
    const data = props.item;

    // Propriedades do card
    const img = data.img;
    const nome = data.nome;
    const price = data.valor;
    const situation = data.situation;
    const selected = data.selected;

    const [ select, setSelect ] = useState(false);

    useEffect(() => {
        dispatch(switchSelect({id: data.id, selected: select}));
    }, [select]);

    useEffect(() => {
        if(select !== selected) setSelect(selected);
    }, [selected]);

    // Funcao que cuida do select usando hooks
    function handleSelect () {
        setSelect(!select);
    }

    function handleDelete () {
        dispatch(deleteCard(data));
    }

    // (WIP): Funcao que manda o id para /infoProd/:id
    function handleRedirect () {

        // (Todo): Redirecionar os dados pra pagina

        navigate("/infoprod"); // <-- isso n
    }

    // [HTML]
    return (
        <>
            <div className="cardHand">
                <div className="productItem f1">
                    <div className="checkw">
                        <input
                            type="checkbox"
                            checked={select}
                            onChange={handleSelect}
                        />
                    </div>

                    <div className="productContentInfo">
                        <div className="productContent" onClick={handleRedirect}>
                            <img src={img} />
                        </div>

                        <div className="productInfo">
                            <div className="distancee">
                                <span style={{textTransform: "uppercase", fontWeight: "bold"}}>{nome}</span>
                                <button onClick={() => handleDelete()}>x</button>
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