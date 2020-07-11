import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import validate from 'validate.js';

const Login = () => {
  const [resetPasswordForm, setResetPasswordForm] = useState({
    submitted: false,
    errors: null
  });
  const [resetDetails, setResetDetails] = useState({
    otp: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setResetPasswordForm((prev) => ({
      ...prev,
      submitted: true
    }));
    if (!resetPasswordForm.errors) {
      console.log('Form can be submit:- ', resetDetails);
    }
  };

  const handleChange = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if (name === 'otp') {
      value = value.replace(/[^0-9]*/g, '');
    }
    setResetDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const validationResult = validate(resetDetails, {
      otp: { presence: { allowEmpty: false, message: '^Email or phone number can\'t be blank' } },
      password: { presence: { allowEmpty: false } },
      confirmPassword: {
        presence: { allowEmpty: false }, equality: { attribute: 'password', message: '^Password is not same' }
      }
    });
    setResetPasswordForm((prev) => ({
      ...prev,
      errors: validationResult || null
    }));
  }, [resetDetails]);

  return (
    <div className="container">
      <form onSubmit={ handleSubmit }>
        <div className="row justify-content-center my-5">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card rounded-lg">
              <div className="card-body">
                <h4 className="text-center">Reset Password</h4>
                <p className="text-center">
                  You are resetting password for
                  <br />
                  <span className="font-weight-bold">9634077122</span>
                </p>
                <hr />
                <div className="mb-3">
                  <label htmlFor="otpField">OTP</label>
                  <input
                    type="text"
                    className={ `form-control ${(resetPasswordForm.submitted && resetPasswordForm.errors && resetPasswordForm.errors.otp) ? 'is-invalid' : ''}` }
                    name="otp"
                    id="otpField"
                    maxLength="6"
                    value={ resetDetails.otp }
                    onChange={ handleChange }
                  />
                  {
                    (resetPasswordForm.submitted
                      && resetPasswordForm.errors
                      && resetPasswordForm.errors.otp)
                    && (
                      <div className="text-danger small">
                        { resetPasswordForm.errors.otp[0] }
                      </div>
                    )
                  }
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordField">Password</label>
                  <input
                    type="password"
                    className={ `form-control ${(resetPasswordForm.submitted && resetPasswordForm.errors && resetPasswordForm.errors.password) ? 'is-invalid' : ''}` }
                    name="password"
                    id="passwordField"
                    value={ resetDetails.password }
                    onChange={ handleChange }
                  />
                  {
                    (
                      resetPasswordForm.submitted
                      && resetPasswordForm.errors
                      && resetPasswordForm.errors.password)
                    && (
                      <div className="text-danger small">
                        { resetPasswordForm.errors.password[0] }
                      </div>
                    )
                  }
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="confirmPasswordField">Confirm Password</label>
                  <input
                    type="password"
                    className={ `form-control ${(resetPasswordForm.submitted && resetPasswordForm.errors && resetPasswordForm.errors.confirmPassword) ? 'is-invalid' : ''}` }
                    name="confirmPassword"
                    id="confirmPasswordField"
                    value={ resetDetails.confirmPassword }
                    onChange={ handleChange }
                  />
                  {
                    (resetPasswordForm.submitted
                      && resetPasswordForm.errors
                      && resetPasswordForm.errors.confirmPassword)
                    && (
                      <div className="text-danger small">
                        { resetPasswordForm.errors.confirmPassword[0] }
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
  );
};

export default Login;
