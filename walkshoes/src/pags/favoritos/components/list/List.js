// [React]
import React, { useState, useEffect } from 'react';

// [Redux]
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchData,
    selectAllData,
} from '../../../../store/favSlice.js';

// [Components]
import Card from '../card/Card';
import Search from './search/Search';
import Selector from './selector/Selector';

// [CSS]
import './List.css'

const List = () => {

    // Redux
    const data = useSelector(selectAllData);                    // var - todos os itens no slice
    const loading = useSelector(state => state.fav.loading);    // var - 'loading' ou 'done'
    const fetch = useSelector(state => state.fav.fetch)         // var - 'waiting', 'ready' ou 'up-to-date'
    const dispatch = useDispatch();                             // func - pra mandar os dispatches

    // States
    const [ filteredData, setFiltered ] = useState(data);     // var - dados filtrados pela string

    // Hooks
        // Fetch do bd mockado
        useEffect(() => {
            if(fetch == 'ready') {
                dispatch(fetchData());
            }
        }, [fetch]);

    // HTML
    return (
    <>
        <div className="listWrapper">
            <Search data={data} setFiltered={setFiltered}/>

            <Selector data={data}/>

            <div className='listy'>
                {
                    (fetch == 'up-to-date') ? (
                        filteredData.map(
                            (item) => <Card
                                key={item.id}
                                id={item.id}
                                item={item}
                            />)
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