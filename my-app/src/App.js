import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import logo from './components/NavBar/assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
    </Router>

  );
}
const favicon = document.querySelector('link[rel="icon"]');
favicon.href = logo;
export default App;
