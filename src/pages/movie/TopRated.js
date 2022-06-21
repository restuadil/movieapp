import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function TopRatedMovie() {
  const endpoint = "movie/top_rated";

  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP);

    dispatch(updateMovies(response.data.results));
  }

  return (
    <div>
      <Hero endpoint={endpoint} />
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;