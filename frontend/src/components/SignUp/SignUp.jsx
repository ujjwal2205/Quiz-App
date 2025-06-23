import React, { useState,useContext } from 'react'
import './SignUp.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp({ showSignUp, setShowSignUp, setIsLoggedIn,setShowLogin,setUserName }) {
  const {url,setToken}=useContext(StoreContext);
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
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res=await axios.post(`${url}/api/user/register`,formData);
    if(res.data.success){
      localStorage.setItem("token",res.data.token);
      setToken(res.data.token);
      setIsLoggedIn(true);
      setShowSignUp(false);
      toast.success(res.data.message);
      setUserName(formData.fullName);
    }
    else {
      toast.error(res.data.message); 
    }
    }
    catch (error) {
      console.error("Error while Signing Up", error);
      toast.error("An error occurred while signing up. Please try again."); // Show custom error message
    }
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
