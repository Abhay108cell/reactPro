 import MessagesForm from "./MessagesForm"
 import MyMessages from "./MyMessages"
 import TheirMessages from "./TheirMessages"



 const ChatFeed = ()=>{
  const {chats, activeChat, userName, messages} = props;
  const chat = chats && chats[activeChat];
  const renderMessages = () => {
    const keys = Object.keys(messages)
    return keys.map((key, index)=>{
      const message = messages[key]
      const lastMessageKey = index === 0? null: keys [index-1];
      const isMyMessage = userName === message.sender.userName
    })
  }
  return(
    <div>
      chat feed
    </div>
  )
 }

 export default ChatFeed