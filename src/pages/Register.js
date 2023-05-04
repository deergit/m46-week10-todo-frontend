import '../App.css'
import { useState } from 'react'
import { registerUser } from "../utils"

function Register({ setMessage }) 
{
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const register = async (e) =>
  {
    e.preventDefault()
    await registerUser(username, password)
  } 
  
  return (
    <div className="App">
        <form onSubmit={register} className="register-form">
          <div className="data-input">
            <div><label>Username</label></div>
            <div><input type="text" onChange={(e) => setUsername(e.target.value)} required /></div>
          </div>
          <div className="data-input">
            <div><label>Password</label></div>
            <div><input type="text" onChange={(e) => setPassword(e.target.value)} required /></div>
          </div>
          <div><input type="submit" value="register" /></div>
        </form>
    </div>
  )
}

export default Register