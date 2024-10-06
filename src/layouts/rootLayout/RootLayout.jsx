import React from 'react'
import './rootLayout.css'
import { Link, Outlet } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


// Import your publishable key from the env file
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

      <div className='rootLayout'>
          <header>
              {/* Linked to root directory ("/") */}
              {/* Link comes from react-router-dom package */}
              <Link to = "/" className='logo'>
                  <img src="logo.png" alt="tibetan logo"/>
                  <span>KARMA AI</span>
              </Link>


              {/* Handle user auth using clerk components */}
              <div className='user'>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>

              </div>

          </header>

          <main>
              <Outlet/>
          </main>
      </div>

    </ClerkProvider>
  )
}

export default RootLayout