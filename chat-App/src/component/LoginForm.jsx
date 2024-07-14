import { useState } from "react";
import axios from "axios"


const ProjectId = "692aa9c2-d73e-4086-8798-4b1eded86b08"
 const LoginForm = () =>{

      return(
        <div className="wrapper">
          <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={HandleSubmit}>
              <input type="text" value={} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="userName" required />

            </form>
          </div>
        </div>
      )

 }

 export default LoginForm;