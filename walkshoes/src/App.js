import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState, useEffect} from "react";
import { Provider } from 'react-redux';
import "./FontawsomeIcons";
import DadosPessoais from "./pags/pagamento/DadosPessoais";
import DadosEntrega from "./pags/pagamento/DadosEntrega";
import TipoPagamento from "./pags/pagamento/TipoPagamento";
import Pagamento from "./pags/pagamento/Pagamento";
import Home from "./pags/home/Home";
import Carrinho from "./pags/carrinho/Carrinho";
import Favoritos from "./pags/favoritos/Favoritos";
import CadastroProd from "./pags/produto/cadastro/CadastroProd";
import tenis1 from "./assets/adidas1.jpeg"
import tenis2 from "./assets/nike2.jpg"
import tenis3 from "./assets/nike3.jpg"
import tenis4 from "./assets/nike4.jpg"
import tenis5 from "./assets/puma1.jpg"
import InfoProd from "./pags/infoProd/InfoProd";

import { saveState } from './store/localStorage.js';
import debounce from 'lodash.debounce';
import store from './store/store.js';

function App() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tenis')
    .then(res=>{
      return res.json();
    })
    .then((data)=>{
      setCards(data);
    })
  }, []);

  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 1000)
  );

  return (
    <Provider store={store}>
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
          <Route path="/infoprod" element={<InfoProd/>}/>
          {/* <Footer></Footer> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
