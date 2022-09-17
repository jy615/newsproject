import React from 'react'
import {useState, useEffect} from 'react'
import { Link} from "react-router-dom";
import SidebarOptions from '../SidebarOptions'
import "./Map.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
import urlcat from "urlcat";
import axios from "axios"

function Map() {
  const [getmap, setGetMap] = useState([])
  const showMap = async () => {
    //https://tih-api.stb.gov.sg/content/v1/event/search?keyword=arts&language=en&apikey=AgWE9pKJaGZ1vRO6PjnAD1Mth20OBjk9
    const url = urlcat("https://tih-api.stb.gov.sg/", "/content/v1/event/search", {
      keyword: "arts",
      language: "en",
      apikey: "AgWE9pKJaGZ1vRO6PjnAD1Mth20OBjk9"
  }) 
  console.log("url:", url)
  const response = await axios.get(url)
     console.log(response)
     setGetMap(response.data[0])
     console.log(getmap)

     useEffect(() => {
      showMap()
  }, []); 
    
  }
 
  return (
    
    <>
    
  <Link to={`/map`} style={{textDecoration: 'none'}} >
    <SidebarOptions text="Map" Icon={<CoronavirusTwoToneIcon />}  />
    </Link>
    <MapContainer center={[1.352083, 103.819839]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    {getmap.map((element) => (
       <Marker 
       position={[element[0].location.latitude, element[0].location.longitude]}>
       <Popup>
         A pretty CSS3 popup. <br /> Easily customizable.
       </Popup>
     </Marker> 
    
    ))}
  </MapContainer>
  <button onClick={()=> showMap()}>hi</button>  
  </>
    
  )
  }

export default Map