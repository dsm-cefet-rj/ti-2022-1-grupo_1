import CardHome from "../cardHome/CardHome";
import "./CardListHome.css";
import Search from "../../search/Search";
//import { useSelector } from 'react-redux';
//import { selectCards } from '../../../../store/formSlice.js';
import { useMatch, Link } from 'react-router-dom'

export default function CardListHome(props) {
  const data = props.card;
  const url = '/infoprod';
  
  return (
    <div className="contentlist">
      <Search></Search>
      <div className="list">
        {data.slice(0).reverse().map((shoe) => (
          <Link to={`${url}/${shoe.id}`}>
            <CardHome key={shoe.id} card={shoe}></CardHome>
          </Link>
        ))}
      </div>
    </div>
  );
}
