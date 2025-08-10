import React, { useState } from 'react'
import Layout from './layout/Layout';
import Login from './forms/Login';
import Header from './page/Header'
import Contact from './forms/Contact';
import PopupContainer from './forms/PopupContainer';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function toggleLogin() {
    setShowLogin(!showLogin);
  };

  function toggleContact() {
    setShowContact(!showContact);
  };

  return (
    <Layout toggleLogin={toggleLogin} toggleContact={toggleContact}>
      <Header />
      {showLogin ? <PopupContainer toggle={toggleLogin} html={Login} /> : null}
      {showContact ? <PopupContainer toggle={toggleContact} /> : null}
    </Layout>
  )
}