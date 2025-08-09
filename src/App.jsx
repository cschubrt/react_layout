import React, { useState } from 'react'
import Layout from './layout/Layout';
import Login from './Login';


export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  function toggleLogin() {
    setShowLogin(!showLogin);
  };

  return (
    <Layout toggleLogin={toggleLogin}>
      <div>
        <button onClick={toggleLogin}>Login</button>
        {showLogin ? <Login toggle={toggleLogin} /> : null}
      </div>
    </Layout>
  )
}
