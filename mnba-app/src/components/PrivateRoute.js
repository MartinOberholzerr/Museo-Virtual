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
