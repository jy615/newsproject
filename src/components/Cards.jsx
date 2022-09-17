import { useEffect, useState } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'

import {Icon} from "leaflet"
import "./Cards.css"
import {useLocation} from "react-router-dom"
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SidebarOptions from "./SidebarOptions"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import LaptopTwoToneIcon from '@mui/icons-material/LaptopTwoTone';
import LocalMoviesTwoToneIcon from '@mui/icons-material/LocalMoviesTwoTone';
import SportsFootballTwoToneIcon from '@mui/icons-material/SportsFootballTwoTone';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import VaccinesTwoToneIcon from '@mui/icons-material/VaccinesTwoTone';
import urlcat from "urlcat";





export default function Cards() {
    const [news, setNews] = useState([])
  const {pathname} = useLocation()
 console.log(pathname)
const handleFetch = async () => {
  //https://newsapi.org/v2/top-headlines?language=en&apiKey=cae650073e234e8e91d9d69e5a6e2bfa
  const url = urlcat("https://newsapi.org", "/v2/top-headlines", {
    language: "en",
    category: pathname.slice(1),
    apiKey: "cae650073e234e8e91d9d69e5a6e2bfa"
});
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
      
      <div className="fetch">
      <h1>News</h1>

      <Link to={`/ `} style={{textDecoration: 'none'}} onClick={()=> handleFetch()}>
         <SidebarOptions  text="Top Stories" Icon={<HomeTwoToneIcon />}   />
    </Link>
     
       
      <Link to={`/business`} style={{textDecoration: 'none'}} onClick={()=> handleFetch()}>
    <SidebarOptions text="Business" Icon={<BusinessTwoToneIcon/>} />
    </Link>
    <Link to={`/technology`} style={{textDecoration: 'none'}} onClick={()=> handleFetch()}>
    <SidebarOptions text="Technology" Icon={<LaptopTwoToneIcon/>} />
    </Link>
    <>
    <Link to={`/entertainment`} style={{textDecoration: 'none'}} onClick={()=> handleFetch()}>
    <SidebarOptions text="Entertainment" Icon={<LocalMoviesTwoToneIcon/>}/>
    </Link>
    </>
    <Link to={`/sports`} style={{textDecoration: 'none'}} onClick={()=> handleFetch()}>
    <SidebarOptions text="Sports" Icon={<SportsFootballTwoToneIcon/>}/>
    </Link>
    <Link to={`/science`} style={{textDecoration: 'none'}} onClick={()=> handleFetch()}>
    <SidebarOptions text="Science" Icon={<ScienceTwoToneIcon/>}/>
    </Link>
    <Link to={`/health`} style={{textDecoration: 'none'}} onClick={()=> handleFetch()}>
    <SidebarOptions text="Health" Icon={<VaccinesTwoToneIcon />}/>
    </Link>
   
    {/* <Link to={`/map`} style={{textDecoration: 'none'}} onClick={()=> getMap()}>
    <SidebarOptions text="Map" Icon={<CoronavirusTwoToneIcon />}/>
    </Link> */}
      
      
       
       </div>
<div className="row"> 
     
       {
        news.map((value) => {
          return (
            <div className="card" onClick={()=> window.open(value.url, "_blank")} 
            style={{width: "19rem"}}>
            <img src={value.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-tile">{value.title}</h5>
              <p className="card-text">{value.description}</p>
              <div className="card-footer">
                <small className="text-muted">{value.publishedAt}</small>
              </div>
            </div>
          </div>
                  )      
          
        } 
        )
      }
        </div>
       
       
      </>
    )
}