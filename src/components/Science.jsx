import React from 'react'
import { useEffect, useState } from "react";
import CardList from './CardList';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import axios from 'axios';
import "./SidebarOptions.css"
import SidebarOptions from './SidebarOptions';

function Science() {
    const [news, setNews] = useState([])
    const handleFetch = async () => {
        
        const url = "https://newsapi.org/v2/top-headlines?language=en&category=science&apiKey=f181543689a24acca82011bfad8702b1"
      console.log("url:", url)
        const response = await axios.get(url)
           console.log(response)
           setNews(response.data.articles)
           console.log(news)
      
           useEffect(() => {
            handleFetch()
        }, []);
       
      }
  return (
    <>
       <div className="sidebaroption">
       <Link to="/science" onClick={handleFetch}>Science</Link>
   <CardList setNews={setNews} news={news} />
   </div>
        </>
  )
}

export default Science