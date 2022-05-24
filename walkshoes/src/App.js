import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import DadosPessoais from "./pages/pagamento/DadosPessoais";
import DadosEntrega from "./pages/pagamento/DadosEntrega";
import TipoPagamento from "./pages/pagamento/TipoPagamento";
import Pagamento from "./pages/pagamento/Pagamento";
import Home from "./pages/home/Home";
import Carrinho from "./pages/carrinho/Carrinho";
import Favoritos from "./pages/favoritos/Favoritos";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact  element={<Home />} />
        <Route path="/dadospessoais" element={<DadosPessoais />} />
        <Route path="/dadosentrega" element={<DadosEntrega />} />
        <Route path="/tipopagamento" element={<TipoPagamento />} />
        <Route path="/pagamento" element={<Pagamento/>} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/favoritos" element={<Favoritos />}/>
      </Routes>
    </Router>
  );
}

export default App;
