import { useParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { useEffect, useState } from "react";

export default function SingleMoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const api_url = `${
    import.meta.env.VITE_BACKEND_API_SERVER +
    import.meta.env.VITE_BACKEND_MOVIES_ENDPOINT
  }/${id}`;

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <>
      <Jumbotron title={movie.title} text={movie.abstract} cta={movie.genre} />

      <section>
        <div className="container"></div>
      </section>
    </>
  );
}
