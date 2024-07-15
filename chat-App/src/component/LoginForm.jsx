import { useState } from "react";
import axios from "axios"
import ChatFeed from './component/ChatFeed.jsx';



const ProjectId = "692aa9c2-d73e-4086-8798-4b1eded86b08"
 const LoginForm = () =>{

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const authObject = {'Project-ID': ProjectId, 'User-Name': username, 'User-Secret': password}

    try{
      await axios.get('https://api.chatengine.io/chats', {headers: authObject})

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      

  }
  
      return(
        <div className="wrapper">
          <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={HandleSubmit}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="userName" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
              <div align="center">
                <button className="button">
                  <span>start chatting</span>
                </button>
              </div>

            </form>
            <h1>{error}</h1>
          </div>
        </div>
      )

 }

 export default LoginForm;