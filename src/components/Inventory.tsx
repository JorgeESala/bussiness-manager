import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  stock: number;
  price: number;
  unit: string;
}

const productsData = [
  {
    id: 1,
    name: "Pollo Entero Fresco",
    category: "Aves",
    stock: 1200,
    price: 45,
    unit: "kg",
  },
  {
    id: 2,
    name: "Pechuga de Pollo",
    category: "Aves",
    stock: 800,
    price: 85,
    unit: "kg",
  },
  {
    id: 3,
    name: "Huevos Blancos Grandes",
    category: "Huevos",
    stock: 5000,
    price: 2.5,
    unit: "pieza",
  },
  {
    id: 4,
    name: "Alitas de Pollo Congeladas",
    category: "Aves",
    stock: 900,
    price: 60,
    unit: "kg",
  },
  {
    id: 5,
    name: "Jamón de Pavo",
    category: "Procesados",
    stock: 400,
    price: 90,
    unit: "kg",
  },
  {
    id: 6,
    name: "Pierna de Pollo",
    category: "Aves",
    stock: 1000,
    price: 50,
    unit: "kg",
  },
  {
    id: 7,
    name: "Salchicha de Pollo",
    category: "Procesados",
    stock: 600,
    price: 75,
    unit: "kg",
  },
  {
    id: 8,
    name: "Carne Molida de Pollo",
    category: "Aves",
    stock: 700,
    price: 70,
    unit: "kg",
  },
  {
    id: 9,
    name: "Claras de Huevo Pasteurizadas",
    category: "Huevos",
    stock: 2000,
    price: 3.5,
    unit: "litro",
  },
  {
    id: 10,
    name: "Pierna con Muslo",
    category: "Aves",
    stock: 950,
    price: 48,
    unit: "kg",
  },
  {
    id: 11,
    name: "Filete de Pechuga",
    category: "Aves",
    stock: 850,
    price: 90,
    unit: "kg",
  },
  {
    id: 12,
    name: "Hígado de Pollo",
    category: "Aves",
    stock: 400,
    price: 25,
    unit: "kg",
  },
  {
    id: 13,
    name: "Carne Procesada para Sándwich",
    category: "Procesados",
    stock: 300,
    price: 100,
    unit: "kg",
  },
  {
    id: 14,
    name: "Huevos Rojos Medianos",
    category: "Huevos",
    stock: 4800,
    price: 2.8,
    unit: "pieza",
  },
  {
    id: 15,
    name: "Salchicha Viena",
    category: "Procesados",
    stock: 500,
    price: 65,
    unit: "kg",
  },
  {
    id: 16,
    name: "Molleja de Pollo",
    category: "Aves",
    stock: 200,
    price: 30,
    unit: "kg",
  },
  {
    id: 17,
    name: "Carne Molida Extra",
    category: "Aves",
    stock: 900,
    price: 75,
    unit: "kg",
  },
  {
    id: 18,
    name: "Claras de Huevo en Cartón",
    category: "Huevos",
    stock: 1500,
    price: 3.7,
    unit: "litro",
  },
  {
    id: 19,
    name: "Muslo de Pollo",
    category: "Aves",
    stock: 980,
    price: 52,
    unit: "kg",
  },
  {
    id: 20,
    name: "Jamón Cocido",
    category: "Procesados",
    stock: 450,
    price: 88,
    unit: "kg",
  },
  {
    id: 21,
    name: "Pollo Entero Congelado",
    category: "Aves",
    stock: 1100,
    price: 43,
    unit: "kg",
  },
  {
    id: 22,
    name: "Pechuga Ahumada",
    category: "Procesados",
    stock: 350,
    price: 95,
    unit: "kg",
  },
  {
    id: 23,
    name: "Huevos Orgánicos",
    category: "Huevos",
    stock: 5200,
    price: 3.0,
    unit: "pieza",
  },
  {
    id: 24,
    name: "Carne Molida Especial",
    category: "Aves",
    stock: 650,
    price: 80,
    unit: "kg",
  },
  {
    id: 25,
    name: "Alitas BBQ",
    category: "Procesados",
    stock: 300,
    price: 68,
    unit: "kg",
  },
  {
    id: 26,
    name: "Muslo con Pierna",
    category: "Aves",
    stock: 1020,
    price: 49,
    unit: "kg",
  },
  {
    id: 27,
    name: "Claras de Huevo Pasteurizadas 2L",
    category: "Huevos",
    stock: 1300,
    price: 7.0,
    unit: "litro",
  },
  {
    id: 28,
    name: "Jamón de Pavo en Rodajas",
    category: "Procesados",
    stock: 420,
    price: 92,
    unit: "kg",
  },
  {
    id: 29,
    name: "Salchicha Tipo Hot Dog",
    category: "Procesados",
    stock: 520,
    price: 60,
    unit: "kg",
  },
  {
    id: 30,
    name: "Filete de Muslo",
    category: "Aves",
    stock: 860,
    price: 55,
    unit: "kg",
  },
  {
    id: 31,
    name: "Pollo Orgánico Entero",
    category: "Aves",
    stock: 1150,
    price: 60,
    unit: "kg",
  },
  {
    id: 32,
    name: "Huevos Medianos",
    category: "Huevos",
    stock: 4700,
    price: 2.6,
    unit: "pieza",
  },
  {
    id: 33,
    name: "Jamón de Pavo Extra",
    category: "Procesados",
    stock: 380,
    price: 93,
    unit: "kg",
  },
  {
    id: 34,
    name: "Alitas de Pollo Picantes",
    category: "Procesados",
    stock: 340,
    price: 70,
    unit: "kg",
  },
  {
    id: 35,
    name: "Carne Molida Light",
    category: "Aves",
    stock: 710,
    price: 68,
    unit: "kg",
  },
  {
    id: 36,
    name: "Muslo de Pollo Orgánico",
    category: "Aves",
    stock: 900,
    price: 54,
    unit: "kg",
  },
  {
    id: 37,
    name: "Claras Pasteurizadas 1L",
    category: "Huevos",
    stock: 1800,
    price: 3.8,
    unit: "litro",
  },
  {
    id: 38,
    name: "Pechuga Natural",
    category: "Aves",
    stock: 830,
    price: 88,
    unit: "kg",
  },
  {
    id: 39,
    name: "Jamón Cocido",
    category: "Procesados",
    stock: 410,
    price: 89,
    unit: "kg",
  },
  {
    id: 40,
    name: "Pollo Congelado Entero",
    category: "Aves",
    stock: 1050,
    price: 42,
    unit: "kg",
  },
  {
    id: 41,
    name: "Salchicha de Pavo",
    category: "Procesados",
    stock: 580,
    price: 72,
    unit: "kg",
  },
  {
    id: 42,
    name: "Alitas Naturales",
    category: "Aves",
    stock: 940,
    price: 58,
    unit: "kg",
  },
  {
    id: 43,
    name: "Huevos Blancos Extra Grandes",
    category: "Huevos",
    stock: 5300,
    price: 3.2,
    unit: "pieza",
  },
  {
    id: 44,
    name: "Muslo con Pierna Orgánico",
    category: "Aves",
    stock: 970,
    price: 53,
    unit: "kg",
  },
  {
    id: 45,
    name: "Jamón de Pavo Natural",
    category: "Procesados",
    stock: 390,
    price: 91,
    unit: "kg",
  },
  {
    id: 46,
    name: "Carne Molida Especial Light",
    category: "Aves",
    stock: 680,
    price: 70,
    unit: "kg",
  },
  {
    id: 47,
    name: "Huevos Orgánicos Grandes",
    category: "Huevos",
    stock: 4800,
    price: 3.3,
    unit: "pieza",
  },
  {
    id: 48,
    name: "Pierna de Pollo Congelada",
    category: "Aves",
    stock: 940,
    price: 47,
    unit: "kg",
  },
  {
    id: 49,
    name: "Jamón de Pavo Ahumado",
    category: "Procesados",
    stock: 430,
    price: 94,
    unit: "kg",
  },
  {
    id: 50,
    name: "Salchicha BBQ",
    category: "Procesados",
    stock: 560,
    price: 74,
    unit: "kg",
  },
  {
    id: 51,
    name: "Pollo Orgánico Muslo",
    category: "Aves",
    stock: 1120,
    price: 62,
    unit: "kg",
  },
  {
    id: 52,
    name: "Huevos Blancos Medianos",
    category: "Huevos",
    stock: 4900,
    price: 2.7,
    unit: "pieza",
  },
  {
    id: 53,
    name: "Alitas de Pollo Orgánicas",
    category: "Procesados",
    stock: 320,
    price: 75,
    unit: "kg",
  },
  {
    id: 54,
    name: "Carne Molida Orgánica",
    category: "Aves",
    stock: 730,
    price: 78,
    unit: "kg",
  },
  {
    id: 55,
    name: "Claras de Huevo en Bolsa",
    category: "Huevos",
    stock: 1600,
    price: 3.6,
    unit: "litro",
  },
  {
    id: 56,
    name: "Pierna de Pollo Ahumada",
    category: "Aves",
    stock: 970,
    price: 51,
    unit: "kg",
  },
  {
    id: 57,
    name: "Jamón Cocido Extra",
    category: "Procesados",
    stock: 420,
    price: 90,
    unit: "kg",
  },
  {
    id: 58,
    name: "Salchicha Light",
    category: "Procesados",
    stock: 540,
    price: 70,
    unit: "kg",
  },
  {
    id: 59,
    name: "Muslo de Pollo Congelado",
    category: "Aves",
    stock: 910,
    price: 53,
    unit: "kg",
  },
  {
    id: 60,
    name: "Huevos Rojos Grandes",
    category: "Huevos",
    stock: 4600,
    price: 2.9,
    unit: "pieza",
  },
  {
    id: 61,
    name: "Carne Molida Regular",
    category: "Aves",
    stock: 690,
    price: 72,
    unit: "kg",
  },
  {
    id: 62,
    name: "Pechuga Ahumada Orgánica",
    category: "Procesados",
    stock: 360,
    price: 97,
    unit: "kg",
  },
  {
    id: 63,
    name: "Alitas Picantes",
    category: "Procesados",
    stock: 330,
    price: 71,
    unit: "kg",
  },
  {
    id: 64,
    name: "Claras de Huevo Pasteurizadas 3L",
    category: "Huevos",
    stock: 1100,
    price: 10.5,
    unit: "litro",
  },
  {
    id: 65,
    name: "Muslo Orgánico",
    category: "Aves",
    stock: 920,
    price: 55,
    unit: "kg",
  },
  {
    id: 66,
    name: "Jamón de Pavo Light",
    category: "Procesados",
    stock: 400,
    price: 85,
    unit: "kg",
  },
  {
    id: 67,
    name: "Salchicha de Pavo Orgánica",
    category: "Procesados",
    stock: 530,
    price: 80,
    unit: "kg",
  },
  {
    id: 68,
    name: "Pollo Entero Orgánico",
    category: "Aves",
    stock: 1180,
    price: 65,
    unit: "kg",
  },
  {
    id: 69,
    name: "Huevos Blancos Grandes Extra",
    category: "Huevos",
    stock: 5100,
    price: 3.1,
    unit: "pieza",
  },
  {
    id: 70,
    name: "Pierna de Pollo Ahumada Orgánica",
    category: "Aves",
    stock: 940,
    price: 55,
    unit: "kg",
  },
  {
    id: 71,
    name: "Jamón Cocido Natural",
    category: "Procesados",
    stock: 430,
    price: 92,
    unit: "kg",
  },
  {
    id: 72,
    name: "Salchicha de Pollo BBQ",
    category: "Procesados",
    stock: 570,
    price: 76,
    unit: "kg",
  },
  {
    id: 73,
    name: "Filete de Pechuga Orgánica",
    category: "Aves",
    stock: 840,
    price: 95,
    unit: "kg",
  },
  {
    id: 74,
    name: "Muslo con Pierna Orgánico",
    category: "Aves",
    stock: 980,
    price: 58,
    unit: "kg",
  },
  {
    id: 75,
    name: "Claras Pasteurizadas en Bolsa",
    category: "Huevos",
    stock: 1700,
    price: 3.9,
    unit: "litro",
  },
  {
    id: 76,
    name: "Pollo Orgánico Entero",
    category: "Aves",
    stock: 1130,
    price: 63,
    unit: "kg",
  },
  {
    id: 77,
    name: "Huevos Rojos Medianos",
    category: "Huevos",
    stock: 4800,
    price: 2.85,
    unit: "pieza",
  },
  {
    id: 78,
    name: "Jamón de Pavo Extra Light",
    category: "Procesados",
    stock: 390,
    price: 88,
    unit: "kg",
  },
  {
    id: 79,
    name: "Salchicha Normal",
    category: "Procesados",
    stock: 550,
    price: 68,
    unit: "kg",
  },
  {
    id: 80,
    name: "Muslo de Pollo Natural",
    category: "Aves",
    stock: 900,
    price: 56,
    unit: "kg",
  },
  {
    id: 81,
    name: "Carne Molida de Pollo Extra",
    category: "Aves",
    stock: 700,
    price: 77,
    unit: "kg",
  },
  {
    id: 82,
    name: "Pechuga Natural Orgánica",
    category: "Aves",
    stock: 860,
    price: 89,
    unit: "kg",
  },
  {
    id: 83,
    name: "Huevos Orgánicos Extra Grandes",
    category: "Huevos",
    stock: 5200,
    price: 3.4,
    unit: "pieza",
  },
  {
    id: 84,
    name: "Pierna de Pollo Natural",
    category: "Aves",
    stock: 950,
    price: 49,
    unit: "kg",
  },
  {
    id: 85,
    name: "Jamón Cocido Natural Extra",
    category: "Procesados",
    stock: 410,
    price: 91,
    unit: "kg",
  },
  {
    id: 86,
    name: "Salchicha Light Orgánica",
    category: "Procesados",
    stock: 560,
    price: 73,
    unit: "kg",
  },
  {
    id: 87,
    name: "Alitas Naturales Orgánicas",
    category: "Aves",
    stock: 930,
    price: 59,
    unit: "kg",
  },
  {
    id: 88,
    name: "Claras de Huevo en Bolsa 2L",
    category: "Huevos",
    stock: 1400,
    price: 7.5,
    unit: "litro",
  },
  {
    id: 89,
    name: "Muslo Orgánico Extra",
    category: "Aves",
    stock: 910,
    price: 57,
    unit: "kg",
  },
  {
    id: 90,
    name: "Pollo Congelado Entero",
    category: "Aves",
    stock: 1080,
    price: 44,
    unit: "kg",
  },
  {
    id: 91,
    name: "Jamón de Pavo Orgánico",
    category: "Procesados",
    stock: 430,
    price: 95,
    unit: "kg",
  },
  {
    id: 92,
    name: "Salchicha BBQ Extra",
    category: "Procesados",
    stock: 590,
    price: 78,
    unit: "kg",
  },
  {
    id: 93,
    name: "Pierna con Muslo Natural",
    category: "Aves",
    stock: 940,
    price: 50,
    unit: "kg",
  },
  {
    id: 94,
    name: "Huevos Blancos Medianos Extra",
    category: "Huevos",
    stock: 5000,
    price: 3.0,
    unit: "pieza",
  },
  {
    id: 95,
    name: "Carne Molida Extra Light",
    category: "Aves",
    stock: 680,
    price: 69,
    unit: "kg",
  },
  {
    id: 96,
    name: "Pechuga Ahumada Natural",
    category: "Procesados",
    stock: 370,
    price: 96,
    unit: "kg",
  },
  {
    id: 97,
    name: "Alitas Picantes Orgánicas",
    category: "Procesados",
    stock: 350,
    price: 72,
    unit: "kg",
  },
  {
    id: 98,
    name: "Claras Pasteurizadas 1.5L",
    category: "Huevos",
    stock: 1600,
    price: 5.7,
    unit: "litro",
  },
  {
    id: 99,
    name: "Muslo Natural Extra",
    category: "Aves",
    stock: 920,
    price: 54,
    unit: "kg",
  },
  {
    id: 100,
    name: "Jamón Cocido Orgánico",
    category: "Procesados",
    stock: 420,
    price: 90,
    unit: "kg",
  },
];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof (typeof productsData)[0];
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof (typeof productsData)[0]) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedProducts = [...productsData].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const aVal = a[key];
    const bVal = b[key];

    if (typeof aVal === "number" && typeof bVal === "number") {
      return direction === "asc" ? aVal - bVal : bVal - aVal;
    }

    return direction === "asc"
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold text-blue-600 dark:text-blue-400">
        Inventario de Productos
      </h1>

      <input
        type="text"
        placeholder="Buscar producto..."
        className="mb-4 w-full max-w-md rounded border border-gray-300 px-4 py-2 dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {[
                { key: "name", label: "Nombre" },
                { key: "category", label: "Categoría" },
                { key: "stock", label: "Stock" },
                { key: "unit", label: "Unidad" },
                { key: "price", label: "Precio (MXN)" },
              ].map((col) => (
                <th
                  key={col.key}
                  onClick={() =>
                    handleSort(col.key as keyof (typeof productsData)[0])
                  }
                  className="cursor-pointer px-6 py-3 hover:underline"
                >
                  {col.label}
                  {sortConfig?.key === col.key && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">{product.unit}</td>
                  <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No se encontraron productos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
