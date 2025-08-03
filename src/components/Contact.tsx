export default function Contact() {
  const branches = [
    {
      name: "Sucursal Centro",
      hours: "Lunes a Sábado: 8:00 AM - 6:00 PM",
      phone: "999-123-4567",
    },
    {
      name: "Sucursal Francisco May",
      hours: "Lunes a Viernes: 9:00 AM - 5:00 PM",
      phone: "999-234-5678",
    },
    {
      name: "Sucursal Zapata",
      hours: "Todos los días: 7:00 AM - 3:00 PM",
      phone: "999-345-6789",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-2xl font-bold text-blue-600 dark:text-blue-400">
        Contáctanos
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Horarios por sucursal */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-white">
            Horarios y Sucursales
          </h2>
          <ul className="space-y-4">
            {branches.map((branch, index) => (
              <li
                key={index}
                className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm dark:bg-gray-800"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {branch.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {branch.hours}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Tel: {branch.phone}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto general y redes */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-white">
            Atención al Cliente
          </h2>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            Teléfono general:{" "}
            <strong className="text-gray-900 dark:text-white">
              999-888-0000
            </strong>
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Correo:{" "}
            <a
              className="text-blue-800 hover:underline dark:text-blue-400"
              href="mailto:contacto@empresa.com"
            >
              contacto@empresa.com
            </a>
          </p>

          <h2 className="mb-2 text-xl font-semibold text-gray-700 dark:text-white">
            Síguenos en redes
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com/empresa"
                target="_blank"
                className="text-blue-800 hover:underline dark:text-blue-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/empresa"
                target="_blank"
                className="text-blue-800 hover:underline dark:text-blue-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/empresa"
                target="_blank"
                className="text-blue-800 hover:underline dark:text-blue-400"
              >
                Twitter / X
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
