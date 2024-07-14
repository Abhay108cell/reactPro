import { useState } from "react";
import axios from "axios"


const ProjectId = "692aa9c2-d73e-4086-8798-4b1eded86b08"
 const LoginForm = () =>{

  const [username setUserName ] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  
      return(
        <div className="wrapper">
          <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={HandleSubmit}>
              <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="userName" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
              <div align="center">
                <button className="button">
                  <span>start chatting</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )

 }

 export default LoginForm;