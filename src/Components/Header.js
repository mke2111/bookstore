import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <>
    <div className="header-all">
      <div className="header">
        <h2 className="color-blue pointer">BookStore CMS</h2>
        <h3 className="text-size text-secondary pointer align-middle">BOOKS</h3>
        <h3 className="text-size pointer">CATEGORIES</h3>
      </div>
      <div>
        <i className="fas fa-user pointer color-blue" />
      </div>
    </div>
  </>
);

export default Header;
