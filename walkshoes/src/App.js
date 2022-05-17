import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import Menu from './components/header/Menu';
import Footer from './components/footer/Footer'
import DadosPessoais from './components/pags/pagamento/DadosPessoais';

function App() {
  return (
      <Router>
        <Menu/>
          <Routes>
            <Route path="/dadospessoais" element={<DadosPessoais/>} />
          </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
