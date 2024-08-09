import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-links">
      <NavLink to="produtos">Produtos</NavLink>
      <NavLink to="contato">Contato</NavLink>
    </nav>
  );
};

export default Header;
