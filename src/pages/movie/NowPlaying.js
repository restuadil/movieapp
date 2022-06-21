import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function NowPlayingMovie() {
  const endpoint = "movie/now_playing"

  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW);

    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero endpoint={endpoint} />
      <Movies  title="Now Playing Movies" />
    </div>
  );
}

export default NowPlayingMovie;