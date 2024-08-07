import { useState } from "react";
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessagesForm =(props)=>{
  const [value,setValue]=useState('');
  const {chatId,creds}=props;

  const handleSubmit=(e)=>{
    setValue(e.target.value);
    isTyping(props,chatId)
    };
    const handleChange=(e)=>{
      e.preventDefault();
      const text = value.trim()
      if(text.length>0){
        sendMessage(creds,chatId,{text})
        setValue('')
        }

        const handleUpload = (e)=>{
          sendMessage(creds,chatId,{files:e.target.files,text:""})
        }


  return(
    <div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
        className="message-input"
        placeholder="Type a message here..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
         />
         <label htmlFor="upload-button">
          <span className="image-button">
            <PictureOutlined  className="picture-icon"/>
          </span>
         </label>
         <input
         type="file"
         multiple={false}
         id="upload-button"
         style={{display:"none" }}
         onChange={handleUpload.bind(this)}
         />
         <button type="submit" className="send-button">
          <SendOutlined className="send-icon"/>
         </button>
      </form>
    </div>
  )
}}

export default MessagesForm