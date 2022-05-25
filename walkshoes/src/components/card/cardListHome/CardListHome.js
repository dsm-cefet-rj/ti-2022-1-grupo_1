import React from "react";
import CardHome from "../cardHome/CardHome";
import "./CardListHome.css";
import Search from "../../search/Search";

export default function CardListHome() {
  const cards = [
    {
      title: "Nike Air-Max Axis Premium",
      type: "Masculino",
      value: "650,00",
    },
    {
      title: "Nike Air-Max Axis Premium",
      type: "Feminino",
      value: "950,00",
    },
    {
      title: "Nike Air-Max Axis Premium",
      type: "Esportivo",
      value: "349,00",
    },
    {
      title: "Nike Air-Max Axis Premium",
      type: "Feminino",
      value: "260,00",
    },
    {
      title: "Nike Air-Max Axis Premium",
      type: "Feminino",
      value: "570,00",
    },
    {
      title: "Nike Air-Max Axis Premium",
      type: "Masculino",
      value: "450,00",
    },
    {
      title: "Nike Air-Max Axis Premium",
      type: "Esportivo",
      value: "600,00",
    },
    {
      title: "Nike Air-Max Axis Premium",
      type: "Feminino",
      value: "950,00",
    },
  ];

  return (
    <div className="contentlist">
      <Search></Search>
      <div className="list">
        {cards.map((shoe) => (
          <CardHome card={shoe}></CardHome>
        ))}
      </div>
    </div>
  );
}
