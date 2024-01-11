import { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [movieIndex, setMovieIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmJmZjUzNzhmZmJiNGVjMjBlYTkwZjU0NTI4NDljNiIsInN1YiI6IjY1OTNlYzdjMDI4ZjE0NzY5NGM3MDgxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24AzQEsONnyfFPb-mLCCWn6KxN_5s9UOjEg7F2w5rAY",
          },
        };

        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=es-ES",
          options
        );
        const data = await response.json();

        if (data && data.results && data.results.length > 0) {
          console.log(data.results);
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error al obtener películas:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMovieIndex((prevIndex) => (prevIndex + 1) % (movies.length || 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[movieIndex];

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <main>
      {currentMovie && (
        <div className="imagen-contenedor">
          <img
            src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
            alt={currentMovie.title}
            className="imagen-principal"
          />
          <div className="contenido-superpuesto">
            <h3 className="titulo">{currentMovie.title}</h3>
            <p className="sinopsis">{truncate(currentMovie?.overview, 150)}</p>
            <button role="button" className="boton">
              <i className="fa-solid fa-play"></i>Reproducir
            </button>
            <button role="button" className="boton">
              <i className="fa-light fa-circle-info"></i>Más información
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default HomePage;
