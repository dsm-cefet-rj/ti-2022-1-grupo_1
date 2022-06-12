import React from "react";
import './HeaderList.css';

const HeaderList = () => {
  return (
    <div className="content-menu">
      <ul className="lista">
        <li><a href="#">Masculino</a></li>
        <li><a href="#">Feminino</a></li>
        <li><a href="#">Infantil</a></li>
        <li><a href="#">Esportivo</a></li>
      </ul>
    </div>
  );
};

export default HeaderList;
