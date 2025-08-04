import { Link, useLocation } from "react-router-dom";
import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";

export default function MyNavbar() {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `text-base font-medium ${
      location.pathname === path ? "text-indigo-300" : "text-white"
    } hover:text-indigo-200`;

  return (
    <Navbar className="sticky top-0 z-50">
      <NavbarToggle />
      <NavbarCollapse>
        <Link to="/" className={linkClasses("/")}>
          Inicio
        </Link>
        <Link to="/customers" className={linkClasses("/customers")}>
          Clientes
        </Link>
        <Link to="/graphics" className={linkClasses("/graphics")}>
          Gráficas
        </Link>
        <Link to="/inventory" className={linkClasses("/inventory")}>
          Productos
        </Link>
        <Link to="/contact" className={linkClasses("/contact")}>
          Contacto
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
