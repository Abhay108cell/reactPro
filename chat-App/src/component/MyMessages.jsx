const MyMessages =({message})=>{
  if (message.attachments && message.attachments.length>0){
    return(
      <img src={message.attachments[0].file} 
      alt="message-attachments"
      style={{float: 'right'}}
      className="message-image"
      />
    )
  }
  return(
    <div className="message" style={{float: "right", marginRight:"18", color: "white", backgroundColor: "#3B2A50"}}>
      {message.text}
    </div>
  )
}

export default MyMessages;