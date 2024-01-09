import "./Lista.css";
import { useEffect, useState } from "react";

const Lista = () => {
  const [pelis, setPelis] = useState([]);

  useEffect(
    /*Cargar las pelis */
    () => {
      const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDAwMzk5MWRkMTFkMzY5Y2U2OWQ0ODkxZDE1YmRlMSIsInN1YiI6IjY1OTNlYzUyZmMzMWQzNzBlYzQ2ZmM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CFkBpo0cM0ZyQGFUvgQSZB2w-CfEYCd2n0s1BA23peI";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };
      // descargarse la lista de pelis
      fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc",
        options
      )
      .then((response) => response.json())
      // guardarlas en el estado usando setPelis()
      .then( respuesta => setPelis(respuesta.results))
    },
    []
  );

  return (
    <div className="peliculas-recomendadas ">
        <div className="contenedor-titulo-controles">
          <h3>Peliculas Recomendadas</h3>
          <div className="indicadores">
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="contenedor-pelis ">
          <button role="button" id="flecha-izq" className="flecha-izq"><i className="fa-solid fa-angle-left"></i></button>
          <div className="contenedor-carrusel">
          {pelis.map((p, i) => (
            <img key={i} src= {"https://image.tmdb.org/t/p/original" + p.backdrop_path}/> 
          ))}
          </div>
          <button role="button" id="flecha-dch" className="flecha-dch"><i className="fa-solid fa-angle-right"></i></button>
        </div>
        
    </div>
  );
};

export default Lista;
