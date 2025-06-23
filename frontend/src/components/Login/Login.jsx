import React, { useState,useContext } from 'react';
import './Login.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
function Login({ showLogin, setShowLogin, setIsLoggedIn, setShowSignUp, showSignUp,setUserName }) {
  const { url, setToken } = useContext(StoreContext); 
  const [formData, setFormData] = useState({
      email: '',
      password: '',
      role: ''
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
  
  if (!showLogin) {
    return null;
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      const res=await axios.post(`${url}/api/user/login`,formData);
    if(res.data.success){
      localStorage.setItem("token",res.data.token);
      setToken(res.data.token);
      setIsLoggedIn(true);
      setShowLogin(false);
      toast.success(res.data.message);
      setUserName(res.data.name);
    }
    else{
      toast.error(res.data.message); 
    }}
    catch(error){
      console.error("Error while Signing Up", error);
      toast.error("An error occurred while signing up. Please try again.");
    }
    
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <input 
              name="password" 
              type="password" 
              placeholder="Your password" 
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor='role'>Role</label>
            <select 
              id="role" 
              name="role"
              value={formData.role} 
              onChange={handleChange}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <button type="submit" className="submit-button">
            Log In
          </button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <a onClick={() => { setShowSignUp(true); setShowLogin(false); }}>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
