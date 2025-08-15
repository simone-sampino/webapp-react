import { useParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

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
        <div className="container">
          <h2>Reviews:</h2>

          {movie?.reviews?.map((review) => {
            const formattedDate = dayjs(review.created_at).format(
              "HH:mm ~ YYYY-MM-DD"
            );

            return (
              <div className="card p-3 bg-light mb-3" key={review.id}>
                <h3>Author: {review.name}</h3>
                <h5>{review.text}</h5>
                <h5>Vote: {review.vote}</h5>
                <p className="mb-0">Created at: {formattedDate}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
