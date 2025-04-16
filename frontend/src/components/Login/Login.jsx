import React, { useState } from 'react'
import './Login.css'

function Login({ showLogin, setShowLogin, setIsLoggedIn ,setShowSignUp, showSignUp}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  if (!showLogin) {
    return null;
  }
  
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
  };
  
  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button 
          className="close-button" 
          onClick={() => setShowLogin(false)}
          aria-label="Close"
        >
          ×
        </button>
        
        <div className="login-header">
          <h2 className="login-title">Welcome Back</h2>
          
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input 
              name="email" 
              type="email" 
              placeholder="Your email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <input 
              name="password" 
              type="password" 
              placeholder="Your password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="submit-button">
            Log In
          </button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <a onClick={()=>{setShowSignUp(true);setShowLogin(false)}}>Sign In</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
