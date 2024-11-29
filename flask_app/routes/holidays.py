# Holiday route

from flask import Blueprint, jsonify, request
from flask_app.services.holidays import fetch_holidays, add_holiday_to_db, update_holiday_in_db, delete_holiday_from_db

bp = Blueprint('holidays', __name__, url_prefix='/holidays')

@bp.route('/', methods=['GET'])
def get_holidays():
    holidays = fetch_holidays()
    return jsonify(holidays)

@bp.route('/', methods=['POST'])
def add_holiday():
    data = request.json  # Extract JSON payload
    if not data.get('holiday_date') or not data.get('holiday_name') or not data.get('formatted_date'):
        return jsonify({'error': 'Missing fields'}), 400

    try:
        add_holiday_to_db(data)  # Add to the database
        return jsonify({'message': 'Holiday added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/<int:holiday_id>', methods=['PUT'])
def update_holiday(holiday_id):
    try:
        data = request.json
        update_holiday_in_db(holiday_id, data)
        return jsonify({'message': 'Holiday updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/<int:holiday_id>', methods=['DELETE'])
def delete_holiday(holiday_id):
    try:
        delete_holiday_from_db(holiday_id)
        return jsonify({'message': 'Holiday deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500