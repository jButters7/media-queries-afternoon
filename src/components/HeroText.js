import React, { Component } from 'react'
import '../HeroText.css'

class HeroText extends Component {

  render() {
    return (
      <div>
        <div className="hero-text-container">
          <h2 className="studio-text">Welcome To Our Studio!</h2>
          <h1 className="title">It's Nice To Meet You</h1>
          <button className="more-btn">Tell Me More</button>
        </div>
      </div>
    )
  }
}

export default HeroText