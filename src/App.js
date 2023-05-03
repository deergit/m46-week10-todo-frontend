import './App.css'
import Footer from './pages/Footer'
import Header from './pages/Header'
import List from './pages/List'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'

function App() 
{
  return (
    <div className="App">
        <Header />

        <div className="action-line">
          <Login />
          <Register />
          <Logout />
        </div>

        <List />
        
        <Footer />
    </div>
  )
}

export default App
