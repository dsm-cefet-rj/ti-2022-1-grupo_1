import React, { useState, useEffect } from 'react'
import ItemsPrice from '../../itemsPrice/ItemsPrice'
import CarrinhoWrapper from '../../carrinhoWrapper/CarrinhoWrapper'
import Menu from '../../../components/header/menu/Menu'
import Button from '../../button/Button'

const Carrinho = () => {
  const [totalValue, setTotalValue] = useState(0)
  // transformar a lista em um estado para poder alterar o

  const [items, setItems] = useState([
    {
      nome: 'NIKE DUNK LOW GREEN',
      tamanho: '38',
      preco: 1299.99,
      quantidade: 1
    },

    {
      nome: 'NIKE DUNK LOW GREEN-LEAF',
      tamanho: '42',
      preco: 1399.99,
      quantidade: 1
    },

    {
      nome: 'NIKE DUNK LOW GREEN OLIVE',
      tamanho: '39',
      preco: 1000.0,
      quantidade: 1
    },

    {
      nome: 'NIKE DUNK LOW GREEN MILITARY',
      tamanho: '44',
      preco: 1699.99,
      quantidade: 1
    }
  ])

  function handleChangeQty(quantity, name) {
    let valorSomado = 0
    const novoArray = items.map(item => {
      if (item.nome === name) {
        valorSomado += item.preco * quantity
        return { ...item, quantidade: quantity }
      }
      valorSomado += item.preco * item.quantidade
      return item
    })

    setTotalValue(valorSomado)
    setItems(novoArray)
  }

  useEffect(() => {
    let valorSomado = 0
    items.forEach(item => {
      valorSomado += item.preco * item.quantidade
    })
    setTotalValue(valorSomado)
  }, [])

  return (
    <>
      <Menu name="Home"></Menu>
      <CarrinhoWrapper
        items={items}
        handleChangeQty={handleChangeQty}
      ></CarrinhoWrapper>
      <ItemsPrice precoTotalItems={totalValue}></ItemsPrice>
      <Button></Button>
    </>
  )
}

export default Carrinho
