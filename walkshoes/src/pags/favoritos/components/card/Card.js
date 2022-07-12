// [React]
import React, { useEffect, useState } from 'react'

// [Redux]
import { useDispatch } from 'react-redux';
import { deleteCard, switchSelect } from '../../../../store/favSlice'

// [Assets]
import icon from "../../../../assets/real-icon.png";

// [Router]
import { Link } from 'react-router-dom'

// [CSS]
import './Card.css'

const Card = (props) => {

    const dispatch = useDispatch();

    // Dados
    const data = props.item;

    // Propriedades do card
    const img = data.img;
    const id = data.id;
    const nome = data.nome;
    const price = data.valor;
    const situation = data.situation;
    const selected = data.selected;

    const [ select, setSelect ] = useState(false);

    useEffect(() => {
        if(select != selected) setSelect(selected);
    }, [selected]);

    // Funcao que cuida do select usando hooks
    function handleSelect () {
        dispatch(switchSelect({id: data.id, selected: !select}));
    }

    function handleDelete () {
        dispatch(deleteCard([data]));
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
                        <Link to={`/infoprod/${id}`}>
                            <div className="productContent">
                                <img src={img} />
                            </div>
                        </Link>

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

export default Card