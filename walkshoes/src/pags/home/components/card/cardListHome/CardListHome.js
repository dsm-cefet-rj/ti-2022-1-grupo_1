import React from "react";
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
    <div className="contentliste">
      <Search></Search>
      <div className="liste">
        {data.map((item) => 
          <CardHome key={item.id} card={item} url={url}></CardHome>
        )}
      </div>
    </div>
  );
}
