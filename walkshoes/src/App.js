// [React]
import React, { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import "./FontawsomeIcons";

// [Router]
import { BrowserRouter, Navigate, Routes, Route, Outlet } from "react-router-dom";

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
import Login from "./pags/login/login"
import Cadastro from "./pags/cadastro/cadastro"

// [Redux]: store e implementacao do LocalStorage
import { saveState } from './store/localStorage.js';
import debounce from 'lodash.debounce';
import store from './store/store.js';

// [CSS]
import "./App.css";
import "./assets/css/spinner.css"

function App() {

  const [cards, setCards] = useState([]);

  // Parte da implementacao do LocalStorage
  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 1000)
  );

  function AuthGate() {
    const auth = localStorage.getItem("isAuthenticated");
    return(
      <>
        { auth ? <Outlet /> : <Navigate to='/login' replace /> }
      </>
  )}

  // [HTML]
  return (
    <div style={{paddingBottom: "100px"}}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" exact  element={<Home cards={cards}/>}/>
            <Route path="infoprod/:id" element={<InfoProd />}/>
            <Route path="login" element={<Login/>} />
            <Route path="cadastro" element={<Cadastro/>} />
            <Route path="" element={<AuthGate />}>
              <Route path="dadospessoais" element={<DadosPessoais />} />
              <Route path="dadosentrega" element={<DadosEntrega />} />
              <Route path="tipopagamento" element={<TipoPagamento />} />
              <Route path="pagamento" element={<Pagamento/>} />
              <Route path="carrinho" element={<Carrinho />} />
              <Route path="favoritos" element={<Favoritos />}/>
              <Route path="cadastroprod" element={<CadastroProd cards={cards} setCards={setCards} />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
