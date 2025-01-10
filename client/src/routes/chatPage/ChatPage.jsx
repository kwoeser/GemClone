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
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>

          <div className="message">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quas consequatur repudiandae neque, cupiditate recusandae iste? Omnis tempora ab animi, vitae sapiente at sunt reprehenderit nesciunt veritatis maiores! Obcaecati, voluptas.</div>
          <div className="message user">Test Message from user</div>
          <div className="message">Test Message from ai</div>
          <div className="message user">Test Message from user</div>



          <NewPrompt></NewPrompt>


        </div>
      </div>

    </div>
  )
}

export default Chatpage