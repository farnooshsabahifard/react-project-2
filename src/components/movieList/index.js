import { Fragment, useEffect, useState } from "react"
import api from "../../helpers/api"
import summerytext from "../../helpers/summeryText"
import { Style } from "./style"
export default function MovieList(props) {
  const{title ,data ,loading} = props
    // const [movie , setMovie] = useState([])
    // const [loading , setLoading] = useState(false)
    //  async function getApi() {
    //   setLoading(false)
    //     const response = await api.get("movies")
    //     setLoading(true)
    //     setMovie(response.data.data)
    //  }
    // function renderGenres(genres) {
    //  return genres.map((item ,i)=>{
    //     return <span key={i}>{item},</span>
    //   })
    // }
    function renderImage(images , title) {
      if (images){
        return images.map((item , i)=>{
          return <img className="mini-pic" key={i} src={item} alt={title}/>
        })
      }else {
        return <Fragment/>
      }
      
    }
     function renderFarm() {
       return data.map((item)=>{
        return (
          <li key={item.id}>
        <img className="poster" src={item.poster} />
        <p className="title">title : {summerytext(item.title)}</p>
        <p className="rate">IMDB :  {item.imdb_rating}</p>
        <div>genres : {item.genres}</div>
        <span className="picture" >{loading===true ? "is loading..." : renderImage(item.images , item.title)}</span>
        </li>           
        )
        })
     }
    
    //  useEffect(()=>{
    //     getApi()
    //  }, [])
    
   return (
 <Style>
  <h3>{title}</h3>
   <ul className="movie-list">{renderFarm()}</ul>
   </Style>
  
  
   )
}