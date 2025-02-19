import React from 'react'
import './newPrompt.css'
import { useRef, useEffect, useState} from 'react'
import Upload from '../upload/Upload'
import model from '../../lib/gemini'

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");


  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
  });

  const endRef = useRef(null);
  
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
    
  }, []); 


  const add = async (text) => {
    setQuestion(text)

    const result = await model.generateContent(text);
    const response = await result.response;
    setAnswer(response.text())

  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    if (!text) return;

    add(text);

  }

  return (
    <>

    {/* New chat is added here */}
    {/* test */}
    {/* <button onClick={add}>TEST</button> */}
    {/* ADD NEW CHAT */}
    {img.isLoading && <div className="">Loading...</div>}
    {img.dbData?.filePath && (
      <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
        path={img.dbData?.filePath}
        width="380"
        transformation={[{ width: 380 }]}
      />
    )}


    {question && <div className='message user'>{question}</div>}
    {answer && <div className='message'>{answer}</div>}
    <div className="endChat" ref={endRef}></div>
    <form className="newFrom" onSubmit={handleSubmit}></form>

        <div className="newPrompt">
            <form className="newForm">
                <Upload />
                <input id="file" type="text" multiple={false} hidden/>
                <input type="text" placeholder='Ask anything...' />
                <input type="text" name="text" />
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </div>
    </>
  )
}

export default NewPrompt