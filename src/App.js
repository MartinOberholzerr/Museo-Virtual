import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';
import Conection from './components/Conection';
import Creditos from './components/Creditos';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contact />} />
          <Route exact path="/colecciones" element={<Conection />} />
          <Route exact path="/creditos" element={<Creditos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
