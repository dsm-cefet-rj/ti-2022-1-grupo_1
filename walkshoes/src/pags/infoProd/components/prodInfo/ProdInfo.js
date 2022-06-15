import './prodInfo.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createCardFav } from '../../../../store/favSlice.js'
import { createCardCar } from '../../../../store/carrinhoSlice'
import { postData } from '../../../../store/favSlice'

export default function ProdInfo(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleNew(t) {
    switch (t) {
      case 'Fav':
        dispatch(
          postData({
            id: 12,
            nome: 'Yeezy 350 V2',
            tamanho: 42,
            valor: 799.99,
            estado: 'usado',
            categoria: 'masculino',
            quantidade: 1,
            img: 'https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg'
          })
        )
        navigate('/favoritos')
        break
      case 'Car':
        dispatch(
          createCardCar({
            id: 12,
            nome: 'Yeezy 350 V2',
            tamanho: 42,
            valor: 799.99,
            estado: 'usado',
            categoria: 'masculino',
            quantidade: 1,
            img: 'https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-1-low-553558-163-1-11648573707.jpg'
          })
        )
        navigate('/carrinho')
        break
    }
  }

  return (
    <div className="columns">
      <div className="infoprodct">
        <h3 className="titleproduct">Título</h3>
        <h4 className="categoryproduct">Categoria</h4>
        <p className="valueproduct">R$ 00,00</p>
      </div>
      <div className="infoprodct2">
        <p className="tamproduct">Tamanhos</p>
        <p className="descriptionproduct">Descrição</p>
      </div>
      <div className="buttonprodct">
        <button className="productbutton" onClick={() => handleNew("Car")}>
          Adicionar ao carrinho
        </button>
        <button className="productbutton" onClick={() => handleNew("Fav")}>
          Favoritos
        </button>
      </div>
    </div>
  )
}
