import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <>
    <div className="header-all">
      <div className="header">
        <h2 className="color-blue">BookStore CMS</h2>
        <h3 className="text-size text-secondary align-middle">BOOKS</h3>
        <h3 className="text-size">CATEGORIES</h3>
      </div>
      <div>
        <i className="fas fa-user" />
      </div>
    </div>
  </>
);

export default Header;
