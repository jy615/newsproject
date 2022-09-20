import React from 'react'
import { useEffect, useState } from "react";
import CardList from './CardList';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import axios from 'axios';
import "./SidebarOptions.css"
import SidebarOptions from './SidebarOptions';

function Technology() {
    const [news, setNews] = useState([])
    const handleFetch = async () => {
        
        const url = "https://newsapi.org/v2/top-headlines?language=en&category=technology&apiKey=f181543689a24acca82011bfad8702b1"
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
       <Link to="/technology" onClick={handleFetch}>Technology</Link>
   <CardList setNews={setNews} news={news} />
   </div>
        </>
  )
}

export default Technology