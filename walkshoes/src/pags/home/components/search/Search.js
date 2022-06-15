import React from "react";
import "./Search.css"

const Search = () => {
    return (
        <div className="search">
       <h2 className="titlelist">Todos os produtos</h2>
       <input className="inputsearch" type="text" placeholder=" O que você deseja?" />
        </div>
    );
  }

export default Search;

