import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
import Button from "../ui/Button";
import styles from "./style.module.css";
import { useDispatch } from "react-redux"; 
import { addMovie } from "../../features/moviesSlice";

function AddMovieForm() {
  const dispatch = useDispatch();

  const navigation = useNavigate();

  // const [title, setTitle] = useState("");
  // const [year, setYear] = useState("");
  // const [type, setType] = useState("");
  // const [poster, setPoster] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    type: "",
    poster: "",
  });

  const [isTitleError, setIsTitleError] = useState(false);
  const [isYearError, setIsYearError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  const { title, year, type, poster } = formData;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (year === "") {
      setIsTitleError(false);
      setIsYearError(true);
      return false;
    } else if (type === "") {
      setIsYearError(false);
      setIsTypeError(true);
      return false;
    } else if (poster === "") {
      setIsTypeError(false);
      setIsPosterError(true);
      return false;
    } else {
      setIsTitleError(false);
      setIsYearError(false);
      setIsTypeError(false);
      setIsPosterError(false);
      return true;
    }
  }

  function submitMovie() {
    const movie = {
      id: nanoid(),
      title,
      year,
      type,
      poster,
    };
    
    dispatch(addMovie(movie));

    navigation("/")

    return true;
  }


  function handleSubmit(e) {
    e.preventDefault();

    validate() && submitMovie()
  }

  return (
    <div className={styles.container}>
      <section className={styles.movie__form}>
        <div className={styles.movie__form__left}>
          <img
            className={styles.movie__form__image}
            src="https://picsum.photos/600/400"
            alt="Form Thumbnail"
          />
        </div>
        <div className={styles.movie__form__right}>
          <h2 className={styles.movie__form__title}>Add Movie</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="title">
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Judul Film"
              />
              {isTitleError && <Alert>Judul Film Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="year">
                Years
              </label>
              <input
                id="year"
                className={styles.form__input}
                type="number"
                name="year"
                min="1900"
                value={year}
                onChange={handleChange}
                placeholder="Tahun Rilis"
              />
              {isYearError && <Alert>Tahun Rilis Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="type">
                Type
              </label>
              <select
                className={styles.form__input}
                id="type"
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="">Pilih Genre Film</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
                <option value="thriller">Thriller</option>
              </select>
              {isTypeError && <Alert>Genre Film Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="poster">
                Poster
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                value={poster}
                onChange={handleChange}
                placeholder="Link Gambar"
              />
              {isPosterError && <Alert>Link Wajib Diisi</Alert>}
            </div>
            <div>
              <Button variant ="secondary" full>Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;