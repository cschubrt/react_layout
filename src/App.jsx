import React, { useState } from 'react'
import Layout from './layout/Layout';
import Login from './Login';
import Contact from './Contact';


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
    <Layout toggleLogin={toggleLogin}>
      <div>
        <button onClick={toggleLogin}>Login</button>
        <button onClick={toggleContact}>Contact</button>
        {showLogin ? <Login toggle={toggleLogin} /> : null}
        {showLogin ? <Login toggle={toggleContact} /> : null}
      </div>
    </Layout>
  )
}
