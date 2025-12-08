// DataVizApp/client/src/components/SensorBarChart.tsx

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IProcessedData } from "../types";

// Must register the necessary elements before use
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SensorBarChartProps {
  data: IProcessedData[];
}

const SensorBarChart: React.FC<SensorBarChartProps> = ({ data }) => {
  // Extract data for the chart
  const sensorLabels = data.map((item) => item.sensor_id);
  const avgTemps = data.map((item) => item.avg_temp);

  const chartData = {
    labels: sensorLabels,
    datasets: [
      {
        label: "Average Temperature (°C)",
        data: avgTemps,
        backgroundColor: "rgba(79, 70, 229, 0.7)", // Indigo 600
        borderColor: "rgba(79, 70, 229, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Average Temperature by Sensor",
        font: {
          size: 14,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default SensorBarChart;
