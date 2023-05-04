import '../App.css'

function Logout({ setUser, setMessage, message }) 
{
  
  function logoutUser()
  {
    setUser()
    setMessage('user logged out')
  }

  return (
    <div className="App">
      <div className="action-line">
        <div><input type="button" value="logout" onClick={ () => logoutUser() } /></div>
        <div>{message}</div>
      </div>
    </div>
  )
}

export default Logout