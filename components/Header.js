import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">Tech Innovators</div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              className="nav-link"
              activeClassName="active-link"
              style={{ fontFamily: 'urbanist' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="nav-link"
              activeClassName="active-link"
              style={{ fontFamily: 'urbanist' }}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active-link"
              style={{ fontFamily: 'urbanist' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
