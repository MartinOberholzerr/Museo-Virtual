import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login'
import Header from './components/Header';
import Contact from './components/Contact';
import Conection from './components/Conection';
import Artistas from './components/Artistas';
import Creditos from './components/Creditos';
import Loading from "./components/vr/loading";
import Moving from "./components/vr/move";
import Vr from "./components/vr/vr";
//import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contact />} />
          <Route exact path="/colecciones" element={<Conection />} />
          <Route exact path="/artistas" element={<Artistas />} />
          <Route exact path="/creditos" element={<Creditos />} />
          <Route exact path="/creditos" element={<Creditos />} />
          
          <Route exact path="/vr" element={<Vr />} /> 
          <Route exact path="/loading" element={<Loading />} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
