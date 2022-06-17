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
    const fetch = useSelector(state => state.fav.fetch)
    const dispatch = useDispatch();

    // States
    const [ filteredData, setFilteredData ] = useState([]);

    // State para usar como 'pesquisa'
    const [ search, setSearch ] = useState('');

    const [ select, setSelect ] = useState(false);

    // Fetch do bd mockado
    useEffect(() => {
        if(fetch == 'ready') {
            dispatch(fetchData());
        }
    }, [fetch]);

    useEffect(() => {
        dispatch(switchSelectMany(favData.map((item) => ({id: item.id, selected: select}))));
    }, [select]);

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

    function handleSelect () {
        setSelect(!select);
    }

    function handleDeleteSelect() {
        favData.filter((item) => {
            return item.selected == true
        }).map((item) => {
            dispatch(deleteCard(item))
        })
        
        setSelect(!select);
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
                    <button disabled>+</button>
                </div>
            </div>

            <div>
                <div className="productLabel f1">
                    <div className="stack mid checkw">
                        <input 
                            type="checkbox" 
                            name="select-all"
                            checked={select}
                            onChange={handleSelect}
                        />
                        <label htmlFor="select-all" className='f1'>Todos</label>
                    </div>
                    <button style={{display: "flex", alignSelf: "center", alignItems: "center", height: "25px"}} onClick={handleDeleteSelect}>Excluir</button>
                </div>
            </div>

            <div className='listy'>
                {
                    (fetch == 'up-to-date') ? (
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