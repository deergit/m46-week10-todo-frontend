import '../App.css'

function Logout() 
{
  function logoutUser()
  {
    alert('under construction')
  }

  return (
    <div className="App">
      <div className="action-line">
        <div><input type="submit" value="logout" onClick={ () => logoutUser()} /></div>
        <div>Status message i.e. user name when logged in, blank when  logged out</div>
      </div>
    </div>
  )
}

export default Logout