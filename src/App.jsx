import React from "react"
import "./components/App.css"
import { useEffect, useState } from "react";
import Cards from "./components/Cards"
import SidebarOptions from "./components/SidebarOptions";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import "./components/App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Subscribe from "./Subscribe";




function App() {
  
  const post = () => {

    const x = useParams()
   
  }

  return (
    <>
    <BrowserRouter>
    
    <h1>News</h1>
    
      <div className="app">
    
      <Routes>
      
            <Route path="/:x" element={post} />   
          
            
            
        </Routes>
        <Cards  />
        <Subscribe />
       
      </div>
     
    </BrowserRouter>
    
    </>
  )
  }

export default App
