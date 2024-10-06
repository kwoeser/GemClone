import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="left">
        <h1>WELCOME TO</h1>
        <h1 className='center'>KARMA AI</h1>

        <button className='start_button'>Start Now</button>
      </div>
      {/* <div className="right"></div> */}
    </div>
  )
}

export default Homepage