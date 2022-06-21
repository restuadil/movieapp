import styles from "./style.module.css";
import Movie from "../Movie";
import { useSelector} from "react-redux";

function Movies(props) {
  const { title,} = props;
  //store.reducer.state
  const movies = useSelector ((store) => store.movies.movies)

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movies__container}>
          {/**
           * Looping semua movies
           * Render as a list
           * Send some props
           */}
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        {/* Menambahkan event onClick */}
      </section>
    </div>
  );
}

export default Movies;