import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink className="header-title" to="/">
        <div>{'<'}</div>
        <h3>COVID-19 Tracker</h3>
      </NavLink>
    </nav>
  </header>
);

export default Header;
