# DataVizApp/server/app.py

import os
import json
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize the Flask application
app = Flask(__name__)

# Apply CORS to allow connection from the React front-end (on a different port)
CORS(app) 

@app.route('/api/data/processed', methods=['GET'])
def get_processed_data():
    """
    Loads raw data, processes it using pandas, and returns a simplified JSON response.
    This demonstrates the back-end's role in data preparation.
    """
    try:
        # Construct an absolute path to the data file to make the script more robust
        script_dir = os.path.dirname(__file__)
        data_path = os.path.join(script_dir, 'data.json')
        # 1. Load data using pandas
        df = pd.read_json(data_path)
        
        # 2. Example Processing (Aggregation)
        # Group by sensor_id and calculate the average temperature and pressure
        processed_df = df.groupby('sensor_id').agg(
            avg_temp=('temp_c', 'mean'),
            max_pressure=('pressure_psi', 'max'),
            reading_count=('sensor_id', 'count')
        ).reset_index()

        # 3. Convert pandas DataFrame back to a JSON serializable format (list of dictionaries)
        processed_data = processed_df.to_dict('records')
        
        return jsonify({
            'success': True,
            'data': processed_data,
            'message': 'Data processed and retrieved successfully.'
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e),
            'message': 'An error occurred during data processing.'
        }), 500

@app.route('/', methods=['GET'])
def home():
    """Simple route to confirm the API is running."""
    return jsonify({'message': 'DataViz API is running!'})

"""
This code means:
If this app.py file is being run directly from the command line, 
then start the Flask development server. 
Do not start the server if this file is just being imported by another script.
"""
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001)) # Use port 5001 to avoid conflict with Node (5000)
    app.run(debug=True, port=port)