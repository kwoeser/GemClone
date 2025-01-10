import React from 'react'
import './chatList.css'
import { Link } from 'react-router-dom'

const ChatList = () => {
  return (
    <div className='chatList'>
        
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore KARMA AI</Link>
        <Link to="/">Contact</Link>
        <hr />

        <span className='title'>RECENT CHATS</span>
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
        <hr />

        <div className='upgrade'>
            <img src="/logo.png" alt="logo bottom left" />
            <div className='texts'>
                <span>Upgrade to Premium</span>
            </div>
        </div>


    </div>
  )
}

export default ChatList