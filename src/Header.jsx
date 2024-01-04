import { Link } from 'react-router-dom'; // Asegúrate de importar Link si lo estás utilizando
import Search from './Search'; // Asegúrate de importar Search si lo estás utilizando
import './Header.css';
export const Header = () => {
  return (
    <Header>
      <nav>
        <div className="logo">
          <Link to="./assets/logo.png">
            <img alt="logo" />
          </Link>
        </div>
        <div className="search-bar">
          <Search />
        </div>
      </nav>
    </Header>
  );
};
export default Header;
