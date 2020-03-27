import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LogIn,
  ArrowRight,
  Eye,
  EyeOff
} from 'react-feather';

import './Login.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <form>
        <div className="row justify-content-center mt-5">
          <div className="col-4">
            <div className="card rounded-lg">
              <div className="card-body">
                <h4 className="text-center">Sign In</h4>
                <hr />
                <div className="form-group">
                  <label htmlFor="userId">Email or phone number</label>
                  <input type="text" className="form-control" name="userId" id="userId" />
                </div>
                <div className="form-group position-relative">
                  <label htmlFor="passwordField">Password</label>
                  <input type={ showPassword ? 'text' : 'password' } className="form-control" name="password" id="passwordField" />
                  <button
                    type="button"
                    className="btn btn-sm btn-primary py-0 position-absolute password-toggle"
                    onClick={ () => setShowPassword(!showPassword) }
                    title={ `${showPassword ? 'Hide' : 'Show'} password` }
                  >
                    { !showPassword && <Eye size={ 15 } /> }
                    { showPassword && <EyeOff size={ 15 } /> }
                  </button>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign in
                  { ' ' }
                  <LogIn size={ 16 } />
                </button>
              </div>
            </div>
            <div className="card rounded-lg mt-3">
              <div className="card-body text-center p-3">
                <span>Forgot password? </span>
                <Link className="text-decoration-none" href="/">
                  Reset now
                  { ' ' }
                  <ArrowRight size={ 16 } />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
