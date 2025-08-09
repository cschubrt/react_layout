import React, { useState } from 'react'
import Layout from './layout/Layout';
import Login from './Login';


function App() {
  const [seen, setSeen] = useState(false);

    function togglePop () {
        setSeen(!seen);
    };

  return (
    <Layout>
      <div>
        <button onClick={togglePop}>Login</button>
        {seen ? <Login toggle={togglePop} /> : null}
      </div>
    </Layout>
  )
}

export default App
