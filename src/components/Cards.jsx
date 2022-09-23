import { useEffect, useState } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../App"
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
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import urlcat from "urlcat";


export default function Cards(props) {
    const [news, setNews] = useState([])
    const [favourite, setFavourite] = useState([])
    const [viewfav, setViewfav] = useState(false)
    const [removefav, setRemovefav] = useState(false)
    const {pathname} = useLocation()
//  console.log(pathname)
  //   const [searchvalue, setSearchValue] = useState('')
  // const handleSearch = async (searchvalue) => {
  //   const url = `https://newsapi.org/v2/top-headlines?language=en&q=${searchvalue}&apiKey=cae650073e234e8e91d9d69e5a6e2bfa`
  // console.log("url:", url)
  //   const response = await axios.get(url)
  //      console.log(response)
  //      setSearchValue(response.data.articles)
//   //      console.log(news)
  
//        useEffect(() => {
//         handleSearch(searchvalue)
//     }, [searchvalue]);
//    console.log(searchvalue)
//   }
//   
 const handleAddToFavs = (value) => {
  setFavourite([...favourite, value])
 }


const handleFetch = async () => {
  //https://newsapi.org/v2/top-headlines?language=en&apiKey=cae650073e234e8e91d9d69e5a6e2bfa
  const url = urlcat("https://newsapi.org", "/v2/top-headlines", {
    language: "en",
    category: pathname.slice(1),
    apiKey: "f181543689a24acca82011bfad8702b1"
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
const handleFavs = () => {
  setViewfav(true)
}

const removeFavs = () => {
  setRemovefav(true)
}

    return (
      <>
      
      <div className="fetch">
     
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
    <Link to={`/favs`} style={{textDecoration: 'none'}} >
    <SidebarOptions handleFavs={handleFavs} text="My Favourite" Icon={<FavoriteTwoToneIcon />}/>
    </Link>
   

       
       </div>
<div className="row"> 
      
       
       {
       viewfav || 
       news.map((value) => {
          return (
            <div className="card" style={{width: "18rem"}}>
              {/* <a href="/favs" class="btn btn-primary" onClick={()=> handleAddToFavs(value)}>Add To Favourite</a> */}
              <button class="btn btn-outline-dark" onClick={()=> handleAddToFavs(value)}>Add To Favourite</button>
            <img src={value.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body" onClick={()=> window.open(value.url, "_blank")}>
              <h5 className="card-tile">{value.title}</h5>
              <p className="card-text">{value.description}  </p>
              <div className="card-footer">
                <small className="text-muted">{value.publishedAt}</small>              
              </div>
            </div>          
          </div>        
                  )          
        } 
        )
      }
      {
        viewfav && 
        favourite.map((value) => {
          return (
            <div className="card" style={{width: "19rem"}}>
              {/* <button onClick={()=> removeFavs(value)}>Remove From Favourite </button> */}
            <img src={value.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body" onClick={()=> window.open(value.url, "_blank")}>
              <h5 className="card-tile">{value.title}</h5>
              <p className="card-text">{value.description}  </p>
              <div className="card-footer">
                <small className="text-muted">{value.publishedAt}</small>              
              </div>
            </div>          
          </div>        
                  )          
        } 
        )
      }
      {
        removefav && 
        favourite.filter((value) => {
          return (
            value.url !== url
                  )          
        } 
        
        )
       
      }
        </div> 
      </>
    )
    }