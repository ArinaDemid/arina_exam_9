import React from "react";
import {NavLink} from 'react-router-dom';

const Logo = props => (
  <div className="Logo">
    <NavLink to="/" style={{color: 'rgb(228, 222, 222)', textDecoration: 'none', fontSize: '35px'}} >
      Contacts
    </NavLink>
  </div>
);

export default Logo;