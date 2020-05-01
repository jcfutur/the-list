import React from 'react';
import AppNavbar from './components/appNavBar';
import ComponentTest from './componentTest';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//const axios = require('axios');


function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <ComponentTest/>
    </div>
  );
}

export default App;
