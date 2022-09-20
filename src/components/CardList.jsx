import React from 'react'

function CardList(props) {
  return (
    <div className="row"> 
      
       {
        props.news?.map((value) => {
          return (
            <div className="card" style={{width: "20rem"}}>
              <a href="/favs" class="btn btn-primary" onClick={()=> handleAddToFavs(value)}>Add To Favourite</a>
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
        </div> 
  )
}

export default CardList