import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <Navbar>
      <NavbarToggle />
      <NavbarCollapse className="">
        <NavbarLink href="/" active>
          Inicio
        </NavbarLink>
        <NavbarLink as={Link} to="/customers">
          Clientes
        </NavbarLink>
        <NavbarLink as={Link} to="/graphics">
          Gráficas
        </NavbarLink>
        <NavbarLink as={Link} to="/inventory">
          Productos
        </NavbarLink>
        <NavbarLink as={Link} to="contact">
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
