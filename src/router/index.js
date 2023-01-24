import {createBrowserRouter} from "react-router-dom"
import AllMovies from "../pages/allMovies";
import GenresPage from "../pages/genres";
import Search from "../pages/search";
import GenreSinglePage from "../pages/singlePage";
import GenresList from "../components/genresList";
const router = createBrowserRouter([
    {
      path: "/",
      element:<AllMovies/>,
    }
    ,
    {
      path: "/movies/:search",
      element:<Search/>,
    }
    ,
    {
      path: "/movies/",
      element:<Search/>,
    }
    ,
    {
      path: "/genres/",
      element:<GenresList/>,
    }
    ,
    {
      path: "/genres/:genre_id",
      element:<GenreSinglePage/>,
    }
  ]);
  export default router