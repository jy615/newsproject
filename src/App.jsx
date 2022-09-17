import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./components/App.css"
import { useEffect, useState } from "react";
import Cards from "./components/Cards"
import SidebarOptions from "./components/SidebarOptions";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import "./components/App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Map from "./components/Map/Map";



function App() {
 
  
  const post = () => {
    const x = useParams()
  }

  return (
    <>
    <BrowserRouter>

      <div className="app">
      <Routes>
            <Route path="/:x" element={post} />
           
        </Routes>
      
      <Cards />
      {/* <Map /> */}
      
     
      </div>
    
    </BrowserRouter>
    </>
  )
  }

export default App
