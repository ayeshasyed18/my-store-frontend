import React from 'react'
import { Link } from 'react-router-dom'; // Yeh line zaroori hai

function Success() {  
    return (      
<div className="status-page">
    <div className="status-card success-card">
      <div className="status-icon-circle success-bg">✓</div>
      <h1>Success!</h1>
      <p>Your payment was processed. Thank you for shopping with us!</p>
     <Link to="/" className="home-btn">
   Back to Home
</Link>
    </div>
  </div>
  );
  };

 export default Success