import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import validate from 'validate.js';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { AuthActions } from '../../actions';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.auth && state.alert.message);
  const email = useSelector((state) => state.auth.user && state.auth.user.email) || '';
  const [formDetails, setFormDetails] = useState({
    submitted: false,
    errors: null
  });
  const [formValues, setFormValues] = useState({
    userId: '',
    otp: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDetails((prev) => ({
      ...prev,
      submitted: true
    }));
    if (!formDetails.errors) {
      dispatch(AuthActions.resetPassword(formValues, history));
    }
  };

  const handleChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if (name === 'otp') {
      value = value.replace(/[^0-9]*/g, '');
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (email) {
      setFormValues((prev) => ({
        ...prev,
        userId: email
      }));
    }
  }, [email]);

  useEffect(() => {
    const validationResult = validate(formValues, {
      otp: { presence: { allowEmpty: false, message: '^OTP can\'t be blank' } },
      password: { presence: { allowEmpty: false } },
      confirmPassword: {
        presence: { allowEmpty: false }, equality: { attribute: 'password', message: '^Password is not same' }
      }
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
                  <h4 className="text-center">Reset Password</h4>
                  <p className="text-center">
                    You are resetting password for
                    { formValues.userId && (
                      <>
                        <br />
                        <span className="font-weight-bold">{ formValues.userId }</span>
                      </>
                    ) }
                  </p>
                  <hr />
                  { alertMessage && <p className="text-danger text-center">{ alertMessage }</p> }
                  <div className="mb-3">
                    <label htmlFor="otpField">OTP</label>
                    <input
                      type="text"
                      className={ `form-control ${(formDetails.submitted && formDetails.errors && formDetails.errors.otp) ? 'is-invalid' : ''}` }
                      name="otp"
                      id="otpField"
                      maxLength="6"
                      value={ formValues.otp }
                      onChange={ handleChange }
                    />
                    {
                      (formDetails.submitted
                        && formDetails.errors
                        && formDetails.errors.otp)
                      && (
                        <div className="text-danger small">
                          { formDetails.errors.otp[0] }
                        </div>
                      )
                    }
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordField">Password</label>
                    <input
                      type="password"
                      className={ `form-control ${(formDetails.submitted && formDetails.errors && formDetails.errors.password) ? 'is-invalid' : ''}` }
                      name="password"
                      id="passwordField"
                      value={ formValues.password }
                      onChange={ handleChange }
                    />
                    {
                      (
                        formDetails.submitted
                        && formDetails.errors
                        && formDetails.errors.password)
                      && (
                        <div className="text-danger small">
                          { formDetails.errors.password[0] }
                        </div>
                      )
                    }
                  </div>
                  <div className="mb-3 position-relative">
                    <label htmlFor="confirmPasswordField">Confirm Password</label>
                    <input
                      type="password"
                      className={ `form-control ${(formDetails.submitted && formDetails.errors && formDetails.errors.confirmPassword) ? 'is-invalid' : ''}` }
                      name="confirmPassword"
                      id="confirmPasswordField"
                      value={ formValues.confirmPassword }
                      onChange={ handleChange }
                    />
                    {
                      (formDetails.submitted
                        && formDetails.errors
                        && formDetails.errors.confirmPassword)
                      && (
                        <div className="text-danger small">
                          { formDetails.errors.confirmPassword[0] }
                        </div>
                      )
                    }
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Reset Password
                    { ' ' }
                    <ArrowRight size={ 16 } />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg mt-3">
                <div className="card-body text-center p-3">
                  <span>Have an account? </span>
                  <Link className="text-decoration-none" to="/login">
                    Login now
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
