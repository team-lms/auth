import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { HelpCircle } from 'react-feather';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light py-0 border-bottom">
    <div className="container">
      <Link className="navbar-brand logo text-primary text-decoration-none py-0" to="/">LMS</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="btn btn-primary" to="/">
              Help
              { ' ' }
              <HelpCircle size={ 16 } />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
