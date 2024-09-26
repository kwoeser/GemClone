import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './routes/homepage/Homepage.jsx';
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx';
import Chatpage from './routes/chatPage/ChatPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';

// Why im i not able to see the dashboard page when i navigate to /dashboard
// You are not rendering the DashboardPage component in your router configuration.
// You need to add a route for the DashboardPage in the router configuration.
// Here's how you can do it:
// SHow me how to do it
const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      { path: "/", element: <Homepage/> },
    ]

  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
