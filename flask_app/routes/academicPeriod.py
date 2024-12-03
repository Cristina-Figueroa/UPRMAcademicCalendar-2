# Academic route
# from datetime import datetime
from flask import Blueprint, jsonify, request
from flask_app.services.utils import get_filtered_holidays, datetime
from flask_app.services.academicPeriod import calculate_important_dates


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



    fixed_holidays = [
        {"holiday_date": "2024-09-01", "holiday_name": "Labor Day"},
        {"holiday_date": "2024-11-28", "holiday_name": "Thanksgiving"}
    ]

    # Get the year from the start_date
    year = datetime.strptime(start_date, '%Y-%m-%d').year
    print(f"Year: {year}")
    
    # Get important dates including holidays and calculated events
    important_dates = calculate_important_dates(start_date, weeks, fixed_holidays, year)

    if not start_date or not academic_period or not weeks:
        return jsonify({'message': 'Invalid data'}), 400

    # Prepare the response data
    JSONresponse = {
        'message': 'Data received successfully',
        'startDate': start_date,
        'academicPeriod': academic_period,
        'weeks': weeks,
        'important_dates': important_dates  # Include the calculated important dates
    }











    # # Get the year from the start_date
    # year = datetime.strptime(start_date, '%Y-%m-%d').year
    # print(f"Year: {year}")

    # # Get the filtered holidays for the given academic period
    # filtered_holidays = get_filtered_holidays(year, start_date)

    # if not start_date or not academic_period or not weeks or not filtered_holidays:
    #     return jsonify({'message': 'Invalid data'}), 400

    # # Prepare the response data
    # JSONresponse = {
    #     'message': 'Data received successfully',
    #     'startDate': start_date,
    #     'academicPeriod': academic_period,
    #     'weeks': weeks,
    #     'holidays': filtered_holidays  # Add holidays to the response
    # }



    # Generate Dates
    

    # Create a JSON response
    # JSONresponse = {
    #     'message': 'Academic Period Selected successfully',
    #     'date': start_date,  # Send the received startDate back
    #     'period': academic_period,  # Send the received academicPeriod back
    #     'weeks': weeks  # Send the received weeks back
    # }

    # Return the response as JSON
    return jsonify(JSONresponse)


@bp.route('/', methods=['PUT'])
def save_list_of_dates():

    return