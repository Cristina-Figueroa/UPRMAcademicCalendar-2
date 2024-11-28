# Guidelines logic

from flask_app.services.utils import execute_query

def fetch_guidelines():
    return execute_query("SELECT * FROM guidelines")

def add_guideline_to_db(data):
    query = "INSERT INTO guidelines (guideline_name, shift_days, day_type, start) VALUES (?, ?, ?, ?)"
    execute_query(query, (data['guideline_name'], data['shift_days'], data['day_type'], data['start']))

def update_guideline_in_db(guideline_id, data):
    fields = []
    params = []

    if 'guideline_name' in data:
        fields.append("guideline_name = ?")
        params.append(data['guideline_name'])
    if 'shift_days' in data:
        fields.append("shift_days = ?")
        params.append(data['shift_days'])
    if 'day_type' in data:
        fields.append("day_type = ?")
        params.append(data['day_type'])
    if 'start' in data:
        fields.append("start = ?")
        params.append(data['start'])
    query = f"UPDATE guidelines SET {', '.join(fields)} WHERE guideline_id = ?"
    params.append(guideline_id)
    execute_query(query, params)

def delete_guideline_from_db(guideline_id):
    query = "DELETE FROM guidelines WHERE guideline_id = ?"
    execute_query(query, (guideline_id,))
