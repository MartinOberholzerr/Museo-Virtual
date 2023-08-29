import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import {Footer} from './componentes/Footer';
/* import { Nav } from './componentes/Navbar'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Footer />
{/*     <Nav/> */}
  </React.StrictMode>
);
  
reportWebVitals();
