import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useDispatch } from "react-redux";

function PopularMovie() {
  const endpoint = "movie/popular";


  // use dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);

    dispatch(updateMovies(response.data.results))
  }

  return (
    <div>
      <Hero endpoint={endpoint} />
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;