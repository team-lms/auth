import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LogIn,
  ArrowRight,
  Eye,
  EyeOff
} from 'react-feather';
import validate from 'validate.js';
import './Login.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    submitted: false,
    errors: null
  });
  const [loginDetails, setLoginDetails] = useState({
    userId: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginForm((prev) => ({
      ...prev,
      submitted: true
    }));
    if (!loginForm.errors) {
      console.log('Form can be submit:- ', loginDetails);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const validationResult = validate(loginDetails, {
      userId: { presence: { allowEmpty: false, message: '^Email or phone number can\'t be blank' } },
      password: { presence: { allowEmpty: false } }
    });
    setLoginForm((prev) => ({
      ...prev,
      errors: validationResult || null
    }));
  }, [loginDetails]);

  return (
    <div className="container">
      <form onSubmit={ handleSubmit }>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card rounded-lg">
              <div className="card-body">
                <h4 className="text-center">Sign In</h4>
                <hr />
                <div className="form-group">
                  <label htmlFor="userId">Email or phone number</label>
                  <input
                    type="text"
                    className={ `form-control ${(loginForm.submitted && loginForm.errors && loginForm.errors.userId) ? 'is-invalid' : ''}` }
                    name="userId"
                    id="userId"
                    value={ loginDetails.userId }
                    onChange={ handleChange }
                  />
                  {
                    (loginForm.submitted && loginForm.errors && loginForm.errors.userId)
                    && (
                      <div className="text-danger small">
                        { loginForm.errors.userId[0] }
                      </div>
                    )
                  }
                </div>
                <div className="form-group position-relative">
                  <label htmlFor="passwordField">Password</label>
                  <input
                    type={ showPassword ? 'text' : 'password' }
                    className={ `form-control ${(loginForm.submitted && loginForm.errors && loginForm.errors.password) ? 'is-invalid' : ''}` }
                    name="password"
                    id="passwordField"
                    value={ loginDetails.password }
                    onChange={ handleChange }
                  />
                  {
                    (loginForm.submitted && loginForm.errors && loginForm.errors.password)
                    && (
                      <div className="text-danger small">
                        { loginForm.errors.password[0] }
                      </div>
                    )
                  }
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
                <Link className="text-decoration-none" to="/">
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
