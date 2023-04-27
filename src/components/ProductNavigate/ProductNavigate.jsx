import { NavLink } from "react-router-dom";
import sx from "./ProductNavigate.module.css";

function ProductNavigate() {
  return (
    <header className={sx.header}>
      <nav>
        <ul className={sx.list}>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? sx.active : undefined)}
              end
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/new"
              className={({ isActive }) => (isActive ? sx.active : undefined)}
            >
              New Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProductNavigate;
