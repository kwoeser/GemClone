import React from 'react'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            {/* Linked to root directory ("/") */}
            <Link to = "/">
                <img src="/logo.png" alt="" />
                <span>KARMA AI</span>
            </Link>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout