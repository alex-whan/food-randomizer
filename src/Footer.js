const { ModalFooter } = require('react-bootstrap');

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footer.scss';

const Footer = () => {
  return (
    <Navbar className="justify-content-end" fixed="bottom">
      &copy; 2020 Alex Whan
    </Navbar>
  );
};

export default Footer;
