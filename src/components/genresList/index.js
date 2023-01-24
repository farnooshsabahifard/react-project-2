import { Fragment, useEffect, useState } from "react"
import api from "../../helpers/api";
import { Style } from "./style"
export default function GenresList() {
    const[loading , setLoading] = useState(false);
    const[data , setData] = useState([])
    useEffect (function() {
        getGnresApi()
    } , [])
    async function getGnresApi() {
        setLoading(true)
        const response =await api.get("genres")
        setLoading(false)
        setData(response.data)
    }
     function renderFarm(genres) {
       return data.map((item , i)=>{
        return (
                <li key={item.id}>{item.name}</li>
                )
        })
     }
    
   return (
    <Style>
        <div className="genres">
        {loading===true ? "isloading" : <ul>{renderFarm()}</ul>}
        </div>

   </Style>
  
  
   )
}