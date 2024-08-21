import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const location = useLocation();
  const token = sessionStorage.getItem('token');
  const national_id = sessionStorage.getItem('national_id');
  if (!token || !national_id) {
    // Redirect to login with state for showing a message
    return (
      <Navigate
        to="/login"
        state={{ from: location, message: 'يجب عليك تسجيل الدخول' }}
        replace
      />
    );
  }

  return element;
};

export default PrivateRoute;