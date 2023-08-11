import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/empresa">Empresa</Link>
            </li>
            <li>
              <Link to="/noticias">Notícias</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
