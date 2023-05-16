import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Footer} from './componentes/Footer';
import { Nav } from './componentes/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Footer />
    <Nav/>
  </React.StrictMode>
);
  
reportWebVitals();
