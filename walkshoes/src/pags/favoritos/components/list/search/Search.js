// [React]
import React, { useState, useEffect } from 'react';

// [CSS]
import '../List.css'


const Search = (props) => {
    const data = props.data;

    // States
    const [ search, setSearch ] = useState('');                 // var - string de pesquisa

    // Hooks
// Chamada do filtro
         useEffect(() => {
            toSearch(search);
        }, [search, data]);

    // Funcoes
        // Funcao de filtragem dos itens salvos na store (do slice dos favoritos)
        function toSearch(s) {
            if(s !== '') {
                const fdata = data.filter((item) => {
                    return Object.values(item.nome).join('').toLowerCase().includes(s.toLowerCase());
                })
                props.setFiltered(fdata);
                console.log(s, fdata);
            }
            else {
                props.setFiltered(data);
            }
        };

    // HTML
    return (
    <>
        <div className="favLabel">
            <input 
                type="text"
                name="search"
                placeholder="Pesquisar"
                onChange={(e) => setSearch(e.target.value)} 
            />
        </div>
    </>
    );
}

export default Search