import MovieList from "../../components/movieList";
import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router"
import GenresList from "../../components/genresList"
import api from "../../helpers/api";
export default function GenreSinglePage() {
    const[loading , setLoading] = useState(false)
    const[data , setData] = useState([])
    const{genre_id} = useParams();
    async function getApi() {
        setLoading(true)
        const response = await api.get(`genres/${genre_id}/movies`)
        setLoading(false)
        setData(response.data.data)
    }
    useEffect(()=>{
        getApi()
    } ,[])
    return (
        <MovieList data={data} title={`${genre_id}`} loading={loading} />
    )
}