import React from 'react'
import Card from '../../components/card/cardFavorito/CardFavorito'
import './List.css'

const List = () => {

  return (
    <>
        <div className="listWrapper">
            <div>
                <div class="favLabel">
                    <input type="text" name="search" placeholder="Pesquisar" />
                    <button>Ordenar</button>
                </div>
            </div>

            <div>
                <div class="productLabel f1">
                    <div style={{display: "flex", flexDirection: "column-reverse", alignItems: "center"}}>
                        <input type="checkbox" name="select-all" />
                        <label for="select-all">Todos</label>
                    </div>
                    <button style={{display: "flex", alignSelf: "center", alignItems: "center", height: "25px"}} disabled>Excluir</button>
                </div>
            </div>

            <div>
                <Card name="Nike Air-Max Axis Premium" price="200,00" situacao="Em estoque" />
                <Card name="Nike Air-Max Axis Premium" price="200,00" situacao="Em estoque" />
                <Card name="Nike Air-Max Axis Premium" price="200,00" situacao="Em estoque" />
            </div>
            
        </div>
    </>
  )
}

export default List