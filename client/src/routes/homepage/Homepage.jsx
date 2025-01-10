import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="left">
        <h1>WELCOME TO</h1>
        <h1 className='center'>KARMA AI</h1>
  
        {/* SENDS YOU TO dashboard if you are signed in already */}
        <Link to="/dashboard" className='start_button'>Start Now</Link>
      </div>



      {/* TERMS of SERVICES N/A */}
      {/* <div className='terms'>
        <div className='links'>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div> */}
      
    </div>

    
      



  )
}

export default Homepage