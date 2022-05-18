import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Menu from "./components/header/menu/Menu";
import Footer from "./components/footer/Footer";
import DadosPessoais from "./components/pags/pagamento/DadosPessoais";
import DadosEntrega from "./components/pags/pagamento/DadosEntrega";
import TipoPagamento from "./components/pags/pagamento/TipoPagamento";
import Home from "./components/pags/home/Home";
import Carrinho from "./components/pags/carrinho/Carrinho";


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" exact  element={<Home />} />
        <Route path="/dadospessoais" element={<DadosPessoais />} />
        <Route path="/dadosentrega" element={<DadosEntrega />} />
        <Route path="/tipopagamento" element={<TipoPagamento />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
