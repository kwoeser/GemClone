import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './routes/homepage/Homepage.jsx';
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import SignInPage from './routes/signInPage/SignInPage.jsx';
import SignUpPage from './routes/signUpPage/SignUpPage.jsx';


// Handles page routing 
// https://reactrouter.com/web/api/createBrowserRouter
// https://reactrouter.com/web/api/RouterProvider
const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      { path: "/",
        element: <Homepage/>
      },
      {
        path: "/sign-in/*",
        element: <SignInPage/>
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage/>
      },
      {
        element: <DashboardLayout/>,
        children: [
          { path: "/dashboard",
            element: <DashboardPage/>
          },
        ]
      }
    ],
  }, 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
