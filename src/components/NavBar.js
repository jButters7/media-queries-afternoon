import React, { Component } from 'react'
import '../Navbar.css'
import HeroText from './HeroText'

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      display: false
    }
    this.handleHamburgerMenu = this.handleHamburgerMenu.bind(this)
  }

  handleHamburgerMenu() {
    this.setState({
      display: !this.state.display
    })
  }


  render() {
    console.log(this.state.display)
    return (
      <div>
        <div className='hero-landing'>
          <div className="nav-bar">

            <h1 className="logo-text">Start Bootstrap</h1>


            <div className="hamburger-icon" onClick={this.handleHamburgerMenu}>Menu &#9776;</div>

            <div className="btn-container">
              <button className="menu-btn">Service</button>
              <button className="menu-btn">Portfolio</button>
              <button className="menu-btn">About</button>
              <button className="menu-btn">Team</button>
              <button className="menu-btn">Contact</button>
            </div>

          </div>
          <div className={this.state.display ? 'mobile-dropdown' : 'mobile-hidden'}>
            <button className="menu-btn">Service</button>
            <button className="menu-btn">Portfolio</button>
            <button className="menu-btn">About</button>
            <button className="menu-btn">Team</button>
            <button className="menu-btn">Contact</button>
          </div>
          <HeroText />
        </div>
      </div>
    )
  }
}

export default NavBar