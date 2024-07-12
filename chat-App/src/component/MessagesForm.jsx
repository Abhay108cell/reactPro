import { useState } from "react";
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessagesForm =(props)=>{
  const [value,setValue]=useState('');
  const {chatId,creds}=props;

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
      </form>
    </div>
  )
}

export default MessagesForm;