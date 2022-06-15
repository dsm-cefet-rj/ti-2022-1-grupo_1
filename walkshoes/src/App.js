// [React]
import React, {useState, useEffect} from "react";
import { Provider } from 'react-redux';
import "./FontawsomeIcons";
import tenis1 from "./assets/adidas1.jpeg"
import tenis2 from "./assets/nike2.jpg"
import tenis3 from "./assets/nike3.jpg"
import tenis4 from "./assets/nike4.jpg"
import tenis5 from "./assets/puma1.jpg"

// [Router]
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// [Componentes]
import DadosPessoais from "./pags/pagamento/DadosPessoais";
import DadosEntrega from "./pags/pagamento/DadosEntrega";
import TipoPagamento from "./pags/pagamento/TipoPagamento";
import Pagamento from "./pags/pagamento/Pagamento";
import Home from "./pags/home/Home";
import Carrinho from "./pags/carrinho/Carrinho";
import Favoritos from "./pags/favoritos/Favoritos";
import CadastroProd from "./pags/produto/cadastro/CadastroProd";
import InfoProd from "./pags/infoProd/InfoProd";

// [Redux]: store e implementacao do LocalStorage
import { saveState } from './store/localStorage.js';
import debounce from 'lodash.debounce';
import store from './store/store.js';

// [CSS]
import "./App.css";

function App() {

  const [cards, setCards] = useState([]);

  // // Fetch do bd mockado
  // useEffect(() => {
  //   fetch('http://localhost:3000/tenis')
  //   .then(res=>{
  //     return res.json();
  //   })
  //   .then((data)=>{
  //     setCards(data);
  //   })
  // }, []);

  // Parte da implementacao do LocalStorage
  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 1000)
  );

  // [HTML]
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
