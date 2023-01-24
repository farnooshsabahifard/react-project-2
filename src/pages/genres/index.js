import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router"
import GenresList from "../../components/genresList"
import api from "../../helpers/api";
export default function GenresPage() {
  
    return (<Fragment>
        <h1>genres</h1>
        <GenresList />
    </Fragment>)
}