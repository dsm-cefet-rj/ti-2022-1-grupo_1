import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import DadosPessoais from "./components/pags/pagamento/DadosPessoais";
import DadosEntrega from "./components/pags/pagamento/DadosEntrega";
import TipoPagamento from "./components/pags/pagamento/TipoPagamento";
import Pagamento from "./components/pags/pagamento/Pagamento";
import Home from "./components/pags/home/Home";
import Carrinho from "./components/pags/carrinho/Carrinho";
import Favoritos from "./components/pags/favoritos/Favoritos";
import CadastroProd from "./components/pags/produto/cadastro/CadastroProd";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact  element={<Home/>}/>
        <Route path="/dadospessoais" element={<DadosPessoais />} />
        <Route path="/dadosentrega" element={<DadosEntrega />} />
        <Route path="/tipopagamento" element={<TipoPagamento />} />
        <Route path="/pagamento" element={<Pagamento/>} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/favoritos" element={<Favoritos />}/>
        <Route path="/cadastroprod" element={<CadastroProd/>}/>
      </Routes>
    </Router>
  );
}

export default App;
