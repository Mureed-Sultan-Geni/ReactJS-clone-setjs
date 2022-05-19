import React from 'react'
import "../../styles/index.css";
import logo2 from '../../images/logo2.png'

function Intro() {
  return (
    <div>
        <div className="containers ">
        <div className="home-intro">
          <div className="intro-img">
            <img src={logo2} alt="" />
          </div>
          <div className="intro-text">
          <h1>A pragmatic frontend framework for the Web</h1>
          <p>The easiest and fastest way to create your new Web project. Implemented in dozens of websites over the last several years, from Fortune 500 companies to blogs about cereal.</p>
          <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
