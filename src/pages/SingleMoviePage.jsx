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

          <h3>Add your review:</h3>
          <form className="card bg-light p-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                aria-describedby="helpId"
                placeholder="Type your name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                name="content"
                id="content"
                rows="3"
                placeholder="Write here your review"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="vote" className="form-label">
                Vote
              </label>
              <select
                className="form-select form-select-lg"
                name="vote"
                id="vote"
              >
                <option defaultValue="0">Select your vote from 1 to 5</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Send <i className="bi bi-box-arrow-in-right"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
