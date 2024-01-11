import "./Lista";
import { useEffect, useState, useRef} from "react";

const Lista3 = () => {
  const [pelis, setPelis] = useState([]);
  const carouselRef = useRef (null);
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 2500;
    }
  };
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 2500;
    }
  };

  useEffect(() => {
    const apiKey =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmJmZjUzNzhmZmJiNGVjMjBlYTkwZjU0NTI4NDljNiIsInN1YiI6IjY1OTNlYzdjMDI4ZjE0NzY5NGM3MDgxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24AzQEsONnyfFPb-mLCCWn6KxN_5s9UOjEg7F2w5rAY";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=es-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((respuesta) => setPelis(respuesta.results));
  }, []);

  return (
    <div className="peliculas-recomendadas ">
      <div className="contenedor-titulo-controles">
        <h3>Proximos Extrenos</h3>
      </div>
      <div className="contenedor-pelis">
        <button role="button" id="flecha-izq" className="flecha-izq" onClick={scrollLeft}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <div className="contenedor-carrusel" ref={carouselRef}>
          {pelis.map((p, i) => (
            <img key={i} src={"https://image.tmdb.org/t/p/original" + p.backdrop_path}/>
          ))}
        </div>
        <button role="button" id="flecha-dch" className="flecha-dch" onClick={scrollRight}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};
export default Lista3;
