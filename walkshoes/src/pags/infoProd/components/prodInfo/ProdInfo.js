import "./prodInfo.css";

export default function ProdInfo(props) {
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
        <button className="productbutton">Adicionar ao carrinho</button>
        <button className="productbutton">Favoritos</button>
      </div>
    </div>
  );
}
