import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';

const App = () => {
  return <Login />;
};


function App() {
  return (
    <div className="App">
     <authProvider>
      <routes>
        <reute path="/Login" element={<Login/>}/>
        <route 
        path="/" 
        element={
        <protectedRoute>
          <home/>
        </protectedRoute>
      }
      />
      <route path= "/Register" element={<Register/>}/>
      </routes>
     </authProvider>
    </div>
  );
}

export default App;
