import React from "react"
import "./SidebarOptions.css"

function SidebarOptions({ active, text, Icon, handleFavs}) {
    return (
        
        <div className={`sidebarOptions ${active 
            && 'sidebarOptions--active'}`} onClick={handleFavs}>
            
            {Icon}
            <h2>{text}</h2>
        </div>
        
    )
}

export default SidebarOptions