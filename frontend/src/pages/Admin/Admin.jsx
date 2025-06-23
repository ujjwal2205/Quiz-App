import React, { useContext,useState,useEffect } from 'react';
import './Admin.css'; 
import { StoreContext } from '../../context/StoreContext';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
function Admin() {
  const {url}=useContext(StoreContext);
  const[leaderboardData,setLeaderboardData]=useState([]);
  const fetchLeaderBoard=async()=>{
    try{
      const token=localStorage.getItem("token")
      const res=await axios.get(`${url}/api/admin/leaderboard`,{
        headers:{
          authorization:token}
      });
      if(res.data.success){
        setLeaderboardData(res.data.leaderboard);
        toast.success(res.data.message);
      }
      else{
        toast.error(res.data.message);
      }
    }catch(error){
      toast.error(error);
    }
  }
  useEffect(() => {
    fetchLeaderBoard();
  }, []);
  return (
    <div className="admin-container">
      <h2 className="admin-heading">TOP SCORERS</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quiz Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.quizName}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;