import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ArrowRight, ArrowRightCircle } from 'react-feather';
import validate from 'validate.js';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { AuthActions } from '../../actions';

const ForgotPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.auth && state.alert.message);
  const [formDetails, setFormDetails] = useState({ submitted: false, errors: null });
  const [formValues, setFormValues] = useState({ userId: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDetails((prev) => ({
      ...prev,
      submitted: true
    }));
    if (!formDetails.errors) {
      dispatch(AuthActions.forgotPassword(formValues, history));
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
      userId: { presence: { allowEmpty: false, message: '^Email can\'t be blank' }, email: { message: '^Email is not valid' } }
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
                  <h4 className="text-center">Send OTP</h4>
                  <p className="text-center">Please enter your email registered with account. We will send you OTP on your email and phone.</p>
                  <hr />
                  { alertMessage && <p className="text-danger text-center">{ alertMessage }</p> }
                  <div className="mb-3">
                    <label htmlFor="userId">Email</label>
                    <input
                      type="text"
                      className={ `form-control ${(formDetails.submitted && formDetails.errors && formDetails.errors.userId) ? 'is-invalid' : ''}` }
                      name="userId"
                      id="userId"
                      value={ formValues.userId }
                      onChange={ handleChange }
                    />
                    {
                      (formDetails.submitted
                        && formDetails.errors
                        && formDetails.errors.userId)
                      && (
                        <div className="text-danger small">
                          { formDetails.errors.userId[0] }
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

export default ForgotPassword;
