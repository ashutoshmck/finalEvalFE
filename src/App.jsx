/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ERROR_ROUTE, LOGIN_ROUTE, HOME_ROUTE, RECORDS_ROUTE, REGISTER_ROUTE,
} from './constants/routes';
import Pages from './pages/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN_ROUTE} element={<Pages.LoginPage />} />
          <Route path={HOME_ROUTE} element={<Pages.HomePage />} />
          <Route path={RECORDS_ROUTE} element={<Pages.RecordsPage />} />
          <Route path={REGISTER_ROUTE} element={<Pages.RegisterPage />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Pages.ErrorPage />} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
