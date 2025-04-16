import React,{useState} from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import AvailableQuiz from './components/AvailableQuizes/AvailableQuiz'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import SignUp from './components/SignUP/SignUp'
function App() {
  const [showLogin,setShowLogin]=useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [showSignUp,setShowSignUp]=useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
      <Login showLogin={showLogin} setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} showSignUp={showSignUp} setShowSignUp={setShowSignUp}/>
      <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin}/>
      <AvailableQuiz/>
      <Footer/>
    </div>
  )
}

export default App
