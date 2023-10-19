/*MAQUETA DE RUTAS PRIVADAS REDIRECCIONANDO AL USUARIO AL LOGIN
SI ES QUE NO ESTA REGISTRADO O SI NO INICIO SESION


import React, { useEffect } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './Auth'; 

function PrivateRoute({ path, element }) {
  const { user, logout } = useAuth();  
  const sessionTimeout = 60 * 15 * 1000; // 15 minutos

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
    }, sessionTimeout);

    return () => clearTimeout(timer);
  }, [logout]);

  return (
    <Route
      path={path}
      element={user ? element : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;

*/