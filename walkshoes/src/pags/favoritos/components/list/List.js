import React, { useState, useEffect } from 'react'
import Card from '../cardFavorito/CardFavorito'
import { useDispatch } from 'react-redux';
import { createCard } from '../../../../store/favSlice.js';
import { useSelector } from 'react-redux';
import { selectCards } from '../../../../store/favSlice.js';
import './List.css'

const List = () => {

    //State para guardar os dados
    const favData = useSelector(selectCards);

    const [ selected, setSelect ] = useState(false);
    const [ data, setData ] = useState();
    const [ filteredData, setFilteredData ] = useState();

    //State para usar como 'pesquisa'
    const [ search, setSearch ] = useState("");
    const toSearch = (s) => {
        setSearch(s);
        if(s != '') {
            const fdata = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
            })
            setFilteredData(fdata);
        }
        else {
            setFilteredData(data);
        }
    };

    const dispatch = useDispatch();

    //Efeito Colateral para filtrar card (WIP)
    useEffect(() => {
        
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/tenis')
        .then(res=>{
          return res.json();
        })
        .then((data)=>{
          setData(data);
        })
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
                    <button onClick={handleNew}>Ordenar</button>
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
  );

//   function handleNew () {
//     const random_id = Math.floor(Math.random() * 5) + 1;

//     dispatch(createCard(
//             data.find((item) => (item.id === random_id))
//         )
//     );
//   }
    function handleNew () {
        dispatch(createCard({
            id: 0,
            nome: "Dunk low",
            preco: 799.99,
            tamanho: 42,
            estado: "usado",
            quantidade: 1,
            img: "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg",
            }));
    }
}

export default List