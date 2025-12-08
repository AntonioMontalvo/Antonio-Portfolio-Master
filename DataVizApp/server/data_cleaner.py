# DataVizApp/server/data_cleaner.py

import pandas as pd

def clean_and_filter_data(input_file='data.json', output_file='filtered_data.csv'):
    """
    Loads raw JSON data, filters records based on a condition
    and saves the critical events to a CSV file.
    
    """
    try:
        print(f"Loading data from {input_file}...")
        df = pd.read_json(input_file)

        # Filter operation: Find all readings where the temperature is above 50°C
        critical_temp_threshold = 50
        filtered_df = df[df['temp_c'] > critical_temp_threshold]

        print(f"Found {len(filtered_df)} critical temperature readings (>{critical_temp_threshold}°C).")

        # Save the filtered data to a CSV file
        filtered_df.to_csv(output_file, index=False)

        print(f"Critical data saved to {output_file}")
        print("\nScript finished successfully.")

    except FileNotFoundError:
        print(f"Error: Input file {input_file} not found.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    clean_and_filter_data()