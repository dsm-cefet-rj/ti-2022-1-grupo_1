import React from "react";
import "./CardHome.css";
import { useSelector } from 'react-redux'
import { useMatch, Link } from 'react-router-dom';
import StarButton from "./starButton/StarButton";
import money from "../../../../../assets/real-icon.png";

function CardHome (props) {
  const loading = useSelector(state => state.fav.loading);
  const data = props.card;
  const url = props.url;

  return (
    <div className="card">
      <div className="card-content-home">
        {loading != 'failed' ? (
          <StarButton submit={data} /> 
        ) : loading == 'idle' ? (
          <div className="loading-spinner star load-star" />
        ) :
          <></>
        }
        <Link to={`${url}/${data.id}`}>
          <div>
            <img className="product-home" src={data.img} />
          </div>
          <div className="row-card-home">
            <div>
              <div className="content">
                <p className="titlehome">{data.nome}</p>
                <p className="type">{data.categoria}</p>
              </div>
              <div className="offer">
                <img className="money" src={money} />
                <p className="value">
                  {data.valor}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardHome;