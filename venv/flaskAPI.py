from flask import Flask, jsonify, request
from flask_cors import CORS
import calendar
import sqlite3
import os


app = Flask(__name__)


# Enable CORS for all routes
# CORS(app)
# Enable CORS with a specific origin
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) #react corre aqui

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"



# Access Database
DATABASE_PATH = r"C:\Users\crist\VSCode\UPRMAcademicCalendar-2\database\calendaruprm.db"

# Helper Function to Execute Queries
def execute_query(query, params=()):
    if not os.path.exists(DATABASE_PATH):
        raise FileNotFoundError(f"Database not found at {DATABASE_PATH}")
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    cursor.execute(query, params)
    results = cursor.fetchall()
    conn.close()
    return results


# ================Queries=====================

# Function to fetch holidays from SQLite
def fetch_holidays():
    return execute_query("SELECT * FROM holidays ORDER BY formatted_date")


# Function to fetch guidelines from SQLite
def fetch_guidelines():
    return execute_query("SELECT * FROM holidays ORDER BY formatted_date")


# ================API=====================

# API Route to get holidays
@app.route('/holidays', methods=['GET'])
def get_holidays():
    try:
        holidays = fetch_holidays()
        return jsonify(holidays)
    
    except sqlite3.Error as db_error:
        return jsonify({"error": f"Database error: {str(db_error)}"}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# API Route to get guidelines
@app.route('/guidelines', methods=['GET'])
def get_guidelines():
    try:
        guidelines = fetch_guidelines()
        return jsonify(guidelines)
    
    except sqlite3.Error as db_error:
        return jsonify({"error": f"Database error: {str(db_error)}"}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500






# Yesssss
@app.route('/submit-academic-period', methods=['POST'])
def submit_academic_period():
    # Retrieve the JSON data from the request
    data = request.json
    start_date = data.get('startDate')
    academic_period = data.get('academicPeriod')
    weeks = data.get('weeks')


# ======================================================
# Para ver la informacion en la consola de Flask
    # Log the received date to the console
    print(f"Received start date: {start_date}")
    print(f"Received Academic Period: {academic_period}")
    print(f"Received Weeks: {weeks}")
# ======================================================

    # Backend validation
    if not start_date:
        return jsonify({
            'message': 'Please select a start date'
        }), 400  # Return a 400 Bad Request status code

    # academic period has set default to fall period
    # Backend validation for academic_period and weeks
    if not academic_period or not weeks:
        return jsonify({
            'message': 'Invalid academic period or weeks'
        }), 400  # Return a 400 Bad Request status code

    # Calculate EndDate
    # we need to consider holidays to determine enddate

    # Generate Dates
    

    # Create a JSON response
    JSONresponse = {
        'message': 'Academic Period Selected successfully',
        'date': start_date,  # Send the received startDate back
        'period': academic_period,  # Send the received academicPeriod back
        'weeks': weeks  # Send the received weeks back
    }

    # Return the response as JSON
    return jsonify(JSONresponse)




# ADD Holidays
@app.route('/holidays', methods=['POST'])
def add_holiday():

    try:
        # Get the JSON payload
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No JSON data provided'}), 400

        # Extract fields from JSON
        holiday_date = data.get('holiday_date')  # Matches "holiday_date" from Postman
        holiday_name = data.get('holiday_name')  # Matches "holiday_name"
        formatted_date = data.get('formatted_date')  # Matches "formatted_date"

        # Validate required fields
        if not holiday_date:
            return jsonify({'error': 'Missing "holiday_date" field'}), 400
        if not holiday_name:
            return jsonify({'error': 'Missing "holiday_name" field'}), 400
        if not formatted_date:
            return jsonify({'error': 'Missing "formatted_date" field'}), 400

        # Add to DB
        # execute_query("INSERT INTO holidays (holiday_date, holiday_name, formatted_date) VALUES (?, ?, ?)", (holiday_date, holiday_name, formatted_date))
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO holidays (holiday_date, holiday_name, formatted_date) VALUES (?, ?, ?)", (holiday_date, holiday_name, formatted_date))
        conn.commit()
        conn.close()

        # If validation passes, proceed with logic (e.g., saving to database)
        return jsonify({
            'message': 'Holiday added successfully',
            'holiday_date': holiday_date,
            'holiday_name': holiday_name,
            'formatted_date': formatted_date
        }), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

# Update Holidays
# @app.route('/holidays', methods=['PUT'])
# def update_holiday():
@app.route('/holidays/<int:holiday_id>', methods=['PUT'])
def update_holiday(holiday_id):

    try:
        # Get the JSON payload
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No JSON data provided'}), 400

        # Extract fields from JSON
        # holiday_id = data.get('holiday_id')  # Assuming the table has a unique `id` column
        holiday_date = data.get('holiday_date')  # Matches "holiday_date" from Postman
        holiday_name = data.get('holiday_name')  # Matches "holiday_name"
        formatted_date = data.get('formatted_date')  # Matches "formatted_date"

        # Validate required fields
        if not holiday_id:
            return jsonify({"error": "Holiday ID is required to update a holiday"}), 400


        # UPDATE to DB

        # Build the SQL query dynamically based on provided fields
        fields_to_update = []
        params = []
        if holiday_date is not None:
            fields_to_update.append("holiday_date = ?")
            params.append(holiday_date)
        if holiday_name is not None:
            fields_to_update.append("holiday_name = ?")
            params.append(holiday_name)
        if formatted_date is not None:
            fields_to_update.append("formatted_date = ?")
            params.append(formatted_date)
        # if not params:
        #     cursor.close()
        #     return  # No update needed


        
        
        if not fields_to_update:
            return jsonify({"error": "No fields to update were provided"}), 400

        # Add the holiday_id as the final parameter for the WHERE clause
        params.append(holiday_id)

        # Generate the SQL query dynamically
        query = f"UPDATE holidays SET {', '.join(fields_to_update)} WHERE id = ?"



        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute(query, params)
        conn.commit()
        conn.close()
        
        if cursor.rowcount == 0:  # Check if the holiday was found
            return jsonify({"error": "Holiday ID not found"}), 404
        
        return jsonify({"message": "Holiday updated successfully"}), 200












        # conn = sqlite3.connect(DATABASE_PATH)
        # cursor = conn.cursor()
        # cursor.execute("INSERT INTO holidays (holiday_date, holiday_name, formatted_date) VALUES (?, ?, ?)", (holiday_date, holiday_name, formatted_date))
        # conn.commit()
        # conn.close()

        # If validation passes, proceed with logic (e.g., saving to database)
        return jsonify({
            'message': 'Holiday added successfully',
            'holiday_date': holiday_date,
            'holiday_name': holiday_name,
            'formatted_date': formatted_date
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

"""Third, i want to implement a PUT request for holidays: 
# Update Holidays
@app.route('/holidays', methods=['PUT'])
def update_holiday():
      return

The user can either update date, description, or mm-yy <------
"""







if __name__ == "__main__":
    app.run(debug=True)

# if __name__ == '__main__':
# app.run(debug=True, port=5000)