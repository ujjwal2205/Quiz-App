import React,{useState,useEffect} from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import {Route,Routes} from 'react-router-dom'
import Admin from './pages/Admin/Admin'
function App() {
  const [userName, setUserName] = useState('');
  const [showLogin,setShowLogin]=useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [showSignUp,setShowSignUp]=useState(false);
  const [AvailableQuizes,setAvailableQuizes]=useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      <Login showLogin={showLogin} setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} showSignUp={showSignUp} setShowSignUp={setShowSignUp} setUserName={setUserName}/>
      <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} setIsLoggedIn={setIsLoggedIn} setShowLogin={setShowLogin} setUserName={setUserName}/>
      <Routes>
        <Route path='/' element={<Home setAvailableQuizes={setAvailableQuizes}/>}/>
        <Route path='quiz/:id' element={<Quiz userName={userName} AvailableQuizes={AvailableQuizes}/>}/>
        <Route path='admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
