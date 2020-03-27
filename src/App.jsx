import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import './assets/scss/bootstrap.scss';

import Login from './components/login/Login';
import ForgotPassword from './components/forgot-password/forgotPassword';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={ Login } />
          <Route path="/forgot-password" component={ ForgotPassword } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
