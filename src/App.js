import React, { Component } from 'react';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }

render() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Form />
    </div>
  )
}


}

export default App;
