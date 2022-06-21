import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { useParams} from "react-router-dom"
import Button from "../ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";
import ENDPOINTS from "../../utils/constant/endpoints";

function DetailMovie() {
    const params = useParams();
    const [movie, setMovie] = useState("")
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0]?.key}`

    useEffect(() => {
        getDetailMovie();
    }, [params.id])

    async function getDetailMovie() {
        const response = await axios(ENDPOINTS.DETAIL(params.id));

        setMovie(response.data);
    }
    return(
    <StyledDetailMovie>
        <div className="poster">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                alt="">
            </img>
        </div>
        <div className="info">
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" href={trailer}>
                Watch Trailer
            </Button>
        </div>
    </StyledDetailMovie>
 );
}

export default DetailMovie;  