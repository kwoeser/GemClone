import React from 'react'
import './chatList.css'
import { Link } from 'react-router-dom'
import { Linkedin , Github, Mail  } from "lucide-react";

const ChatList = () => {
  return (
    <div className='chatList'>
        
        <span className='title'>DASHBOARD</span>


        <Link onClick={() => window.location.reload()} to="/">Refresh Chat</Link>
        <Link to="/">Explore KARMA AI</Link>
        <Link to="/">Contact's Below</Link>
        <hr />
        
        {/* <span className='title'>RECENT CHATS</span>
        <div className='list'>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
        </div>
        <hr /> */}

        <div className='upgrade'>
            <img src="/logo.png" alt="logo bottom left" />
            <div className='texts'>
                <a href="https://www.linkedin.com/in/karma-woeser-b83869249/">
                  <button className="btn"><Linkedin /></button>
                </a>

                <a href="https://github.com/kwoeser">
                  <button className="btn">
                    <Github />
                  </button>
                </a>

                <a href="mailto:karmawoeser1@gmail.com" className="btn-content">
                  <button className="btn">
                      <Mail className="mail-icon" />       
                  </button>
                </a>

            </div>
        </div>


    </div>
  )
}

export default ChatList