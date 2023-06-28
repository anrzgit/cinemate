import { Routes , Route } from "react-router-dom";
import { MovieDetail,MovieList,PageNotFound,Search } from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-700" >
        <Routes>
          {/* //first path apne wesite ka hai 2 path (apiPath) parameter hai movie list ka for API */}
            <Route path="/" element={<MovieList apiPath={"movie/now_playing"} />}/>
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath={"movie/popular"} />} />
            <Route path="movies/top" element={<MovieList apiPath={"movie/top_rated"} />} />
            <Route path="movies/upcoming" element={<MovieList apiPath={"movie/upcoming"} />} />
            <Route path="search" element={<Search apiPath={"search/movie"} />} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}

