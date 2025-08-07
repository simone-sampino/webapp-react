import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

export default function HomePage() {
  const api_url =
    import.meta.env.VITE_BACKEND_API_SERVER +
    import.meta.env.VITE_BACKEND_MOVIES_ENDPOINT;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <>
      <Jumbotron
        title="Home Page"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed sunt debitis, delectus perspiciatis doloremque cupiditate dolor aut, ipsa accusantium culpa, quibusdam est nemo excepturi asperiores magni autem obcaecati nostrum?"
        cta="Example button"
      />

      <section className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={import.meta.env.VITE_BACKEND_API_SERVER + movie.image}
                    alt={movie.title}
                  ></img>
                  <div className="card-body">
                    <h3>{movie.title}</h3>
                    <p>{movie.abstract}</p>
                    <Link to={`/movies/${movie.id}`}>Details</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
