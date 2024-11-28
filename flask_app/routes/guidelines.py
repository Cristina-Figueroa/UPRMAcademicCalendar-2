# Guidelines route
from flask import Blueprint, jsonify, request
from flask_app.services.guidelines import fetch_guidelines, add_guideline_to_db, update_guideline_in_db, delete_guideline_from_db

bp = Blueprint('guidelines', __name__, url_prefix='/guidelines')

@bp.route('/', methods=['GET'])
def get_guidelines():
    try:
        guidelines = fetch_guidelines()
        return jsonify(guidelines)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/', methods=['POST'])
def add_guideline():
    try:
        data = request.json
        add_guideline_to_db(data)
        return jsonify({'message': 'Guideline added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/<int:guideline_id>', methods=['PUT'])
def update_guideline(guideline_id):
    try:
        data = request.json
        update_guideline_in_db(guideline_id, data)
        return jsonify({'message': 'Guideline updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@bp.route('/<int:guideline_id>', methods=['DELETE'])
def delete_guideline(guideline_id):
    try:
        delete_guideline_from_db(guideline_id)
        return jsonify({'message': 'Guideline deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
