import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';
import { useNavigate } from 'react-router-dom';

function Navbar({ setShowLogin, isLoggedIn, setIsLoggedIn, setShowSignUp }) {
  const { theme, toggleTheme,setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const scrollToFooter = () => {
    const footer = document.getElementById('foot');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken('');
    localStorage.removeItem("token");
  };
  const handleLeaderBoard=()=>{
    navigate('/admin');
  }
  return (
    <div className='Navbar'>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>

      <div className='logo-container'>
        <Link to={'/'}>
          <h1 className='Logo'>QUIZ APP</h1>
        </Link>
      </div>

      <div className='right-navbar'>
        <p onClick={handleLeaderBoard}>LEADERBOARD</p>
        <Link to={'/'}><p>HOME</p></Link>
        <p onClick={scrollToFooter}>CONTACT US</p>

        {!isLoggedIn ? (
          <>
            <button onClick={() => setShowLogin(true)}>Login</button>
            <button onClick={() => setShowSignUp(true)}>Sign Up</button>
          </>
        ) : (
          <button onClick={handleLogout}>Log Out</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
