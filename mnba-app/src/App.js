import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login'
import Header from './components/Header';
import Contact from './components/Contact';
import Conection from './components/Conection';
import Artistas from './components/Artistas';
import Creditos from './components/Creditos';
import PrivateRoute from './components/PrivateRoute';  // Importa PrivateRoute

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}/>
          <PrivateRoute path="/"> 
            <Route element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/colecciones" element={<Conection />} />
            <Route path="/artistas" element={<Artistas />} />
            <Route path="/creditos" element={<Creditos />} />
          </PrivateRoute>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
