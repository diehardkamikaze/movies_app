import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

function Nav(): JSX.Element | null {
  return (
    <nav className="main-menu">
      <ul>
        <li><NavLink to="/" exact className="button" activeClassName="selected">Home</NavLink></li>
        <li><NavLink to="/about" className="button" activeClassName="selected">About us</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
