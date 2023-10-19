import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './Auth';  // Importa useAuth

function PrivateRoute({ path, element }) {
  const { user } = useAuth();  // Usa useAuth para obtener el usuario actual

  return (
    <Route
      path={path}
      element={user ? element : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;
