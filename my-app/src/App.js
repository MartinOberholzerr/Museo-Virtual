import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';

import home from './home';
import login from './login';

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



export default App;
