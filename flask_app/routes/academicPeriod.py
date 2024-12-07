# Academic route
# from datetime import datetime
from flask import Blueprint, jsonify, request
from flask_app.services.utils import datetime, replace_important_dates
from flask_app.services.academicPeriod import calculate_important_dates_with_formatted_date, fetch_filtered_and_add_year_to_holidays
from flask_app.services.academicPeriod import add_date_to_db, update_date_in_db, delete_date_from_db, fetch_important_dates

from flask_app.services.guidelines import fetch_filtered_guidelines

bp = Blueprint('submit-academic-period', __name__, url_prefix='/submit-academic-period')


@bp.route('/', methods=['POST'])
def submit_academic_period():
    # Retrieve the JSON data from the request
    data = request.get_json() 
    if not data:
        return jsonify({"message": "No JSON data received"}), 400
    
    start_date = data.get('startDate')
    academic_period = data.get('academicPeriod')
    weeks = data.get('weeks')
    # Para ver la informacion en la consola de Flask
    # Log the received date to the console
    print(f"Received start date: {start_date}")
    print(f"Received Academic Period: {academic_period}")
    print(f"Received Weeks: {weeks}")

    # Backend validation
    if not start_date:
        return jsonify({
            'message': 'Please select a start date'
        }), 400  # Return a 400 Bad Request status code

    # Backend validation for academic_period and weeks
    if not academic_period or not weeks:
        return jsonify({
            'message': 'Invalid academic period or weeks'
        }), 400  # Return a 400 Bad Request status code

    # Get the year from the start_date
    year = datetime.strptime(start_date, '%Y-%m-%d').year
    print(f"Year: {year}")

    # Gets holidays of specific academic period from holidays db here
    fixed_holidays = fetch_filtered_and_add_year_to_holidays(year, start_date)
    print(f"fixedholidays: {fixed_holidays}")

    # Fetch filtered guidelines based on the academic period
    guidelines = fetch_filtered_guidelines(academic_period)
    print(f"Guidelines: {guidelines}")

    # Get important dates including holidays and calculated events
    # important_dates = calculate_important_dates_using_guidelines(start_date, weeks, fixed_holidays, guidelines, year)
    important_dates = calculate_important_dates_with_formatted_date(start_date, weeks, fixed_holidays, guidelines, year)

    if not start_date or not academic_period or not weeks:
        return jsonify({'message': 'Invalid data'}), 400

    # Save the important dates to the database
    replace_important_dates(important_dates)

    # Prepare the response data
    JSONresponse = {
        'message': 'Data received successfully',
        'startDate': start_date,
        'academicPeriod': academic_period,
        'weeks': weeks,
        'important_dates': important_dates
    }

    # Return the response as JSON
    return jsonify(JSONresponse)


@bp.route('/get-important-dates', methods=['GET'])
def get_important_dates():
    important_dates = fetch_important_dates()
    return jsonify({
        'important_dates': important_dates  # Send only the important dates
    })



# Funciona!
@bp.route('/get-important-dates', methods=['POST'])
def add_important_date():
    data = request.json  # Extract JSON payload
    if not data.get('date') or not data.get('event') or not data.get('formatted_date'):
        return jsonify({'error': 'Missing fields'}), 400
    try:
        add_date_to_db(data)  # Add to the database
        return jsonify({'message': 'Date added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@bp.route('/get-important-dates/<int:id>', methods=['PUT'])
def update_date(id):
    try:
        data = request.json
        update_date_in_db(id, data)
        return jsonify({'message': 'Date updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/get-important-dates/<int:id>', methods=['DELETE'])
def delete_date(id):
    try:
        delete_date_from_db(id)
        return jsonify({'message': 'Date deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500