import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Menu from "./components/header/menu/Menu";
import Footer from "./components/footer/Footer";
import DadosPessoais from "./components/pags/pagamento/DadosPessoais";
import Home from "./components/pags/home/Home";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" exact  element={<Home />} />
        <Route path="/dadospessoais" element={<DadosPessoais />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
