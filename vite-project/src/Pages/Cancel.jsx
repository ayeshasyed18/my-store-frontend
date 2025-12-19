import React from 'react'
import { Link } from 'react-router-dom'; // Yeh line zaroori hai

function Cancel() {  
    return (        
  <div className="status-page">
    <div className="status-card cancel-card">
      <div className="status-icon-circle cancel-bg">✕</div>
      <h1>Cancelled</h1>
      <p>The transaction was cancelled. No charges were made.</p>
     <Link to="/products" className="home-btn">Try Again</Link>
    </div>
  </div>
);  
 }

 export default Cancel