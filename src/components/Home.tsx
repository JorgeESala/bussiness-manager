import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      {/* Encabezado principal */}
      <h1 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
        Bienvenido a Gestor Comercial
      </h1>

      {/* Frase de valor */}
      <p className="mb-6 text-lg text-gray-700 dark:text-white">
        Una solución moderna para la gestión de clientes, productos y análisis
        de negocio. Optimice procesos, tome mejores decisiones y visualice su
        crecimiento.
      </p>

      {/* Estadísticas simuladas */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-blue-100 p-4 text-center dark:bg-blue-900">
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-200">
            120+
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">Clientes</p>
        </div>
        <div className="rounded-lg bg-blue-100 p-4 text-center dark:bg-blue-900">
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-200">
            $85,000
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Ventas totales
          </p>
        </div>
        <div className="rounded-lg bg-blue-100 p-4 text-center dark:bg-blue-900">
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-200">
            35
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Productos activos
          </p>
        </div>
        <div className="rounded-lg bg-blue-100 p-4 text-center dark:bg-blue-900">
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-200">
            98%
          </p>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Satisfacción
          </p>
        </div>
      </div>

      {/* Tarjetas de navegación */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link
          to="/customers"
          className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg dark:bg-gray-800"
        >
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            👥 Clientes
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Registra, edita y gestiona tus clientes de forma centralizada.
          </p>
        </Link>

        <Link
          to="/graphics"
          className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg dark:bg-gray-800"
        >
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            📊 Gráficas
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Visualiza métricas clave para tomar mejores decisiones.
          </p>
        </Link>

        <Link
          to="/inventory"
          className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg dark:bg-gray-800"
        >
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            📦 Inventario
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Controla el inventario de tus productos en tiempo real.
          </p>
        </Link>

        <Link
          to="/contact"
          className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg dark:bg-gray-800"
        >
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            📞 Contacto
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Solicita una demo personalizada o más información.
          </p>
        </Link>
      </div>

      {/* Call to action */}
      <div className="mt-10 text-center">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
          Solicitar una propuesta personalizada
        </button>
      </div>
    </div>
  );
}
