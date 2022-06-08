import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState} from "react";
import "./components/FontawsomeIcons";
import DadosPessoais from "./components/pags/pagamento/DadosPessoais";
import DadosEntrega from "./components/pags/pagamento/DadosEntrega";
import Footer from "./components/footer/Footer";
import TipoPagamento from "./components/pags/pagamento/TipoPagamento";
import Pagamento from "./components/pags/pagamento/Pagamento";
import Home from "./components/pags/home/Home";
import Carrinho from "./components/pags/carrinho/Carrinho";
import Favoritos from "./components/pags/favoritos/Favoritos";
import CadastroProd from "./components/pags/produto/cadastro/CadastroProd";
import tenis1 from "./assets/adidas1.jpeg"
import tenis2 from "./assets/nike2.jpg"
import tenis3 from "./assets/nike3.jpg"
import tenis4 from "./assets/nike4.jpg"
import tenis5 from "./assets/puma1.jpg"
import footer from "./components/footer/Footer";
import InfoProd from "./components/pags/infoProd/InfoProd";


function App() {

  const [cards, setCards] = useState([
    {
      img: tenis5,
      title: "Puma Runner BDP Masculino",
      type: "Masculino",
      value: "650,00",
    },
    {
      img: tenis1,
      title: "Adidas Solar Blaze Masculino",
      type: "Feminino",
      value: "950,00",
    },
    {
      img: tenis4,
      title: "Tênis Nike Flex 2016 RN Masculino",
      type: "Esportivo",
      value: "349,00",
    },
    {
      img: tenis3,
      title: "Nike Air-Max Axis Premium",
      type: "Feminino",
      value: "260,00",
    },
    {
      img: tenis4,
      title: "Tênis Nike Flex 2016 RN Masculino",
      type: "Feminino",
      value: "570,00",
    },
    {
      img:tenis5,
      title: "Puma Runner BDP Masculino",
      type: "Masculino",
      value: "450,00",
    },
    {
      img:tenis2,
      title: "Nike Air Max Axis Boys",
      type: "Esportivo",
      value: "600,00",
    },
    {
      img:tenis3,
      title: "Nike Air-Max Axis Premium",
      type: "Feminino",
      value: "950,00",
    },
  ]);


  return (
    <Router>
      <Routes>
        <Route path="/" exact  element={<Home cards={cards}/>}/>
        <Route path="/dadospessoais" element={<DadosPessoais />} />
        <Route path="/dadosentrega" element={<DadosEntrega />} />
        <Route path="/tipopagamento" element={<TipoPagamento />} />
        <Route path="/pagamento" element={<Pagamento/>} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/favoritos" element={<Favoritos />}/>
        <Route path="/cadastroprod" element={<CadastroProd cards={cards} setCards={setCards}/>}/>
        <Route path="/infoprod" element={<InfoProd cards={cards}/>}/>
        {/* <Footer></Footer> */}
      </Routes>
    </Router>
  );
}

export default App;
