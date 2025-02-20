import React from 'react'
import './newPrompt.css'
import { useRef, useEffect, useState} from 'react'
import Upload from '../upload/Upload'
import model from '../../lib/gemini'
import Markdown from "react-markdown"


const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [inputText, setInputText] = useState(""); // Add this for input control

  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  const endRef = useRef(null);
  
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [question, answer, img.dbData]); // Update scroll when messages change


  const add = async (text) => {
    setQuestion(text);
    try {
      const result = await model.generateContent(Object.entries(img.aiData).length ? [img.aiData, text] : [text]);
      const response = await result.response;
      setAnswer(response.text());
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    await add(inputText);
    setInputText(""); 
  };



  const onUploadStart = (evt) => {
    const file = evt.target.file[0]

    const reader = new FileReader()
    reader.onloadend = () => {
      setImg((prev) => ({
        ...prev,
        isLoading: true, 
        aiData: {
          inlineData: {
            data: reader.result.split(',')[1],
            mimeType: file.type,

          }
      }}))
    }

    reader.readAsDataURL(file);

  }



  return (
    <>
      {img.isLoading && <div className="">Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage className= "image-container"
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}

      {question && <div className='message user'>{question}</div>}
      {answer && 
      <div className='message'>
        <Markdown>{answer}</Markdown>
      </div>}



      <div className="endChat" ref={endRef}></div>

      <div className="newPrompt">
        <form className="newForm" onSubmit={handleSubmit}>
          <Upload />
          <input id="file" type="text" multiple={false} hidden/>
          <input 
            type="text" 
            placeholder='Ask anything...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit">
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </>
  )
}

export default NewPrompt
