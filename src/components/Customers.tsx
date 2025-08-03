import { useState } from "react";

type Customer = {
  id: number;
  name: string;
  email: string;
  branch: string;
};

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: "Alice", email: "alice@example.com", branch: "Centro" },
    { id: 2, name: "Bob", email: "bob@example.com", branch: "Francisco May" },
    { id: 3, name: "Carlos", email: "carlos@example.com", branch: "Zapata" },
  ]);

  const [form, setForm] = useState({ name: "", email: "", branch: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.branch) return;

    if (editingId !== null) {
      // Modo edición
      setCustomers((prev) =>
        prev.map((c) => (c.id === editingId ? { ...c, ...form } : c)),
      );
      setEditingId(null);
    } else {
      // Modo agregar
      const newCustomer = {
        id: customers.length + 1,
        name: form.name,
        email: form.email,
        branch: form.branch,
      };
      setCustomers([...customers, newCustomer]);
    }

    setForm({ name: "", email: "", branch: "" });
  };

  const handleEdit = (customer: Customer) => {
    setForm({
      name: customer.name,
      email: customer.email,
      branch: customer.branch,
    });
    setEditingId(customer.id);
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-bold text-blue-600 dark:text-blue-400">
        Clientes
      </h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mb-6 grid gap-4 md:grid-cols-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full rounded border border-gray-300 px-4 py-2 dark:text-white"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Correo"
          className="w-full rounded border border-gray-300 px-4 py-2 dark:text-white"
        />
        <input
          type="text"
          name="branch"
          value={form.branch}
          onChange={handleChange}
          placeholder="Sucursal"
          className="w-full rounded border border-gray-300 px-4 py-2 dark:text-white"
        />
        <button
          type="submit"
          className="rounded bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700 md:col-span-3"
        >
          {editingId !== null ? "Guardar cambios" : "Agregar cliente"}
        </button>
      </form>

      {/* Tabla */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Correo</th>
              <th className="px-6 py-3">Sucursal</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{c.id}</td>
                <td className="px-6 py-4">{c.name}</td>
                <td className="px-6 py-4">{c.email}</td>
                <td className="px-6 py-4">{c.branch}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(c)}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
