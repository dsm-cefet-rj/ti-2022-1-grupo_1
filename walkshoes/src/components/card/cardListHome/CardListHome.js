import CardHome from "../cardHome/CardHome";
import "./CardListHome.css";
import Search from "../../search/Search";

export default function CardListHome(props) {
  
  return (
    <div className="contentlist">
      <Search></Search>
      <div className="list">
        {props.card.map((shoe) => (
          <CardHome card={shoe}></CardHome>
        ))}
      </div>
    </div>
  );
}
