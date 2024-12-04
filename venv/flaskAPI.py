import sys
import os
# from flask_app.config import get_db_connection


# Set the base directory as the project root (one level above venv)
base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, base_dir)

from flask_app import create_app


app = create_app()

if __name__ == '__main__':
    app.run(debug=True)




# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import calendar
# import sqlite3
# import os


# app = Flask(__name__)


# # Enable CORS for all routes
# # CORS(app)
# # Enable CORS with a specific origin
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) #react corre aqui

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"



# # Access Database
# DATABASE_PATH = r"C:\Users\crist\VSCode\UPRMAcademicCalendar-2\UPRMAcademicCalendar-2-1\database\calendaruprm.db"

# # Helper Function to Execute Queries
# def execute_query(query, params=()):
#     if not os.path.exists(DATABASE_PATH):
#         raise FileNotFoundError(f"Database not found at {DATABASE_PATH}")
#     conn = sqlite3.connect(DATABASE_PATH)
#     cursor = conn.cursor()
#     cursor.execute(query, params)
#     results = cursor.fetchall()
#     conn.close()
#     return results


# # ================Queries=====================

# # Function to fetch holidays from SQLite
# def fetch_holidays():
#     return execute_query("SELECT * FROM holidays ORDER BY formatted_date")


# # Function to fetch guidelines from SQLite
# def fetch_guidelines():
#     return execute_query("SELECT * FROM guidelines")


# # ================API=====================

# # GET Holidays
# @app.route('/holidays', methods=['GET'])
# def get_holidays():
#     try:
#         holidays = fetch_holidays()
#         return jsonify(holidays)
    
#     except sqlite3.Error as db_error:
#         return jsonify({"error": f"Database error: {str(db_error)}"}), 500

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# # GET Guidelines
# @app.route('/guidelines', methods=['GET'])
# def get_guidelines():
#     try:
#         guidelines = fetch_guidelines()
#         return jsonify(guidelines)
    
#     except sqlite3.Error as db_error:
#         return jsonify({"error": f"Database error: {str(db_error)}"}), 500

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500






# # Yesssss
# @app.route('/submit-academic-period', methods=['POST'])
# def submit_academic_period():
#     # Retrieve the JSON data from the request
#     data = request.json
#     start_date = data.get('startDate')
#     academic_period = data.get('academicPeriod')
#     weeks = data.get('weeks')


# # ======================================================
# # Para ver la informacion en la consola de Flask
#     # Log the received date to the console
#     print(f"Received start date: {start_date}")
#     print(f"Received Academic Period: {academic_period}")
#     print(f"Received Weeks: {weeks}")
# # ======================================================

#     # Backend validation
#     if not start_date:
#         return jsonify({
#             'message': 'Please select a start date'
#         }), 400  # Return a 400 Bad Request status code

#     # academic period has set default to fall period
#     # Backend validation for academic_period and weeks
#     if not academic_period or not weeks:
#         return jsonify({
#             'message': 'Invalid academic period or weeks'
#         }), 400  # Return a 400 Bad Request status code

#     # Calculate EndDate
#     # we need to consider holidays to determine enddate

#     # Generate Dates
    

#     # Create a JSON response
#     JSONresponse = {
#         'message': 'Academic Period Selected successfully',
#         'date': start_date,  # Send the received startDate back
#         'period': academic_period,  # Send the received academicPeriod back
#         'weeks': weeks  # Send the received weeks back
#     }

#     # Return the response as JSON
#     return jsonify(JSONresponse)




# # ADD Holidays
# @app.route('/holidays', methods=['POST'])
# def add_holiday():

#     try:
#         # Get the JSON payload
#         data = request.get_json()
#         if not data:
#             return jsonify({'error': 'No JSON data provided'}), 400

#         # Extract fields from JSON
#         holiday_date = data.get('holiday_date')  # Matches "holiday_date" from Postman
#         holiday_name = data.get('holiday_name')  # Matches "holiday_name"
#         formatted_date = data.get('formatted_date')  # Matches "formatted_date"

#         # Validate required fields
#         if not holiday_date:
#             return jsonify({'error': 'Missing "holiday_date" field'}), 400
#         if not holiday_name:
#             return jsonify({'error': 'Missing "holiday_name" field'}), 400
#         if not formatted_date:
#             return jsonify({'error': 'Missing "formatted_date" field'}), 400

#         # Add to DB
#         # execute_query("INSERT INTO holidays (holiday_date, holiday_name, formatted_date) VALUES (?, ?, ?)", (holiday_date, holiday_name, formatted_date))
#         conn = sqlite3.connect(DATABASE_PATH)
#         cursor = conn.cursor()
#         cursor.execute("INSERT INTO holidays (holiday_date, holiday_name, formatted_date) VALUES (?, ?, ?)", (holiday_date, holiday_name, formatted_date))
#         conn.commit()
#         conn.close()

#         # If validation passes, proceed with logic (e.g., saving to database)
#         return jsonify({
#             'message': 'Holiday added successfully',
#             'holiday_date': holiday_date,
#             'holiday_name': holiday_name,
#             'formatted_date': formatted_date
#         }), 201
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    

# # Update Holidays
# @app.route('/holidays/<int:holiday_id>', methods=['PUT'])
# def update_holiday(holiday_id):
#     try:
#         # Get the JSON payload
#         data = request.get_json()
#         if not data:
#             return jsonify({'error': 'No JSON data provided'}), 400

#         # Extract fields from JSON
#         holiday_date = data.get('holiday_date')
#         holiday_name = data.get('holiday_name')
#         formatted_date = data.get('formatted_date') 

#         # Validate holiday_id
#         if not holiday_id:
#             return jsonify({"error": "Holiday ID is required to update a holiday"}), 400

#         # Build the SQL query dynamically based on provided fields
#         fields_to_update = []
#         params = []
#         if holiday_date is not None:
#             fields_to_update.append("holiday_date = ?")
#             params.append(holiday_date)
#         if holiday_name is not None:
#             fields_to_update.append("holiday_name = ?")
#             params.append(holiday_name)
#         if formatted_date is not None:
#             fields_to_update.append("formatted_date = ?")
#             params.append(formatted_date)

#         if not fields_to_update:
#             return jsonify({"error": "No fields to update were provided"}), 400

#         # Add the holiday_id as the final parameter for the WHERE clause
#         params.append(holiday_id)

#         # Generate the SQL query dynamically
#         query = f"UPDATE holidays SET {', '.join(fields_to_update)} WHERE holiday_id = ?"

#         # Execute the query
#         conn = sqlite3.connect(DATABASE_PATH)
#         cursor = conn.cursor()
#         cursor.execute(query, params)
#         conn.commit()
        
#         if cursor.rowcount == 0:  # Check if the holiday was found
#             conn.close()
#             return jsonify({"error": "Holiday ID not found"}), 404

#         conn.close()
#         return jsonify({"message": "Holiday updated successfully"}), 200

#     except sqlite3.Error as db_error:
#         return jsonify({"error": f"Database error: {str(db_error)}"}), 500

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500


# # DELETE Holiday
# @app.route('/holidays/<int:holiday_id>', methods=['DELETE'])
# def delete_holiday(holiday_id):
#     try:
#         # Parse JSON payload from the request
#         data = request.json
#         holiday_id = data.get('holiday_id')  # Assuming holidays table has a unique 'id' column
#         holiday_name = data.get('holiday_name')  # Optionally, allow deletion by name

#         # Validation
#         if not holiday_id and not holiday_name:
#             return jsonify({"error": "ID or Name is required to delete a holiday"}), 400
        
#         conn = sqlite3.connect(DATABASE_PATH)
#         cursor = conn.cursor()

#         # Execute DELETE query based on the provided data
#         if holiday_id:
#             cursor.execute("DELETE FROM holidays WHERE holiday_id = ?", (holiday_id,))
#         elif holiday_name:
#             cursor.execute("DELETE FROM holidays WHERE holiday_name = ?", (holiday_name,))

#         # Check if any rows were affected
#         if cursor.rowcount == 0:
#             return jsonify({"error": "No holiday found with the specified criteria"}), 404

#         conn.commit()
#         conn.close()

#         return jsonify({"message": "Holiday deleted successfully"}), 200
#     except sqlite3.Error as db_error:
#         return jsonify({"error": f"Database error: {str(db_error)}"}), 500
#     except Exception as e:
#         return jsonify({"error": f"Unexpected error: {str(e)}"}), 500
# """Would i need to another api route to delete a holiday by name?"""

















# # ==============Guidelines===========================
# # ADD Holidays
# @app.route('/guidelines', methods=['POST'])
# def add_guidelines():

#     try:
#         # Get the JSON payload
#         data = request.get_json()
#         if not data:
#             return jsonify({'error': 'No JSON data provided'}), 400

#         # Extract fields from JSON
#         guideline_name = data.get('guideline_name')
#         shift_days = data.get('shift_days')
#         day_type = data.get('day_type')
#         start = data.get('start')

#         # Validate required fields
#         if not guideline_name:
#             return jsonify({'error': 'Missing "guideline_name" field'}), 400
#         if not shift_days:
#             return jsonify({'error': 'Missing "shift_days" field'}), 400
#         if not day_type:
#             return jsonify({'error': 'Missing "day_type" field'}), 400
#         if not start:
#             return jsonify({'error': 'Missing "start" field'}), 400
        

#         # Add to DB
#         conn = sqlite3.connect(DATABASE_PATH)
#         cursor = conn.cursor()
#         cursor.execute("INSERT INTO guidelines (guideline_name, shift_days, day_type, start) VALUES (?, ?, ?, ?)", (guideline_name, shift_days, day_type, start))
#         conn.commit()
#         conn.close()

#         # If validation passes, proceed with logic (e.g., saving to database)
#         return jsonify({
#             'message': 'Guideline added successfully',
#             'guideline_name': guideline_name,
#             'shift_days': shift_days,
#             'day_type': day_type,
#             'start': start
#         }), 201
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500



# # Update Guidelines
# @app.route('/guidelines/<int:guideline_id>', methods=['PUT'])
# def update_guidelines(guideline_id):
#     try:
#         # Get the JSON payload
#         data = request.get_json()
#         if not data:
#             return jsonify({'error': 'No JSON data provided'}), 400

#         # Extract fields from JSON
#         guideline_name = data.get('guideline_name')
#         shift_days = data.get('shift_days')
#         day_type = data.get('day_type') 
#         start = data.get('start') 

#         # Validate holiday_id
#         if not guideline_id:
#             return jsonify({"error": "Guideline ID is required to update a guideline"}), 400

#         # Build the SQL query dynamically based on provided fields
#         fields_to_update = []
#         params = []
#         if guideline_name is not None:
#             fields_to_update.append("guideline_name = ?")
#             params.append(guideline_name)
#         if shift_days is not None:
#             fields_to_update.append("shift_days = ?")
#             params.append(shift_days)
#         if day_type is not None:
#             fields_to_update.append("day_type = ?")
#             params.append(day_type)
#         if start is not None:
#             fields_to_update.append("start = ?")
#             params.append(start)

#         if not fields_to_update:
#             return jsonify({"error": "No fields to update were provided"}), 400

#         # Add the guideline_id as the final parameter for the WHERE clause
#         params.append(guideline_id)

#         # Generate the SQL query dynamically
#         query = f"UPDATE guidelines SET {', '.join(fields_to_update)} WHERE guideline_id = ?"

#         # Execute the query
#         conn = sqlite3.connect(DATABASE_PATH)
#         cursor = conn.cursor()
#         cursor.execute(query, params)
#         conn.commit()
        
#         if cursor.rowcount == 0:  # Check if the guideline was found
#             conn.close()
#             return jsonify({"error": "Guideline ID not found"}), 404

#         conn.close()
#         return jsonify({"message": "Guideline updated successfully"}), 200

#     except sqlite3.Error as db_error:
#         return jsonify({"error": f"Database error: {str(db_error)}"}), 500

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    


# # DELETE Guidelines
# @app.route('/guidelines/<int:guideline_id>', methods=['DELETE'])
# def delete_guideline(guideline_id):
#     try:
#         # Parse JSON payload from the request
#         data = request.json
#         guideline_id = data.get('guideline_id')  # Assuming holidays table has a unique 'id' column
#         guideline_name = data.get('holiday_name')  # Optionally, allow deletion by name

#         # Validation
#         if not guideline_id and not guideline_name:
#             return jsonify({"error": "ID or Name is required to delete a guideline"}), 400
        
#         conn = sqlite3.connect(DATABASE_PATH)
#         cursor = conn.cursor()

#         # Execute DELETE query based on the provided data
#         if guideline_id:
#             cursor.execute("DELETE FROM guidelines WHERE guideline_id = ?", (guideline_id,))
#         elif guideline_name:
#             cursor.execute("DELETE FROM guidelines WHERE guideline_name = ?", (guideline_name,))

#         # Check if any rows were affected
#         if cursor.rowcount == 0:
#             return jsonify({"error": "No guideline found with the specified criteria"}), 404

#         conn.commit()
#         conn.close()

#         return jsonify({"message": "Guideline deleted successfully"}), 200
#     except sqlite3.Error as db_error:
#         return jsonify({"error": f"Database error: {str(db_error)}"}), 500
#     except Exception as e:
#         return jsonify({"error": f"Unexpected error: {str(e)}"}), 500












# if __name__ == "__main__":
#     app.run(debug=True)

# # if __name__ == '__main__':
# # app.run(debug=True, port=5000)