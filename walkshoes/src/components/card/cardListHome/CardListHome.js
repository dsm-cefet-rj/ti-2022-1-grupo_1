import CardHome from "../cardHome/CardHome";
import "./CardListHome.css";
import Search from "../../search/Search";
import { useSelector } from 'react-redux';
import { selectCards } from '../../../store/formSlice.js';

export default function CardListHome(props) {
  const data = props.card;
  
  return (
    <div className="contentlist">
      <Search></Search>
      <div className="list">
        {data.slice(0).reverse().map((shoe) => (
          <CardHome key={shoe.id} card={shoe}></CardHome>
        ))}
      </div>
    </div>
  );
}
