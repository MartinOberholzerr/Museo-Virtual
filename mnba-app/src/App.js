import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
