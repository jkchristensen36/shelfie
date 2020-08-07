import React, { Component } from 'react';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios.get('/api/inventory')
      .then( res => {
        this.setState({
          inventory: res.data
        })
      }
    ).catch( err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard inventory={this.state.inventory}/>
        <Form getInventory={this.getInventory}/>
      </div>
    )
  }
}

export default App;
