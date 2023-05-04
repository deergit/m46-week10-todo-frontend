import { useState } from 'react'
import './App.css'
import Footer from './pages/Footer'
import Header from './pages/Header'
import List from './pages/List'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'

function App() 
{
  const [message, setMessage] = useState()
  const [user, setUser] = useState()

  return (
    <div className="App">
        <Header />

        <div className="action-line">
          <Login setUser={setUser} setMessage={setMessage} user={user} />
          <Register setMessage={setMessage} />
          <Logout setUser={setUser} setMessage={setMessage} message={message} />
        </div>

        <List />
        
        <Footer />
    </div>
  )
}

export default App
