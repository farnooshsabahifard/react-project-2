import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieList from "../../components/movieList";
import api from "../../helpers/api";
import Style from "./style";
export default function Search() {
    const {search} = useParams();
    const[data , setData] = useState([])
    const[loading , setLoading] =useState(false)
   console.log(search)
    useEffect(()=>{
        getApi()
    } , [])
    async function getApi() {
        setLoading(true)
        const response =await api.get("movies" , {
            params: {
                q: search,
            },
        });
        setLoading(false)
        setData(response.data.data)
    }
    return (
        <Style>
            <div>
            <MovieList data={data} title="movies" loading={loading}/>
            </div>
        </Style>
    )
}