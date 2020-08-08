import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowRightCircle
} from 'react-feather';
import validate from 'validate.js';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';

const ForgotPassword = ({ history }) => {
  const [forgotPasswordForm, setForgotPasswordForm] = useState({
    submitted: false,
    errors: null
  });
  const [userDetails, setUserDetails] = useState({
    userId: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setForgotPasswordForm((prev) => ({
      ...prev,
      submitted: true
    }));
    if (!forgotPasswordForm.errors) {
      console.log('Form can be submit:- ', userDetails);
      history.push('/reset-password');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const validationResult = validate(userDetails, {
      userId: { presence: { allowEmpty: false, message: '^Email or phone number can\'t be blank' } }
    });
    setForgotPasswordForm((prev) => ({
      ...prev,
      errors: validationResult || null
    }));
  }, [userDetails]);

  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={ handleSubmit }>
          <div className="row justify-content-center my-5">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="card rounded-lg">
                <div className="card-body">
                  <h4 className="text-center">Send OTP</h4>
                  <p className="text-center">Please enter your email or phone number registered with account. We will send you OTP on your email and phone.</p>
                  <hr />
                  <div className="mb-3">
                    <label htmlFor="userId">Email or phone number</label>
                    <input
                      type="text"
                      className={ `form-control ${(forgotPasswordForm.submitted && forgotPasswordForm.errors && forgotPasswordForm.errors.userId) ? 'is-invalid' : ''}` }
                      name="userId"
                      id="userId"
                      value={ userDetails.userId }
                      onChange={ handleChange }
                    />
                    {
                      (forgotPasswordForm.submitted
                        && forgotPasswordForm.errors
                        && forgotPasswordForm.errors.userId)
                      && (
                        <div className="text-danger small">
                          { forgotPasswordForm.errors.userId[0] }
                        </div>
                      )
                    }
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Send OTP
                    { ' ' }
                    <ArrowRightCircle size={ 16 } />
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

ForgotPassword.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default ForgotPassword;
