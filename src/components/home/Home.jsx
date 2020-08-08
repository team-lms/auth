import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="vh-100 bg-main">
    <div className="container h-100">
      <div className="row align-items-center h-100">
        <div className="col-5">
          <h1 className="font-weight-light">
            Apply and Manage your
            { ' ' }
            <br />
            { ' ' }
            leaves in the easiest
            { ' ' }
            <br />
            { ' ' }
            way possible
          </h1>
          <p className="lead">Get ready to experience the beautiful UI</p>
          <Link to="/login" className="btn btn-lg btn-primary px-5 mr-3">Sign in</Link>
          <Link to="/" className="btn btn-lg btn-outline-primary px-5">Help</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
