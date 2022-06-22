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
    const favData = useSelector(selectAllData);                 // var - todos os itens no slice
    const loading = useSelector(state => state.fav.loading);    // var - 'loading' ou 'done'
    const fetch = useSelector(state => state.fav.fetch)         // var - 'waiting', 'ready' ou 'up-to-date'
    const dispatch = useDispatch();                             // func - pra mandar os dispatches

    // States
    const [ search, setSearch ] = useState('');                 // var - string de pesquisa
    const [ filteredData, setFilteredData ] = useState([]);     // var - dados filtrados pela string
    const [ select, setSelect ] = useState(false);              // var - checkbox 'todos'
    const [ deleteSelected, setDelete ] = useState(false);      // var - checkbox 'todos'

    // Hooks
        // Fetch do bd mockado
        useEffect(() => {
            if(fetch == 'ready') {
                dispatch(fetchData());
            }
        }, [fetch]);

        // Hook que seleciona os itens do favData
        useEffect(() => {
            dispatch(switchSelectMany(favData.map((item) => ({id: item.id, selected: select}))));
        }, [select]);

        // Hook que seleciona os itens do favData
        useEffect(() => {
            if(hasSelected()) setDelete(true);
            else setDelete(false);
        }, [favData]);

    // Funcoes
        // Funcao handle que seta o state do checkbox
        function handleSelect () {
            setSelect(!select);
        }

        // Funcao handle que deleta os itens selecionados e seta o state do checkbox
        function handleDeleteSelect() {
            hasSelected('get').map((item) => {
                dispatch(deleteCard(item))
            })
            
            setSelect(false);
        }

        // Funcao que verifica se existe card selecionado (tb pode retornar o card)
        function hasSelected (t = '') {
            const array = favData.filter((item) => {
                return item.selected == true
            });

            switch (t) {
                case 'get' :
                    return array;

                default:
                    return array.length;
            }
        }

        // Funcao de filtragem dos itens salvos na store (do slice dos favoritos)
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
                    <button style={{display: "flex", alignSelf: "center", alignItems: "center", height: "25px"}} onClick={handleDeleteSelect} disabled={!deleteSelected}>Excluir</button>
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