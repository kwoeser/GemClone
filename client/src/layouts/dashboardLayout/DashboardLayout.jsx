import React, { useEffect } from 'react'
import './dashboardLayout.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import ChatList from '../../components/chatList/ChatList'


const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/");

      // USE THIS FOR SIGN IN BUT NOT FOR CURRENT DEPLOYMENT 2/20/2025
      // navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className='dashboardLayout'>
        <div className='menu'><ChatList/></div>
        
        <div className='content'>
            <Outlet/>
        </div>
        
    </div>
  )
}

export default DashboardLayout