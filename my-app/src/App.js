import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';


import React, { useEffect, useState } from 'react';//Modo noche/dia

import home from './home';
import login from './login';
import notFoundPage from './components/notFoundPage';
import load from './components/load';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const api = axios.create({
  baseURL: '-'
});

// Configuracion de interceptores de solicitud y respuesta
api.interceptors.request.use(
  async (config) => {
    const user = firebase.auth().currentUser;

    if (user) {
      const token = await user.getIdToken();
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      const history = useHistory();
      history.push('/login');
    }

    return config;
  },
  (error) => {
    //error en la solicitud
    return Promise.reject(error);
  }
);


firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
//
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

//Configuracion de USUARIO, dia/noche
function App() {
  const [mode, setMode] = useState('');

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      // Modo predeterminado
      setMode('day');
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'day' ? 'night' : 'day';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };
  return (
    <div className={`App ${mode}`}>
      <h1>Aplicación</h1>
      <button onClick={toggleMode}>Cambiar modo</button>
      {/* Contennido */}
    </div>
  );
}



export default App;
