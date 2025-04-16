  import React from 'react'
  import './Navbar.css'
  function Navbar({setShowLogin,isLoggedIn,setIsLoggedIn,showSignUp,setShowSignUp}) {
    // Function to scroll to the footer
    const scrollToFooter = () => {
      const footer = document.getElementById('foot');
      footer.scrollIntoView({ behavior: 'smooth' });
    };
    const handleLogout = () => {
      setIsLoggedIn(false);    
    };
    return (
      <div className='Navbar'>
        <h1 className='Logo'>QUIZ APP</h1>
        <div className='right-navbar'>
        <p>HOME</p>
        <p onClick={scrollToFooter}>CONTACT US</p>
        {!isLoggedIn?(<>
        <button onClick={()=>setShowLogin(true)}>Login</button>
        <button onClick={()=>setShowSignUp(true)}>Sign In</button></>):(<button onClick={handleLogout}>Log Out</button>)
        }
      </div>
      </div>
    )
  }

  export default Navbar
