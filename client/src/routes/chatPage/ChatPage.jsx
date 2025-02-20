import React from 'react'
import './chatPage.css'
import NewPrompt from '../../components/newPrompt/NewPrompt'

const Chatpage = () => {

  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          {/* <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
      
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div> */}



          <NewPrompt></NewPrompt>


        </div>
      </div>

    </div>
  )
}

export default Chatpage