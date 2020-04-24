import React from 'react';
import AppNavbar from './components/appNavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const axios = require('axios');

function App() {

const handleClick = () => {
  axios.post('/api', {
    name: 'Dylan'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <button onClick={ () => handleClick() }> Add a kitty to the database</button>
      </div>
    </Provider>
  );
}

export default App;
