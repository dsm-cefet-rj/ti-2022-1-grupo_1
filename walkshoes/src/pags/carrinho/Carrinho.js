import React, { useState, useEffect } from 'react'
import ItemsPrice from './components/itemsPrice/ItemsPrice'
import CarrinhoWrapper from './components/carrinhoWrapper/CarrinhoWrapper'
import Menu from '../../componentsGlobal/header/menu/Menu'
import Button from './components/button/Button'
// Redux
import { useSelector } from 'react-redux'
import { selectCards } from '../../store/carrinhoSlice.js'

const Carrinho = () => {
  const [totalValue, setTotalValue] = useState(0)
  const carrinhoData = useSelector(selectCards)
  const [items, setItems] = useState(carrinhoData)

  // function handleChangeQty(quantity, name) {
  //   let valorSomado = 0
  //   const novoArray = items.map(item => {
  //     if (item.nome === name) {
  //       valorSomado += item.preco * quantity
  //       return { ...item, quantidade: quantity }
  //     }
  //     valorSomado += item.preco * item.quantidade
  //     return item
  //   })

  //   setTotalValue(valorSomado)
  //   setItems(novoArray)
  // }

  const sumall = carrinhoData
    .map(item => item.valor)
    .reduce((prev, curr) => prev + curr, 0)

  // useEffect(() => {
  //   let valorSomado = 0
  //   items.forEach(item => {
  //     valorSomado += item.preco * item.quantidade
  //   })
  //   setTotalValue(valorSomado)
  // }, [])

  return (
    <>
      <Menu name="Home"></Menu>
      <CarrinhoWrapper
        items={items}
        // handleChangeQty={handleChangeQty}
      ></CarrinhoWrapper>
      <ItemsPrice precoTotalItems={sumall}></ItemsPrice>
      <Button></Button>
    </>
  )
}

export default Carrinho
