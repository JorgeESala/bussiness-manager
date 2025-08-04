import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
);

type ChartType = "barras" | "lineas" | "pastel";
type ViewType = "mensual" | "semanal";

const labels = [
  "Sucursal A",
  "Sucursal B",
  "Sucursal C",
  "Sucursal D",
  "Sucursal E",
];

const currentYearSales: any = {
  Enero: [12000, 10000, 10000, 9000, 14000],
  Febrero: [11000, 8000, 15500, 10000, 12000],
  Marzo: [13000, 9000, 12000, 10500, 13500],
  Abril: [14000, 9500, 8500, 10200, 13800],
};

const lastYearSales: any = {
  Enero: [10000, 9000, 15000, 8000, 12000],
  Febrero: [9500, 7000, 14000, 9500, 11000],
  Marzo: [11000, 8500, 14500, 9900, 12500],
  Abril: [11500, 8800, 13500, 9700, 12800],
};

const weeklySales: any = {
  Semana1: [3000, 2500, 2700, 2200, 3300],
  Semana2: [2800, 2400, 2900, 2100, 3100],
  Semana3: [3100, 2600, 2600, 2300, 3400],
  Semana4: [3200, 2700, 2800, 2400, 3500],
};

const months = Object.keys(currentYearSales);
const weeks = Object.keys(weeklySales);

const colors = [
  "rgba(59, 130, 246, 0.7)",
  "rgba(34, 197, 94, 0.7)",
  "rgba(234, 179, 8, 0.7)",
  "rgba(239, 68, 68, 0.7)",
  "rgba(168, 85, 247, 0.7)",
];

const borderColor = "rgba(59, 130, 246, 1)";

export default function Graphics() {
  const [chartType, setChartType] = useState<ChartType>("barras");
  const [viewType, setViewType] = useState<ViewType>("mensual");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Enero");

  const isMonthly = viewType === "mensual";

  const data = {
    labels,
    datasets:
      chartType === "pastel"
        ? [
            {
              label: `${isMonthly ? "Ventas - " : "Semana - "}${selectedPeriod}`,
              data: isMonthly
                ? currentYearSales[selectedPeriod]
                : weeklySales[selectedPeriod],
              backgroundColor: colors,
              borderColor,
              borderWidth: 1,
            },
          ]
        : [
            {
              label: `${isMonthly ? "Este año - " : ""}${selectedPeriod}`,
              data: isMonthly
                ? currentYearSales[selectedPeriod]
                : weeklySales[selectedPeriod],
              backgroundColor: "rgba(59, 130, 246, 0.6)",
              borderColor,
              borderWidth: 2,
              fill: false,
              tension: 0.4,
            },
            ...(isMonthly
              ? [
                  {
                    label: `Año pasado - ${selectedPeriod}`,
                    data: lastYearSales[selectedPeriod],
                    backgroundColor: "rgba(16, 185, 129, 0.6)",
                    borderColor: "rgba(16, 185, 129, 1)",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                  },
                ]
              : []),
          ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: `Resumen de ventas ${isMonthly ? "mensual" : "semanal"} - ${selectedPeriod}`,
        font: { size: 18 },
        color: "#FFFFFF", // blanco para modo oscuro (se sobrescribe con Tailwind en modo claro)
      },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case "barras":
        return <Bar data={data} options={options} />;
      case "lineas":
        return <Line data={data} options={options} />;
      case "pastel":
        return <Pie data={data} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="p4">
      <h1 className="mb-6 text-2xl font-bold text-blue-600 dark:text-blue-400">
        Gráficas
      </h1>

      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-200">
            Tipo de Gráfica
          </label>
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value as ChartType)}
            className="rounded border border-gray-300 bg-white px-3 py-1 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          >
            <option value="barras">Barras</option>
            <option value="lineas">Líneas</option>
            <option value="pastel">Pastel</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-200">
            Vista
          </label>
          <select
            value={viewType}
            onChange={(e) => {
              const newView = e.target.value as ViewType;
              setViewType(newView);
              setSelectedPeriod(newView === "mensual" ? "Enero" : "Semana1");
            }}
            className="rounded border border-gray-300 bg-white px-3 py-1 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          >
            <option value="mensual">Mensual</option>
            <option value="semanal">Semanal</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-200">
            {isMonthly ? "Mes" : "Semana"}
          </label>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="rounded border border-gray-300 bg-white px-3 py-1 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          >
            {(isMonthly ? months : weeks).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded bg-white p-4 shadow-md dark:bg-gray-800">
        {renderChart()}
      </div>
    </div>
  );
}
