import React from 'react';
import './Backdrop.css';

const Backdrop = ({show, click}) => (
  show ? <div className="Backdrop" onClick={click}/> : null
);

export default Backdrop;