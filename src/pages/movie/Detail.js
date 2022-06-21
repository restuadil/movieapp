import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies";
import ENDPOINTS from "../../utils/constant/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getRecomendationMovies ();
    },[id]);

    async function getRecomendationMovies() {
        const response = await axios(ENDPOINTS.RECOMENDATIONS(id)) ;

        dispatch(updateMovies(response.data.results));
    }

    return (
        <>
         <DetailMovie />
         <Movies title="Recomendations Movies"/>
        </>
    );
}

export default Detail;