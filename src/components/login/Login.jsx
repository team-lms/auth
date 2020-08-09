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
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { AuthActions } from '../../actions';

const Login = () => {
  const isBusy = useSelector((state) => state.auth && state.auth.isBusy) || false;
  const alert = useSelector((state) => state.auth && state.alert);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formDetails, setFormDetails] = useState({
    submitted: false,
    errors: null
  });
  const [formValues, setFormValues] = useState({
    userId: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDetails((prev) => ({
      ...prev,
      submitted: true
    }));
    if (!formDetails.errors) {
      dispatch(AuthActions.login(formValues));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const validationResult = validate(formValues, {
      userId: { presence: { allowEmpty: false, message: '^Email can\'t be blank' }, email: { message: '^Email is not valid' } },
      password: { presence: { allowEmpty: false } }
    });
    setFormDetails((prev) => ({
      ...prev,
      errors: validationResult || null
    }));
  }, [formValues]);

  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={ handleSubmit }>
          <div className="row justify-content-center my-5">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="card rounded-lg">
                <div className="card-body">
                  <h4 className="text-center">Sign In</h4>
                  <hr />
                  { alert.message && <p className={ `text-${alert.type} text-center` }>{ alert.message }</p> }
                  <div className="mb-3">
                    <label htmlFor="userId">Email or phone number</label>
                    <input
                      type="text"
                      className={ `form-control ${(formDetails.submitted && formDetails.errors && formDetails.errors.userId) ? 'is-invalid' : ''}` }
                      name="userId"
                      id="userId"
                      value={ formValues.userId }
                      onChange={ handleChange }
                    />
                    {
                      (formDetails.submitted && formDetails.errors && formDetails.errors.userId)
                      && (
                        <div className="text-danger small">
                          { formDetails.errors.userId[0] }
                        </div>
                      )
                    }
                  </div>
                  <div className="mb-3 position-relative">
                    <label htmlFor="passwordField">Password</label>
                    <input
                      type={ showPassword ? 'text' : 'password' }
                      className={ `form-control ${(formDetails.submitted && formDetails.errors && formDetails.errors.password) ? 'is-invalid' : ''}` }
                      name="password"
                      id="passwordField"
                      value={ formValues.password }
                      onChange={ handleChange }
                    />
                    {
                      (formDetails.submitted && formDetails.errors && formDetails.errors.password)
                      && (
                        <div className="text-danger small">
                          { formDetails.errors.password[0] }
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
                  <button type="submit" className="btn btn-primary btn-block" disabled={ isBusy }>
                    Sign in
                    { ' ' }
                    <LogIn size={ 16 } />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg mt-3">
                <div className="card-body text-center p-3">
                  <span>Forgot password? </span>
                  <Link className="text-decoration-none" to="/forgot-password">
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
    </>
  );
};

export default Login;
