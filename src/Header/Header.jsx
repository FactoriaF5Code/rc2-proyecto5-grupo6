import "./Header.css";

export const Header = () => {
  return ( <header>
      <div className="contenedor">
        <h2 className="logotipo">Restflix</h2>
        <nav>
          <a href="#" className="activo">Inicio</a>
          <a href="#">Programas</a>
          <a href="#">Peliculas</a>
          <a href="#">Novedades</a>
          <a href="#">Mi lista</a>
        </nav>
      </div>
    </header>
  
  )  
};

export default Header


