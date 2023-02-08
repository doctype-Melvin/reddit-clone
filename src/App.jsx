import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'

function App() {
  // Switch to login page
    const [ isLogin, setIsLogin ] = useState(false)
    // Is user logged in
    const [ loggedIn, setLoggedIn ] = useState(false)
    // Save user data
    const [ user, setUser ] = useState('')

  return (
    <div className="App">
     <Header />
     {/* Conditionally render 
     the main section depending on if user 
     is logged in or not */}
     {
     isLogin ? 
     <Login
     setIsLogin={setIsLogin}
     setLoggedIn={setLoggedIn}
     setUser={setUser}
     /> : 
     <Main
     setIsLogin={setIsLogin}
     isLogin={isLogin}
     setLoggedIn={setLoggedIn}
     loggedIn={loggedIn}
     user={user}
     setUser={setUser}
      />
      }
    </div>
  )
}

export default App
