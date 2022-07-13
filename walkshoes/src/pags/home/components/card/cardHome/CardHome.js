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
      {loading == 'done' ? (
        <div className="card-content-home">
          <StarButton submit={data} />
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
      ) : loading == 'failed' ? (
        <div className="card-content-home">
          {/* <StarButton submit={data} /> */}
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
      ) : (
        <div className="card-content-home load-content-home">
          <div className="spinner-container">
            <div className="loading-spinner" />
          </div>
        </div>
      )}
    </div>
  );
}


export default CardHome;