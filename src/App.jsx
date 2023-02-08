import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'

function App() {

    const [ isLogin, setIsLogin ] = useState(false)

  return (
    <div className="App">
     <Header />
     {/* Conditionally render 
     the main section depending on if user 
     is logged in or not */}
     {
     isLogin ? 
     <Login
     setIsLogin={setIsLogin} /> : 
     <Main
     setIsLogin={setIsLogin}
     isLogin={isLogin}
      />
      }
    </div>
  )
}

export default App
