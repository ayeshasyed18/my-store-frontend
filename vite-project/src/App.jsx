import React from 'react'
import { Route, Routes } from 'react-router-dom' // react-router-dom use karein
import Navbar from './Component/Navbar' // Navbar ko import karein
import Index from './Component/Index'
import ProductData from './Pages/Product' // Iska naam ProductData rakh letay hain taake confusion na ho
import About from './Pages/About'
import Success from './Pages/Success'
import Cancel from './Pages/Cancel'
import Home from './Pages/Home'

function App() { 
   return (    
   <div>
    {/* Navbar ko Routes se bahar rakha hai taake yeh har page par dikhay */}
    <Navbar /> 

    <Routes>
      {/* 1. Home Page */}
      <Route path='/' element={<Home />} />

      {/* 2. Products Page (Mapping yahan shift kar di) */}
      <Route path='/products' element={
        <div className='page-container'>  
          <h1 className='hed'>Our Collections</h1>
          <div className='crdminn'>     
            { ProductData.map((product, index) => (      
              <Index key={index} product={product} />   
            )) } 
          </div>
        </div>
      } />  

      {/* 3. About Page */}
      <Route path='/about' element={<About />} />

      {/* 4. Success & Cancel Pages */}
      <Route path='/success' element={<Success />}/> 
      <Route path='/cancel' element={<Cancel />} />
    </Routes>    
   </div>  
   )
}

export default App
