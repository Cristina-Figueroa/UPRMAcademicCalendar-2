# Academic route

from flask import Blueprint, jsonify, request
# from flask_app.services.academicPeriod import


bp = Blueprint('academicPeriod', __name__, url_prefix='/')


@bp.route('/submit-academic-period', methods=['POST'])
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