import React from 'react'
import Title from '../../components/title/Title'
import List from '../../components/list/List'
import './FavoritosWrapper.css'

const FavoritosWrapper = () => {

  return (
    <>
        <div className="contentWrapper">
            <Title t="Favoritos"/>
            <List />
        </div>
    </>
  )
}

export default FavoritosWrapper