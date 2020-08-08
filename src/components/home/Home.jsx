import React from 'react';

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
          <button type="button" className="btn btn-lg btn-primary px-5 mr-3">Sign in</button>
          <button type="button" className="btn btn-lg btn-outline-primary px-5">Help</button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
