import React, { useState } from 'react';
import Header from './Header';

export default function MobileHeader(props) {
  const [styled, setStyled] = useState('none');

  // open/close side menu. default hide
  // (max-width: 992px) and (min-width: 601px)
  const handleOpen = () => {
    if (styled == 'block') {
      setStyled("none");
    } else {
      setStyled("block");
    }
  }

  // close the side menu with the close button
  const handleClose = () => {
    setStyled("none");
  }

  return (
    <>
      <Header handleOpen={handleOpen} toggleLogin={props.toggleLogin} />
      <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
        style={{ display: `${styled}` }} id="mySidebar">
        <a href="#!" onClick={handleClose} className="w3-bar-item w3-button w3-large">Close</a>
        <a href="#!" onClick={props.toggleLogin} className="w3-bar-item w3-button">Login</a>
      </nav>
    </>
  );
}