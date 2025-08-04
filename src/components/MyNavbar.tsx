import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export default function Component() {
  const location = useLocation();

  return (
    <Navbar>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active={location.pathname === "/"}>
          Inicio
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/customers"
          active={location.pathname === "/customers"}
        >
          Clientes
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/graphics"
          active={location.pathname === "/graphics"}
        >
          Gráficas
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/inventory"
          active={location.pathname === "/inventory"}
        >
          Productos
        </NavbarLink>
        <NavbarLink
          as={Link}
          to="/contact"
          active={location.pathname === "/contact"}
        >
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
