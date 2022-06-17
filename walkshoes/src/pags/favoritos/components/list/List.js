// [React]
import React, { useState, useEffect } from 'react';

// [Redux]
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchData,
    selectAllData,
    switchSelectMany,
    deleteCard,
} from '../../../../store/favSlice.js';

// [Components]
import Card from '../cardFavorito/CardFavorito';

// [CSS]
import './List.css'

const List = () => {

    // Redux
    const favData = useSelector(selectAllData);
    const loading = useSelector(state => state.fav.loading);
    const dispatch = useDispatch();

    // States
    const [ filteredData, setFilteredData ] = useState();

    // State para usar como 'pesquisa'
    const [ search, setSearch ] = useState('');

    // Fetch do bd mockado
    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchData())
        }, 1000)
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
                {
                    loading == "done" ? (
                        search.length > 0 ? (
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
                        ) : (
                            <p className='centre'>Carregando...</p>
                    )
                }
            </div>
        </div>
    </>
    );
}

export default List