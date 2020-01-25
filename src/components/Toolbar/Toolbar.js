import React from 'react';
import './Toolbar.css';
import Logo from '../Logo/Logo';
import {NavLink} from 'react-router-dom';

const Toolbar = () => (
  <header className="Toolbar">
    <Logo />
    <NavLink to={'/new-contact'} 
      style={{
        backgroundColor: 'rgb(228, 222, 222)', 
        border: '1px solid black', 
        color: '#522468', 
        padding: '10px 20px', 
        textDecoration: 'none', 
        fontWeight: 'bold'
      }}
    >
      <i className="fas fa-plus-square"></i>
      Add New Contact
    </NavLink>
  </header>
);

export default Toolbar;