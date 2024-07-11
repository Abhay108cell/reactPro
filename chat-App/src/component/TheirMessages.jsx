const TheirMessages =({lastMessage, message})=>{
  const isFirstMessageByUser =!lastMessage || lastMessage.sender.username !==  message.sender.username;

  return(
    <div className="message-row">
      {isFirstMessageByUser && (
        <div className="message-avater"
        style={{backgroundImage: message.sender && `url(${message.sender.avatar})`}}></div>
      )}
    </div>
  )
}

export default TheirMessages;