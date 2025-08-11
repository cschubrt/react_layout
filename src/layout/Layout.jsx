import React, { useState } from 'react';
import MobileHeader from './MobileHeader';
import Login from '../forms/Login';
import Contact from '../forms/Contact';
import '../assets/css/stylesV1.css';

// add top header/basic layout
export default function Layout(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showContact, setShowContact] = useState(false);

  //toggle login
  function toggleLogin() {
    setShowLogin(!showLogin);
  };

  //toggle contact
  function toggleContact() {
    setShowContact(!showContact);
  };

  return (
    <>
      <MobileHeader toggleLogin={toggleLogin} toggleContact={toggleContact} />
      {showLogin ? <Login toggle={toggleLogin} /> : null}
      {showContact ? <Contact toggle={toggleContact} /> : null}
      {props.children}
    </>
  );
}