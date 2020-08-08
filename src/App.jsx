import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import './assets/scss/custom.scss';

import Login from './components/login/Login';
import ForgotPassword from './components/forgot-password/ForgotPassword';
import ResetPassword from './components/reset-password/ResetPassword';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={ Login } />
        <Route path="/forgot-password" component={ ForgotPassword } />
        <Route path="/reset-password" component={ ResetPassword } />
      </Switch>
    </div>
  );
}

export default App;
