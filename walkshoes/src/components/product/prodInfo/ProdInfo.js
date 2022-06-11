import "./prodInfo.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createCard } from "../../../store/favSlice.js";

export default function ProdInfo(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNew () {
    dispatch(createCard({
      nome: "Novo",
    }));

    navigate("/favoritos");
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
        <button className="productbutton">Adicionar ao carrinho</button>
        <button className="productbutton" onClick={handleNew}>Favoritos</button>
      </div>
    </div>
  );
}
