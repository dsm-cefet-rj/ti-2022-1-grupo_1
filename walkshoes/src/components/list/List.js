import React, { useState, useEffect } from 'react'
import Card from '../../components/card/cardFavorito/CardFavorito'
import './List.css'

import { data } from '../pags/favoritos/data/data.js'

const List = () => {

    //State para usar como 'pesquisa'
    const [ search, setSearch ] = useState("");
    const toSearch = (s) => {
        setSearch(s);
        console.log("Pesquisando: " + s);
    };

    //State para guardar os dados
    const [ favData, setFavData ] = useState(data);
    const [ selected, setSelect ] = useState(false);

    function handleSelectAll(e) {
        const novoArray = favData.map(item => 
            {
                return { ...item, selected: selected}
            }
        );

        console.log(novoArray)
        setSelect(!selected);
        setFavData(novoArray);
    }

    //Efeito Colateral para filtrar card (WIP)
    useEffect(() => {
        
    }, []);

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
                    <button>Ordenar</button>
                </div>
            </div>

            <div>
                <div className="productLabel f1">
                    <div className="stack mid checkw">
                        <input 
                            type="checkbox" 
                            name="select-all"
                            checked={selected}
                            onChange={handleSelectAll}
                        />
                        <label htmlFor="select-all" className='f1'>Todos</label>
                    </div>
                    <button style={{display: "flex", alignSelf: "center", alignItems: "center", height: "25px"}} disabled>Excluir</button>
                </div>
            </div>

            <div className='listy'>
                {favData.map(
                    (item) => <Card
                        key={item.id}
                        id={item.id}
                        item={item}
                    />)
                }
            </div>
            
        </div>
    </>
  )
}

export default List