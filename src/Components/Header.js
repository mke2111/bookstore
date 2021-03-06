import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <>
    <div className="header-all">
      <div className="header">
        <h2 className="color-blue pointer bold font-weight-bold">BookStore CMS</h2>
        <h3 className="text-size text-secondary pointer align-middle regular">BOOKS</h3>
        <h3 className="text-size pointer regular">CATEGORIES</h3>
      </div>
      <div>
        <i className="fas fa-user pointer color-blue" />
      </div>
    </div>
  </>
);

export default Header;
