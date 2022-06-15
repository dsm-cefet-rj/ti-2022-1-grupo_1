// [React]
import React, { useState, useEffect } from 'react';
import Card from '../cardFavorito/CardFavorito';
import { useDispatch } from 'react-redux';
import { createCardFav } from '../../../../store/favSlice.js';
import { useSelector } from 'react-redux';
import { selectCards } from '../../../../store/favSlice.js';
import './List.css'

const List = () => {

    // Redux
    const favData = useSelector(selectCards);
    const dispatch = useDispatch();

    // States
    const [ data, setData ] = useState();
    const [ filteredData, setFilteredData ] = useState();

    // State para usar como 'pesquisa'
    const [ search, setSearch ] = useState('');

    // Fetch do bd mockado
    useEffect(() => {
        fetch('http://localhost:3000/tenis')
        .then(res=>{
          return res.json();
        })
        .then((data)=>{
          setData(data);
        })
    }, []);

    // Funcao de filtro dos itens salvos na store (fav)
    function toSearch(s) {
        setSearch(s);
        if(s !== '') {
            const fdata = favData.filter((item) => {
                return Object.values(item.nome).join('').toLowerCase().includes(s.toLowerCase());
            })
            setFilteredData(fdata);
            console.log(s, fdata);
        }
        else {
            setFilteredData(favData);
        }
    };

    // Funcao que adiciona novo item na store (fav)
    function handleNew () {
        if(favData.length >= data.length) {
            alert("Limite máximo alcançado");
        }
        else {
            dispatch(createCardFav(
                data.find((item) => (item.id === favData.length+1))
            ));
        }
    }

    // HTML
    return (
    <>
        <div className="listWrapper">
            <div>
                <div className="favLabel">
                    <input 
                        type="text"
                        name="search"
                        placeholder="Pesquisar"
                        onChange={(e) => toSearch(e.target.value)} 
                    />
                    <button disabled onClick={handleNew}>+</button>
                </div>
            </div>

            <div>
                <div className="productLabel f1">
                    <div className="stack mid checkw">
                        <input 
                            type="checkbox" 
                            name="select-all"
                        />
                        <label htmlFor="select-all" className='f1'>Todos</label>
                    </div>
                    <button style={{display: "flex", alignSelf: "center", alignItems: "center", height: "25px"}} disabled>Excluir</button>
                </div>
            </div>

            <div className='listy'>
                {search.length > 0 ? (
                    filteredData.map(
                        (item) => <Card
                            key={item.id}
                            id={item.id}
                            item={item}
                        />)
                    ) : (
                        favData.map(
                            (item) => <Card
                                key={item.id}
                                id={item.id}
                                item={item}
                            />)
                    )
                }
            </div>
        </div>
    </>
    );
}

export default List