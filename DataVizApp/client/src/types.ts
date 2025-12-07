// DataVizApp/client/src/types.ts

// Interface for the processed data structure from the Python API
export interface IProcessedData {
  sensor_id: string;
  avg_temp: number;
  max_pressure: number;
  reading_count: number;
}
