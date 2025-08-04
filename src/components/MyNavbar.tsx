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
        <NavbarLink as={Link} href="/customers">
          Clientes
        </NavbarLink>
        <NavbarLink as={Link} href="/graphics">
          Gráficas
        </NavbarLink>
        <NavbarLink as={Link} href="/inventory">
          Productos
        </NavbarLink>
        <NavbarLink as={Link} href="contact">
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
