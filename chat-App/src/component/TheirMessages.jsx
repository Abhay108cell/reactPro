const TheirMessages =({lastMessage, message})=>{
  const isFirstMessageByUser =!lastMessage || lastMessage.sender.username !==  message.sender.username;

  return(
    <div className="message-row">
      {isFirstMessageByUser && (
        <div className="message-avater"
        style={{backgroundImage: message.sender && `url(${message.sender.avatar})`}}></div>
      )}
      {message.attachments && message.attachments.length>0
      ? (
        <img src={message.attachments[0].file} 
      alt="message-attachments"
      style={{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
      className="message-image"
      />
      )
      :(
        <div className="message" style={{float: "left",  backgroundColor: "#CABCDC"
          , marginLeft: isFirstMessageByUser ? '4px' : '48px'
        }}>
      {message.text}
    </div>
      )}
    </div>
  )
}

export default TheirMessages;