import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./index.styled";
import ENDPOINTS from "../../utils/constant/endpoints";

function Hero() {
  const [movie, setMovie] = useState("");

  const movieGenres =
    movie && movie.genres.map((genre) => genre.name).join(", ");
  const movieTrailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0]?.key}`;

  useEffect(() => {
    getDetailMovie();
  }, []);

  async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.TRENDING);
    const randomIdx = Math.floor(Math.random() * response.data.results.length);

    return response.data.results[randomIdx];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const movieId = trendingMovie.id;
    const response = await axios(ENDPOINTS.DETAIL(movieId));

    setMovie(response.data);
  }

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.title}</h2>
          <h3 className="hero__genre">{movieGenres}</h3>
          <p className="hero__description">{movie.overview}</p>
          <Button
            variant="primary"
            size="md"
            as="a"
            href={movieTrailer}
            target="_blank"
          >
            Watch
          </Button>
        </div>
        <div className="hero__right">
          <img
            className="hero__image"
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                : "https://picsum.photos/600/400"
            }
            alt="hero"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;