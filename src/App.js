import React, { Component } from 'react'
import NavBar from './components/NavBar'
import './reset.css'
import './App.css'



class App extends Component {
  constructor() {
    super();

    this.state = {
      happy: true
    }
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default App