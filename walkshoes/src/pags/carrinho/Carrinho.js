import React, { useState, useEffect } from 'react'
import ItemsPrice from './components/itemsPrice/ItemsPrice'
import CarrinhoWrapper from './components/carrinhoWrapper/CarrinhoWrapper'
import Menu from '../../componentsGlobal/header/menu/Menu'
import Button from './components/button/Button'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchData,
  selectAllData,
  deleteCard
} from '../../store/carrinhoSlice.js'

const Carrinho = () => {
  // const [totalValue, setTotalValue] = useState(0)
  const carrinhoData = useSelector(selectAllData)
  const loading = useSelector(state => state.carrinho.loading)
  const fetch = useSelector(state => state.carrinho.fetch)
  const [items, setItems] = useState(carrinhoData)
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (loading == 'done') {
      setItems(carrinhoData)
    } else if(loading == 'idle') {
      console.log(carrinhoData)
    }
  }, [loading])

  useEffect(() => {
    if (fetch == 'ready') {
      dispatch(fetchData())
    }
  }, [fetch])

  function handleDelete(id) {
    carrinhoData.map(item => {
      if( item.id == id){
        dispatch(deleteCard(item))
      }
    })
  }

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
        handleDelete={handleDelete}
        // handleChangeQty={handleChangeQty}
      ></CarrinhoWrapper>
      <ItemsPrice precoTotalItems={sumall}></ItemsPrice>
      <Button></Button>
    </>
  )
}

export default Carrinho
