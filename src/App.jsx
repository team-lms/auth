import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './assets/scss/custom.scss';
import './assets/scss/theme.scss';

import Login from './components/login/Login';
import ForgotPassword from './components/forgot-password/ForgotPassword';
import ResetPassword from './components/reset-password/ResetPassword';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/forgot-password" component={ ForgotPassword } />
        <Route path="/reset-password" component={ ResetPassword } />
      </Switch>
    </div>
  );
}

export default App;
