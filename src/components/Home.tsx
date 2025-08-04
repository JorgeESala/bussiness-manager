import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="p-8">
        <h1 className="mb-6 text-2xl font-bold text-blue-600 dark:text-blue-400">
          Bienvenido a Gestor Comercial
        </h1>
        <p className="mb-6 text-gray-600 dark:text-white">
          Este es un demo de un proyecto que muestra cómo se podría ver el
          sistema de un negocio. Explore las siguientes secciones:
        </p>

        <ul className="space-y-3">
          <li>
            <Link
              to="/customers"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              → Registro de clientes
            </Link>
          </li>
          <li>
            <Link
              to="/graphics"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              → Muestra de gráficas
            </Link>
          </li>
          <li>
            <Link
              to="/inventory"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              → Inventario de productos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              → Página de contacto
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
