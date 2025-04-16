import React, { useState } from 'react'
import './SignUp.css'

function SignUp({ showSignUp, setShowSignUp, setIsLoggedIn,setShowLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  if (!showSignUp) {
    return null;
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowSignUp(false);
  };
  
  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal">
        <button 
          className="close-button" 
          onClick={() => setShowSignUp(false)}
          aria-label="Close"
        >
          ×
        </button>
        
        <div className="signup-header">
          <h2 className="signup-title">Create Account</h2>
          <p className="signup-subtitle">Join the quiz community today</p>
        </div>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              name="fullName" 
              type="text" 
              placeholder="Full Name" 
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <input 
              name="email" 
              type="email" 
              placeholder="Email Address" 
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <input 
              name="password" 
              type="password" 
              placeholder="Create Password" 
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <input 
              name="confirmPassword" 
              type="password" 
              placeholder="Confirm Password" 
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          
          <div className="terms-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Conditions</label>
          </div>
          
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        
        <div className="signup-footer">
          <p>Already have an account? <a onClick={() => {setShowSignUp(false);setShowLogin(true)}}>Log in</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
