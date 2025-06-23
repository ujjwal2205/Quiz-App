import React, { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const[token,setToken]=useState(' ');
  const url="http://localhost:4000";
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  useEffect(()=>{
        
    async function loadData(){
    if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
    }
    }
    loadData();
},[]);
  return (
    <StoreContext.Provider value={{ theme, toggleTheme,url,setToken,token}}>
      {children}
    </StoreContext.Provider>
  );
};
