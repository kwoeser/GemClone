import React from 'react'
import './newPrompt.css'
import { useRef, useEffect } from 'react'


const NewPrompt = () => {

  const endRef = useRef(null);
  
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
    
  }, []); 

  return (
    <>

    {/* New chat is added here */}
    {/* test */}
    <div className="endChat" ref={endRef}></div>

        <div className="newPrompt">
            <form className="newForm">
                <label htmlFor="file">
                    <img src="/attachment.png" alt="" />
                </label>
                <input id="file" type="text" multiple={false} hidden/>
                <input type="text" placeholder='Ask anything...' />
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </div>
    </>
  )
}

export default NewPrompt