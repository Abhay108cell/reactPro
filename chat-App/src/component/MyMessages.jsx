const MyMessages =({message})=>{
  if (message.attachments && message.attachments.length>0{
    return(
      <img src={message.attachments[0].file} 
      alt="message-attachments"
      style={{maxWidth: '100px'}}
      className="message-image"
      />
    )
  })
  return(
    <div>
    <h1>My Messages</h1>
    </div>
  )
}

export default MyMessages;