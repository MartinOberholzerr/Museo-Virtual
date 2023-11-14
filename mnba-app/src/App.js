import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import Header from './components/Header';
import Contact from './components/Contact';
import Conection from './components/Conection';
import Artistas from './components/Artistas';
import Creditos from './components/Creditos';
import Vr from './components/vr/vr';
import Loading from './components/vr/loading';
import './App.css'; // Importa tus estilos principales aquí

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        {loading ? (
          <div className="loading-container">
            <Loading />
          </div>
        ) : (
          <Routes>
            <Route exact path="/vr" element={<Vr />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route exact path="/contacto" element={<Contact />} />
            <Route exact path="/colecciones" element={<Conection />} />
            <Route exact path="/artistas" element={<Artistas />} />
            <Route exact path="/creditos" element={<Creditos />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
