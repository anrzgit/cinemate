import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components";


export const MovieList = ({apiPath, title}) => {
  //renaming data which I got from fetch to movies;
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap other:justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}