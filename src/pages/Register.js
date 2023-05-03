import '../App.css'
import { useState } from 'react'

function Register() 
{
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

    const registerUser = async () =>
    {
      /*
      try 
      {
        const response = await fetch("http://localhost:5001/users/register", 
        {method: "POST"
        ,headers: 
            {"Content-Type" : "application/json"}
            ,body: JSON.stringify(
              {"username":username
              ,"password":password
              })
        })

        const data = await response.json()
        console.log(data)
      } 
      catch (error) 
      {
        console.log(error)
      }
      */
      alert('under construction')
    }
  
  return (
    <div className="App">
        <form onSubmit={registerUser} className="register-form">
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