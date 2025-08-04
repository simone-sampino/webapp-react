import { useEffect, useState } from "react";

export default function HomePage() {
  const VITE_BACKEND_API_SERVER = import.meta.env.VITE_BACKEND_API_SERVER;

  const api_url = `${VITE_BACKEND_API_SERVER}/movies`;
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
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Home Page</h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            sed sunt debitis, delectus perspiciatis doloremque cupiditate dolor
            aut, ipsa accusantium culpa, quibusdam est nemo excepturi asperiores
            magni autem obcaecati nostrum?
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>

        <section className="container">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {movies.map((movie) => {
              return (
                <div key={movie.id} className="col">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={movie.image}
                      alt={movie.title}
                    ></img>
                    <div className="card-body">
                      <h3>{movie.title}</h3>
                      <p>{movie.abstract}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
