// DataVizApp/client/src/components/DataDashboard.tsx

import { useEffect, useState } from "react";
import axios from "axios";
import { IProcessedData } from "../types";
import SensorBarChart from "./SensorBarChart";

const DataDashboard = () => {
  const [data, setData] = useState<IProcessedData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🚨 NOTE: The Python API is running on port 5001
        const response = await axios.get(
          "http://localhost:5001/api/data/processed"
        );

        if (response.data.success) {
          setData(response.data.data);
        } else {
          setError(
            response.data.message || "Failed to process data on the server."
          );
        }
      } catch (err) {
        setError(
          axios.isAxiosError(err)
            ? err.message
            : "Network error or Python server is down."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center p-8 text-xl text-indigo-600">
        Loading Sensor Data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-700 bg-red-100 rounded-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        Robotics Sensor Data Dashboard
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Data served and processed by the **Python/Flask API** using Pandas.
      </p>

      {/*  HIGH-LEVEL CHART */}
      <div className="bg-white p-8 rounded-xl shadow-2xl mb-10 border border-gray-200">
        <SensorBarChart data={data} />
      </div>
      {/* DETAILED DATA CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.sensor_id}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">
              {item.sensor_id}
            </h3>
            <p className="text-gray-700">
              Readings:{" "}
              <span className="font-semibold">{item.reading_count}</span>
            </p>
            <p className="text-gray-700">
              Average Temp:{" "}
              <span className="font-semibold">
                {item.avg_temp.toFixed(2)}°C
              </span>
            </p>
            <p className="text-gray-700">
              Max Pressure:{" "}
              <span className="font-semibold">{item.max_pressure} psi</span>
            </p>

            {/* You can remove the placeholder or add individual charts here later */}
            <div className="mt-4 h-12 flex items-center justify-center rounded-lg text-gray-500 text-sm">
              Details displayed above.
            </div>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <div className="p-8 bg-yellow-50 text-yellow-700 rounded-lg">
          No data records found.
        </div>
      )}
    </div>
  );
};

export default DataDashboard;
