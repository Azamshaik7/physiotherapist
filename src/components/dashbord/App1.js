import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Wallet from './Wallet';
import Payments from './Payments';
import './App1.css';
import Sidebar from './Sidebar';

function App1() {
  return (
   
      <div className="dashboard">
        
        <Sidebar/>
        <div className="content ">
          <Routes>
            <Route path="/" element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="payments" element={<Payments />} />
          </Routes>
        </div>
      
      </div>
    
  );
}

export default App1;
