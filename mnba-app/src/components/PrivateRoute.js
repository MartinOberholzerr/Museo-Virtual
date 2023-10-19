/*MAQUETA DE RUTAS PRIVADAS REDIRECCIONANDO AL USUARIO AL LOGIN
SI ES QUE NO ESTA REGISTRADO O SI NO INICIO SESION


import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './Auth'; 

function PrivateRoute({ path, element }) {
  const { user } = useAuth();  

  return (
    <Route
      path={path}
      element={user ? element : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;
*/