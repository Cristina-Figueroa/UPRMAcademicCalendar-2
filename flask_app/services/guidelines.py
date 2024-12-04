# Guidelines logic

from flask_app.services.utils import execute_query, execute_query_get_guidelines

def fetch_guidelines():
    return execute_query_get_guidelines("SELECT * FROM guidelines ORDER BY guideline_name")

def add_guideline_to_db(data):
    query = "INSERT INTO guidelines (guideline_name, shift_days, day_type, start, period_type) VALUES (%s, %s, %s, %s, %s)"
    execute_query(query, (data['guideline_name'], data['shift_days'], data['day_type'], data['start'], data['period_type']))

def update_guideline_in_db(guideline_id, data):
    fields = []
    params = []

    if 'guideline_name' in data:
        fields.append("guideline_name = %s")
        params.append(data['guideline_name'])
    if 'shift_days' in data:
        fields.append("shift_days = %s")
        params.append(data['shift_days'])
    if 'day_type' in data:
        fields.append("day_type = %s")
        params.append(data['day_type'])
    if 'start' in data:
        fields.append("start = %s")
        params.append(data['start'])
    if 'period_type' in data:
        fields.append("period_type = %s")
        params.append(data['period_type'])
    query = f"UPDATE guidelines SET {', '.join(fields)} WHERE guideline_id = %s"
    params.append(guideline_id)
    execute_query(query, params)

def delete_guideline_from_db(guideline_id):
    query = "DELETE FROM guidelines WHERE guideline_id = %s"
    execute_query(query, (guideline_id,))
