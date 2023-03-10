/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  Navigate, Route, Redirect, redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../../constants/routes';
import makeRequest from '../makeRequest';
import { VALIDATE_TOKEN } from '../../constants/apiEndpoints';

function ProtectedRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('token');
  if (!token) { return <Route path="/register" />; }
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const validateToken = async () => {
    try {
      const decodedToken = await fetch(VALIDATE_TOKEN, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsAuthenticated(true);
      return decodedToken;
    } catch (error) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return null;
    }
  };
  useEffect(() => {
    validateToken();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  return (
    <Route>
      {rest}
      render=
      {(props) => (
        isAuthenticated ? <Component {...props} /> : <Navigate to={LOGIN_ROUTE} />
      )}
    </Route>
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default ProtectedRoute;
