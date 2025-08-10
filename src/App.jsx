import React, { useState } from 'react'
import Layout from './layout/Layout';
import Login from './forms/Login';
import Header from './page/Header'
import Contact from './forms/Contact';


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
      <div>
        <Header />
        <button onClick={toggleLogin}>Login</button>
        <button onClick={toggleContact}>Contact</button>
        {showLogin ? <Login toggle={toggleLogin} /> : null}
        {showContact ? <Contact toggle={toggleContact} /> : null}
      </div>
    </Layout>
  )
}