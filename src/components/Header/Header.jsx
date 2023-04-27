import { NavLink } from "react-router-dom";
import sx from "./Header.module.css";

function MainNavigation() {
  return (
    <header className={sx.header}>
      <nav>
        <ul className={sx.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? sx.active : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? sx.active : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
