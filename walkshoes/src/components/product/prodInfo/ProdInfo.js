import './prodInfo.css'

export default function ProdInfo(props) {
  return (
    <>
      <div className="infoprodct">
        <h2 className="titleproduct">Título</h2>
        <h4 className="categoryproduct">Categoria</h4>
        <p className="valueproduct">R$ 00,00</p>
        </div>
        <div className='infoprodct2'>
        <p className="descriptionproduct">Descrição</p>
        <p className="tamproduct">Tamanhos</p>
      </div>
      <div className="buttonprodct">
        <button>Adicionar ao carrinho</button>
        <button>Favoritos</button>
      </div>
    </>
  );
}
