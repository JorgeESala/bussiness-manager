export default function CustomersTable() {
  const customers = [
    { id: 1, name: "Alice", email: "alice@example.com", branch: "Centro" },
    { id: 2, name: "Bob", email: "bob@example.com", branch: "Francisco May" },
    {
      id: 3,
      name: "Carlos",
      email: "carlos@example.com",
      branch: "Emiliano Zapata",
    },
  ];

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Correo
            </th>
            <th scope="col" className="px-6 py-3">
              Sucursal
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td className="px-6 py-4">{customer.id}</td>
              <td className="px-6 py-4">{customer.name}</td>
              <td className="px-6 py-4">{customer.email}</td>
              <td className="px-6 py-4">{customer.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
