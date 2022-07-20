import React from 'react'
import Title from '../title/Title'
import List from '../list/List'
import './Wrapper.css'

const Wrapper = () => {

  return (
    <>
        <div className="contentWrapper">
            <Title t="Meus Favoritos"/>
            <List />
        </div>
    </>
  )
}

export default Wrapper